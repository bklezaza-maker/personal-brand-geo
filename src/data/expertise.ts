export type ExpertiseItem = {
  title: string;
  titleTh: string;
  description: string;
  descriptionTh: string;
  skills: string[];
};

export const expertise: ExpertiseItem[] = [
  {
    title: "US Stock Investment Analysis",
    titleTh: "วิเคราะห์การลงทุนหุ้นอเมริกา",
    description:
      "In-depth analysis of US equities using fundamental and technical frameworks. Helping Thai investors understand how to evaluate, select, and manage positions in American markets.",
    descriptionTh:
      "วิเคราะห์หุ้นสหรัฐเชิงลึกด้วยกรอบพื้นฐานและเทคนิค ช่วยนักลงทุนไทยเข้าใจวิธีประเมิน เลือก และบริหารการลงทุนในตลาดอเมริกา",
    skills: [
      "Fundamental Analysis",
      "Financial Statement Analysis",
      "Stock Valuation (DCF, P/E, EV/EBITDA)",
      "S&P 500 / Nasdaq Stocks",
      "Portfolio Construction",
      "Risk Management",
    ],
  },
  {
    title: "AI for Finance & Investment",
    titleTh: "AI เพื่อการเงินและการลงทุน",
    description:
      "Applying artificial intelligence tools to enhance investment research, automate stock screening, analyze market sentiment, and build data-driven investment strategies.",
    descriptionTh:
      "ประยุกต์ใช้ AI เพื่อยกระดับการวิจัยการลงทุน คัดกรองหุ้นอัตโนมัติ วิเคราะห์ sentiment ตลาด และสร้างกลยุทธ์การลงทุนที่ขับเคลื่อนด้วยข้อมูล",
    skills: [
      "AI Stock Screening",
      "Sentiment Analysis",
      "Quantitative Strategies",
      "ChatGPT / Claude for Research",
      "Data-Driven Decision Making",
      "FinTech Tools",
    ],
  },
  {
    title: "Financial Planning for Investors",
    titleTh: "วางแผนการเงินสำหรับนักลงทุน",
    description:
      "Helping individuals build a solid financial foundation before investing — covering budgeting, emergency funds, tax awareness, and long-term wealth building strategies tailored to Thai investors.",
    descriptionTh:
      "ช่วยบุคคลสร้างรากฐานทางการเงินที่มั่นคงก่อนลงทุน ครอบคลุมการจัดการงบประมาณ เงินสำรองฉุกเฉิน ความรู้ด้านภาษี และกลยุทธ์สร้างความมั่งคั่งระยะยาวสำหรับนักลงทุนไทย",
    skills: [
      "Personal Finance Planning",
      "Investment Goal Setting",
      "Asset Allocation",
      "Tax-Efficient Investing",
      "THB to USD Strategy",
      "Long-Term Wealth Building",
    ],
  },
];
