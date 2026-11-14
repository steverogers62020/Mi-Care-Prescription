// ============================================================
// 1. COMPREHENSIVE ORTHOPEDIC DIAGNOSTIC TESTS DATABASE
// ============================================================
const ORTHOPEDIC_TESTS = [
    // ==========================================
    // 1. X-RAYS (All Joints, Spine & Trauma)
    // ==========================================
    { category: "X-Ray", name: "XRAY LT KNEE BV" },
    { category: "X-Ray", name: "XRAY RT KNEE BV" },
    { category: "X-Ray", name: "XRAY BOTH KNEES STANDING AP & LATERAL" },
    { category: "X-Ray", name: "XRAY L-S SPINE BV (AP & LATERAL)" },
    { category: "X-Ray", name: "XRAY L-S SPINE FLEXION & EXTENSION" },
    { category: "X-Ray", name: "XRAY CERVICAL SPINE BV (AP & LATERAL)" },
    { category: "X-Ray", name: "XRAY DORSAL SPINE BV" },
    { category: "X-Ray", name: "XRAY WHOLE SPINE (SCOLIOSIS SERIES) AP & LATERAL" },
    { category: "X-Ray", name: "XRAY COCCYX AP & LATERAL" },
    { category: "X-Ray", name: "XRAY PELVIS WITH BOTH HIP JOINTS AP" },
    { category: "X-Ray", name: "XRAY SI JOINTS (FERGUSON VIEW)" },
    { category: "X-Ray", name: "XRAY RT SHOULDER JOINT AP & AXIAL" },
    { category: "X-Ray", name: "XRAY LT SHOULDER JOINT AP & AXIAL" },
    { category: "X-Ray", name: "XRAY RT CLAVICLE AP" },
    { category: "X-Ray", name: "XRAY LT CLAVICLE AP" },
    { category: "X-Ray", name: "XRAY RT HUMERUS AP & LATERAL" },
    { category: "X-Ray", name: "XRAY LT HUMERUS AP & LATERAL" },
    { category: "X-Ray", name: "XRAY RT ELBOW JOINT BV" },
    { category: "X-Ray", name: "XRAY LT ELBOW JOINT BV" },
    { category: "X-Ray", name: "XRAY RT FOREARM AP & LATERAL" },
    { category: "X-Ray", name: "XRAY LT FOREARM AP & LATERAL" },
    { category: "X-Ray", name: "XRAY RT WRIST JOINT BV" },
    { category: "X-Ray", name: "XRAY LT WRIST JOINT BV" },
    { category: "X-Ray", name: "XRAY RT SCAPHOID VIEW" },
    { category: "X-Ray", name: "XRAY LT SCAPHOID VIEW" },
    { category: "X-Ray", name: "XRAY BOTH HANDS AP & OBLIQUE" },
    { category: "X-Ray", name: "XRAY RT HAND / FINGER AP & OBLIQUE" },
    { category: "X-Ray", name: "XRAY LT HAND / FINGER AP & OBLIQUE" },
    { category: "X-Ray", name: "XRAY RT FEMUR AP & LATERAL" },
    { category: "X-Ray", name: "XRAY LT FEMUR AP & LATERAL" },
    { category: "X-Ray", name: "XRAY RT TIBIA & FIBULA AP & LATERAL" },
    { category: "X-Ray", name: "XRAY LT TIBIA & FIBULA AP & LATERAL" },
    { category: "X-Ray", name: "XRAY RT ANKLE JOINT BV" },
    { category: "X-Ray", name: "XRAY LT ANKLE JOINT BV" },
    { category: "X-Ray", name: "XRAY RT CALCANEUS (HEEL) LATERAL & AXIAL" },
    { category: "X-Ray", name: "XRAY LT CALCANEUS (HEEL) LATERAL & AXIAL" },
    { category: "X-Ray", name: "XRAY RT FOOT AP & OBLIQUE" },
    { category: "X-Ray", name: "XRAY LT FOOT AP & OBLIQUE" },
    { category: "X-Ray", name: "XRAY SKULL BV" },
    { category: "X-Ray", name: "XRAY NASAL BONE LATERAL" },
    { category: "X-Ray", name: "XRAY PNS (OM VIEW)" },
    { category: "X-Ray", name: "CXR PA" },
    { category: "X-Ray", name: "XRAY KUB" },

    // ==========================================
    // 2. MRI, CT SCAN, USG & NEURO-DIAGNOSTIC
    // ==========================================
    { category: "MRI / CT / USG", name: "MRI OF L-S SPINE" },
    { category: "MRI / CT / USG", name: "MRI OF CERVICAL SPINE" },
    { category: "MRI / CT / USG", name: "MRI OF DORSAL SPINE" },
    { category: "MRI / CT / USG", name: "MRI OF LT KNEE JOINT" },
    { category: "MRI / CT / USG", name: "MRI OF RT KNEE JOINT" },
    { category: "MRI / CT / USG", name: "MRI OF RT SHOULDER JOINT" },
    { category: "MRI / CT / USG", name: "MRI OF LT SHOULDER JOINT" },
    { category: "MRI / CT / USG", name: "MRI OF BOTH HIP JOINTS (SI JOINT)" },
    { category: "MRI / CT / USG", name: "MRI OF RT ANKLE JOINT" },
    { category: "MRI / CT / USG", name: "MRI OF LT ANKLE JOINT" },
    { category: "MRI / CT / USG", name: "MRI OF RT WRIST JOINT" },
    { category: "MRI / CT / USG", name: "MRI OF LT WRIST JOINT" },
    { category: "MRI / CT / USG", name: "CT SCAN OF BRAIN (PLAIN)" },
    { category: "MRI / CT / USG", name: "CT SCAN OF L-S SPINE" },
    { category: "MRI / CT / USG", name: "CT SCAN OF KNEE JOINT (3D)" },
    { category: "MRI / CT / USG", name: "CT SCAN OF PELVIS / HIP (3D)" },
    { category: "MRI / CT / USG", name: "CT SCAN OF ANKLE / CALCANEUS (3D)" },
    { category: "MRI / CT / USG", name: "BMD (DEXA SCAN) L-S SPINE & HIP" },
    { category: "MRI / CT / USG", name: "USG OF WHOLE ABDOMEN" },
    { category: "MRI / CT / USG", name: "HIGH RESOLUTION USG OF SHOULDER / KNEE" },
    { category: "MRI / CT / USG", name: "USG OF SOFT TISSUE / SWELLING" },
    { category: "MRI / CT / USG", name: "DUPLEX STUDY OF LOWER LIMB VESSELS" },
    { category: "MRI / CT / USG", name: "DUPLEX STUDY OF UPPER LIMB VESSELS" },
    { category: "MRI / CT / USG", name: "NCS & EMG (UPPER / LOWER LIMB)" },

    // ==========================================
    // 3. BLOOD, RHEUMATOLOGY & BIOCHEMISTRY
    // ==========================================
    { category: "Blood / Lab", name: "CBC" },
    { category: "Blood / Lab", name: "CBC WITH ESR" },
    { category: "Blood / Lab", name: "CRP" },
    { category: "Blood / Lab", name: "PROCALCITONIN" },
    { category: "Blood / Lab", name: "SERUM URIC ACID" },
    { category: "Blood / Lab", name: "RA FACTOR (QUANTITATIVE)" },
    { category: "Blood / Lab", name: "ANTI-CCP ANTIBODY" },
    { category: "Blood / Lab", name: "HLA-B27" },
    { category: "Blood / Lab", name: "ANA (ANTINUCLEAR ANTIBODY)" },
    { category: "Blood / Lab", name: "ASO TITRE" },
    { category: "Blood / Lab", name: "SERUM CALCIUM" },
    { category: "Blood / Lab", name: "SERUM INORGANIC PHOSPHATE" },
    { category: "Blood / Lab", name: "SERUM MAGNESIUM" },
    { category: "Blood / Lab", name: "25-OH VITAMIN D3" },
    { category: "Blood / Lab", name: "SERUM PTH" },
    { category: "Blood / Lab", name: "SERUM ALKALINE PHOSPHATASE" },
    { category: "Blood / Lab", name: "VITAMIN B12 & SERUM FERRITIN" },
    { category: "Blood / Lab", name: "SERUM CPK" },
    { category: "Blood / Lab", name: "SERUM LDH" },
    { category: "Blood / Lab", name: "RBS (RANDOM BLOOD SUGAR)" },
    { category: "Blood / Lab", name: "FBS & 2HABF" },
    { category: "Blood / Lab", name: "HbA1c" },
    { category: "Blood / Lab", name: "SERUM CREATININE" },
    { category: "Blood / Lab", name: "SERUM ELECTROLYTES" },
    { category: "Blood / Lab", name: "SGPT (ALT)" },
    { category: "Blood / Lab", name: "SGOT (AST)" },
    { category: "Blood / Lab", name: "SERUM BILIRUBIN (TOTAL)" },
    { category: "Blood / Lab", name: "SERUM ALBUMIN" },
    { category: "Blood / Lab", name: "LIPID PROFILE (FASTING)" },
    { category: "Blood / Lab", name: "SERUM TSH, FT3, FT4" },
    { category: "Blood / Lab", name: "PSA (PROSTATE SPECIFIC ANTIGEN)" },
    { category: "Blood / Lab", name: "HBsAg (SCREENING)" },
    { category: "Blood / Lab", name: "Anti-HCV" },
    { category: "Blood / Lab", name: "HIV (1 & 2) SCREENING" },
    { category: "Blood / Lab", name: "BLOOD GROUPING & Rh TYPING" },
    { category: "Blood / Lab", name: "BT, CT & PROTHROMBIN TIME (INR)" },
    { category: "Blood / Lab", name: "D-DIMER" },
    { category: "Blood / Lab", name: "TROPONIN-I" },
    { category: "Blood / Lab", name: "DENGUE NS1 ANTIGEN / IgG & IgM" },
    { category: "Blood / Lab", name: "PREGNANCY TEST (BETA-hCG)" },

    // ==========================================
    // 4. MICROBIOLOGY, ASPIRATION & BIOPSY
    // ==========================================
    { category: "Microbiology / Biopsy", name: "SYNOVIAL FLUID ANALYSIS (R/M/E & C/S)" },
    { category: "Microbiology / Biopsy", name: "PUS / WOUND SWAB FOR C/S & GRAM STAIN" },
    { category: "Microbiology / Biopsy", name: "BLOOD CULTURE & SENSITIVITY (C/S)" },
    { category: "Microbiology / Biopsy", name: "GENE XPERT / AFB STAIN (TB)" },
    { category: "Microbiology / Biopsy", name: "MANTOUX TEST (MT)" },
    { category: "Microbiology / Biopsy", name: "HISTOPATHOLOGY / BIOPSY" },

    // ==========================================
    // 5. ROUTINE & CARDIOLOGY
    // ==========================================
    { category: "Routine / Cardio", name: "URINE R/M/E" },
    { category: "Routine / Cardio", name: "URINE C/S" },
    { category: "Routine / Cardio", name: "STOOL R/M/E" },
    { category: "Routine / Cardio", name: "ECG (12 LEAD)" },
    { category: "Routine / Cardio", name: "ECHOCARDIOGRAPHY (2D & COLOR DOPPLER)" }
];

