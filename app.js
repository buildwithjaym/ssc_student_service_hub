const $ = (q) => document.querySelector(q);

const data = window.HUB_DATA;

const views = {
    home: $("#homeView"),
    services: $("#servicesView"),
    offices: $("#officesView"),
    templates: $("#templatesView"),
    about: $("#aboutView"),
    detail: $("#detailView"),
};

let currentRoute = "home";
const navStack = [];

function rememberFromRoute() {
    const last = navStack[navStack.length - 1];
    if (last !== currentRoute) navStack.push(currentRoute);
}

function showView(name) {
    Object.values(views).forEach(v => v.classList.add("hidden"));
    views[name].classList.remove("hidden");
    setActiveNav(name);
    closeDrawer();
    if (name !== "detail") {
        currentRoute = name;
        $("#detailBody").innerHTML = "";
    }
}

function setActiveNav(route) {
    document.querySelectorAll(".navlink").forEach(a => {
        a.classList.toggle("active", a.dataset.route === route);
    });
}

function openDrawer() {
    const d = $("#drawer");
    d.classList.add("open");
    d.setAttribute("aria-hidden", "false");
}
function closeDrawer() {
    const d = $("#drawer");
    d.classList.remove("open");
    d.setAttribute("aria-hidden", "true");
}

function officeById(id) { return data.offices.find(o => o.id === id); }

