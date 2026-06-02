export const ASC_COMPLIANCE_ITEMS: {
  volume: string;
  standardCode: string;
  itemName: string;
  frequency: string;
  tier: number;
  category: string;
  surveyorPriority: number;
  moduleScope: string;
}[] = [
  // V1 - Building Info, Construction, Hazmat, Eyewash
  { volume: "V1", standardCode: "FAC.100", itemName: "Current and Accurate Life Safety Drawings", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V1", standardCode: "FAC.100", itemName: "Documentation of Compliance with Building Codes and Regulations", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V1", standardCode: "FAC.100", itemName: "AHJ Inspection Reports (Local, State, etc.)", frequency: "Annually", tier: 4, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.290-300", itemName: "Alternate Life Safety Measures Policy", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.290-300", itemName: "ALSM / Fire Watch Documentation", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.290-300", itemName: "Daily Egress Inspections", frequency: "Daily", tier: 1, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.290-300", itemName: "Preconstruction Risk Assessment", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.170", itemName: "Hazardous Materials and Waste Management Plan", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.170", itemName: "Inventory of Hazardous Materials and Waste", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.170", itemName: "Reports of Hazardous Materials and Waste Spills or Exposures", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.170", itemName: "Hazardous Materials Permits, Licenses, Safety Data Sheets", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.170", itemName: "DOT Training Certificates", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.170", itemName: "Hazardous Waste Manifests", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V1", standardCode: "SAF.170", itemName: "Written Procedure for Hazardous Materials Spills or Exposures", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V1", standardCode: "ANSI Z358.1", itemName: "Emergency Eyewash Equipment Risk Assessment and Inventory", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V1", standardCode: "ANSI Z358.1", itemName: "Emergency Eyewash Annual Inspections and Tests", frequency: "Annually", tier: 1, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V1", standardCode: "ANSI Z358.1", itemName: "Emergency Eyewash Weekly Tests", frequency: "Weekly", tier: 1, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },

  // V2 - Emergency Preparedness, Safety, Security
  { volume: "V2", standardCode: "QUA.210", itemName: "Written Quality Improvement Program", frequency: "Quarterly", tier: 2, category: "Quality Management", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V2", standardCode: "FAC.110", itemName: "Written Plan for Environmental Safety", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V2", standardCode: "FAC.110", itemName: "Written Plan for Security", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V2", standardCode: "FAC.130-140", itemName: "Safety Rounds Documentation", frequency: "Annually", tier: 1, category: "Building & Life Safety", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V2", standardCode: "FAC.150.60", itemName: "AHJ Waivers", frequency: "Annually", tier: 2, category: "Building & Life Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "FAC.150.60", itemName: "Sprinkler Shutdown and Fire Watch Policy", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.100", itemName: "Emergency Medical Care Transfer Procedure", frequency: "Biennially", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.100", itemName: "Hospital Notification Letter of Update of Services", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.140", itemName: "BLS Policy and Training Documentation", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.170", itemName: "Emergency Preparedness Scenario-Based Drill", frequency: "Quarterly", tier: 1, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.170", itemName: "Annual CPR Technique Drill", frequency: "Annually", tier: 1, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.170", itemName: "Disaster Preparedness-Based Drill", frequency: "Annually", tier: 1, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.170", itemName: "Emergency Preparedness Risk Assessment and Participant List", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.170", itemName: "Emergency Preparedness Response Critiques", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.210", itemName: "ACLS Training Documentation", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.220", itemName: "Malignant Hyperthermia Policy, Training, and Drill", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.230", itemName: "PALS Policy and Training Documentation", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.160", itemName: "Emergency Operations Plan and HVA", frequency: "Biennially", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.270", itemName: "Emergency and Disaster Preparedness Policies and Communication Plans", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.100", itemName: "1135 Waiver Procedure", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.170", itemName: "Initial/Annual Emergency and Disaster Preparedness Training Docs", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V2", standardCode: "EMG.170", itemName: "Emergency and Disaster Preparedness Drill Critiques and Exercises", frequency: "Annually", tier: 2, category: "Emergency Preparedness", surveyorPriority: 2, moduleScope: "ASC" },

  // V3 - Utility Systems
  { volume: "V3", standardCode: "FAC.250", itemName: "Medical Gas and Vacuum Systems Installer Performance Testing", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.250", itemName: "Medical Gas and Vacuum Systems Verification Testing by Third Party", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.250", itemName: "Medical Gas and Vacuum Systems Component Testing", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.250", itemName: "Medical Gas and Vacuum Systems Operations and Purity Testing", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.250", itemName: "Routine Maintenance Program for Piped Medical Gas and Vacuum Systems", frequency: "Annually", tier: 2, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.250", itemName: "Monthly Audio and Visual LIM Testing", frequency: "Monthly", tier: 1, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.250", itemName: "Annual Line-to-Ground Fault and Calibration LIM Testing", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.250", itemName: "Documentation of Receptacle Testing", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.260", itemName: "Weekly Emergency Power Supply Systems (EPSS) Testing", frequency: "Weekly", tier: 1, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.260", itemName: "EPSS Service Records", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.260", itemName: "Monthly Generator Tests", frequency: "Monthly", tier: 1, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.260", itemName: "Annual Generator Load Tests", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.260", itemName: "Monthly Automatic Transfer Switch Tests", frequency: "Monthly", tier: 1, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.260", itemName: "Annual Fuel Quality Tests", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "FAC.260", itemName: "3-Year 4-Hour Generator Load and Exhaust Gas Temperature Tests", frequency: "Triennially", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V3", standardCode: "IPC.230.70", itemName: "Air Exchange, Pressure Relationship, Temperature and Humidity Testing", frequency: "Annually", tier: 1, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },

  // V4 - Fire Risks & Drills, Fire Alarm Documents
  { volume: "V4", standardCode: "SAF.240", itemName: "Fire Drill Policy", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "SAF.240", itemName: "Quarterly Fire Drill Schedule", frequency: "Quarterly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "SAF.240", itemName: "Fire Drill Critiques", frequency: "Quarterly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "SAF.240", itemName: "Written Plan for Fire Safety Management", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.120.30", itemName: "Smoking Policy", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Record of Completion Documents", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Fire Alarm O&M Documentation", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Fire Alarm As-Built Drawings", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Fire Alarm Sequence of Operation", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Qualifications and Certifications for Fire Alarm Personnel", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Annual Duct/Heat Detector, Manual Fire Alarm Box, Smoke Detector Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Semiannual Duct/Heat Detector, Fire Alarm Box, Smoke Detector Visual Inspections", frequency: "Semiannually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Annual Door Release and Safety Functions Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Semiannual Fire Alarm Battery Load Tests", frequency: "Semiannually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V4", standardCode: "FAC.150.60", itemName: "Annual Audible-Visual Device Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },

  // V5 - Fire Safety Inspections & Testing
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Annual Offsite Responder Notifications", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Fire Alarm Systems Inspection, Testing, and Maintenance Records", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Weekly Fire Pump Inspection", frequency: "Weekly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Monthly Electric Fire Pump Test Log", frequency: "Monthly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Monthly Fire Sprinkler Control Valve Inspections", frequency: "Monthly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Monthly Fire Suppression Pressure Gauge Inspections", frequency: "Monthly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Quarterly Water Supply Connection Inspections", frequency: "Quarterly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Quarterly Fire Department Connection Inspections", frequency: "Quarterly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Quarterly Hydraulic Nameplate Inspections", frequency: "Quarterly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Quarterly Fire Water Tank Inspections", frequency: "Quarterly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Standpipe Flow Tests (Every 5 Years)", frequency: "Quinquennially", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Quarterly Main Drain Testing Downstream of Backflow Preventer", frequency: "Quarterly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Quarterly Dry/Pre-Action Priming and Low Air Tests", frequency: "Quarterly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Semiannual Water Tank Water Level Alarm Tests", frequency: "Semiannually", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Semiannual Valve Tamper Switch and Waterflow Device Tests", frequency: "Semiannually", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Annual Fire Sprinkler Main Drain Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Annual Fire Pump Flow Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Annual Gaseous Fire Extinguishing Systems Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Fire Sprinkler Obstruction Inspection (Every 5 Years)", frequency: "Quinquennially", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Fire Sprinkler Gauge Replacement and Calibration (Every 5 Years)", frequency: "Quinquennially", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Fire Equipment Hydrostatic Tests (Every 5 Years)", frequency: "Quinquennially", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Monthly Elevator Firefighters Emergency Operations Tests", frequency: "Monthly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.50", itemName: "Annual 1.5-Hour Egress and Exit Battery-Powered Light Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.50", itemName: "Monthly 30-Second Egress and Exit Sign Battery-Powered Light Tests", frequency: "Monthly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.160", itemName: "Annual Sliding and Rolling Fire Door Closure Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.160", itemName: "Annual Swinging Fire Door Inspections and Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.20", itemName: "Monthly Portable Fire Extinguisher Inspections", frequency: "Monthly", tier: 1, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.30", itemName: "Annual Portable Fire Extinguisher Maintenance", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Annual Air-Handling Smoke Detection Equipment Tests", frequency: "Annually", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.150.60", itemName: "Fire and Smoke Damper Tests (Every 4 Years)", frequency: "Quadrennially", tier: 4, category: "Fire Safety", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V5", standardCode: "FAC.140", itemName: "NFPA 99 Utilities Risk Assessment", frequency: "Annually", tier: 2, category: "Utility Systems", surveyorPriority: 1, moduleScope: "ASC" },

  // V6 - Medical Equipment & Infection Control
  { volume: "V6", standardCode: "FAC.340", itemName: "Operating Room Wet Area Risk Assessment", frequency: "Annually", tier: 2, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "FAC.250.10", itemName: "Medical Equipment Maintenance Policies and Procedures", frequency: "Annually", tier: 2, category: "Medical Equipment", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V6", standardCode: "FAC.250.20-30", itemName: "Medical Equipment Test and Inspection Matrix; Calibration Reports", frequency: "Annually", tier: 2, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "FAC.260.30", itemName: "CT Radiation Dose Testing", frequency: "Annually", tier: 4, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "FAC.260.70", itemName: "CT Performance Evaluation Testing", frequency: "Annually", tier: 4, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "FAC.280", itemName: "MRI Performance Evaluation Testing", frequency: "Annually", tier: 4, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "FAC.280", itemName: "Nuclear Imaging Performance Evaluation Testing", frequency: "Annually", tier: 4, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "FAC.280", itemName: "PET Imaging Performance Evaluation Testing", frequency: "Annually", tier: 4, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "FAC.280", itemName: "Radiology Staff Radiation Exposure Checks", frequency: "Annually", tier: 4, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.100", itemName: "Infection Control and Prevention Program", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.190", itemName: "Protection against Cross-Infection Policies and Procedures", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.210", itemName: "Policy Addressing Cleaning of Patient Treatment and Care Areas", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.220.30", itemName: "Staff Education and Certification Documentation", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.190", itemName: "Written Safety Program", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.190", itemName: "Infection Control Risk Assessment", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.190", itemName: "Documentation of Instructions to Patients Regarding Medical Devices", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.190", itemName: "Documentation of Work Injuries and Illnesses", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.100", itemName: "Vendor Education Documentation", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.130", itemName: "Patient Isolation or Transfer Policy", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.190", itemName: "Appointment, Competency, and Training of IPC Professionals", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.170", itemName: "Medical Equipment Cleaning, Sterilization, and Disinfection Policy", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.170", itemName: "Pre-Cleaning, Transport, and Handling of Medical Devices (External Vendor)", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.170", itemName: "Documentation That Reprocessed Single-Use Devices Are Approved", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.170", itemName: "Documentation That Third-Party Reprocessor Is FDA-Registered", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.170", itemName: "If In-House Reprocessing: Documentation Organization Is FDA-Registered", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.180", itemName: "Sharps Injury Prevention Program", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.190", itemName: "Written Exposure Control Plan", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.190", itemName: "Communicable Disease Reporting Policy", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 2, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.210", itemName: "Written Policies Addressing Cleaning of Treatment Areas and Devices", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.230", itemName: "Surgical Environment Safeguards Against Cross-Infection", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
  { volume: "V6", standardCode: "IPC.330.70", itemName: "Temperature and Humidity Monitoring Documentation", frequency: "Annually", tier: 1, category: "Infection Control", surveyorPriority: 1, moduleScope: "ASC" },
];

// ── Hospital / Joint Commission compliance items ──────────────────────────────
export const HOSPITAL_COMPLIANCE_ITEMS: {
  volume: string;
  standardCode: string;
  itemName: string;
  frequency: string;
  tier: number;
  category: string;
  surveyorPriority: number;
  moduleScope: string;
}[] = [
  // EC - Environment of Care
  { volume: "EC", standardCode: "EC.01.01.01", itemName: "Written Safety Management Plan", frequency: "Annually", tier: 2, category: "Environment of Care", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.01.01", itemName: "Safety Risk Assessments and Rounds Documentation", frequency: "Annually", tier: 1, category: "Environment of Care", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.02.01", itemName: "Hazardous Materials and Waste Management Plan", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.02.01", itemName: "Hazardous Materials Inventory and Safety Data Sheets", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.02.01", itemName: "Hazardous Waste Disposal Manifests", frequency: "Annually", tier: 2, category: "Hazardous Materials", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.03.01", itemName: "Written Fire Safety Management Plan", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.03.01", itemName: "Fire and Smoke Compartment Maps (Life Safety Drawings)", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.03.03", itemName: "Interim Life Safety Measures (ILSM) Policy and Log", frequency: "Annually", tier: 2, category: "Fire Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.05.01", itemName: "Medical Equipment Management Plan", frequency: "Annually", tier: 2, category: "Medical Equipment", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.05.01", itemName: "Medical Equipment Inventory and Maintenance Schedule", frequency: "Annually", tier: 2, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.05.01", itemName: "Medical Equipment Inspection and Maintenance Records", frequency: "Annually", tier: 1, category: "Medical Equipment", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.06.01", itemName: "Utility Systems Management Plan", frequency: "Annually", tier: 2, category: "Utility Systems", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.06.01", itemName: "Utility Systems Inventory", frequency: "Annually", tier: 2, category: "Utility Systems", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.04.01.01", itemName: "Environment of Care Committee Meeting Minutes", frequency: "Quarterly", tier: 1, category: "Environment of Care", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.04.01.01", itemName: "Annual Evaluation of Safety Management Plans", frequency: "Annually", tier: 2, category: "Environment of Care", surveyorPriority: 2, moduleScope: "Hospital" },

  // EM - Emergency Management
  { volume: "EM", standardCode: "EM.01.01.01", itemName: "Emergency Operations Plan (EOP)", frequency: "Annually", tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EM", standardCode: "EM.01.01.01", itemName: "Hazard Vulnerability Analysis (HVA)", frequency: "Annually", tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EM", standardCode: "EM.02.02.01", itemName: "Biannual Emergency Management Drills", frequency: "Semiannually", tier: 1, category: "Emergency Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EM", standardCode: "EM.02.02.01", itemName: "After-Action Reports for Emergency Drills", frequency: "Semiannually", tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EM", standardCode: "EM.03.01.01", itemName: "Annual Emergency Management Program Evaluation", frequency: "Annually", tier: 2, category: "Emergency Management", surveyorPriority: 2, moduleScope: "Hospital" },

  // HR - Human Resources
  { volume: "HR", standardCode: "HR.01.02.01", itemName: "Staff Hiring Verification Records (License, Education, Work History)", frequency: "Annually", tier: 2, category: "Human Resources", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "HR", standardCode: "HR.01.04.01", itemName: "Staff Orientation Documentation", frequency: "Annually", tier: 2, category: "Human Resources", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "HR", standardCode: "HR.01.05.03", itemName: "Staff Competency Assessments", frequency: "Annually", tier: 2, category: "Human Resources", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "HR", standardCode: "HR.01.06.01", itemName: "Ongoing Education Records for Licensed Staff", frequency: "Annually", tier: 2, category: "Human Resources", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "HR", standardCode: "HR.01.07.01", itemName: "Staff Health Screening Records (TB, Vaccines, Fit Testing)", frequency: "Annually", tier: 2, category: "Human Resources", surveyorPriority: 1, moduleScope: "Hospital" },

  // IC - Infection Prevention and Control
  { volume: "IC", standardCode: "IC.01.02.01", itemName: "Infection Prevention and Control Program Goals", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "IC", standardCode: "IC.02.01.01", itemName: "Hand Hygiene Program and Compliance Monitoring", frequency: "Quarterly", tier: 1, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "IC", standardCode: "IC.02.02.01", itemName: "Sterilization and Disinfection Policies and Monitoring Records", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "IC", standardCode: "IC.02.02.01", itemName: "Sterilizer Biological Indicator Testing Logs", frequency: "Weekly", tier: 1, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "IC", standardCode: "IC.04.01.01", itemName: "HAI Surveillance Data and Trend Reports", frequency: "Quarterly", tier: 1, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "IC", standardCode: "IC.04.01.01", itemName: "NHSN Reporting Documentation", frequency: "Monthly", tier: 1, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "IC", standardCode: "IC.04.01.01", itemName: "Infection Control Annual Risk Assessment", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "IC", standardCode: "IC.02.01.01", itemName: "Contact/Droplet/Airborne Precautions Policies", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "IC", standardCode: "IC.02.01.01", itemName: "Written Exposure Control Plan (Bloodborne Pathogens)", frequency: "Annually", tier: 2, category: "Infection Control", surveyorPriority: 1, moduleScope: "Hospital" },

  // LS - Life Safety
  { volume: "LS", standardCode: "LS.01.01.01", itemName: "Statement of Conditions (SOC) and Basic Building Information", frequency: "Annually", tier: 2, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.10", itemName: "Fire Drills - All Shifts, All Buildings (Quarterly)", frequency: "Quarterly", tier: 1, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.10", itemName: "Fire Drill Critique Reports", frequency: "Quarterly", tier: 2, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.20", itemName: "Annual Portable Fire Extinguisher Maintenance", frequency: "Annually", tier: 4, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.20", itemName: "Monthly Portable Fire Extinguisher Inspections", frequency: "Monthly", tier: 1, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.30", itemName: "Annual Fire Alarm System Inspection and Testing Records", frequency: "Annually", tier: 4, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.30", itemName: "Semiannual Fire Alarm Device Inspections", frequency: "Semiannually", tier: 4, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.35", itemName: "Annual Sprinkler System Inspection, Testing, and Maintenance", frequency: "Annually", tier: 4, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.35", itemName: "Monthly Sprinkler Control Valve Inspections", frequency: "Monthly", tier: 1, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.35", itemName: "Quarterly Sprinkler Waterflow Device Tests", frequency: "Quarterly", tier: 1, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.50", itemName: "Annual Fire and Smoke Damper Testing (Every 4 or 6 Years)", frequency: "Quadrennially", tier: 4, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.70", itemName: "Annual Sliding/Rolling Fire Door Tests", frequency: "Annually", tier: 4, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.70", itemName: "Annual Swinging Fire Door Inspection Records", frequency: "Annually", tier: 4, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.20", itemName: "Monthly Exit Sign and Emergency Lighting Tests", frequency: "Monthly", tier: 1, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LS", standardCode: "LS.02.01.20", itemName: "Annual 1.5-Hour Emergency Lighting Tests", frequency: "Annually", tier: 4, category: "Life Safety", surveyorPriority: 1, moduleScope: "Hospital" },

  // MM - Medication Management
  { volume: "MM", standardCode: "MM.01.01.03", itemName: "Formulary and Medication Management Policy", frequency: "Annually", tier: 2, category: "Medication Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MM", standardCode: "MM.01.01.03", itemName: "High-Alert Medication List and Policies", frequency: "Annually", tier: 2, category: "Medication Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MM", standardCode: "MM.02.01.01", itemName: "Medication Storage and Security Audit Logs", frequency: "Monthly", tier: 1, category: "Medication Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MM", standardCode: "MM.02.01.01", itemName: "Medication Refrigerator Temperature Monitoring Logs", frequency: "Daily", tier: 1, category: "Medication Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MM", standardCode: "MM.04.01.01", itemName: "Medication Reconciliation Policy and Audits", frequency: "Quarterly", tier: 1, category: "Medication Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MM", standardCode: "MM.05.01.01", itemName: "Pharmacy Compounding Policies and USP 797/800 Compliance Records", frequency: "Annually", tier: 2, category: "Medication Management", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MM", standardCode: "MM.06.01.01", itemName: "Medication Administration Policy and Nursing Competency Records", frequency: "Annually", tier: 2, category: "Medication Management", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "MM", standardCode: "MM.09.01.01", itemName: "Adverse Drug Event / Medication Error Reporting Records", frequency: "Monthly", tier: 1, category: "Medication Management", surveyorPriority: 1, moduleScope: "Hospital" },

  // NPSG - National Patient Safety Goals
  { volume: "NPSG", standardCode: "NPSG.01.01.01", itemName: "Patient Identification Policy (Two-Identifier Protocol)", frequency: "Annually", tier: 2, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.01.01.01", itemName: "Patient Identification Compliance Audits", frequency: "Quarterly", tier: 1, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.02.03.01", itemName: "Critical Test/Result Reporting Policy and Audit Records", frequency: "Annually", tier: 2, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.03.04.01", itemName: "High-Alert Medication Labeling and Segregation Policy", frequency: "Annually", tier: 2, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.03.05.01", itemName: "Anticoagulation Therapy Management Policy and Monitoring Logs", frequency: "Annually", tier: 2, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.06.01.01", itemName: "Clinical Alarm Safety Policy and Alarm Fatigue Reduction Plan", frequency: "Annually", tier: 2, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.07.01.01", itemName: "Hand Hygiene Compliance Data", frequency: "Quarterly", tier: 1, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.07.03.01", itemName: "MDRO Prevention Program and Surveillance Records", frequency: "Quarterly", tier: 1, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.07.04.01", itemName: "CLABSI Prevention Bundle Audit Logs", frequency: "Monthly", tier: 1, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.07.05.01", itemName: "SSI Prevention Policy and Surgical Checklist Compliance Audits", frequency: "Monthly", tier: 1, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.09.02.01", itemName: "Fall Prevention Program and Risk Assessment Audits", frequency: "Quarterly", tier: 1, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "NPSG", standardCode: "NPSG.15.01.01", itemName: "Suicide Risk Screening Protocol and Environmental Safety Rounds", frequency: "Quarterly", tier: 1, category: "Patient Safety", surveyorPriority: 1, moduleScope: "Hospital" },

  // PI - Performance Improvement
  { volume: "PI", standardCode: "PI.01.01.01", itemName: "Performance Improvement Plan", frequency: "Annually", tier: 2, category: "Performance Improvement", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "PI", standardCode: "PI.02.01.01", itemName: "Quality and Patient Safety Data Collection Reports", frequency: "Quarterly", tier: 1, category: "Performance Improvement", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "PI", standardCode: "PI.03.01.01", itemName: "RCA / Intensive Analysis Documentation for Sentinel Events", frequency: "Annually", tier: 2, category: "Performance Improvement", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "PI", standardCode: "PI.03.01.01", itemName: "Proactive Risk Reduction Activities (FMEA / Risk Assessment)", frequency: "Annually", tier: 2, category: "Performance Improvement", surveyorPriority: 1, moduleScope: "Hospital" },

  // RC - Record of Care
  { volume: "RC", standardCode: "RC.01.01.01", itemName: "Medical Record Completion Policy and Audit Logs", frequency: "Quarterly", tier: 1, category: "Record of Care", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "RC", standardCode: "RC.01.02.01", itemName: "Medical Record Authentication / Timeliness Compliance Audits", frequency: "Quarterly", tier: 1, category: "Record of Care", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "RC", standardCode: "RC.02.01.01", itemName: "Informed Consent Policy and Signed Consent Audit Logs", frequency: "Quarterly", tier: 1, category: "Record of Care", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "RC", standardCode: "RC.02.01.01", itemName: "History and Physical Completion Within 24-Hour Audit Log", frequency: "Monthly", tier: 1, category: "Record of Care", surveyorPriority: 1, moduleScope: "Hospital" },

  // LD - Leadership
  { volume: "LD", standardCode: "LD.03.01.01", itemName: "Governing Body Meeting Minutes", frequency: "Quarterly", tier: 1, category: "Leadership", surveyorPriority: 2, moduleScope: "Hospital" },
  { volume: "LD", standardCode: "LD.03.02.01", itemName: "Medical Staff Bylaws and Credentialing Policies", frequency: "Annually", tier: 2, category: "Leadership", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LD", standardCode: "LD.04.01.01", itemName: "Culture of Safety Survey Results and Action Plans", frequency: "Annually", tier: 2, category: "Leadership", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "LD", standardCode: "LD.04.01.01", itemName: "Patient Safety Event Reporting System Policy", frequency: "Annually", tier: 2, category: "Leadership", surveyorPriority: 1, moduleScope: "Hospital" },

  // MS - Medical Staff
  { volume: "MS", standardCode: "MS.06.01.01", itemName: "Initial Credentialing and Privileging Files", frequency: "Biennially", tier: 2, category: "Medical Staff", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MS", standardCode: "MS.06.01.05", itemName: "Ongoing Professional Practice Evaluation (OPPE) Records", frequency: "Semiannually", tier: 2, category: "Medical Staff", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MS", standardCode: "MS.06.01.07", itemName: "Focused Professional Practice Evaluation (FPPE) Records", frequency: "Annually", tier: 2, category: "Medical Staff", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "MS", standardCode: "MS.08.01.01", itemName: "Medical Staff Committee Meeting Minutes", frequency: "Monthly", tier: 1, category: "Medical Staff", surveyorPriority: 2, moduleScope: "Hospital" },

  // Utility / EC (shared infrastructure)
  { volume: "EC", standardCode: "EC.02.06.01", itemName: "Monthly Generator Tests and Weekly Load Tests", frequency: "Monthly", tier: 1, category: "Utility Systems", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.06.01", itemName: "Annual Generator 4-Hour Load Test", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.06.01", itemName: "Medical Gas System Inspection and Testing Records", frequency: "Annually", tier: 4, category: "Utility Systems", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.06.01", itemName: "Monthly LIM Audio/Visual Alarm Testing Logs", frequency: "Monthly", tier: 1, category: "Utility Systems", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.06.01", itemName: "Annual Water Management Plan (Legionella Prevention)", frequency: "Annually", tier: 2, category: "Utility Systems", surveyorPriority: 1, moduleScope: "Hospital" },
  { volume: "EC", standardCode: "EC.02.06.01", itemName: "Water System Testing and Remediation Records", frequency: "Monthly", tier: 1, category: "Utility Systems", surveyorPriority: 1, moduleScope: "Hospital" },
];

// AAAHC Facility Logs — recurring operational checklists (TIER_1, surface: facility_logs)
export const ASC_FACILITY_LOGS: {
  volume: string; standardCode: string; itemName: string; frequency: string;
  tier: number; category: string; surveyorPriority: number; moduleScope: string;
  surface: string; ownerRole: string;
}[] = [
  // Facilities / Maintenance owned
  { volume: "FAC", standardCode: "FAC.010", itemName: "Daily Egress Inspections",                                           frequency: "Daily",        tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.020", itemName: "Emergency Eyewash Weekly Tests",                                     frequency: "Weekly",       tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.030", itemName: "Weekly Emergency Power Supply Systems (EPSS) Testing",               frequency: "Weekly",       tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.040", itemName: "Monthly Audio and Visual Indicator LIM Testing",                     frequency: "Monthly",      tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.050", itemName: "Monthly Generator Tests",                                             frequency: "Monthly",      tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.060", itemName: "Monthly Automatic Transfer Switch Tests",                             frequency: "Monthly",      tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.070", itemName: "Air Exchange Pressure Temperature and Humidity Testing",              frequency: "Daily",        tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.080", itemName: "Monthly Elevator Firefighters Emergency Operations Tests",            frequency: "Monthly",      tier: 1, category: "Facilities",           surveyorPriority: 2, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.090", itemName: "Monthly 30-Second Egress and Exit Sign Battery-Powered Light Tests",  frequency: "Monthly",      tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "FAC", standardCode: "FAC.100", itemName: "Safety Rounds Documentation",                                         frequency: "Monthly",      tier: 1, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.010", itemName: "Quarterly Fire Drill Schedule and Critiques",                         frequency: "Quarterly",    tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.020", itemName: "Weekly Fire Pump Inspection",                                         frequency: "Weekly",       tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.030", itemName: "Monthly Electric Fire Pump Test Log",                                 frequency: "Monthly",      tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.040", itemName: "Monthly Fire Sprinkler Control Valve Inspections",                    frequency: "Monthly",      tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.050", itemName: "Monthly Fire Suppression Pressure Gauge Inspections",                 frequency: "Monthly",      tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.060", itemName: "Quarterly Water Supply Connection Inspections",                       frequency: "Quarterly",    tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.070", itemName: "Quarterly Fire Department Connection Inspections",                    frequency: "Quarterly",    tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.080", itemName: "Quarterly Hydraulic Nameplate Inspections",                           frequency: "Quarterly",    tier: 1, category: "Fire Safety",          surveyorPriority: 2, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.090", itemName: "Quarterly Fire Water Tank Inspections",                               frequency: "Quarterly",    tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.100", itemName: "Quarterly Main Drain Testing",                                        frequency: "Quarterly",    tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.110", itemName: "Quarterly Dry / Pre-Action Priming Tests",                            frequency: "Quarterly",    tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.120", itemName: "Semiannual Water Tank Water Level Alarm Tests",                       frequency: "Semiannually", tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.130", itemName: "Semiannual Valve Tamper Switch Tests",                                 frequency: "Semiannually", tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  { volume: "SAF", standardCode: "SAF.140", itemName: "Monthly Portable Fire Extinguisher Inspections",                      frequency: "Monthly",      tier: 1, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "facilities" },
  // Nursing / Clinical owned
  { volume: "IPC", standardCode: "IPC.020", itemName: "Sterilization Biological Indicator Log (every cycle)",               frequency: "Per Cycle",    tier: 1, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "IPC", standardCode: "IPC.030", itemName: "Sterilization Chemical Indicator Log",                                frequency: "Per Cycle",    tier: 1, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "IPC", standardCode: "IPC.040", itemName: "High-Level Disinfection Log",                                         frequency: "Per Use",      tier: 1, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "IPC", standardCode: "IPC.050", itemName: "ATP Environmental Cleaning Validation Log (OR / SPD)",               frequency: "Monthly",      tier: 1, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "IPC", standardCode: "IPC.060", itemName: "Sterilizer Maintenance and Repair Log",                               frequency: "As Needed",    tier: 1, category: "Infection Prevention", surveyorPriority: 2, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "IPC", standardCode: "IPC.070", itemName: "Sterile Supply Expiration Date Audit",                                frequency: "Monthly",      tier: 1, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "IPC", standardCode: "IPC.080", itemName: "Hand Hygiene Compliance Audit",                                       frequency: "Quarterly",    tier: 1, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "IPC", standardCode: "IPC.090", itemName: "Surgical Site Infection Surveillance Log",                            frequency: "Monthly",      tier: 1, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "IPC", standardCode: "IPC.100", itemName: "Sharps and Biohazard Waste Disposal Log",                             frequency: "Monthly",      tier: 1, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "EMG", standardCode: "EMG.010", itemName: "Emergency Preparedness Scenario-Based Drill",                         frequency: "Quarterly",    tier: 1, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "EMG", standardCode: "EMG.020", itemName: "Emergency Preparedness Drill Critiques",                               frequency: "Quarterly",    tier: 1, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "EMG", standardCode: "EMG.030", itemName: "Malignant Hyperthermia Drill",                                         frequency: "Annually",     tier: 1, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "QUA", standardCode: "QUA.010", itemName: "Adverse Event and Incident Log",                                       frequency: "Ongoing",      tier: 1, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "QUA", standardCode: "QUA.020", itemName: "Patient Satisfaction Survey Results",                                  frequency: "Quarterly",    tier: 1, category: "Quality",              surveyorPriority: 2, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "QUA", standardCode: "QUA.030", itemName: "Unplanned Transfer to Hospital Log",                                   frequency: "Ongoing",      tier: 1, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "QUA", standardCode: "QUA.040", itemName: "Cancellation and Delay Log",                                           frequency: "Monthly",      tier: 1, category: "Quality",              surveyorPriority: 2, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "QUA", standardCode: "QUA.050", itemName: "Wrong Site Surgery Prevention Checklist (Universal Protocol)",        frequency: "Per Case",     tier: 1, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "QUA", standardCode: "QUA.060", itemName: "Time-Out Documentation Log",                                           frequency: "Per Case",     tier: 1, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "QUA", standardCode: "QUA.070", itemName: "Medication Error Log",                                                 frequency: "Ongoing",      tier: 1, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
  { volume: "QUA", standardCode: "QUA.080", itemName: "Anesthesia Adverse Event Log",                                         frequency: "Ongoing",      tier: 1, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "facility_logs", ownerRole: "nursing" },
];

// AAAHC Document Vault — policies, plans, certifications (TIER_2, surface: document_vault)
export const ASC_DOCUMENT_VAULT: {
  volume: string; standardCode: string; itemName: string; frequency: string;
  tier: number; category: string; surveyorPriority: number; moduleScope: string;
  surface: string; ownerRole: string;
}[] = [
  // Administration — administrator owned
  { volume: "ADM", standardCode: "ADM.100", itemName: "Governing Body Meeting Minutes",                                       frequency: "Monthly",    tier: 2, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "ADM", standardCode: "ADM.110", itemName: "Medical Executive Committee Meeting Minutes",                          frequency: "Monthly",    tier: 2, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "ADM", standardCode: "ADM.120", itemName: "Quality Improvement Committee Meeting Minutes",                        frequency: "Quarterly",  tier: 2, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "ADM", standardCode: "ADM.130", itemName: "Annual Facility Risk Assessment",                                      frequency: "Annually",   tier: 2, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "ADM", standardCode: "ADM.140", itemName: "Credentialing and Privileging Files (all physicians)",                 frequency: "Biennially", tier: 2, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "ADM", standardCode: "ADM.150", itemName: "Staff Competency Verification Records",                                frequency: "Annually",   tier: 2, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "ADM", standardCode: "ADM.160", itemName: "Business Associate Agreements (all vendors)",                         frequency: "As Needed",  tier: 2, category: "Administration",       surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "ADM", standardCode: "ADM.170", itemName: "Peer Review Documentation",                                            frequency: "Annually",   tier: 2, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  // Emergency Management — administrator owned
  { volume: "EMG", standardCode: "EMG.040", itemName: "Emergency Operations Plan and HVA",                                    frequency: "Biennially", tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.050", itemName: "Emergency and Disaster Preparedness Policies",                         frequency: "Annually",   tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.060", itemName: "Communication Plans for Emergencies",                                  frequency: "Annually",   tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.070", itemName: "1135 Waiver Procedure",                                                frequency: "As Needed",  tier: 2, category: "Emergency Management", surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.080", itemName: "Initial/Annual Emergency and Disaster Preparedness Training Docs",     frequency: "Annually",   tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.090", itemName: "BLS Policy and Training Documentation",                                frequency: "Biennially", tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.100", itemName: "ACLS Training Documentation",                                          frequency: "Biennially", tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.110", itemName: "PALS Policy and Training Documentation",                               frequency: "Biennially", tier: 2, category: "Emergency Management", surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.120", itemName: "Malignant Hyperthermia Policy Training Documentation",                 frequency: "Annually",   tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.130", itemName: "Hospital Notification Letter",                                         frequency: "Annually",   tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.140", itemName: "Emergency Medical Care Transfer Procedure",                            frequency: "Annually",   tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.150", itemName: "Sprinkler Shutdown Fire Watch Policy",                                 frequency: "Annually",   tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "EMG", standardCode: "EMG.160", itemName: "Emergency Preparedness Risk Assessment and Participant List",          frequency: "Annually",   tier: 2, category: "Emergency Management", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  // Facilities — administrator owned
  { volume: "FAC", standardCode: "FAC.110", itemName: "Routine Maintenance Program for Piped Medical Gas and Vacuum Systems", frequency: "Annually",   tier: 2, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  // Fire Safety — administrator owned
  { volume: "SAF", standardCode: "SAF.150", itemName: "Fire Drill Policy",                                                    frequency: "Annually",   tier: 2, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "SAF", standardCode: "SAF.160", itemName: "Written Plan for Fire Safety Management",                              frequency: "Annually",   tier: 2, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "SAF", standardCode: "SAF.170", itemName: "Smoking Policy",                                                       frequency: "Annually",   tier: 2, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "SAF", standardCode: "SAF.180", itemName: "Fire Alarm Operations and Maintenance Manual",                        frequency: "As Needed",  tier: 2, category: "Fire Safety",          surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "SAF", standardCode: "SAF.190", itemName: "Fire Alarm As-Built Drawings",                                         frequency: "As Needed",  tier: 2, category: "Fire Safety",          surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "SAF", standardCode: "SAF.200", itemName: "Fire Alarm Sequence of Operation",                                    frequency: "As Needed",  tier: 2, category: "Fire Safety",          surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "SAF", standardCode: "SAF.210", itemName: "Emergency Evacuation Route Maps (all exits)",                         frequency: "Annually",   tier: 2, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "SAF", standardCode: "SAF.220", itemName: "Fire Safety Response Procedures (RACE / PASS)",                       frequency: "Annually",   tier: 2, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  // Infection Prevention — administrator owned
  { volume: "IPC", standardCode: "IPC.110", itemName: "Infection Prevention and Control Plan",                                frequency: "Annually",   tier: 2, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "IPC", standardCode: "IPC.120", itemName: "Sterilization Policies and Procedures (AAMI ST79)",                   frequency: "Annually",   tier: 2, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "IPC", standardCode: "IPC.130", itemName: "High-Level Disinfection Policy",                                       frequency: "Annually",   tier: 2, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "IPC", standardCode: "IPC.140", itemName: "Staff Bloodborne Pathogen Training Records",                           frequency: "Annually",   tier: 2, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "IPC", standardCode: "IPC.150", itemName: "Occupational Exposure Plan and Follow-Up Records",                    frequency: "Annually",   tier: 2, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "IPC", standardCode: "IPC.160", itemName: "PPE Policy and Availability Documentation",                           frequency: "Annually",   tier: 2, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "IPC", standardCode: "IPC.170", itemName: "HVAC and Air Handling Verification for OR",                           frequency: "Annually",   tier: 2, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "IPC", standardCode: "IPC.180", itemName: "Instrument Recall and Rapid Response Policy",                         frequency: "Annually",   tier: 2, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  // Quality — administrator owned
  { volume: "QUA", standardCode: "QUA.090", itemName: "Quality Improvement Plan",                                             frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.100", itemName: "Annual QI Summary Report",                                             frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.110", itemName: "Peer Review Policy and Completed Reviews",                             frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.120", itemName: "Patient Rights and Responsibilities Policy",                           frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.130", itemName: "Advance Directive Policy and Patient Notification",                    frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.140", itemName: "Informed Consent Policy and Sample Forms",                             frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.150", itemName: "Anesthesia Policy and Procedure Manual",                               frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.160", itemName: "Moderate Sedation Policy",                                             frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.170", itemName: "Post-Procedure Follow-Up Call Documentation Policy",                   frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.180", itemName: "Controlled Substance Policy and DEA Registration",                    frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
  { volume: "QUA", standardCode: "QUA.190", itemName: "Drug Diversion Policy and Audit Trail",                               frequency: "Annually",   tier: 2, category: "Quality",              surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "administrator" },
];

// AAAHC Document Vault — vendor-owned certifications and service records (TIER_4, surface: document_vault)
export const ASC_DOCUMENT_VAULT_VENDOR: {
  volume: string; standardCode: string; itemName: string; frequency: string;
  tier: number; category: string; surveyorPriority: number; moduleScope: string;
  surface: string; ownerRole: string;
}[] = [
  { volume: "FAC", standardCode: "FAC.120", itemName: "Medical Gas and Vacuum Systems Installer Performance Testing", frequency: "As Needed",    tier: 4, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "FAC", standardCode: "FAC.130", itemName: "Verification Testing by Third Party (Medical Gas)",           frequency: "As Needed",    tier: 4, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "FAC", standardCode: "FAC.140", itemName: "Annual LIM Testing by Vendor",                                frequency: "Annually",     tier: 4, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "FAC", standardCode: "FAC.150", itemName: "Documentation of Receptacle Testing",                         frequency: "Annually",     tier: 4, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "FAC", standardCode: "FAC.160", itemName: "EPSS Service Records",                                        frequency: "Annually",     tier: 4, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "FAC", standardCode: "FAC.170", itemName: "Annual Generator Load Tests",                                  frequency: "Annually",     tier: 4, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "FAC", standardCode: "FAC.180", itemName: "Annual Fuel Quality Tests",                                   frequency: "Annually",     tier: 4, category: "Facilities",           surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "FAC", standardCode: "FAC.190", itemName: "3-Year Generator Load and Exhaust Gas Temperature Tests",     frequency: "Triennially",  tier: 4, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "FAC", standardCode: "FAC.200", itemName: "Operations and Purity Testing (Medical Gas)",                 frequency: "Annually",     tier: 4, category: "Facilities",           surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "SAF", standardCode: "SAF.230", itemName: "Qualifications for Fire Alarm Personnel",                     frequency: "As Needed",    tier: 4, category: "Fire Safety",          surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "SAF", standardCode: "SAF.240", itemName: "Annual Detector Tests by Certified Vendor",                   frequency: "Annually",     tier: 4, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "SAF", standardCode: "SAF.250", itemName: "Semiannual Visual Inspection by Vendor",                      frequency: "Semiannually", tier: 4, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "SAF", standardCode: "SAF.260", itemName: "Annual Full Flow Pump Test by Vendor",                        frequency: "Annually",     tier: 4, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "SAF", standardCode: "SAF.270", itemName: "Annual Extinguisher Service by Vendor",                       frequency: "Annually",     tier: 4, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "SAF", standardCode: "SAF.280", itemName: "Annual Fire Alarm System Test by Vendor",                     frequency: "Annually",     tier: 4, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "SAF", standardCode: "SAF.290", itemName: "5-Year Fire Sprinkler Internal Obstruction Investigation",    frequency: "Every 5 Years",tier: 4, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "SAF", standardCode: "SAF.300", itemName: "Annual Suppression System Service by Vendor",                 frequency: "Annually",     tier: 4, category: "Fire Safety",          surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "IPC", standardCode: "IPC.190", itemName: "Annual Sterilizer Calibration by Vendor",                     frequency: "Annually",     tier: 4, category: "Infection Prevention", surveyorPriority: 1, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
  { volume: "IPC", standardCode: "IPC.200", itemName: "Water Quality Testing (where applicable)",                    frequency: "Annually",     tier: 4, category: "Infection Prevention", surveyorPriority: 2, moduleScope: "ASC", surface: "document_vault", ownerRole: "vendor" },
];

// AAAHC Wall Chart — physical posting requirements for an accredited ASC (TIER_3)
export const ASC_POSTING_REQUIREMENTS: {
  volume: string;
  standardCode: string;
  itemName: string;
  frequency: string;
  tier: number;
  category: string;
  surveyorPriority: number;
  moduleScope: string;
  surface: string;
  ownerRole: string;
}[] = [
  { volume: "POST", standardCode: "ADM.010", itemName: "State Facility License / Permit to Operate",           frequency: "Annually",    tier: 3, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "ADM.020", itemName: "Medicare / Medicaid Certification",                     frequency: "Annually",    tier: 3, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "ADM.030", itemName: "Non-Discrimination Notice (ADA / Section 1557)",        frequency: "Annually",    tier: 3, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "ADM.040", itemName: "HIPAA Notice of Privacy Practices",                     frequency: "Annually",    tier: 3, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "ADM.050", itemName: "Workers' Compensation Notice",                           frequency: "Annually",    tier: 3, category: "Administration",       surveyorPriority: 2, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "ADM.060", itemName: "OSHA Workers' Rights Poster",                            frequency: "Annually",    tier: 3, category: "Administration",       surveyorPriority: 1, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "RGT.010", itemName: "AAAHC Accreditation Certificate",                        frequency: "Triennially", tier: 3, category: "Governance",           surveyorPriority: 1, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "RGT.020", itemName: "Patient Bill of Rights",                                 frequency: "Annually",    tier: 3, category: "Governance",           surveyorPriority: 1, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "RGT.030", itemName: "Patient Grievance Process and Contact Information",      frequency: "Annually",    tier: 3, category: "Governance",           surveyorPriority: 1, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
  { volume: "POST", standardCode: "IPC.010", itemName: "Infection Prevention Contact Information",                frequency: "Annually",    tier: 3, category: "Infection Prevention", surveyorPriority: 2, moduleScope: "ASC", surface: "wall_chart", ownerRole: "administrator" },
];
