export interface Profile {
  name: string;
  nameZh: string;
  title: string;
  affiliation: string;
  affiliationShort: string;
  exchange: string;
  bio: string[];
  researchInterests: string[];
  contact: {
    email: string;
    phone: string;
    wechat: string;
    github: string;
    scholar: string;
  };
}

export const profile: Profile = {
  name: "Weiting Tan",
  nameZh: "谭维庭",
  title: "Undergraduate Student in Physics (Elite Program)",
  affiliation: "East China Normal University (ECNU)",
  affiliationShort: "ECNU",
  exchange: "UC Berkeley Extension Visiting Student (Jan–Jun 2026)",
  bio: [
    "Physics undergraduate in the Elite Program (拔尖班) at East China Normal University, School of Physics and Electronic Science. GPA 4.0 in first-year core courses; full marks in Academic English Writing and Speaking; IELTS 7.5.",
    "Captain of the ECNU CUPT (China Undergraduate Physics Tournament) team, leading the team to national 2nd place and reaching the national finals. Awarded Best Opponent Debater at the Shanghai regional competition.",
    "Awarded CSC national scholarship for a visiting program at UC Berkeley Extension (Jan–Jun 2026), studying Physics, Electrical Engineering, and Biomedical Engineering.",
    "Currently conducting research at the ECNU Extreme Opto-electromechanical Laboratory and the Shanghai University of Traditional Chinese Medicine Drug Metabolism & Pharmacokinetics Research Center. Academic advisor: Prof. Ya Cheng (程亚), former Dean of the School of Physics and Electronic Science, ECNU.",
    "Seeking PhD positions in biomedical optics, biophotonics, organ-on-chip engineering, or related fields.",
  ],
  researchInterests: [
    "Femtosecond laser biomedical microfabrication",
    "Liver organoids-on-chips",
    "Biophotonics & optical instrumentation",
    "FPGA-based feedback control",
    "Drug metabolism & pharmacokinetics",
  ],
  contact: {
    email: "twlab99@gmail.com",
    phone: "13621687003",
    wechat: "swann1212",
    github: "github.com/weiting-tan",
    scholar: "scholar.google.com/weiting-tan",
  },
};