function card({ title, subtitle, tags, img, onClick }) {
    const el = document.createElement("div");
    el.className = "card";
    el.tabIndex = 0;

    const avatar = img
        ? `<img class="card-avatar" src="${escapeHtml(img)}" alt="${escapeHtml(title)}" loading="lazy" />`
        : `<div class="card-avatar fallback" aria-hidden="true"></div>`;

    el.innerHTML = `
    <div class="card-row">
      ${avatar}
      <div class="card-meta">
        <h3>${escapeHtml(title)}</h3>
        <div class="muted">${escapeHtml(subtitle || "")}</div>
        ${tags && tags.length ? `<div class="tags">${tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
      </div>
    </div>
  `;

    el.addEventListener("click", onClick);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter") onClick(); });
    return el;
}


function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
function renderAbout() {
    const meta = data.meta || {};
    const officers = data.officers || {};

    const subtitle = $("#aboutSubtitle");
    const systemName = $("#systemName");
    const systemGoal = $("#systemGoal");
    const systemMission = $("#systemMission");
    const systemVision = $("#systemVision");

    const sy = $("#sy");
    const credits = $("#creditsLine");
    const partyName = $("#partylistName");

    if (subtitle) subtitle.textContent = `${meta.servedBy || "SSC"} • SY ${meta.schoolYear || ""}`;
    if (systemName) systemName.textContent = meta.systemName || "BASC Student Services Hub";
    if (systemGoal) systemGoal.textContent = meta.goal || "";
    if (systemMission) systemMission.textContent = meta.mission || "";
    if (systemVision) systemVision.textContent = meta.vision || "";

    if (sy) sy.textContent = meta.schoolYear || "";
    if (credits) credits.textContent = `Served by ${meta.servedBy || "SSC"} • Developed by ${meta.developedBy || ""}`;
    if (partyName) partyName.textContent = officers.partylist || "Student’s Union Partylist";

    const advBox = $("#advList");
    const execBox = $("#execList");
    const senatorsBox = $("#senatorsList");
    const repsBox = $("#repsList");


    if (advBox) {
        advBox.innerHTML = "";

        if (officers.adviser?.name) {
            advBox.appendChild(card({
                title: officers.adviser.name,
                subtitle: `Adviser • ${officers.adviser.unit || ""}`.trim(),
                tags: ["Adviser"],
                img: officers.adviser.img || "",   // ✅ HERE
                onClick: () => { }
            }));
        }
    }
    if (execBox) {
        execBox.innerHTML = "";

        if (officers.president?.name) {
            execBox.appendChild(card({
                title: officers.president.name,
                subtitle: `President • ${officers.president.unit || ""}`.trim(),
                tags: ["Executive"],
                img: officers.president.img || "",   // ✅ HERE
                onClick: () => { }
            }));
        }

        if (officers.vicePresident?.name) {
            execBox.appendChild(card({
                title: officers.vicePresident.name,
                subtitle: `Vice President • ${officers.vicePresident.unit || ""}`.trim(),
                tags: ["Executive"],
                img: officers.vicePresident.img || "", // ✅ HERE
                onClick: () => { }
            }));
        }
    }

    if (senatorsBox) {
        senatorsBox.innerHTML = "";
        (officers.senators || []).forEach((s, i) => {
            senatorsBox.appendChild(card({
                title: `${i + 1}. ${s.name}`,
                subtitle: `Senator • ${s.unit || ""}`.trim(),
                tags: ["Senate"],
                img: s.img || "",                    // ✅ HERE
                onClick: () => { }
            }));
        });
    }

    if (repsBox) {
        repsBox.innerHTML = "";
        (officers.representatives || []).forEach(r => {
            repsBox.appendChild(card({
                title: r.name,
                subtitle: `Representative • ${r.unit || ""}`.trim(),
                tags: ["Representative"],
                img: r.img || "",                    // ✅ HERE
                onClick: () => { }
            }));
        });
    }
}
function renderQuick() {
    const grid = $("#quickGrid");
    grid.innerHTML = "";
    data.quick.forEach(item => {
        const b = document.createElement("button");
        b.className = "pill";
        b.type = "button";
        b.innerHTML = `<span class="dot"></span>${escapeHtml(item.label)}`;
        b.addEventListener("click", () => {
            $("#searchInput").value = item.query;
            doSearch(item.query);
            window.location.hash = "#home";
            showView("home");
            $("#searchInput").focus();
        });
        grid.appendChild(b);
    });
}

function renderServices() {
    const list = $("#servicesList");
    list.innerHTML = "";
    data.services.forEach(s => {
        const o = officeById(s.officeId);
        list.appendChild(card({
            title: s.title,
            subtitle: `${s.category} • Office: ${o ? o.name : "—"}`,
            tags: [s.category, o?.name || ""].filter(Boolean),
            onClick: () => openServiceDetail(s.id)
        }));
    });
}

function renderOffices() {
    const list = $("#officesList");
    list.innerHTML = "";
    data.offices.forEach(o => {
        list.appendChild(card({
            title: o.name,
            subtitle: `${o.location} • ${o.hours}`,
            tags: ["Office"],
            img: o.img || "",
            onClick: () => openOfficeDetail(o.id)
        }));
    });
}

function renderTemplates() {
    const list = $("#templatesList");
    list.innerHTML = "";
    data.templates.forEach(t => {
        list.appendChild(card({
            title: t.title,
            subtitle: "Tap to view & copy",
            tags: t.tags || [],
            onClick: () => openTemplateDetail(t.id)
        }));
    });
}

function openServiceDetail(id) {
    const s = data.services.find(x => x.id === id);
    if (!s) return;

    const o = officeById(s.officeId);
    const html = `
    <h2 style="margin-top:0">${escapeHtml(s.title)}</h2>
    <p class="muted"><b>Category:</b> ${escapeHtml(s.category)} • <b>Office:</b> ${escapeHtml(o ? o.name : "—")}</p>

    <div class="tags" style="margin-bottom:12px">
      ${s.keywords?.slice(0, 6).map(k => `<span class="tag">${escapeHtml(k)}</span>`).join("") || ""}
    </div>

    <div class="panel" style="box-shadow:none;border-radius:14px">
      <p><b>Where to go:</b> ${escapeHtml(o ? o.location : "—")}</p>
      <p><b>Office hours:</b> ${escapeHtml(o ? o.hours : "—")}</p>
      ${s.fees ? `<p><b>Fees:</b> ${escapeHtml(s.fees)}</p>` : ""}
      ${s.eta ? `<p><b>Estimated time:</b> ${escapeHtml(s.eta)}</p>` : ""}
    </div>

    <h3>Requirements</h3>
    <ul>${(s.requirements || []).map(r => `<li>${escapeHtml(r)}</li>`).join("")}</ul>

    <h3>Steps</h3>
    <ol>${(s.steps || []).map(st => `<li>${escapeHtml(st)}</li>`).join("")}</ol>

    ${s.notes?.length ? `<h3>Notes</h3><ul>${s.notes.map(n => `<li class="muted">${escapeHtml(n)}</li>`).join("")}</ul>` : ""}
  `;

    $("#detailBody").innerHTML = html;
    rememberFromRoute();
    showView("detail");
}

function openOfficeDetail(id) {
    const o = data.offices.find(x => x.id === id);
    if (!o) return;
    const related = data.services.filter(s => s.officeId === id);

    $("#detailBody").innerHTML = `
    <h2 style="margin-top:0">${escapeHtml(o.name)}</h2>
    <p class="muted">${escapeHtml(o.location)} • ${escapeHtml(o.hours)}</p>
    ${o.contact ? `<p><b>Contact:</b> ${escapeHtml(o.contact)}</p>` : ""}

    <h3>Common transactions</h3>
    <div class="card-grid" id="relatedServices"></div>
  `;

    rememberFromRoute();
    showView("detail");

    const box = $("#relatedServices");
    related.forEach(s => {
        box.appendChild(card({
            title: s.title,
            subtitle: s.category,
            tags: [s.category],
            onClick: () => openServiceDetail(s.id)
        }));
    });
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert("Copied!");
    } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        alert("Copied!");
    }
}

function openTemplateDetail(id) {
    const t = data.templates.find(x => x.id === id);
    if (!t) return;

    $("#detailBody").innerHTML = `
    <h2 style="margin-top:0">${escapeHtml(t.title)}</h2>
    <div class="tags">${(t.tags || []).map(x => `<span class="tag">${escapeHtml(x)}</span>`).join("")}</div>

    <div style="display:flex; gap:10px; flex-wrap:wrap; margin:12px 0">
      <button class="btn" type="button" id="copyBtn">Copy</button>
      <button class="btn ghost" type="button" id="printBtn">Print</button>
    </div>

    <pre class="panel" style="white-space:pre-wrap; border-radius:14px; margin:0">${escapeHtml(t.body)}</pre>
  `;

    rememberFromRoute();
    showView("detail");

    $("#copyBtn").addEventListener("click", () => copyToClipboard(t.body));
    $("#printBtn").addEventListener("click", () => window.print());
}

function doSearch(q) {
    const query = (q || "").trim().toLowerCase();
    const results = $("#results");
    results.innerHTML = "";

    if (!query) {
        const top = data.services.slice(0, 6);
        top.forEach(s => {
            const o = officeById(s.officeId);
            results.appendChild(card({
                title: s.title,
                subtitle: `${s.category} • ${o?.name || "—"}`,
                tags: [s.category],
                onClick: () => openServiceDetail(s.id)
            }));
        });
        return;
    }

    const serviceMatches = data.services.filter(s => {
        const hay = [
            s.title, s.category, ...(s.keywords || []),
            officeById(s.officeId)?.name || ""
        ].join(" ").toLowerCase();
        return hay.includes(query);
    });



    if (serviceMatches.length === 0) {
        results.appendChild(card({
            title: "No matches found",
            subtitle: "Try another keyword (e.g., 'TOR', 'portal', 'INC', 'passbook').",
            tags: ["Tip"],
            onClick: () => { }
        }));
        return;
    }

    serviceMatches.forEach(s => {
        const o = officeById(s.officeId);
        results.appendChild(card({
            title: s.title,
            subtitle: `${s.category} • Office: ${o?.name || "—"}`,
            tags: ["Service"],
            onClick: () => openServiceDetail(s.id)
        }));
    });

    officeMatches.forEach(o => {
        results.appendChild(card({
            title: o.name,
            subtitle: `${o.location} • ${o.hours}`,
            tags: ["Office"],
            onClick: () => openOfficeDetail(o.id)
        }));
    });
}

function route() {
    const hash = (window.location.hash || "#home").replace("#", "");
    if (["home", "services", "offices", "templates", "about"].includes(hash)) {
        showView(hash);
    } else {
        showView("home");
    }
}

function bindUI() {
    $("#year").textContent = new Date().getFullYear();

    $("#menuBtn").addEventListener("click", openDrawer);
    $("#closeBtn").addEventListener("click", closeDrawer);
    $("#drawer").addEventListener("click", (e) => { if (e.target.id === "drawer") closeDrawer(); });

    document.querySelectorAll(".navlink").forEach(a => {
        a.addEventListener("click", () => {
            window.location.hash = `#${a.dataset.route}`;
        });
    });

    $("#backBtn").addEventListener("click", () => {
        const prev = navStack.pop() || "home";
        window.location.hash = `#${prev}`;
        showView(prev);
    });

    $("#searchInput").addEventListener("input", (e) => doSearch(e.target.value));
    $("#clearSearch").addEventListener("click", () => {
        $("#searchInput").value = "";
        doSearch("");
        $("#searchInput").focus();
    });

    window.addEventListener("hashchange", route);
}

renderQuick();
renderServices();
renderOffices();
renderTemplates();
renderAbout();
bindUI();
route();
doSearch("");