// Reference loaded BD medicines from medicine.js (Single Source of Truth)
function getMedicineDatabase() {
    if (typeof window !== "undefined" && Array.isArray(window.BD_MEDICINES) && window.BD_MEDICINES.length > 0) {
        return window.BD_MEDICINES;
    }
    return [];
}

// ============================================================
// 2. STATE MANAGEMENT
// ============================================================
let state = {
    tests: ["CBC", "CRP", "XRAY LT KNEE BV", "CXR PA"],
    discount: "35",
    procedures: ["REMOVAL OF IMPLANT"],
    medicines: []
};

// Zoom State
let zoomState = {
    mode: "fit", // "fit" or number (e.g. 1.0, 0.8)
    currentScale: 1.0
};

// Autocomplete Keyboard Active Indices
let medActiveIndex = -1;
let testActiveIndex = -1;

// Helper to generate realistic Patient ID (#45F + 5 Hex Digits)
function generatePatientId() {
    const chars = '0123456789ABCDEF';
    let rand = '';
    for (let i = 0; i < 5; i++) {
        rand += chars[Math.floor(Math.random() * chars.length)];
    }
    return `#45F${rand}`;
}

// ============================================================
// 3. INITIALIZATION & DOM BINDINGS
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    initDate();
    populateTestDropdown();
    bindPatientInputs();
    bindInvestigationEvents();
    bindTreatmentEvents();
    bindMedicineEvents();
    bindCalibrationAndPrint();
    bindResponsiveUI();
    initZoomEngine();
    renderAll();
});

function initDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const formatted = `${dd}/${mm}/${yyyy}`;
    
    const inDate = document.getElementById("inDate");
    const outDate = document.getElementById("outDate");
    if (inDate) inDate.value = formatted;
    if (outDate) outDate.textContent = formatted;
}

// Populate Categorized Dropdown for Tests
function populateTestDropdown() {
    const dropdown = document.getElementById("testDropdown");
    if (!dropdown) return;

    dropdown.innerHTML = '<option value="">-- Choose Orthopedic / Lab Test --</option>';
    const categories = [...new Set(ORTHOPEDIC_TESTS.map(t => t.category))];

    categories.forEach(cat => {
        const group = document.createElement("optgroup");
        group.label = cat;
        ORTHOPEDIC_TESTS.filter(t => t.category === cat).forEach(test => {
            const opt = document.createElement("option");
            opt.value = test.name;
            opt.textContent = test.name;
            group.appendChild(opt);
        });
        dropdown.appendChild(group);
    });

    dropdown.addEventListener("change", (e) => {
        if (e.target.value) {
            addTest(e.target.value);
            e.target.value = "";
        }
    });
}

// Patient Details Live Binding
function bindPatientInputs() {
    const mappings = [
        { in: "inName", out: "outName", default: "" },
        { in: "inId", out: "outId", default: "" },
        { in: "inAge", out: "outAge", default: "" },
        { in: "inSex", out: "outSex", default: "Male" },
        { in: "inDate", out: "outDate", default: "" }
    ];

    mappings.forEach(m => {
        const inEl = document.getElementById(m.in);
        const outEl = document.getElementById(m.out);
        if (!inEl || !outEl) return;

        const updateFn = () => {
            outEl.textContent = inEl.value.trim() || m.default;
        };

        inEl.addEventListener("input", updateFn);
        inEl.addEventListener("change", updateFn);
    });
}

