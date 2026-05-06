import { Search, BarChart4, Database, Cpu, Award, FileText, Briefcase, ShieldCheck, GraduationCap, Heart, Terminal } from 'lucide-react';

export const MODES = {
  ON_CHAIN: 'ON-CHAIN',
  ANALYTICS: 'ANALYTICS',
  AGENTIC: 'AGENTIC'
};

export const CONTENT_MATRIX = {
  [MODES.ON_CHAIN]: {
    hero: "Interrogating on-chain shards for governance integrity.",
    projects: [
      { id: "VX-25", title: "Vertex ⚡", category: "Solana Invoicing", description: "Institutional-grade invoicing tool for the Solana freelance economy. Generate smart agreements and get paid in USDC/SOL instantly.", tags: ["Solana", "Invoicing", "Fintech"], icon: 'ShieldCheck', link: 'https://vertex-pay.vercel.app' },
      { id: "SB-25", title: "Sunboard 🌅", category: "DeFi Intelligence", description: "Advanced Sunrise Intelligence Terminal for Solana. Momentum scoring, holder distribution, and real-time liquidity tracking for high-conviction assets.", tags: ["Solana", "DeFi", "Analytics"], icon: 'Terminal', link: 'https://sunboard.vercel.app' },
      { id: "ST-01", title: "Superteam Earn Wins", category: "Proof of Work", description: "8 Competitive Bounty Wins in technical research and on-chain analysis.", tags: ["Superteam", "Wins"], icon: 'Award', link: 'https://superteam.fun/earn/t/Ghostiemoh' },
      { id: "MD-03", title: "MetaDao Analysis", category: "Governance Data", description: "Analyzing governance participation and vote weight distribution within MetaDao.", tags: ["DAO", "Governance"], icon: 'Database', link: 'https://docs.google.com/document/d/1HTd4yvNuGfzq1s_K62YRKFgCPEta__THQPxuwPHXSCg/edit?usp=sharing' },
      { id: "BP-02", title: "Blockchain Professional", category: "Certification", description: "Dominium Academy x NITDA. Advanced protocol analysis and forensic research.", tags: ["Metana", "Professional"], icon: 'ShieldCheck', link: 'https://github.com/Ghostiemoh' },
      { id: "KV-03", title: "Kelsier Ventures Analysis", category: "Venture Analytics", description: "Analyzing wallet movements and venture capital flow within private investment networks.", tags: ["VC", "On-chain"], icon: 'Database', link: 'https://docs.google.com/document/d/1SDxOn-GqTk7od60YsqBVENOSMm_nVDR9oxxDlDWfzKY/edit?usp=sharing' },
      { id: "KS-01", title: "Kelsier Researcher", category: "Forensics", description: "Forensic-level blockchain research and ecosystem mapping. Tracing transaction shards.", tags: ["Forensics", "Security"], icon: 'Search', link: 'https://github.com/Ghostiemoh' },
      { id: "NT-05", title: "No Long Ting Bootcamp", category: "Certification", description: "Verified Proof of Solana ecosystem training via Unboxed Software.", tags: ["Solana", "Verified"], icon: 'Award', link: 'https://github.com/Ghostiemoh' },
      { id: "SD-01", title: "Solana Fraud Detection", category: "Forensics", description: "Forensic analysis of fraudulent activities on the Solana network.", tags: ["Forensics", "Solana"], icon: 'Search', link: 'https://docs.google.com/document/d/1pxf4EtWhSU6DWerlkD1fG8HMcj1QWlvBH3YYWmuYbec/edit?usp=sharing' }
    ]
  },
  [MODES.ANALYTICS]: {
    hero: "Advanced Data Engineering & Mathematical Rigor.",
    projects: [
      { id: "DA-30", title: "30-Day Data Architect Challenge", category: "Educational Series", description: "Intensive masterclass transitioning from manual data cleaning to building scalable data systems and on-chain intelligence.", tags: ["Excel", "SQL", "Architecture"], icon: 'GraduationCap', link: 'https://github.com/Ghostiemoh/Excel_SQL_Mastery_Template' },
      { id: "LS-25", title: "LedgerSnap", category: "Financial Architecture", description: "High-fidelity financial archival system. Transforming chaotic spending into a streamlined digital ledger with deep analytical insights.", tags: ["Finance", "Archival", "UX"], icon: 'Database', link: 'https://ledgersnap-one.vercel.app' },
      { id: "BA-24", title: "Bahago Services Ltd", category: "IT Operations", description: "IT Personnel handling tender documentation, BEME calculations, and official workflow automation.", tags: ["IT", "BEME"], icon: 'Briefcase', link: 'https://github.com/Ghostiemoh' },
      { id: "MT-01", title: "3MTT Advanced Analytics", category: "Advanced Data", description: "Certified specialized training in data analysis and visualization.", tags: ["3MTT", "Data"], icon: 'Award', link: 'https://app.3mtt.training/verify?id=FE/24/4155597910' },
      { id: "FC-01", title: "Flipside Crypto", category: "Analytics", description: "Leveraged SQL for deep-dive analytics. Created dashboards tracking active users.", tags: ["SQL", "DeFi"], icon: 'BarChart4', link: 'https://github.com/Ghostiemoh' },
      { id: "SF-01", title: "Sanafi Data Analyst", category: "Operational Data", description: "Built automated Excel models and SQL queries to reduce manual audit time by 40%.", tags: ["Excel", "SQL"], icon: 'Briefcase', link: 'https://github.com/Ghostiemoh' },
      { id: "LS-21", title: "Lakrims Services", category: "Internship", description: "Drafting corporate communications and project support for large-scale administrative workflows.", tags: ["Admin", "Efficiency"], icon: 'Briefcase', link: 'https://github.com/Ghostiemoh' },
      { id: "BS-06", title: "Bicycle Sales Performance", category: "BI Visualization", description: "Visualizing sales performance and customer demographics to optimize supply chain.", tags: ["Tableau", "Sales"], icon: 'BarChart4', link: 'https://1drv.ms/b/c/708714f1f76dc85e/IQO-Ssc_TzW_TIC_xI9-rX8HARz8v1R_7L8C_W-YQ' },
      { id: "CL-11", title: "Call List Analysis", category: "Data Management", description: "Advanced Excel operations for managing and analyzing large-scale call datasets.", tags: ["Excel", "Ops"], icon: 'BarChart4', link: 'https://1drv.ms/x/c/708714f1f76dc85e/IQO-Ssc_TzW_TIC_xI9-rX8HAQ8kC58E4hA9o1S_u_W8-YQ' }
    ]
  },
  [MODES.AGENTIC]: {
    hero: "Synthesizing intelligence through protocol research.",
    projects: [
      { id: "TR-07", title: "Trepa Prediction", category: "Predictive Analytics", description: "A precision prediction platform focusing on data accuracy and market sentiment analysis.", tags: ["Prediction", "Web3"], icon: 'Search', link: 'https://github.com/Ghostiemoh' },
      { id: "SR-10", title: "Switchboard Research", category: "Oracle Intelligence", description: "Deep research into decentralized oracle networks and data feed reliability.", tags: ["Oracles", "Research"], icon: 'Search', link: 'https://github.com/Ghostiemoh' },
      { id: "MA-02", title: "MarginFi Protocol Analytics", category: "Protocol Intel", description: "In-depth research into borrowing, lending, and yield strategies within the MarginFi ecosystem.", tags: ["DeFi", "MarginFi"], icon: 'BarChart4', link: 'https://docs.google.com/document/d/1HTd4yvNuGfzq1s_K62YRKFgCPEta__THQPxuwPHXSCg/edit?usp=sharing' },
      { id: "SE-09", title: "Sanafi Ethical Infographic", category: "Data Ethics", description: "An ethical exploration into data privacy and infographic systems.", tags: ["Ethics", "Data"], icon: 'Search', link: 'https://github.com/Ghostiemoh' },
      { id: "CO-05", title: "COVID-19 Exploration", category: "Epidemiological Data", description: "Global data exploration of COVID-19 trends using SQL for pattern discovery.", tags: ["SQL", "EDA"], icon: 'BarChart4', link: 'https://github.com/Ghostiemoh' }
    ]
  }
};
