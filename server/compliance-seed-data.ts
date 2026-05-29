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