// Investigation Autocomplete & Discount
function bindInvestigationEvents() {
    const searchInput = document.getElementById("testSearchInput");
    const suggestionBox = document.getElementById("testSuggestions");
    const discountInput = document.getElementById("inDiscount");
    const addBtn = document.getElementById("btnAddCustomTest");

    if (!searchInput || !suggestionBox) return;

    searchInput.addEventListener("input", () => {
        const q = searchInput.value.trim().toLowerCase();
        suggestionBox.innerHTML = "";
        testActiveIndex = -1;

        if (!q) {
            suggestionBox.classList.remove("show");
            return;
        }

        const matches = ORTHOPEDIC_TESTS.filter(t => 
            t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)
        );

        if (matches.length > 0) {
            matches.slice(0, 12).forEach((m, idx) => {
                const li = document.createElement("li");
                li.setAttribute("role", "option");
                li.innerHTML = `<span>${m.name}</span> <small>${m.category}</small>`;

                // Use pointerdown/mousedown for immediate mobile and desktop response
                const selectItem = (e) => {
                    e.preventDefault();
                    addTest(m.name);
                    searchInput.value = "";
                    suggestionBox.classList.remove("show");
                };

                li.addEventListener("mousedown", selectItem);
                li.addEventListener("touchstart", selectItem, { passive: false });
                suggestionBox.appendChild(li);
            });
            suggestionBox.classList.add("show");
        } else {
            suggestionBox.classList.remove("show");
        }
    });

    // Keyboard Navigation for Test Suggestions
    searchInput.addEventListener("keydown", (e) => {
        const items = suggestionBox.querySelectorAll("li");

        if (e.key === "ArrowDown") {
            if (items.length > 0) {
                e.preventDefault();
                testActiveIndex = (testActiveIndex + 1) % items.length;
                updateSuggestionHighlight(items, testActiveIndex);
            }
        } else if (e.key === "ArrowUp") {
            if (items.length > 0) {
                e.preventDefault();
                testActiveIndex = (testActiveIndex - 1 + items.length) % items.length;
                updateSuggestionHighlight(items, testActiveIndex);
            }
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (testActiveIndex >= 0 && items[testActiveIndex]) {
                items[testActiveIndex].dispatchEvent(new Event("mousedown"));
            } else if (searchInput.value.trim()) {
                addTest(searchInput.value.trim().toUpperCase());
                searchInput.value = "";
                suggestionBox.classList.remove("show");
            }
        } else if (e.key === "Escape") {
            suggestionBox.classList.remove("show");
            testActiveIndex = -1;
        }
    });

    if (addBtn) {
        addBtn.addEventListener("click", () => {
            const val = searchInput.value.trim();
            if (val) {
                addTest(val.toUpperCase());
                searchInput.value = "";
                suggestionBox.classList.remove("show");
            }
        });
    }

    if (discountInput) {
        discountInput.addEventListener("input", () => {
            state.discount = discountInput.value.trim();
            renderInvestigations();
        });
    }

    // Quick Presets
    document.querySelectorAll(".btn-chip").forEach(btn => {
        btn.addEventListener("click", () => {
            const p = btn.dataset.preset;
            if (p === "knee") {
                ["XRAY BOTH KNEES STANDING AP & LATERAL", "SERUM URIC ACID", "RA FACTOR (QUANTITATIVE)", "CRP"].forEach(addTest);
            } else if (p === "spine") {
                ["XRAY L-S SPINE BV (AP & LATERAL)", "SERUM CALCIUM", "25-OH VITAMIN D3", "CBC WITH ESR"].forEach(addTest);
            } else if (p === "preop") {
                ["CBC", "RBS (RANDOM BLOOD SUGAR)", "SERUM CREATININE", "HBsAg (SCREENING)", "ECG (12 LEAD)", "CXR PA"].forEach(addTest);
            }
        });
    });

    // Close suggestions on outside click / tap
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".autocomplete-wrapper")) {
            suggestionBox.classList.remove("show");
            const medSug = document.getElementById("medSuggestions");
            if (medSug) medSug.classList.remove("show");
        }
    });
}

function updateSuggestionHighlight(items, activeIdx) {
    items.forEach((item, idx) => {
        if (idx === activeIdx) {
            item.classList.add("active-suggestion");
            item.scrollIntoView({ block: "nearest" });
        } else {
            item.classList.remove("active-suggestion");
        }
    });
}

