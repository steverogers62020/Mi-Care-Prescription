/**
 * =========================================================================
 * BANGLADESH TOP PHARMACEUTICALS - ORTHOPEDIC & GENERAL MEDICINE DATABASE
 * Comprehensive collection of 245+ BD Medicines with Generic Names & Dosage
 * Companies: Square, Incepta, Beximco, Renata, Healthcare, Eskayef (SK+F),
 * Radiant, Aristopharma, Opsonin, Acme, Popular, Menarini, Pfizer, GSK, etc.
 * =========================================================================
 */

(function(global) {
    "use strict";

    const BD_MEDICINES = [
    {
        "name": "Tab. Ace 500mg",
        "generic": "Paracetamol",
        "company": "Square",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Ace XR 665mg",
        "generic": "Paracetamol",
        "company": "Square",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Ace Plus",
        "generic": "Paracetamol",
        "company": "Square",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Ace Power 1000mg",
        "generic": "Paracetamol",
        "company": "Square",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Tori 60mg",
        "generic": "Etoricoxib",
        "company": "Square",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Tori 90mg",
        "generic": "Etoricoxib",
        "company": "Square",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Tori 120mg",
        "generic": "Etoricoxib",
        "company": "Square",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Clofenac 50mg",
        "generic": "Diclofenac",
        "company": "Square",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Clofenac SR 100mg",
        "generic": "Diclofenac",
        "company": "Square",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Clofenac Plus",
        "generic": "Diclofenac",
        "company": "Square",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Gel. Clofenac Gel 1%",
        "generic": "Diclofenac Gel/Spray",
        "company": "Square",
        "category": "Topical NSAID",
        "defaultDose": "দিনে ২-৩ বার আলতো মালিশ",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Flexi 100mg",
        "generic": "Aceclofenac",
        "company": "Square",
        "category": "NSAID (Joint Pain)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Torax 10mg",
        "generic": "Ketorolac Tromethamine",
        "company": "Square",
        "category": "Potent NSAID",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Inj. Torax 30mg/1ml",
        "generic": "Ketorolac Tromethamine",
        "company": "Square",
        "category": "Injectable NSAID",
        "defaultDose": "1 amp IM/IV Stat/Sos",
        "defaultDuration": "1-2 days"
    },
    {
        "name": "Tab. Anadol 50mg",
        "generic": "Tramadol Hydrochloride",
        "company": "Square",
        "category": "Opioid Analgesic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Cap. Anadol SR 100mg",
        "generic": "Tramadol Hydrochloride",
        "company": "Square",
        "category": "Opioid Analgesic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Anadol Plus",
        "generic": "Tramadol Hydrochloride",
        "company": "Square",
        "category": "Opioid Analgesic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Tolperis 50mg",
        "generic": "Tolperisone Hydrochloride",
        "company": "Square",
        "category": "Muscle Relaxant",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Tolperis Plus",
        "generic": "Tolperisone Hydrochloride",
        "company": "Square",
        "category": "Muscle Relaxant",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Flexibac 10mg",
        "generic": "Aceclofenac",
        "company": "Square",
        "category": "NSAID (Joint Pain)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Prelin 25mg",
        "generic": "Pregabalin",
        "company": "Square",
        "category": "Neuropathic Pain Agent",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Prelin 50mg",
        "generic": "Pregabalin",
        "company": "Square",
        "category": "Neuropathic Pain Agent",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Prelin 75mg",
        "generic": "Pregabalin",
        "company": "Square",
        "category": "Neuropathic Pain Agent",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Neuro-B",
        "generic": "Vitamin B1 + B6 + B12",
        "company": "Square",
        "category": "Neurotropic Vitamin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Mecoba 500mcg",
        "generic": "Mecobalamin (B12)",
        "company": "Square",
        "category": "Peripheral Nerve Repair",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Cap. Seclo 20mg",
        "generic": "Omeprazole",
        "company": "Square",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Seclo 40mg",
        "generic": "Omeprazole",
        "company": "Square",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Famotack 20mg",
        "generic": "Famotidine",
        "company": "Square",
        "category": "H2 Receptor Blocker",
        "defaultDose": "1+0+1 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Famotack 40mg",
        "generic": "Famotidine",
        "company": "Square",
        "category": "H2 Receptor Blocker",
        "defaultDose": "1+0+1 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Calbo-D",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Square",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Calboral-D",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Square",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Calboral-DX",
        "generic": "Coral Calcium / Orotate + D3",
        "company": "Square",
        "category": "Advanced Bone Supplement",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Cap. Osteo-D 20000 IU",
        "generic": "Cholecalciferol (Vit D3)",
        "company": "Square",
        "category": "High-Potency Vitamin D3",
        "defaultDose": "১টি ক্যাপসুল সপ্তাহে ১ দিন",
        "defaultDuration": "2 months"
    },
    {
        "name": "Cap. Osteo-D 40000 IU",
        "generic": "Cholecalciferol (Vit D3)",
        "company": "Square",
        "category": "High-Potency Vitamin D3",
        "defaultDose": "১টি ক্যাপসুল সপ্তাহে ১ দিন",
        "defaultDuration": "2 months"
    },
    {
        "name": "Tab. Cartilag Plus",
        "generic": "Glucosamine + Chondroitin / Rosehip",
        "company": "Square",
        "category": "Cartilage & Joint Protector",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "2 months"
    },
    {
        "name": "Tab. Ibandron 150mg",
        "generic": "Ibandronic Acid 150mg",
        "company": "Square",
        "category": "Anti-Osteoporotic (Monthly)",
        "defaultDose": "১টি ট্যাবলেট মাসে ১ দিন (সকালে খালি পেটে)",
        "defaultDuration": "3 months"
    },
    {
        "name": "Tab. Cefurox 250mg",
        "generic": "Cefuroxime Axetil",
        "company": "Square",
        "category": "2nd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Cefurox 500mg",
        "generic": "Cefuroxime Axetil",
        "company": "Square",
        "category": "2nd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Cefurox Plus 500/125mg",
        "generic": "Cefuroxime + Clavulanic Acid",
        "company": "Square",
        "category": "Potent Orthopedic Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Cap. Cef-3 200mg",
        "generic": "Cefixime",
        "company": "Square",
        "category": "3rd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Cap. Cef-3 DS 400mg",
        "generic": "Cefixime",
        "company": "Square",
        "category": "3rd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Ciprocin 500mg",
        "generic": "Ciprofloxacin",
        "company": "Square",
        "category": "Fluoroquinolone Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Ciprocin 750mg",
        "generic": "Ciprofloxacin",
        "company": "Square",
        "category": "Fluoroquinolone Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Cap. Phylopen 500mg",
        "generic": "Flucloxacillin",
        "company": "Square",
        "category": "Anti-Staphylococcal Antibiotic",
        "defaultDose": "1+1+1+1 (খাওয়ার ১ ঘণ্টা আগে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Cap. Moxacil 500mg",
        "generic": "Amoxicillin",
        "company": "Square",
        "category": "Broad-Spectrum Penicillin",
        "defaultDose": "1+1+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Zimax 500mg",
        "generic": "Azithromycin",
        "company": "Square",
        "category": "Macrolide Antibiotic",
        "defaultDose": "1+0+0 (খাওয়ার ১ ঘণ্টা আগে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Clindacin 300mg",
        "generic": "Clindamycin",
        "company": "Square",
        "category": "Lincosamide Antibiotic (Bone)",
        "defaultDose": "1+1+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Cortan 5mg",
        "generic": "Prednisolone",
        "company": "Square",
        "category": "Corticosteroid",
        "defaultDose": "1+0+0 (সকালে ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Cortan 10mg",
        "generic": "Prednisolone",
        "company": "Square",
        "category": "Corticosteroid",
        "defaultDose": "1+0+0 (সকালে ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Cortan 20mg",
        "generic": "Prednisolone",
        "company": "Square",
        "category": "Corticosteroid",
        "defaultDose": "1+0+0 (সকালে ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Febux 40mg",
        "generic": "Febuxostat",
        "company": "Square",
        "category": "Anti-Gout / Uric Acid Reducer",
        "defaultDose": "1+0+0 (সকালে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Febux 80mg",
        "generic": "Febuxostat",
        "company": "Square",
        "category": "Anti-Gout / Uric Acid Reducer",
        "defaultDose": "1+0+0 (সকালে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Fexo 120mg",
        "generic": "Fexofenadine HCl",
        "company": "Square",
        "category": "Non-Sedating Antihistamine",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Fexo 180mg",
        "generic": "Fexofenadine HCl",
        "company": "Square",
        "category": "Non-Sedating Antihistamine",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Montene 10mg",
        "generic": "Montelukast Sodium",
        "company": "Square",
        "category": "Leukotriene Receptor Antagonist",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Sedil 5mg",
        "generic": "Diazepam",
        "company": "Square",
        "category": "Anxiolytic / Muscle Relaxant",
        "defaultDose": "0+0+1 (রাতে ঘুমানোর আগে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Rivotril 0.5mg",
        "generic": "Clonazepam",
        "company": "Square",
        "category": "Anxiolytic / Anticonvulsant",
        "defaultDose": "0+0+1 (রাতে ঘুমানোর আগে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etocox 60mg",
        "generic": "Etoricoxib",
        "company": "Incepta",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etocox 90mg",
        "generic": "Etoricoxib",
        "company": "Incepta",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etocox 120mg",
        "generic": "Etoricoxib",
        "company": "Incepta",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Zerodol 100mg",
        "generic": "Aceclofenac",
        "company": "Incepta",
        "category": "NSAID (Joint Pain)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Zerodol SR 200mg",
        "generic": "Aceclofenac",
        "company": "Incepta",
        "category": "NSAID (Joint Pain)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Myolax 50mg",
        "generic": "Tolperisone Hydrochloride",
        "company": "Incepta",
        "category": "Muscle Relaxant",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Myolax 100mg",
        "generic": "Tolperisone Hydrochloride",
        "company": "Incepta",
        "category": "Muscle Relaxant",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Baclon 10mg",
        "generic": "Baclofen",
        "company": "Incepta",
        "category": "Muscle Relaxant / Antispastic",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Tramadol 50mg",
        "generic": "Tramadol Hydrochloride",
        "company": "Incepta",
        "category": "Opioid Analgesic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Cap. Tramadol SR 100mg",
        "generic": "Tramadol Hydrochloride",
        "company": "Incepta",
        "category": "Opioid Analgesic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Gabastar 300mg",
        "generic": "Gabapentin",
        "company": "Incepta",
        "category": "Neuropathic Pain Agent",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Pregaba 50mg",
        "generic": "Pregabalin",
        "company": "Incepta",
        "category": "Neuropathic Pain Agent",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Pregaba 75mg",
        "generic": "Pregabalin",
        "company": "Incepta",
        "category": "Neuropathic Pain Agent",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Pantonix 20mg",
        "generic": "Pantoprazole",
        "company": "Incepta",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Pantonix 40mg",
        "generic": "Pantoprazole",
        "company": "Incepta",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Omep 20mg",
        "generic": "Omeprazole",
        "company": "Incepta",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Omep 40mg",
        "generic": "Omeprazole",
        "company": "Incepta",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Jointec Plus",
        "generic": "Glucosamine + Chondroitin / Rosehip",
        "company": "Incepta",
        "category": "Cartilage & Joint Protector",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "2 months"
    },
    {
        "name": "Tab. Jointec Max",
        "generic": "Glucosamine + Chondroitin / Rosehip",
        "company": "Incepta",
        "category": "Cartilage & Joint Protector",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "2 months"
    },
    {
        "name": "Tab. Alendron 70mg",
        "generic": "Alendronate Sodium 70mg",
        "company": "Incepta",
        "category": "Anti-Osteoporotic (Weekly)",
        "defaultDose": "১টি ট্যাবলেট সপ্তাহে ১ দিন (সকালে খালি পেটে)",
        "defaultDuration": "3 months"
    },
    {
        "name": "Tab. Kilbac 500mg",
        "generic": "Cefuroxime Axetil",
        "company": "Incepta",
        "category": "2nd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Kilbac Plus 500/125mg",
        "generic": "Cefuroxime + Clavulanic Acid",
        "company": "Incepta",
        "category": "Potent Orthopedic Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Linez 400mg",
        "generic": "Linezolid",
        "company": "Incepta",
        "category": "MRSA / Bone Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "10 days"
    },
    {
        "name": "Tab. Linez 600mg",
        "generic": "Linezolid",
        "company": "Incepta",
        "category": "MRSA / Bone Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "10 days"
    },
    {
        "name": "Tab. Deflacort 6mg",
        "generic": "Deflazacort",
        "company": "Incepta",
        "category": "Corticosteroid",
        "defaultDose": "1+0+0 (সকালে ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Deflacort 24mg",
        "generic": "Deflazacort",
        "company": "Incepta",
        "category": "Corticosteroid",
        "defaultDose": "1+0+0 (সকালে ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Uricon 40mg",
        "generic": "Febuxostat",
        "company": "Incepta",
        "category": "Anti-Gout / Uric Acid Reducer",
        "defaultDose": "1+0+0 (সকালে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Uricon 80mg",
        "generic": "Febuxostat",
        "company": "Incepta",
        "category": "Anti-Gout / Uric Acid Reducer",
        "defaultDose": "1+0+0 (সকালে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Calcitrol 0.25mcg",
        "generic": "Calcitriol",
        "company": "Incepta",
        "category": "Active Vitamin D3 Metabolite",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Diabetrol 80mg",
        "generic": "Gliclazide",
        "company": "Incepta",
        "category": "Anti-Diabetic Sulfonylurea",
        "defaultDose": "1+0+0 (নাস্তার আগে)",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Comet 500mg",
        "generic": "Metformin HCl",
        "company": "Incepta",
        "category": "Anti-Diabetic Biguanide",
        "defaultDose": "1+0+1 (খাওয়ার মাঝে)",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Comet XR 500mg",
        "generic": "Metformin HCl",
        "company": "Incepta",
        "category": "Anti-Diabetic Biguanide",
        "defaultDose": "1+0+1 (খাওয়ার মাঝে)",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Bizoran 5/20mg",
        "generic": "Amlodipine + Olmesartan",
        "company": "Incepta",
        "category": "Antihypertensive Combo",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Bizoran 5/40mg",
        "generic": "Amlodipine + Olmesartan",
        "company": "Incepta",
        "category": "Antihypertensive Combo",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Napa 500mg",
        "generic": "Paracetamol",
        "company": "Beximco",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Napa Extend 665mg",
        "generic": "Paracetamol",
        "company": "Beximco",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Napa Extra",
        "generic": "Paracetamol",
        "company": "Beximco",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Napa One 1000mg",
        "generic": "Paracetamol",
        "company": "Beximco",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Naxen 250mg",
        "generic": "Naproxen",
        "company": "Beximco",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Naxen 500mg",
        "generic": "Naproxen",
        "company": "Beximco",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etorib 60mg",
        "generic": "Etoricoxib",
        "company": "Beximco",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etorib 90mg",
        "generic": "Etoricoxib",
        "company": "Beximco",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etorib 120mg",
        "generic": "Etoricoxib",
        "company": "Beximco",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Neugaba 50mg",
        "generic": "Pregabalin",
        "company": "Beximco",
        "category": "Neuropathic Pain Agent",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Neugaba 75mg",
        "generic": "Pregabalin",
        "company": "Beximco",
        "category": "Neuropathic Pain Agent",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Solbion",
        "generic": "Vitamin B1 + B6 + B12",
        "company": "Beximco",
        "category": "Neurotropic Vitamin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Cap. Proceptin 20mg",
        "generic": "Omeprazole",
        "company": "Beximco",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Proceptin 40mg",
        "generic": "Omeprazole",
        "company": "Beximco",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Exium 20mg",
        "generic": "Esomeprazole",
        "company": "Beximco",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Exium 40mg",
        "generic": "Esomeprazole",
        "company": "Beximco",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. D-Rise 20000 IU",
        "generic": "Cholecalciferol (Vit D3)",
        "company": "Beximco",
        "category": "High-Potency Vitamin D3",
        "defaultDose": "১টি ক্যাপসুল সপ্তাহে ১ দিন",
        "defaultDuration": "2 months"
    },
    {
        "name": "Cap. D-Rise 40000 IU",
        "generic": "Cholecalciferol (Vit D3)",
        "company": "Beximco",
        "category": "High-Potency Vitamin D3",
        "defaultDose": "১টি ক্যাপসুল সপ্তাহে ১ দিন",
        "defaultDuration": "2 months"
    },
    {
        "name": "Tab. Calci-D",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Beximco",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Axetil 500mg",
        "generic": "Cefuroxime Axetil",
        "company": "Beximco",
        "category": "2nd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Timentin 625mg",
        "generic": "Cefuroxime + Clavulanic Acid",
        "company": "Beximco",
        "category": "Potent Orthopedic Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Timentin 1gm",
        "generic": "Cefuroxime + Clavulanic Acid",
        "company": "Beximco",
        "category": "Potent Orthopedic Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Neofloxin 500mg",
        "generic": "Ciprofloxacin",
        "company": "Beximco",
        "category": "Fluoroquinolone Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Azithrocin 500mg",
        "generic": "Azithromycin",
        "company": "Beximco",
        "category": "Macrolide Antibiotic",
        "defaultDose": "1+0+0 (খাওয়ার ১ ঘণ্টা আগে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Amdocal 5mg",
        "generic": "Amlodipine",
        "company": "Beximco",
        "category": "Antihypertensive (CCB)",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Amdocal Plus 5/50mg",
        "generic": "Amlodipine",
        "company": "Beximco",
        "category": "Antihypertensive (CCB)",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Atova 10mg",
        "generic": "Atorvastatin",
        "company": "Beximco",
        "category": "Lipid-Lowering Statin",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Atova 20mg",
        "generic": "Atorvastatin",
        "company": "Beximco",
        "category": "Lipid-Lowering Statin",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Maxpro 20mg",
        "generic": "Esomeprazole",
        "company": "Renata",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Maxpro 40mg",
        "generic": "Esomeprazole",
        "company": "Renata",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Maxpro MUPS 20mg",
        "generic": "Esomeprazole",
        "company": "Renata",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Maxpro MUPS 40mg",
        "generic": "Esomeprazole",
        "company": "Renata",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Rolac 10mg",
        "generic": "Ketorolac Tromethamine",
        "company": "Renata",
        "category": "Potent NSAID",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Inj. Rolac 30mg/1ml",
        "generic": "Ketorolac Tromethamine",
        "company": "Renata",
        "category": "Injectable NSAID",
        "defaultDose": "1 amp IM/IV Stat/Sos",
        "defaultDuration": "1-2 days"
    },
    {
        "name": "Inj. Rolac 60mg/2ml",
        "generic": "Ketorolac Tromethamine",
        "company": "Renata",
        "category": "Injectable NSAID",
        "defaultDose": "1 amp IM/IV Stat/Sos",
        "defaultDuration": "1-2 days"
    },
    {
        "name": "Tab. Neurobest",
        "generic": "Vitamin B1 + B6 + B12",
        "company": "Renata",
        "category": "Neurotropic Vitamin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Ceftizone 500mg",
        "generic": "Cefuroxime Axetil",
        "company": "Renata",
        "category": "2nd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Furocef 500mg",
        "generic": "Cefuroxime Axetil",
        "company": "Renata",
        "category": "2nd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Furoclav 500/125mg",
        "generic": "Cefuroxime + Clavulanic Acid",
        "company": "Renata",
        "category": "Potent Orthopedic Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Cap. Cefim-3 200mg",
        "generic": "Cefixime",
        "company": "Renata",
        "category": "3rd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Alphapress 1mg",
        "generic": "Prazosin",
        "company": "Renata",
        "category": "Alpha Blocker",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Concor 2.5mg",
        "generic": "Bisoprolol Fumarate",
        "company": "Renata",
        "category": "Beta-1 Selective Blocker",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Concor 5mg",
        "generic": "Bisoprolol Fumarate",
        "company": "Renata",
        "category": "Beta-1 Selective Blocker",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Fenadin 120mg",
        "generic": "Fexofenadine HCl",
        "company": "Renata",
        "category": "Non-Sedating Antihistamine",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Fenadin 180mg",
        "generic": "Fexofenadine HCl",
        "company": "Renata",
        "category": "Non-Sedating Antihistamine",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Omidon 10mg",
        "generic": "Domperidone",
        "company": "Renata",
        "category": "Prokinetic & Antiemetic",
        "defaultDose": "1+0+1 (খাওয়ার ১৫ মি. আগে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Calcin-D",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Renata",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Calcin-O",
        "generic": "Coral Calcium / Orotate + D3",
        "company": "Renata",
        "category": "Advanced Bone Supplement",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Cap. Sergel 20mg",
        "generic": "Esomeprazole",
        "company": "Healthcare",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+1 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Sergel 40mg",
        "generic": "Esomeprazole",
        "company": "Healthcare",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+1 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Sergel MUPS 20mg",
        "generic": "Esomeprazole",
        "company": "Healthcare",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+1 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Sergel MUPS 40mg",
        "generic": "Esomeprazole",
        "company": "Healthcare",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Tizan 2mg",
        "generic": "Tizanidine",
        "company": "Healthcare",
        "category": "Centrally Acting Muscle Relaxant",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Tizan 4mg",
        "generic": "Tizanidine",
        "company": "Healthcare",
        "category": "Centrally Acting Muscle Relaxant",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Rupa 10mg",
        "generic": "Rupatadine",
        "company": "Healthcare",
        "category": "Antihistamine + PAF Antagonist",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Roxim 500mg",
        "generic": "Cefuroxime Axetil",
        "company": "Healthcare",
        "category": "2nd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Roxim Plus 500/125mg",
        "generic": "Cefuroxime + Clavulanic Acid",
        "company": "Healthcare",
        "category": "Potent Orthopedic Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etosid 60mg",
        "generic": "Etoricoxib",
        "company": "Healthcare",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etosid 90mg",
        "generic": "Etoricoxib",
        "company": "Healthcare",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etosid 120mg",
        "generic": "Etoricoxib",
        "company": "Healthcare",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Nervex",
        "generic": "Vitamin B1 + B6 + B12",
        "company": "Healthcare",
        "category": "Neurotropic Vitamin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Calbo-C",
        "generic": "Calcium Lactate + Vitamin C",
        "company": "Healthcare",
        "category": "Effervescent Calcium",
        "defaultDose": "১ গ্লাস পানিতে গুলে ১ বার",
        "defaultDuration": "15 days"
    },
    {
        "name": "Tab. Rosuva 5mg",
        "generic": "Rosuvastatin",
        "company": "Healthcare",
        "category": "Lipid-Lowering Statin",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Rosuva 10mg",
        "generic": "Rosuvastatin",
        "company": "Healthcare",
        "category": "Lipid-Lowering Statin",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Etorix 60mg",
        "generic": "Etoricoxib",
        "company": "Eskayef",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etorix 90mg",
        "generic": "Etoricoxib",
        "company": "Eskayef",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etorix 120mg",
        "generic": "Etoricoxib",
        "company": "Eskayef",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Ostocal-D",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Eskayef",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Ostocal-DX",
        "generic": "Coral Calcium / Orotate + D3",
        "company": "Eskayef",
        "category": "Advanced Bone Supplement",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Ostocal-G",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Eskayef",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Ostocal-M",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Eskayef",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Cap. Losectil 20mg",
        "generic": "Omeprazole",
        "company": "Eskayef",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Losectil 40mg",
        "generic": "Omeprazole",
        "company": "Eskayef",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Esoral 20mg",
        "generic": "Esomeprazole",
        "company": "Eskayef",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Esoral 40mg",
        "generic": "Esomeprazole",
        "company": "Eskayef",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Tamen 500mg",
        "generic": "Paracetamol",
        "company": "Eskayef",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Tamen XR 665mg",
        "generic": "Paracetamol",
        "company": "Eskayef",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Xcel 500mg",
        "generic": "Paracetamol",
        "company": "Eskayef",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Zithrin 500mg",
        "generic": "Azithromycin",
        "company": "Eskayef",
        "category": "Macrolide Antibiotic",
        "defaultDose": "1+0+0 (খাওয়ার ১ ঘণ্টা আগে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Cefotil 500mg",
        "generic": "Cefuroxime Axetil",
        "company": "Eskayef",
        "category": "2nd Gen Cephalosporin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Cefotil Plus 500mg",
        "generic": "Cefuroxime + Clavulanic Acid",
        "company": "Eskayef",
        "category": "Potent Orthopedic Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Naprosyn-E 500mg",
        "generic": "Naproxen",
        "company": "Eskayef",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Naprosyn 250mg",
        "generic": "Naproxen",
        "company": "Radiant",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Naprosyn 500mg",
        "generic": "Naproxen",
        "company": "Radiant",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Naprosyn Plus 375/20mg",
        "generic": "Naproxen + Esomeprazole",
        "company": "Radiant",
        "category": "NSAID + Gastric Shield",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Naprosyn Plus 500/20mg",
        "generic": "Naproxen + Esomeprazole",
        "company": "Radiant",
        "category": "NSAID + Gastric Shield",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Gel. Naprosyn Gel",
        "generic": "Naproxen Gel",
        "company": "Radiant",
        "category": "Topical Analgesic",
        "defaultDose": "দিনে ২-৩ বার আলতো মালিশ",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Coralcal-D",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Radiant",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Coralcal-DX",
        "generic": "Coral Calcium / Orotate + D3",
        "company": "Radiant",
        "category": "Advanced Bone Supplement",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Rosehip Plus",
        "generic": "Glucosamine + Chondroitin / Rosehip",
        "company": "Radiant",
        "category": "Cartilage & Joint Protector",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "2 months"
    },
    {
        "name": "Tab. Exium MUPS 20mg",
        "generic": "Esomeprazole",
        "company": "Radiant",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Exium MUPS 40mg",
        "generic": "Esomeprazole",
        "company": "Radiant",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Rabe 20mg",
        "generic": "Rabeprazole",
        "company": "Radiant",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Voltalin SR 100mg",
        "generic": "Diclofenac",
        "company": "Radiant/Novartis",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Gel. Voltalin Emulgel",
        "generic": "Diclofenac Gel/Spray",
        "company": "Radiant/Novartis",
        "category": "Topical NSAID",
        "defaultDose": "দিনে ২-৩ বার আলতো মালিশ",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Tegretol 200mg",
        "generic": "Carbamazepine",
        "company": "Radiant/Novartis",
        "category": "Neuropathic Pain / Trigeminal",
        "defaultDose": "1+0+1",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Rabe 20mg",
        "generic": "Rabeprazole",
        "company": "Aristopharma",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Nexum 20mg",
        "generic": "Esomeprazole",
        "company": "Aristopharma",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Nexum 40mg",
        "generic": "Esomeprazole",
        "company": "Aristopharma",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Aclonac 100mg",
        "generic": "Aceclofenac",
        "company": "Aristopharma",
        "category": "NSAID (Joint Pain)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etosafe 90mg",
        "generic": "Etoricoxib",
        "company": "Aristopharma",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etosafe 120mg",
        "generic": "Etoricoxib",
        "company": "Aristopharma",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Ultrafen 50mg",
        "generic": "Diclofenac",
        "company": "Aristopharma",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Ultrafen SR 100mg",
        "generic": "Diclofenac",
        "company": "Aristopharma",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Xeldrin 70mg",
        "generic": "Alendronate Sodium 70mg",
        "company": "Aristopharma",
        "category": "Anti-Osteoporotic (Weekly)",
        "defaultDose": "১টি ট্যাবলেট সপ্তাহে ১ দিন (সকালে খালি পেটে)",
        "defaultDuration": "3 months"
    },
    {
        "name": "Tab. Glucosamine Plus",
        "generic": "Glucosamine + Chondroitin / Rosehip",
        "company": "Aristopharma",
        "category": "Cartilage & Joint Protector",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "2 months"
    },
    {
        "name": "Tab. Arixon 500mg",
        "generic": "",
        "company": "Aristopharma",
        "category": "General Medicine",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Neobion",
        "generic": "Vitamin B1 + B6 + B12",
        "company": "Aristopharma",
        "category": "Neurotropic Vitamin",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        name: "Tab. Vasco 250mg",
        generic: "Vitamin-C (Ascorbic Acid)",
        company: "Opsonin",
        category: "Vitamin & Supplement",
        defaultDose: "1+0+1 (চুষে খাবেন)",
        defaultDuration: "15 days"
    },
    {
        "name": "Tab. Finix 20mg",
        "generic": "Rabeprazole",
        "company": "Opsonin",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Seclo-O 20mg",
        "generic": "Omeprazole",
        "company": "Opsonin",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. Indomet SR 75mg",
        "generic": "Indomethacin SR",
        "company": "Opsonin",
        "category": "Potent NSAID",
        "defaultDose": "0+0+1 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Renova 500mg",
        "generic": "Paracetamol",
        "company": "Opsonin",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Renova XR 665mg",
        "generic": "Paracetamol",
        "company": "Opsonin",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Pirox 20mg",
        "generic": "Piroxicam",
        "company": "Opsonin",
        "category": "NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Cap. Flucloxin 500mg",
        "generic": "Flucloxacillin",
        "company": "Opsonin",
        "category": "Anti-Staphylococcal Antibiotic",
        "defaultDose": "1+1+1+1 (খাওয়ার ১ ঘণ্টা আগে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Ciprox 500mg",
        "generic": "Ciprofloxacin",
        "company": "Opsonin",
        "category": "Fluoroquinolone Antibiotic",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Roxol 500mg",
        "generic": "",
        "company": "Opsonin",
        "category": "General Medicine",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Calop-D",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Opsonin",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Napro-A 500mg",
        "generic": "Naproxen",
        "company": "Acme",
        "category": "NSAID (Painkiller)",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Napro-A Plus 500/20mg",
        "generic": "Naproxen + Esomeprazole",
        "company": "Acme",
        "category": "NSAID + Gastric Shield",
        "defaultDose": "1+0+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Fast 500mg",
        "generic": "Paracetamol",
        "company": "Acme",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Fast XR 665mg",
        "generic": "Paracetamol",
        "company": "Acme",
        "category": "Analgesic & Antipyretic",
        "defaultDose": "1+1+1 (ব্যথা বা জ্বর হলে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Cap. PPI 20mg",
        "generic": "Pantoprazole",
        "company": "Acme",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Cap. PPI 40mg",
        "generic": "Pantoprazole",
        "company": "Acme",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Maxrin 20mg",
        "generic": "Dexlansoprazole",
        "company": "Acme",
        "category": "Dual Delayed Release PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Levoxin 500mg",
        "generic": "Levofloxacin",
        "company": "Acme",
        "category": "Fluoroquinolone Antibiotic",
        "defaultDose": "1+0+0 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Levoxin 750mg",
        "generic": "Levofloxacin",
        "company": "Acme",
        "category": "Fluoroquinolone Antibiotic",
        "defaultDose": "1+0+0 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Cap. Fluclox 500mg",
        "generic": "Flucloxacillin",
        "company": "Acme",
        "category": "Anti-Staphylococcal Antibiotic",
        "defaultDose": "1+1+1+1 (খাওয়ার ১ ঘণ্টা আগে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Monas 10mg",
        "generic": "Montelukast Sodium",
        "company": "Acme",
        "category": "Leukotriene Receptor Antagonist",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. A-Cal D",
        "generic": "Calcium Carbonate + Vit D3",
        "company": "Acme",
        "category": "Calcium & Vitamin D3",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. A-Cal DX",
        "generic": "Coral Calcium / Orotate + D3",
        "company": "Acme",
        "category": "Advanced Bone Supplement",
        "defaultDose": "0+0+1 (রাতে)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Progut 20mg",
        "generic": "Esomeprazole",
        "company": "Popular",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Progut 40mg",
        "generic": "Esomeprazole",
        "company": "Popular",
        "category": "Anti-Ulcerant / PPI",
        "defaultDose": "1+0+0 (খাওয়ার ৩০ মি. আগে)",
        "defaultDuration": "14 days"
    },
    {
        "name": "Tab. Etoricox 90mg",
        "generic": "Etoricoxib",
        "company": "Popular",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Etoricox 120mg",
        "generic": "Etoricoxib",
        "company": "Popular",
        "category": "Cox-2 Inhibitor NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Aceclofen 100mg",
        "generic": "Aceclofenac",
        "company": "Popular",
        "category": "NSAID (Joint Pain)",
        "defaultDose": "1+0+1 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Bicozin",
        "generic": "Multivitamin & Zinc/Minerals",
        "company": "Square",
        "category": "General Nutritional Supplement",
        "defaultDose": "0+1+0 (দুপরে খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Supravit-G",
        "generic": "Multivitamin & Zinc/Minerals",
        "company": "Square",
        "category": "General Nutritional Supplement",
        "defaultDose": "0+1+0 (দুপরে খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Filwel Gold",
        "generic": "Multivitamin & Zinc/Minerals",
        "company": "Square",
        "category": "General Nutritional Supplement",
        "defaultDose": "0+1+0 (দুপরে খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Filwel Silver",
        "generic": "Multivitamin & Zinc/Minerals",
        "company": "Square",
        "category": "General Nutritional Supplement",
        "defaultDose": "0+1+0 (দুপরে খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Centrum Silver",
        "generic": "Multivitamin & Zinc/Minerals",
        "company": "Imported",
        "category": "General Nutritional Supplement",
        "defaultDose": "0+1+0 (দুপরে খাওয়ার পর)",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Ecosprin 75mg",
        "generic": "Aspirin (Cardio)",
        "company": "Acme",
        "category": "Antiplatelet",
        "defaultDose": "0+1+0 (দুপরে খাওয়ার পর)",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Clopid 75mg",
        "generic": "Clopidogrel",
        "company": "Drug Int.",
        "category": "Antiplatelet",
        "defaultDose": "0+1+0 (দুপরে খাওয়ার পর)",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Angilock 50mg",
        "generic": "Losartan Potassium",
        "company": "Square",
        "category": "Antihypertensive (ARB)",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Camlodin 5mg",
        "generic": "Amlodipine",
        "company": "Square",
        "category": "Antihypertensive (CCB)",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Camlodin Plus 5/25mg",
        "generic": "Amlodipine",
        "company": "Square",
        "category": "Antihypertensive (CCB)",
        "defaultDose": "1+0+0",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Gel. Fastum Gel",
        "generic": "Ketoprofen / Escin Gel",
        "company": "Menarini",
        "category": "Topical Pain Relief Gel",
        "defaultDose": "দিনে ২-৩ বার আলতো মালিশ",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Gel. Reparil-Gel N",
        "generic": "Ketoprofen / Escin Gel",
        "company": "Madaus",
        "category": "Topical Pain Relief Gel",
        "defaultDose": "দিনে ২-৩ বার আলতো মালিশ",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Gel. Move Free Gel",
        "generic": "Ketoprofen / Escin Gel",
        "company": "Incepta",
        "category": "Topical Pain Relief Gel",
        "defaultDose": "দিনে ২-৩ বার আলতো মালিশ",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Spray. Diclo Spray",
        "generic": "Diclofenac Gel/Spray",
        "company": "Square",
        "category": "Topical NSAID",
        "defaultDose": "দিনে ২-৩ বার আলতো মালিশ",
        "defaultDuration": "চলবে"
    },
    {
        "name": "Tab. Zyloric 100mg",
        "generic": "Allopurinol",
        "company": "GSK",
        "category": "Anti-Gout / Uric Acid Reducer",
        "defaultDose": "1+0+0",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Zyloric 300mg",
        "generic": "Allopurinol",
        "company": "GSK",
        "category": "Anti-Gout / Uric Acid Reducer",
        "defaultDose": "1+0+0",
        "defaultDuration": "1 month"
    },
    {
        "name": "Tab. Colchicine 0.6mg",
        "generic": "Colchicine",
        "company": "Incepta",
        "category": "Anti-Gout (Acute Attack)",
        "defaultDose": "1+0+1",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Dolonex DT 20mg",
        "generic": "Piroxicam",
        "company": "Pfizer",
        "category": "NSAID",
        "defaultDose": "1+0+0 (ভরা পেটে)",
        "defaultDuration": "5 days"
    },
    {
        "name": "Tab. Indomet SR 75mg",
        "generic": "Indomethacin SR",
        "company": "Opsonin",
        "category": "Potent NSAID",
        "defaultDose": "0+0+1 (ভরা পেটে)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Tab. Moxacil 500mg",
        "generic": "Amoxicillin",
        "company": "Square",
        "category": "Broad-Spectrum Penicillin",
        "defaultDose": "1+1+1 (খাওয়ার পর)",
        "defaultDuration": "7 days"
    },
    {
        "name": "Gel. Clofenac Gel",
        "generic": "Diclofenac Gel/Spray",
        "company": "Square",
        "category": "Topical NSAID",
        "defaultDose": "দিনে ২-৩ বার আলতো মালিশ",
        "defaultDuration": "চলবে"
    }
];

    // Attach to global window object safely
    if (typeof window !== "undefined") {
        window.BD_MEDICINES = BD_MEDICINES;
    }
    if (typeof global !== "undefined") {
        global.BD_MEDICINES = BD_MEDICINES;
    }
    if (typeof module !== "undefined" && module.exports) {
        module.exports = BD_MEDICINES;
    }
})(typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this));
