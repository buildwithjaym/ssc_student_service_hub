// BASC Student Services Hub (Offline)
// Served by SSC Officers • SY 2026–2027
// Developed by Jaymar Maruji, SSC Senator

window.HUB_DATA = {
    meta: {
        schoolYear: "2026–2027",
        servedBy: "Supreme Student Council (SSC) – BASC",
        developedBy: "Jaymar Maruji, SSC Senator",
        systemName: "BASC Student Services Hub",
        goal:
            "To help BASC students quickly understand where to go, what to bring, and what to do for common school transactions—offline and accessible to everyone.",
        mission:
            "Provide a clear, student-friendly, and offline-first guide for BASC services, requirements, and processes to reduce confusion, wasted trips, and delays.",
        vision:
            "A campus where every student can access reliable service guidance anytime, even without internet, for smoother and more efficient transactions."
    },

    // 3 quick buttons
    quick: [
        { label: "TOR / Records", query: "tor" },
        { label: "Shifting", query: "shifting" },
        { label: "ID / Lost ID", query: "id" }
    ],
    officers: {
        partylist: "Students' Union Partylist",

        adviser: {
            name: "Sherfa A. Salain",
            unit: "SSC",
            img: "assets/logo.jpg"
        },

        president: {
            name: "Owen Mac A. Salain",
            unit: "CHUSOCOM",
            img: "assets/officers/pres.jpg"
        },

        vicePresident: {
            name: "John Paul Labastilla",
            unit: "CTE",
            img: "assets/officers/vpres.jpg"
        },

        senators: [
            { name: "Moh. Ershad Sahiron", unit: "CAH", img: "assets/officers/shad.jpg" },
            { name: "Zarqawey A. Salim", unit: "CHUSOCOM", img: "assets/officers/zar.jpg" },
            { name: "Jaymie Suzainne A. Ramillano", unit: "CAH", img: "assets/officers/jaymie.jpg" },
            { name: "Nicole Shane P. Oriño", unit: "CTE", img: "assets/officers/nicole.jpg" },
            { name: "Julman Salasain", unit: "CHUSOCOM", img: "assets/officers/jhul.jpg" },
            { name: "Jaymar H. Maruji", unit: "CICTT", img: "assets/officers/jay.jpg" },
            { name: "Nursaira S. Abdo", unit: "CTE", img: "assets/officers/shai.jpg" },
            { name: "Jayvie M. Eugenio", unit: "CCJE", img: "assets/officers/crim.jpg" },
            { name: "James Ryan H. Reyes", unit: "CPAdm", img: "assets/officers/logo.jpg" },
            { name: "Beverly Jane Francisco", unit: "IHTM", img: "assets/officers/bev.jpg" },
            { name: "Nhawaf S. Jingkatal", unit: "CHUSOCOM", img: "assets/officers/nhawaf.jpg" }
        ],

        representatives: [
            { unit: "CTE", name: "Alyanna Hamsirani", img: "assets/officers/cte_rep.jpg" },
            { unit: "CAH", name: "Alfhariz Arawangsa", img: "assets/officers/cah_rep.jpg" },
            { unit: "CICTT", name: "Amir Naiff Julsali", img: "assets/officers/amir.jpg" },
            { unit: "CHUSOCOM", name: "Ahmad Jayveen Abubakar", img: "assets/officers/logo.jpg" },
            { unit: "CPAdm", name: "Sarha", img: "assets/officers/logo.jpg" },
            { unit: "CITY OSC", name: "Yan Nelle E. Singson", img: "assets/officers/yan.jpg" },
            { unit: "LAMITAN OSC", name: "Al-rafie M. Majid", img: "assets/officers/alrafie.jpg" },
            { unit: "TIPO-TIPO OSC", name: "Adzra H. Aknalin", img: "assets/officers/adzra.jpg" },
            { unit: "STA CLARA OSC", name: "Gerry A. Jannatil", img: "assets/officers/clara_rep.jpg" }
        ]


    },

    offices: [
        {
            id: "mis",
            name: "MIS Office",
            location: "Same building with the Clinic",
            hours: "Mon–Fri, 8:00 AM–5:00 PM ",
            contact: "Facebook: Basilan State College ICT Unit",
            keywords: ["portal", "account", "mis", "student portal", "login", "reset password", "open portal"],
            img: "assets/basc_logo.jpg"

        },
        {
            id: "assessment",
            name: "Assessment",
            location: "Besides registrar",
            hours: "Mon–Fri, 8:00 AM–5:00 PM ",
            contact: "Facebook: Basilan State College ICT Unit",
            keywords: ["COE", "Certificate", "Ceritificate of Enrollment"],
            img: "assets/basc_logo.jpg"

        },

        {
            id: "registrar",
            name: "Registrar",
            location: "Near Amphitheatre",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "Email/FB/Phone (optional)",
            keywords: ["tor", "records", "transfer", "credentials"],
            img: "assets/basc_logo.jpg"
        },


        {
            id: "osas",
            name: "Student Affairs / OSAS",
            location: "Administration Building — (edit exact location)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "",
            keywords: ["shifting", "shiftee", "student services", "id", "student org", "activities"],
            img: "assets/basc_logo.jpg"
        },
        {
            id: "cashier",
            name: "Cashier / Accounting",
            location: "Administration Building — (edit exact location)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "",
            keywords: ["payment", "fees", "receipt", "passbook", "lost passbook", "request passbook"],
            img: "assets/basc_logo.jpg"
        },
        {
            id: "testing",
            name: "Testing Center",
            location: "Testing Center — (edit exact location)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "",
            keywords: ["exam", "testing", "assessment"],
            img: "assets/basc_logo.jpg"
        },
        {
            id: "library",
            name: "Library",
            location: "Library Building — (edit exact location)",
            hours: "Mon–Fri, (edit exact hours)",
            contact: "",
            keywords: ["library", "clearance", "borrow", "research"],
            img: "assets/basc_logo.jpg"
        },
        {
            id: "scholarship",
            name: "Scholarship Office",
            location: "Near the Assessment Office",
            hours: "Mon–Fri, 8:00 AM–5:00 PM",
            contact: "",
            keywords: ["scholarship", "financial aid", "grant", "funding"],
            img: "assets/basc_logo.jpg"
        },
        {
            id: "admin",
            name: "Administration Building",
            location: "Admin Building — Main Campus besides SSC office ",
            hours: "Mon–Fri, 8:00 AM–5:00 PM",
            contact: "",
            keywords: ["mis", "osas", "cashier", "admin", "offices"],
            img: "assets/basc_logo.jpg"
        }
    ],

    services: [
        // ===== PORTAL / MIS =====
        {
            id: "open-portal",
            title: "How to open/access the Student Portal (MIS Office)",
            officeId: "mis",
            category: "Portal / Accounts",
            keywords: ["open portal", "portal", "mis", "account", "student portal", "reset password", "login"],
            fees: "Usually none (confirm at MIS)",
            eta: "Same day (depends on queue)",
            requirements: [
                "Student number / ID number",
                "Full name and course/year/section",
                "Valid ID (if required)",
                "Email/phone for account recovery (recommended)"
            ],
            steps: [
                "Go to the MIS Office and request portal activation or access.",
                "Provide your student number and complete details.",
                "If you forgot your password: request a reset and confirm your identity.",
                "Follow MIS instructions to log in and update your password.",
                "Test your account on your phone/browser before leaving."
            ],
            notes: [
                "Bring your student number and correct spelling of your name to avoid issues.",
                "If the portal requires an official link, ask MIS to write it down for you."
            ]
        },

        //Assessment Office
        {
            id: "assessment",
            title: "Request of COE",
            officeId: "assessment",
            category: "COE",
            keywords: ["certificate of enrollment", "coe", "assessment"],
            fees: "30 pesos",
            eta: "Same Day",
            requirements: [
                "Request form and get it from registrar",
                "Full name and course/year/section",

            ],
            steps: [
                "Go to the registrar first.",
                "Provide your student number and complete details.",
                "Pay for the fees in  the cashier.",
                "Go to the assessment: let is sign and seal.",
                "Then, after that you are finished."
            ],
            notes: [
                "Bring your student number and correct spelling of your name to avoid issues.",
                "Just be calm in waiting if the queues are long."
            ]
        },

        // ===== Scholarships =====
        {
            id: "scholarship-apply",
            title: "Apply for Scholarship (New Applicant)",
            officeId: "scholarships",
            category: "Scholarships",
            keywords: ["scholarship", "apply scholarship", "financial assistance", "grant", "apply", "requirements"],
            fees: "None (usually)",
            eta: "Varies per application window",
            requirements: [
                "Completed scholarship application form",
                "Certified True Copy of grades (as required)",
                "Certificate of Enrollment / Registration Form",
                "Good Moral Certificate (if required)",
                "Photocopy of valid ID",
                "COR, COE and Prospectus"
            ],
            steps: [
                "Go to the Scholarship/Financial Assistance Office and ask for the current scholarship list and application form.",
                "Confirm eligibility and deadline for the scholarship you want to apply for.",
                "Complete the form and prepare all required documents.",
                "Submit the application and request a receiving copy/stamp if available.",
                "Wait for screening results and follow the office instructions for interview/verification (if required)."
            ],
            notes: [
                "Requirements vary by scholarship provider—always confirm the exact checklist with the office.",
                "Submit early to avoid delays during peak days."
            ]
        },
        //Scholarship Renewal
        {
            id: "scholarship-renew",
            title: "Scholarship Renewal (Continuing Scholar)",
            officeId: "scholarships",
            category: "Scholarships",
            keywords: ["scholarship renewal", "renew scholarship", "continuing scholar", "renew", "grades", "compliance"],
            fees: "None (usually)",
            eta: "Varies per semester schedule",
            requirements: [
                "Renewal form (from Scholarship Office)",
                "Certified grades / Copy of grades (as required)",
                "Certificate of Enrollment / Registration Form",
                "Scholarship contract/compliance documents (if required)",
                "Other requirements based on scholarship rules (edit this)"
            ],
            steps: [
                "Visit the Scholarship Office and request the renewal requirements and deadline for this term.",
                "Prepare your grades and proof of enrollment documents.",
                "Fill out the renewal form completely.",
                "Submit all requirements and confirm if any follow-up steps are needed.",
                "Keep a copy/photo of your submitted documents for reference."
            ],
            notes: [
                "Some scholarships have grade minimums—confirm your standing before submitting.",
                "Ask for the release schedule or next update date."
            ]
        },

        // ===== GRADES =====
        {
            id: "inc-process",
            title: "INC Grade: What to do and how to comply",
            officeId: "registrar",
            category: "Grades",
            keywords: ["inc", "incomplete", "completion", "grade completion"],
            fees: "Possible fees depending on policy (confirm)",
            eta: "Depends on instructor and submission timeline",
            requirements: [
                "Consultation with subject instructor",
                "Completion requirement (exam/project/activity) as instructed",
                "Completion/Change of Grade form (if your campus uses one)",
                "Proof of compliance (outputs, score sheet, etc.)"
            ],
            steps: [
                "Identify the subject with INC and contact your instructor immediately.",
                "Ask what completion requirement you need and the deadline.",
                "Complete the requirement within the allowed time.",
                "If a completion/change-of-grade form is required: secure instructor signature.",
                "Confirm that the final grade is submitted and reflected in your records."
            ],
            notes: [
                "INC deadlines differ—do not delay.",
                "Keep proof that you submitted/finished the completion requirements."
            ]
        },

        // ===== RECORDS =====
        {
            id: "tor",
            title: "Request Transcript of Records (TOR)",
            officeId: "registrar",
            category: "Records",
            keywords: ["tor", "transcript", "records"],
            fees: "Varies (confirm at Registrar/Cashier)",
            eta: "1–7 working days (depends on volume)",
            requirements: [
                "Valid ID",
                "TOR request form (from Registrar)",
                "Payment receipt (if applicable)",
                "Clearance (if required)"
            ],
            steps: [
                "Go to Registrar and request the TOR form.",
                "Fill out the form completely.",
                "If there is a fee: pay at Cashier and keep the receipt.",
                "Submit the form + receipt + other requirements.",
                "Claim on the scheduled release date/time."
            ],
            notes: [
                "Processing depends on clearance and volume."
            ]
        },

        {
            id: "coe",
            title: "Request Certificate of Enrollment (COE)",
            officeId: "registrar",
            category: "Certificates",
            keywords: ["coe", "certificate of enrollment", "enrollment certificate"],
            fees: "Varies (confirm at Registrar/Cashier)",
            eta: "Same day–3 working days (depends on volume)",
            requirements: [
                "Valid ID",
                "Request form (if required)",
                "Payment receipt (if applicable)"
            ],
            steps: [
                "Proceed to Registrar and request a Certificate of Enrollment.",
                "Fill out any request form and verify details.",
                "If there is a fee: pay at Cashier and keep the receipt.",
                "Submit requirements to Registrar.",
                "Claim the certificate as instructed."
            ],
            notes: [
                "Some certificates require proof of current enrollment."
            ]
        },

        {
            id: "transfer",
            title: "Transfer Process (Request for Transfer Credentials)",
            officeId: "registrar",
            category: "Records",
            keywords: ["transfer", "transfer out", "honorable dismissal", "credentials"],
            fees: "May apply (confirm)",
            eta: "3–14 working days (sample; depends on clearance)",
            requirements: [
                "Transfer request letter (or official form)",
                "Valid ID",
                "Clearance (Library, Cashier, etc. if required)",
                "Payment receipt (if applicable)"
            ],
            steps: [
                "Go to Registrar and ask for the official transfer-out process.",
                "Prepare and submit a transfer request letter/form.",
                "Complete required clearances (Library/Cashier/others if needed).",
                "Pay applicable fees and keep receipts.",
                "Claim transfer credentials on the given release date."
            ],
            notes: [
                "Ask Registrar what documents you will receive (TOR, honorable dismissal, etc.)."
            ]
        },

        // ===== SHIFTING / SHIFTEE =====
        {
            id: "shifting",
            title: "Shifting / Change of Program (Shiftee Process)",
            officeId: "osas",
            category: "Academic",
            keywords: ["shifting", "shiftee", "change program", "change course"],
            fees: "Possible fees / confirm",
            eta: "Depends on approvals and evaluation",
            requirements: [
                "Shifting form (from Department/OSAS/Registrar depending on BASC process)",
                "Latest grades / evaluation (if required)",
                "Approvals/signatures (Dept Chair, Dean, Registrar, etc.)"
            ],
            steps: [
                "Ask OSAS/Department where to get the official shifting form.",
                "Consult your current department (adviser/chair) for evaluation.",
                "Secure signatures/approvals in the correct order.",
                "Submit completed form to the final receiving office.",
                "Wait for confirmation and updated enrollment instructions."
            ],
            notes: [
                "Some programs have grade cutoffs or limited slots. Confirm early."
            ]
        },

        // ===== ID =====
        {
            id: "id-lost",
            title: "Student ID Replacement / Lost ID",
            officeId: "mis",
            category: "Lost ID",
            keywords: ["id", "lost id", "replacement", "student id"],
            fees: "150 pesos",
            eta: "Same day–7 working days (depends on printing)",
            requirements: [
                "Affidavit of Loss (if required)",
                "Valid ID / Student number",
                "Payment receipt (if applicable)",
                "2x2 photo (if required)"
            ],
            steps: [
                "Go to MIS near the clinic and ask for the ID replacement process.",
                "Prepare required documents (Affidavit of Loss).",
                "Pay 150 pesos at Cashier and keep the receipt.",
                "Submit all requirements to OSAS for processing.",
                "Claim the ID on the scheduled date."
            ],
            notes: [
                "Please make sure to wait and find sir Sam Lagoyo."
            ]
        },

        // ===== PASSBOOK =====
        {
            id: "request-passbook",
            title: "Request Passbook (New / First Time)",
            officeId: "cashier",
            category: "Finance",
            keywords: ["passbook", "request passbook", "new passbook"],
            fees: "Varies (confirm at Cashier)",
            eta: "Same day–3 working days (sample)",
            requirements: [
                "Valid ID",
                "Student number",
                "Payment (if required)",
                "Any required form/endorsement (if used)"
            ],
            steps: [
                "Go to Cashier/Accounting and ask how to request a passbook.",
                "Fill out any required form and verify details.",
                "Pay required fee (if any) and keep the receipt.",
                "Submit requirements to Cashier.",
                "Claim the passbook as instructed."
            ],
            notes: [
                "Ask if your campus requires a specific passbook format for payments."
            ]
        },

        {
            id: "lost-passbook",
            title: "Lost Passbook: What to do and how to replace",
            officeId: "cashier",
            category: "Finance",
            keywords: ["lost passbook", "passbook replacement", "replace passbook"],
            fees: "Varies (confirm at Cashier)",
            eta: "Same day–7 working days (sample)",
            requirements: [
                "Affidavit of Loss (if required)",
                "Valid ID",
                "Student number",
                "Payment receipt (if applicable)"
            ],
            steps: [
                "Report the lost passbook to Cashier/Accounting.",
                "Ask for replacement requirements (affidavit, fee, forms).",
                "Prepare and submit the requirements.",
                "Pay replacement fee (if any) and keep receipt.",
                "Claim the replacement passbook as instructed."
            ],
            notes: [
                "Keep a photo of your passbook pages next time to protect your records."
            ]
        }
    ],

    templates: [
        {
            id: "request-letter",
            title: "General Request Letter (Registrar/Office)",
            tags: ["request", "formal"],
            body:
                `Date: ____________

The Office of the ____________
Bacilan State College
[Campus Address]

Subject: Request for ____________

Good day!

I am ______________________, a student from ______________________ (Course/Year/Section). I respectfully request ________________________________.

Reason for request: ________________________________________________.

I am hoping for your kind assistance regarding this matter. Thank you very much.

Respectfully yours,

__________________________
Signature over Printed Name
Student No.: ____________
Contact No.: ____________`
        },
        {
            id: "affidavit-note",
            title: "Affidavit of Loss (Reminder Checklist)",
            tags: ["loss", "id", "passbook"],
            body:
                `Affidavit of Loss (Checklist)
- Ask the office if affidavit is required.
- Prepare 1–2 valid IDs.
- Go to a Notary Public (or as instructed).
- Make photocopies of the notarized affidavit.
- Attach it to your replacement request.

Note: Requirements can vary. Always confirm with the concerned office.`
        }
    ]
};