function addTest(testName) {
    if (!testName) return;
    if (!state.tests.includes(testName)) {
        state.tests.push(testName);
        renderInvestigations();
    }
}

function removeTest(index) {
    state.tests.splice(index, 1);
    renderInvestigations();
}

// Treatment Plan & Clinical Notes
function bindTreatmentEvents() {
    const procInput = document.getElementById("inProcedure");
    const noteInput = document.getElementById("inClinicalNote");
    const addProcBtn = document.getElementById("btnAddProcedure");

    if (addProcBtn && procInput) {
        addProcBtn.addEventListener("click", () => {
            const val = procInput.value.trim();
            if (val) {
                state.procedures.push(val.toUpperCase());
                procInput.value = "";
                renderProcedures();
            }
        });

        procInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                addProcBtn.click();
            }
        });
    }

    if (noteInput) {
        const updateNote = () => {
            const outNote = document.getElementById("outClinicalNote");
            if (outNote) {
                outNote.textContent = noteInput.value;
                outNote.style.display = noteInput.value.trim() ? "block" : "none";
            }
        };
        noteInput.addEventListener("input", updateNote);
    }
}

function removeProcedure(index) {
    state.procedures.splice(index, 1);
    renderProcedures();
}

// Medicine Autocomplete & Entry
function bindMedicineEvents() {
    const medInput = document.getElementById("medSearchInput");
    const medSugBox = document.getElementById("medSuggestions");
    const doseInput = document.getElementById("medDose");
    const durationInput = document.getElementById("medDuration");
    const addMedBtn = document.getElementById("btnAddMed");

    if (!medInput || !medSugBox) return;

    medInput.addEventListener("input", () => {
        const q = medInput.value.trim().toLowerCase();
        medSugBox.innerHTML = "";
        medActiveIndex = -1;

        if (!q) {
            medSugBox.classList.remove("show");
            return;
        }

        const db = getMedicineDatabase();
        // Intelligent multi-field search: Brand, Generic, Company, Category
        const matches = db.filter(m => {
            const nameMatch = m.name && m.name.toLowerCase().includes(q);
            const genericMatch = m.generic && m.generic.toLowerCase().includes(q);
            const companyMatch = m.company && m.company.toLowerCase().includes(q);
            const catMatch = m.category && m.category.toLowerCase().includes(q);
            return nameMatch || genericMatch || companyMatch || catMatch;
        });

        if (matches.length > 0) {
            matches.slice(0, 16).forEach(m => {
                const li = document.createElement("li");
                li.setAttribute("role", "option");
                li.className = "med-sug-item";

                li.innerHTML = `
                    <div class="sug-left">
                        <strong class="sug-name">${m.name}</strong>
                        ${m.generic ? `<span class="sug-generic">${m.generic}</span>` : ''}
                    </div>
                    <div class="sug-right">
                        <span class="sug-company">${m.company}</span>
                        ${m.category ? `<span class="sug-category">${m.category}</span>` : ''}
                    </div>
                `;

                const selectMed = (e) => {
                    e.preventDefault();
                    medInput.value = m.name;
                    medSugBox.classList.remove("show");

                    // Smart auto-fill: populate default dose & duration if empty
                    if (doseInput && !doseInput.value.trim() && m.defaultDose) {
                        doseInput.value = m.defaultDose;
                    }
                    if (durationInput && !durationInput.value.trim() && m.defaultDuration) {
                        durationInput.value = m.defaultDuration;
                    }

                    // Move focus smoothly to dose or duration
                    if (doseInput && !doseInput.value) {
                        doseInput.focus();
                    } else if (durationInput && !durationInput.value) {
                        durationInput.focus();
                    } else if (doseInput) {
                        doseInput.focus();
                    }
                };

                li.addEventListener("mousedown", selectMed);
                li.addEventListener("touchstart", selectMed, { passive: false });
                medSugBox.appendChild(li);
            });
            medSugBox.classList.add("show");
        } else {
            medSugBox.classList.remove("show");
        }
    });

    // Keyboard navigation on Medicine Search
    medInput.addEventListener("keydown", (e) => {
        const items = medSugBox.querySelectorAll("li");

        if (e.key === "ArrowDown") {
            if (items.length > 0) {
                e.preventDefault();
                medActiveIndex = (medActiveIndex + 1) % items.length;
                updateSuggestionHighlight(items, medActiveIndex);
            }
        } else if (e.key === "ArrowUp") {
            if (items.length > 0) {
                e.preventDefault();
                medActiveIndex = (medActiveIndex - 1 + items.length) % items.length;
                updateSuggestionHighlight(items, medActiveIndex);
            }
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (medActiveIndex >= 0 && items[medActiveIndex]) {
                items[medActiveIndex].dispatchEvent(new Event("mousedown"));
            } else if (medInput.value.trim()) {
                medSugBox.classList.remove("show");
                if (doseInput) doseInput.focus();
            }
        } else if (e.key === "Escape") {
            medSugBox.classList.remove("show");
            medActiveIndex = -1;
        }
    });

    // Enter key shortcuts for fast keyboard prescription writing
    if (doseInput) {
        doseInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                if (durationInput) durationInput.focus();
            }
        });
    }

    if (durationInput) {
        durationInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                if (addMedBtn) addMedBtn.click();
            }
        });
    }

    if (addMedBtn) {
        addMedBtn.addEventListener("click", () => {
            const name = medInput.value.trim();
            const dose = doseInput ? doseInput.value.trim() : "";
            const duration = durationInput ? durationInput.value.trim() : "";

            if (!name) {
                medInput.focus();
                return;
            }

            state.medicines.push({ name, dose, duration });
            medInput.value = "";
            if (doseInput) doseInput.value = "";
            if (durationInput) durationInput.value = "";
            medInput.focus();
            renderMedicines();
            updateMobileBadge();
        });
    }
}

