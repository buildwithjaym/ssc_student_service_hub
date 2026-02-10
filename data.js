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
        partylist: "Student’s Union Partylist",
        president: { name: "Owen Mac A. Salain", unit: "CHUSOCOM" },
        vicePresident: { name: "John Paul Labastilla", unit: "CTE" },
        senators: [
            { name: "Moh. Ershad Sahiron", unit: "CAH" },
            { name: "Zarqawey A. Salim", unit: "CHUSOCOM" },
            { name: "Jaymie Suzainne A. Ramillano", unit: "CAH" },
            { name: "Nicole Shane P. Oriño", unit: "CTE" },
            { name: "Julman Salasain", unit: "CHUSOCOM" },
            { name: "Jaymar H. Maruji", unit: "CICTT" },
            { name: "Nursaira S. Abdo", unit: "CTE" },
            { name: "Jayvie M. Eugenio", unit: "CCJE" },
            { name: "James Ryan H. Reyes", unit: "CPAdm" },
            { name: "Nhawaf S. Jingkatal", unit: "CHUSOCOM" }
        ],
        representatives: [
            { unit: "CTE", name: "Alyanna Hamsirani" },
            { unit: "CAH", name: "Alfhariz Arawangsa" },
            { unit: "CICTT", name: "Amir Naiff Julsali" },
            { unit: "CHUSOCOM", name: "Ahmad Jayveen Abubakar" },
            { unit: "CPAdm", name: "Sarha" },
            { unit: "CITY OSC", name: "Yan Nelle E. Singson" },
            { unit: "LAMITAN OSC", name: "Al-rafie M. Majid" },
            { unit: "TIPO-TIPO OSC", name: "Adzra H. Aknalin" },
            { unit: "STA CLARA OSC", name: "Gerry A. Jannatil" }
        ]
    },

    offices: [
        {
            id: "mis",
            name: "MIS Office (Portal / Student Account)",
            location: "Administration Building — (edit exact location)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "Email/FB/Phone (optional)",
            keywords: ["portal", "account", "mis", "student portal", "login", "reset password", "open portal"]
        },
        {
            id: "registrar",
            name: "Registrar",
            location: "Main Building — (edit exact location)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "Email/FB/Phone (optional)",
            keywords: ["tor", "records", "transfer", "coe", "certificate of enrollment", "credentials"]
        },
        {
            id: "osas",
            name: "Student Affairs / OSAS",
            location: "Administration Building — (edit exact location)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "",
            keywords: ["shifting", "shiftee", "student services", "id", "student org", "activities"]
        },
        {
            id: "cashier",
            name: "Cashier / Accounting",
            location: "Administration Building — (edit exact location)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "",
            keywords: ["payment", "fees", "receipt", "passbook", "lost passbook", "request passbook"]
        },
        {
            id: "testing",
            name: "Testing Center",
            location: "Testing Center — (edit exact location)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM (edit if needed)",
            contact: "",
            keywords: ["exam", "testing", "assessment"]
        },
        {
            id: "library",
            name: "Library",
            location: "Library Building — (edit exact location)",
            hours: "Mon–Fri, (edit exact hours)",
            contact: "",
            keywords: ["library", "clearance", "borrow", "research"]
        },
        {
            id: "admin",
            name: "Administration Building",
            location: "Admin Building — Campus (reference office building)",
            hours: "Mon–Fri, 8:00 AM–5:00 PM",
            contact: "",
            keywords: ["mis", "osas", "cashier", "admin", "offices"]
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
            officeId: "osas",
            category: "Student Services",
            keywords: ["id", "lost id", "replacement", "student id"],
            fees: "Varies (confirm at OSAS/Cashier)",
            eta: "Same day–7 working days (depends on printing)",
            requirements: [
                "Affidavit of Loss (if required)",
                "Valid ID / Student number",
                "Payment receipt (if applicable)",
                "2x2 photo (if required)"
            ],
            steps: [
                "Go to OSAS and ask for the ID replacement process.",
                "Prepare required documents (Affidavit of Loss, photo, etc.).",
                "If there is a fee: pay at Cashier and keep the receipt.",
                "Submit all requirements to OSAS for processing.",
                "Claim the ID on the scheduled date."
            ],
            notes: [
                "Requirements vary by campus—confirm exact list at OSAS."
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
