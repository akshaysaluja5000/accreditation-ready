export interface ChecklistItem {
  code: string;
  name: string;
  frequency: string;
}

export interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
}

export interface ChecklistVolume {
  number: number;
  title: string;
  sections: ChecklistSection[];
}

export const ASC_CHECKLIST: ChecklistVolume[] = [
  {
    number: 1,
    title: "Environment of Care Book 1",
    sections: [
      {
        title: "Building Information",
        items: [
          { code: "FAC.100", name: "Current and Accurate Life Safety Drawings", frequency: "Annually" },
          { code: "FAC.100", name: "Documentation of Compliance with Applicable Building Codes and Regulations", frequency: "Annually" },
          { code: "FAC.100", name: "Authorities Having Jurisdiction (AHJ) Inspection Reports (e.g., Local, State, etc.)", frequency: "Annually" },
        ],
      },
      {
        title: "Construction Projects",
        items: [
          { code: "SAF.290, 300, PEC CON 190", name: "Alternate Life Safety Measures Policy", frequency: "Annually" },
          { code: "SAF.290, 300, PEC CON 190", name: "ALSM — Alternate Life Safety Measures / Fire Watch", frequency: "Annually" },
          { code: "SAF.290, 300", name: "Daily Egress Inspections", frequency: "Daily" },
          { code: "SAF.290, 300", name: "Preconstruction Risk Assessment", frequency: "Annually" },
        ],
      },
      {
        title: "Hazardous Materials",
        items: [
          { code: "SAF.170", name: "Hazardous Materials and Waste Management Plan", frequency: "Annually" },
          { code: "SAF.170", name: "Inventory of Hazardous Materials and Waste", frequency: "Annually" },
          { code: "SAF.170", name: "Reports of Hazardous Materials and Waste Spills or Exposures", frequency: "Annually" },
          { code: "SAF.170", name: "Hazardous Materials and Waste Permits, Licenses, and Safety Data Sheets", frequency: "Annually" },
          { code: "SAF.170", name: "DOT Training Certificates", frequency: "Annually" },
          { code: "SAF.170", name: "Hazardous Waste Manifests", frequency: "Annually" },
          { code: "SAF.170", name: "Written Procedure for Hazardous Materials and Waste Spills or Exposures", frequency: "Annually" },
          { code: "ANSI Z358.1-2014", name: "Emergency Eyewash Equipment Risk Assessment and Inventory", frequency: "Annually" },
          { code: "ANSI Z358.1-2014", name: "Emergency Eyewash Annual Inspections and Tests", frequency: "Annually" },
          { code: "ANSI Z358.1-2014", name: "Emergency Eyewash Weekly Tests", frequency: "Weekly" },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Environment of Care Book 2",
    sections: [
      {
        title: "Emergency Preparedness, Safety, and Security",
        items: [
          { code: "QUA.210", name: "Written Quality Improvement Program", frequency: "Quarterly" },
          { code: "FAC.110", name: "Written Plan for Environmental Safety", frequency: "Annually" },
          { code: "FAC.110", name: "Written Plan for Security", frequency: "Annually" },
          { code: "FAC.130-140", name: "Safety Rounds", frequency: "Annually" },
          { code: "FAC.150.60", name: "AHJ Waivers", frequency: "Annually" },
          { code: "FAC.150.60", name: "Sprinkler Shutdown and Fire Watch Policy and Procedures", frequency: "Annually" },
          { code: "EMG.100", name: "Emergency Medical Care Transfer Procedure", frequency: "Biennially" },
          { code: "EMG.100", name: "Documentation for Hospital Notification Letter of Update of Services", frequency: "Annually" },
          { code: "EMG.140.10.20.30", name: "Documentation of Basic Life Support (BLS) Policy and Training", frequency: "Annually" },
          { code: "EMG.170.10.20", name: "Emergency Preparedness Scenario-Based Drill", frequency: "Quarterly" },
          { code: "EMG.170.30", name: "Annual CPR Technique Drill", frequency: "Annually" },
          { code: "EMG.170.40", name: "Disaster Preparedness-Based Drill", frequency: "Annually" },
          { code: "EMG.170.50-60", name: "Emergency Preparedness Risk Assessment and Participant List", frequency: "Annually" },
          { code: "EMG.170.70", name: "Emergency Preparedness Response Critiques", frequency: "Annually" },
          { code: "EMG.210", name: "Documentation of Current Advanced Cardiac Life Support (ACLS) Training Is Present", frequency: "Annually" },
          { code: "EMG.220", name: "Documentation of Malignant Hyperthermia Policy, Training, and Drill", frequency: "Annually" },
          { code: "EMG.230", name: "Documentation of Pediatric Advanced Life Support (PALS) Policy and Training", frequency: "Annually" },
          { code: "EMG.160.10.20.30", name: "Emergency Operations Plan and HVA", frequency: "Biennially" },
          { code: "EMG.270.40", name: "Emergency and Disaster Preparedness Policies, Procedures, and Communication Plans", frequency: "Annually" },
          { code: "EMG.100", name: "1135 Waiver Procedure", frequency: "Annually" },
          { code: "EMG.170.10.20.30, 40.50.60.70", name: "Documentation of Initial / Annual Emergency and Disaster Preparedness Training", frequency: "Annually" },
          { code: "EMG170.50.60.70", name: "Emergency and Disaster Preparedness Drill Critiques and Exercises", frequency: "Annually" },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Environment of Care Book 3",
    sections: [
      {
        title: "Utility Systems",
        items: [
          { code: "FAC.250", name: "Medical Gas and Vacuum Systems Installer Performance Testing and Documentation before System Verification Testing", frequency: "Annually" },
          { code: "FAC.250", name: "Medical Gas and Vacuum Systems Verification Testing and Documentation by a Third Party", frequency: "Annually" },
          { code: "FAC.250", name: "Medical Gas and Vacuum Systems Component Testing", frequency: "Annually" },
          { code: "FAC.250", name: "Medical Gas and Vacuum Systems Operations and Purity Testing", frequency: "Annually" },
          { code: "FAC.250", name: "Routine Maintenance Program for Piped Medical Gas and Vacuum Systems", frequency: "Annually" },
          { code: "FAC.250", name: "Monthly Audio and Visual Indicator Line Isolation Monitor (LIM) Testing", frequency: "Monthly" },
          { code: "FAC.250", name: "Annual Line-to-Ground Fault and Calibration LIM Testing", frequency: "Annually" },
          { code: "FAC.250", name: "Documentation of Receptacle Testing", frequency: "Annually" },
          { code: "FAC.260", name: "Weekly Emergency Power Supply Systems (EPSS) Testing", frequency: "Weekly" },
          { code: "FAC.260", name: "EPSS Service Records", frequency: "Annually" },
          { code: "FAC.260", name: "Monthly Generator Tests", frequency: "Monthly" },
          { code: "FAC.260", name: "Annual Generator Load Tests", frequency: "Annually" },
          { code: "FAC.260", name: "Monthly Automatic Transfer Switch Tests", frequency: "Monthly" },
          { code: "FAC.260", name: "Annual Fuel Quality Tests", frequency: "Annually" },
          { code: "FAC.260", name: "3-Year 4-Hour Generator Load and Exhaust Gas Temperature Tests", frequency: "Triennially" },
          { code: "IPC.230.70", name: "Air Exchange, Pressure Relationship, Temperature, and Humidity Testing", frequency: "Annually" },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Fire Book 1",
    sections: [
      {
        title: "Fire Risks and Drills",
        items: [
          { code: "SAF.240.10.20", name: "Fire Drill Policy", frequency: "Annually" },
          { code: "SAF.240.10.20", name: "Quarterly Fire Drill Schedule", frequency: "Quarterly" },
          { code: "SAF.240.10.20", name: "Fire Drill Critiques", frequency: "Annually" },
          { code: "SAF.240", name: "Written Plan for Fire Safety Management", frequency: "Annually" },
          { code: "FAC.120.30", name: "Smoking Policy", frequency: "Annually" },
        ],
      },
      {
        title: "Fire Alarm Documents",
        items: [
          { code: "FAC.150.60", name: "Record of Completion Documents", frequency: "Annually" },
          { code: "FAC.150.60", name: "Fire Alarm O&M", frequency: "Annually" },
          { code: "FAC.150.60", name: "Fire Alarm As-Built Drawings", frequency: "Annually" },
          { code: "FAC.150.60", name: "Fire Alarm Sequence of Operation", frequency: "Annually" },
          { code: "FAC.150.60", name: "Documentation of Qualifications and Certifications for Personnel Conducting Inspection, Testing, and Maintenance of the Fire Alarm Systems", frequency: "Annually" },
          { code: "FAC.150.60", name: "Annual Duct Detector, Heat Detector, Manual Fire Alarm Box, and Smoke Detector Tests", frequency: "Annually" },
          { code: "FAC.150.60", name: "Semiannual Duct Detector, Heat Detector, Manual Fire Alarm Box, and Smoke Detector Visual Inspections", frequency: "Semiannually" },
          { code: "FAC.150.60", name: "Annual Door Release and Safety Functions Tests", frequency: "Annually" },
          { code: "FAC.150.60", name: "Semiannual Fire Alarm Battery Load Tests", frequency: "Semiannually" },
          { code: "FAC.150.60", name: "Annual Audible-Visual Device Tests", frequency: "Annually" },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Fire Book 2",
    sections: [
      {
        title: "Fire Safety Inspections and Testing",
        items: [
          { code: "FAC.150.60", name: "Annual Offsite Responder Notifications", frequency: "Annually" },
          { code: "FAC.150.60", name: "Fire Alarm Systems Inspection, Testing, and Maintenance Records", frequency: "Annually" },
          { code: "FAC.150.60", name: "Weekly Fire Pump Inspection", frequency: "Weekly" },
          { code: "FAC.150.60", name: "Monthly Electric Fire Pump Test Log", frequency: "Monthly" },
          { code: "FAC.150.60", name: "Monthly Fire Sprinkler Control Valve Inspections", frequency: "Monthly" },
          { code: "FAC.150.60", name: "Monthly Fire Suppression Pressure Gauge Inspections", frequency: "Monthly" },
          { code: "FAC.150.60", name: "Quarterly Water Supply Connection Inspections", frequency: "Quarterly" },
          { code: "FAC.150.60", name: "Quarterly Fire Department Connection Inspections", frequency: "Quarterly" },
          { code: "FAC.150.60", name: "Quarterly Hydraulic Nameplate Inspections", frequency: "Quarterly" },
          { code: "FAC.150.60", name: "Quarterly Fire Water Tank Inspections", frequency: "Quarterly" },
          { code: "FAC.150.60", name: "Standpipe Flow Tests (Every 5 Years)", frequency: "Quinquennially" },
          { code: "FAC.150.60", name: "Quarterly Main Drain Testing Downstream of Backflow Preventer", frequency: "Quarterly" },
          { code: "FAC.150.60", name: "Quarterly Dry / Pre-Action Priming and Low Air Tests", frequency: "Quarterly" },
          { code: "FAC.150.60", name: "Semiannual Water Tank Water Level Alarm Tests", frequency: "Semiannually" },
          { code: "FAC.150.60", name: "Semiannual Valve Tamper Switch and Waterflow Device Tests", frequency: "Semiannually" },
          { code: "FAC.150.60", name: "Annual Fire Sprinkler Main Drain Tests", frequency: "Annually" },
          { code: "FAC.150.60", name: "Annual Fire Pump Flow Tests", frequency: "Annually" },
          { code: "FAC.150.60", name: "Annual Gaseous Fire Extinguishing Systems Tests", frequency: "Annually" },
          { code: "FAC.150.60", name: "Fire Sprinkler Obstruction Inspection", frequency: "Quinquennially" },
          { code: "FAC.150.60", name: "Fire Sprinkler Gauge Replacement and Calibration", frequency: "Quinquennially" },
          { code: "FAC.150.60", name: "Fire Equipment Hydrostatic Tests (Every 5 Years)", frequency: "Quinquennially" },
          { code: "FAC.150.60", name: "Monthly Elevator Firefighters' Emergency Operations Tests", frequency: "Monthly" },
          { code: "FAC.150.50", name: "Annual 1.5-Hour Egress and Exit Battery-Powered Light Tests", frequency: "Annually" },
          { code: "FAC.150.50", name: "Monthly 30-Second Egress and Task and Exit Sign Battery-Powered Light Tests", frequency: "Monthly" },
          { code: "FAC.160", name: "Annual Sliding and Rolling Fire Door Closure Tests", frequency: "Annually" },
          { code: "FAC.160", name: "Annual Swinging Fire Door Inspections and Tests", frequency: "Annually" },
          { code: "FAC.150.20", name: "Monthly Portable Fire Extinguisher Inspections", frequency: "Monthly" },
          { code: "FAC.150.30", name: "Annual Portable Fire Extinguisher Maintenance", frequency: "Annually" },
          { code: "FAC.150.60", name: "Annual Air-Handling Smoke Detection Equipment Tests", frequency: "Annually" },
          { code: "FAC.150.60", name: "Fire and Smoke Damper Tests (One Year after Installation and Every 4 Years Thereafter)", frequency: "Quadrennially" },
          { code: "FAC.140", name: "NFPA 99 Utilities Risk Assessment", frequency: "Annually" },
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Medical Equipment and Infection Control",
    sections: [
      {
        title: "Medical Equipment",
        items: [
          { code: "FAC.340", name: "Operating Room Wet Area Risk Assessment", frequency: "Annually" },
          { code: "FAC.250.10", name: "Medical Equipment Maintenance Policies and Procedures", frequency: "Annually" },
          { code: "FAC.250.20.2 FAC.250.30", name: "Medical Equipment Test and Inspection Matrix; Reports of Periodic Calibration and Preventative Maintenance", frequency: "Annually" },
          { code: "FAC.260.30", name: "CT Radiation Dose Testing", frequency: "Annually" },
          { code: "FAC.280", name: "CT Performance Evaluation Testing", frequency: "Annually" },
          { code: "FAC.280", name: "MRI Performance Evaluation Testing", frequency: "Annually" },
          { code: "FAC.280", name: "Nuclear Imaging Performance Evaluation Testing", frequency: "Annually" },
          { code: "FAC.280", name: "PET Imaging Performance Evaluation Testing", frequency: "Annually" },
          { code: "FAC.280", name: "Radiology Staff Radiation Exposure Checks", frequency: "Annually" },
        ],
      },
      {
        title: "Infection Control",
        items: [
          { code: "IPC.100.10.20.30.40.50", name: "Infection Control and Prevention Program", frequency: "Annually" },
          { code: "IPC.190", name: "Protection against Cross-Infection, Policies, and Procedures", frequency: "Annually" },
          { code: "IPC.210", name: "Policy Addressing Cleaning of Patient Treatment and Care Areas", frequency: "Annually" },
          { code: "IPC.220.30", name: "Staff Education and Certification Documentation", frequency: "Annually" },
          { code: "IPC.190", name: "Written Safety Program", frequency: "Annually" },
          { code: "IPC.190", name: "Infection Control Risk Assessment", frequency: "Annually" },
          { code: "IPC.190", name: "Documentation of Instructions to Patients Regarding the Use of Medical Devices", frequency: "Annually" },
          { code: "IPC.190", name: "Documentation of Work Injuries and Illnesses", frequency: "Annually" },
          { code: "IPC.100", name: "Vendor Education Documentation", frequency: "Annually" },
          { code: "IPC.130", name: "Patient Isolation or Transfer Policy", frequency: "Annually" },
          { code: "IPC.190", name: "Appointment, Competency, and Training of the Designated Infection Prevention and Control Professionals", frequency: "Annually" },
          { code: "IPC.170", name: "Medical Equipment Cleaning, Sterilization, and Disinfection Policy and Process", frequency: "Annually" },
          { code: "IPC.170", name: "Policy and Documentation of Pre-Cleaning, Transport, and Handling of Medical Devices Intended for External Vendor Reprocessing, Inspection, or Repair", frequency: "Annually" },
          { code: "IPC.170", name: "Documentation That Reprocessed Single-Use Devices Have Been Approved for Reprocessing", frequency: "Annually" },
          { code: "IPC.170", name: "Documentation That Third-Party Reprocessor Is FDA-Registered", frequency: "Annually" },
          { code: "IPC.170", name: "If Reprocessing Is Done In-House, Documentation That Organization Is FDA-Registered", frequency: "Annually" },
          { code: "IPC.180", name: "Sharps Injury Prevention Program", frequency: "Annually" },
          { code: "IPC.190", name: "Written Exposure Control Plan", frequency: "Annually" },
          { code: "IPC.190", name: "Communicable Disease Reporting Policy", frequency: "Annually" },
          { code: "IPC.210", name: "Written Policies Addressing the Cleaning of Patient Treatment Care Areas and Devices", frequency: "Annually" },
          { code: "IPC.220", name: "Surgical Environment Safeguards to Protect Patients and Others from Cross-Infection", frequency: "Annually" },
          { code: "IPC.330.70", name: "Temperature and Humidity Monitoring Documentation", frequency: "Annually" },
        ],
      },
    ],
  },
];

export const FREQ_MONTHS: Record<string, number[]> = {
  Daily:           [],
  Weekly:          [],
  Monthly:         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Quarterly:       [1, 4, 7, 10],
  Semiannually:    [1, 7],
  Annually:        [1],
  Biennially:      [],
  Triennially:     [],
  Quadrennially:   [],
  Quinquennially:  [],
  Sexennially:     [],
};

export const FREQ_COLOR: Record<string, string> = {
  Daily:          "bg-red-100 text-red-700 border-red-200",
  Weekly:         "bg-orange-100 text-orange-700 border-orange-200",
  Monthly:        "bg-amber-100 text-amber-700 border-amber-200",
  Quarterly:      "bg-blue-100 text-blue-700 border-blue-200",
  Semiannually:   "bg-violet-100 text-violet-700 border-violet-200",
  Annually:       "bg-emerald-100 text-emerald-700 border-emerald-200",
  Biennially:     "bg-slate-100 text-slate-600 border-slate-200",
  Triennially:    "bg-slate-100 text-slate-600 border-slate-200",
  Quadrennially:  "bg-slate-100 text-slate-600 border-slate-200",
  Quinquennially: "bg-slate-100 text-slate-600 border-slate-200",
};