function removeMedicine(index) {
    state.medicines.splice(index, 1);
    renderMedicines();
    updateMobileBadge();
}

function updateMobileBadge() {
    const badge = document.getElementById("previewCountBadge");
    if (badge) {
        const count = state.medicines.length;
        badge.textContent = `${count} Med${count === 1 ? '' : 's'}`;
    }
}

// ============================================================
// 4. RENDER FUNCTIONS (SYNC UI & A4 PRESCRIPTION PREVIEW)
// ============================================================
function renderAll() {
    renderInvestigations();
    renderProcedures();
    renderMedicines();
    
    const noteEl = document.getElementById("inClinicalNote");
    const outNote = document.getElementById("outClinicalNote");
    if (noteEl && outNote) {
        outNote.textContent = noteEl.value;
        outNote.style.display = noteEl.value.trim() ? "block" : "none";
    }

    updateMobileBadge();
}

function renderInvestigations() {
    const outList = document.getElementById("outInvestigationList");
    const tagsContainer = document.getElementById("addedTestsTags");

    if (!outList || !tagsContainer) return;

    outList.innerHTML = "";
    tagsContainer.innerHTML = "";

    state.tests.forEach((test, idx) => {
        // Preview Bullet
        const li = document.createElement("li");
        li.textContent = test;
        outList.appendChild(li);

        // Control Panel Tag
        const tag = document.createElement("span");
        tag.className = "tag-item";
        tag.innerHTML = `${test} <button type="button" onclick="removeTest(${idx})" title="Remove test">&times;</button>`;
        tagsContainer.appendChild(tag);
    });

    // Show "LESS X%" right below tests if discount > 0 and tests exist
    const discNum = parseFloat(state.discount);
    if (!isNaN(discNum) && discNum > 0 && state.tests.length > 0) {
        const discLi = document.createElement("li");
        discLi.className = "discount-line";
        discLi.textContent = `LESS ${discNum}%`;
        outList.appendChild(discLi);
    }
}

function renderProcedures() {
    const outList = document.getElementById("outProceduresList");
    const tagsContainer = document.getElementById("addedProceduresTags");
    const section = document.getElementById("treatmentPlanSection");
    const wrapper = document.getElementById("outProceduresWrapper");

    if (!outList || !tagsContainer) return;

    outList.innerHTML = "";
    tagsContainer.innerHTML = "";

    const hasProcedures = state.procedures.length > 0;
    if (section) section.style.display = hasProcedures ? "block" : "none";
    if (wrapper) wrapper.style.display = hasProcedures ? "block" : "none";

    state.procedures.forEach((proc, idx) => {
        const li = document.createElement("li");
        li.textContent = proc;
        outList.appendChild(li);

        const tag = document.createElement("span");
        tag.className = "tag-item";
        tag.innerHTML = `${proc} <button type="button" onclick="removeProcedure(${idx})" title="Remove procedure">&times;</button>`;
        tagsContainer.appendChild(tag);
    });
}

function renderMedicines() {
    const tbody = document.getElementById("outMedicineBody");
    const manageList = document.getElementById("addedMedsList");

    if (!tbody || !manageList) return;

    tbody.innerHTML = "";
    manageList.innerHTML = "";

    // Maintain at least 6 clean ruled rows like authentic prescription pad
    const totalRows = Math.max(6, state.medicines.length);

    for (let i = 0; i < totalRows; i++) {
        const med = state.medicines[i];
        const tr = document.createElement("tr");

        if (med) {
            tr.innerHTML = `
                <td class="num-cell">${i + 1}.</td>
                <td class="med-cell">${escapeHtml(med.name)}</td>
                <td class="dose-cell">${escapeHtml(med.dose)}</td>
                <td class="dur-cell">${escapeHtml(med.duration)}</td>
            `;

            const item = document.createElement("div");
            item.className = "med-manage-item";
            item.innerHTML = `
                <span class="med-manage-text"><strong>${i + 1}. ${escapeHtml(med.name)}</strong> <small class="text-muted">(${escapeHtml(med.dose || '-')} | ${escapeHtml(med.duration || '-')})</small></span>
                <button type="button" onclick="removeMedicine(${i})" class="btn-remove-med" title="Remove medicine">Remove</button>
            `;
            manageList.appendChild(item);
        } else {
            tr.innerHTML = `
                <td class="num-cell">${i + 1}.</td>
                <td class="med-cell"></td>
                <td class="dose-cell"></td>
                <td class="dur-cell"></td>
            `;
        }
        tbody.appendChild(tr);
    }
}

function escapeHtml(str) {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ============================================================
// 5. PRINT, CALIBRATION & NEW PATIENT RESET
// ============================================================
function bindCalibrationAndPrint() {
    const padCheckbox = document.getElementById("padPrintMode");
    const sheet = document.getElementById("prescriptionSheet");

    if (padCheckbox && sheet) {
        padCheckbox.addEventListener("change", () => {
            sheet.classList.toggle("pad-mode-active", padCheckbox.checked);
        });
    }

    const topSlider = document.getElementById("topOffset");
    const leftSlider = document.getElementById("leftOffset");

    if (topSlider) {
        topSlider.addEventListener("input", () => {
            const valSpan = document.getElementById("topOffsetVal");
            if (valSpan) valSpan.textContent = topSlider.value;
            document.documentElement.style.setProperty("--offset-top", `${topSlider.value}mm`);
        });
    }

    if (leftSlider) {
        leftSlider.addEventListener("input", () => {
            const valSpan = document.getElementById("leftOffsetVal");
            if (valSpan) valSpan.textContent = leftSlider.value;
            document.documentElement.style.setProperty("--offset-left", `${leftSlider.value}mm`);
        });
    }

    // Print triggers
    const printBtns = [document.getElementById("btnPrint"), document.getElementById("tabBtnPrint")];
    printBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener("click", () => {
                window.print();
            });
        }
    });

    // Keyboard shortcut for Print (Ctrl+P / Cmd+P)
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
            e.preventDefault();
            window.print();
        }
    });

    // Clear form & generate new Patient ID
    const newBtn = document.getElementById("btnNewPatient");
    if (newBtn) {
        newBtn.addEventListener("click", () => {
            const newId = generatePatientId();
            
            const inId = document.getElementById("inId");
            const outId = document.getElementById("outId");
            if (inId) inId.value = newId;
            if (outId) outId.textContent = newId;

            const inName = document.getElementById("inName");
            const outName = document.getElementById("outName");
            if (inName) inName.value = "";
            if (outName) outName.textContent = "";

            const inAge = document.getElementById("inAge");
            const outAge = document.getElementById("outAge");
            if (inAge) inAge.value = "";
            if (outAge) outAge.textContent = "";

            const inDiscount = document.getElementById("inDiscount");
            if (inDiscount) inDiscount.value = "";

            const inClinicalNote = document.getElementById("inClinicalNote");
            const outClinicalNote = document.getElementById("outClinicalNote");
            if (inClinicalNote) inClinicalNote.value = "";
            if (outClinicalNote) {
                outClinicalNote.textContent = "";
                outClinicalNote.style.display = "none";
            }

            state.tests = [];
            state.discount = "";
            state.procedures = [];
            state.medicines = [];

            initDate();
            renderAll();

            if (inName) inName.focus();
        });
    }
}

// ============================================================
// 6. RESPONSIVE DESIGN & MOBILE VIEWPORT MANAGEMENT
// ============================================================
function bindResponsiveUI() {
    const tabEditor = document.getElementById("tabBtnEditor");
    const tabPreview = document.getElementById("tabBtnPreview");
    const floatingBack = document.getElementById("btnFloatingBack");
    const toggleSidebar = document.getElementById("btnToggleSidebar");
    const appContainer = document.getElementById("appContainer");

    // Mobile / Tablet Tab Switcher
    function setTab(tab) {
        if (tab === "preview") {
            document.body.classList.add("view-preview-active");
            if (tabPreview) tabPreview.classList.add("active");
            if (tabEditor) tabEditor.classList.remove("active");
            // Auto scale when switching to preview on small screens
            setTimeout(() => {
                applyZoom();
            }, 50);
        } else {
            document.body.classList.remove("view-preview-active");
            if (tabEditor) tabEditor.classList.add("active");
            if (tabPreview) tabPreview.classList.remove("active");
        }
    }

    if (tabEditor) tabEditor.addEventListener("click", () => setTab("editor"));
    if (tabPreview) tabPreview.addEventListener("click", () => setTab("preview"));
    if (floatingBack) floatingBack.addEventListener("click", () => setTab("editor"));

    // Desktop & Laptop Sidebar Collapse/Expand Toggle
    if (toggleSidebar && appContainer) {
        toggleSidebar.addEventListener("click", () => {
            appContainer.classList.toggle("sidebar-collapsed");
            const isCollapsed = appContainer.classList.contains("sidebar-collapsed");
            const icon = document.getElementById("sidebarToggleIcon");
            if (icon) icon.textContent = isCollapsed ? "▶" : "◀";
            toggleSidebar.setAttribute("title", isCollapsed ? "Expand Editor Panel" : "Collapse Editor Panel");

            // Recalculate zoom after panel animation
            setTimeout(() => {
                applyZoom();
            }, 250);
        });
    }
}

// ============================================================
// 7. RESPONSIVE A4 ZOOM / AUTO-FIT ENGINE
// ============================================================
function initZoomEngine() {
    const btnFit = document.getElementById("btnZoomFit");
    const btn100 = document.getElementById("btnZoom100");
    const btnIn = document.getElementById("btnZoomIn");
    const btnOut = document.getElementById("btnZoomOut");

    if (btnFit) {
        btnFit.addEventListener("click", () => {
            zoomState.mode = "fit";
            updateZoomButtons();
            applyZoom();
        });
    }

    if (btn100) {
        btn100.addEventListener("click", () => {
            zoomState.mode = "fixed";
            zoomState.currentScale = 1.0;
            updateZoomButtons();
            applyZoom();
        });
    }

    if (btnIn) {
        btnIn.addEventListener("click", () => {
            zoomState.mode = "fixed";
            zoomState.currentScale = Math.min(1.5, Math.round((zoomState.currentScale + 0.1) * 10) / 10);
            updateZoomButtons();
            applyZoom();
        });
    }

    if (btnOut) {
        btnOut.addEventListener("click", () => {
            zoomState.mode = "fixed";
            zoomState.currentScale = Math.max(0.35, Math.round((zoomState.currentScale - 0.1) * 10) / 10);
            updateZoomButtons();
            applyZoom();
        });
    }

    // Window resize / orientation change listener (debounced)
    let resizeTimer = null;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            applyZoom();
        }, 80);
    });

    applyZoom();
}

function updateZoomButtons() {
    const btnFit = document.getElementById("btnZoomFit");
    const btn100 = document.getElementById("btnZoom100");
    if (btnFit && btn100) {
        if (zoomState.mode === "fit") {
            btnFit.classList.add("active");
            btn100.classList.remove("active");
        } else if (Math.abs(zoomState.currentScale - 1.0) < 0.05) {
            btnFit.classList.remove("active");
            btn100.classList.add("active");
        } else {
            btnFit.classList.remove("active");
            btn100.classList.remove("active");
        }
    }
}

function applyZoom() {
    const sheet = document.getElementById("prescriptionSheet");
    const wrapper = document.getElementById("sheetScaleWrapper");
    const previewArea = document.getElementById("previewArea");
    const display = document.getElementById("zoomLevelDisplay");

    if (!sheet || !wrapper || !previewArea) return;

    // Standard A4 width in px at 96 DPI: 210mm * 3.779527559 ≈ 794px
    const a4WidthPx = 794;
    const a4HeightPx = 1123; // 297mm * 3.779527559 ≈ 1123px

    let scale = 1.0;

    if (zoomState.mode === "fit") {
        // Calculate available width inside previewArea
        const availableWidth = previewArea.clientWidth - (window.innerWidth <= 768 ? 20 : 48);
        if (availableWidth > 0 && availableWidth < a4WidthPx) {
            scale = Math.max(0.35, availableWidth / a4WidthPx);
        } else {
            scale = 1.0;
        }
        zoomState.currentScale = scale;
    } else {
        scale = zoomState.currentScale;
    }

    // Apply scale to sheet
    sheet.style.transform = `scale(${scale})`;
    sheet.style.transformOrigin = "top center";

    // Adjust wrapper dimensions so document flow matches the scaled sheet
    wrapper.style.width = `${Math.round(a4WidthPx * scale)}px`;
    wrapper.style.height = `${Math.round(a4HeightPx * scale + 24)}px`;

    // Update display badge
    if (display) {
        const percent = Math.round(scale * 100);
        display.textContent = zoomState.mode === "fit" ? `Fit (${percent}%)` : `${percent}%`;
    }
}

// Make critical item removal functions accessible from inline HTML onclick attributes safely
if (typeof window !== "undefined") {
    window.removeTest = removeTest;
    window.removeProcedure = removeProcedure;
    window.removeMedicine = removeMedicine;
    window.applyZoom = applyZoom;
}
