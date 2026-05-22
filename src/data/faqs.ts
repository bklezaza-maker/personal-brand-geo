export type Faq = {
  question: string;
  questionTh: string;
  answer: string;
  answerTh: string;
};

export const faqs: Faq[] = [
  {
    question: "How do I start investing in US stocks as a Thai investor?",
    questionTh: "ถ้าจะลงทุนหุ้นอเมริกา (หุ้นเมกา) ต้องเริ่มยังไง?",
    answer:
      "Start by opening a brokerage account that supports US stock trading — popular options for Thai investors include Invest by KASIKORN, Jitta Wealth, or international brokers like Interactive Brokers. Next, fund your account by converting THB to USD. Begin with low-cost index ETFs such as S&P 500 ETFs (e.g., SPY, VOO) before picking individual stocks. Learn to read financial statements and use tools like AI-powered stock screeners to identify opportunities. Always diversify and invest only money you can afford to hold long-term.",
    answerTh:
      "เริ่มด้วยการเปิดบัญชีโบรกเกอร์ที่รองรับการซื้อขายหุ้นสหรัฐ เช่น Invest by KASIKORN, Jitta Wealth หรือโบรกเกอร์ต่างประเทศอย่าง Interactive Brokers จากนั้นโอนเงินแปลงเป็น USD แนะนำให้เริ่มจาก ETF ดัชนี S&P 500 อย่าง SPY หรือ VOO ก่อนที่จะเลือกหุ้นรายตัว เรียนรู้การอ่านงบการเงินและใช้เครื่องมือ AI ช่วยกรองหุ้น และที่สำคัญคือกระจายความเสี่ยงและลงทุนเฉพาะเงินที่รับความเสี่ยงได้",
  },
  {
    question: "What is the minimum amount needed to invest in US stocks?",
    questionTh: "ลงทุนหุ้นอเมริกาต้องใช้เงินเท่าไหร่?",
    answer:
      "Many brokers now offer fractional shares, meaning you can start investing in US stocks with as little as $1–$10 USD (approximately 30–350 THB). However, a practical starting amount is around $500–$1,000 USD to allow meaningful diversification across multiple stocks or ETFs.",
    answerTh:
      "โบรกเกอร์หลายแห่งในปัจจุบันรองรับการซื้อหุ้นแบบเศษส่วน (Fractional Shares) ทำให้สามารถเริ่มลงทุนหุ้นอเมริกาได้ด้วยเงินเพียง 1-10 ดอลลาร์ (ประมาณ 30-350 บาท) อย่างไรก็ตามจำนวนเงินที่แนะนำสำหรับการเริ่มต้นจริงจังคือประมาณ 500-1,000 ดอลลาร์ เพื่อให้สามารถกระจายการลงทุนได้อย่างมีประสิทธิภาพ",
  },
  {
    question: "How can AI be used in investment analysis?",
    questionTh: "AI ช่วยวิเคราะห์การลงทุนได้อย่างไร?",
    answer:
      "AI can enhance investment analysis in several ways: screening thousands of stocks based on custom criteria in seconds, analyzing sentiment from news and social media to gauge market mood, identifying patterns in historical price data, automating portfolio rebalancing, and generating financial summaries from earnings reports. However, AI is a tool — sound investment judgment and risk management still require human expertise.",
    answerTh:
      "AI ช่วยยกระดับการวิเคราะห์การลงทุนได้หลายด้าน ได้แก่ การคัดกรองหุ้นหลายพันตัวตามเกณฑ์ที่กำหนดในไม่กี่วินาที การวิเคราะห์ sentiment จากข่าวและโซเชียลมีเดีย การหารูปแบบในข้อมูลราคาในอดีต การ rebalance พอร์ตอัตโนมัติ และการสรุปรายงาน earnings อย่างไรก็ตาม AI เป็นเพียงเครื่องมือ การตัดสินใจลงทุนและการบริหารความเสี่ยงยังต้องอาศัยความเชี่ยวชาญของมนุษย์",
  },
  {
    question: "What is investment analysis and why does it matter?",
    questionTh: "การวิเคราะห์การลงทุน (Investment Analysis) คืออะไร และสำคัญอย่างไร?",
    answer:
      "Investment analysis is the process of evaluating the attractiveness of an investment opportunity by examining financial statements, market conditions, valuation metrics, and risk factors. It matters because it helps investors make informed decisions, avoid overpaying for assets, and build portfolios aligned with their goals and risk tolerance. Good analysis distinguishes between a stock that is 'popular' and one that is genuinely undervalued.",
    answerTh:
      "การวิเคราะห์การลงทุนคือกระบวนการประเมินความน่าสนใจของโอกาสลงทุน โดยพิจารณาจากงบการเงิน สภาวะตลาด มูลค่าหุ้น และปัจจัยความเสี่ยง มีความสำคัญเพราะช่วยให้นักลงทุนตัดสินใจอย่างมีข้อมูล หลีกเลี่ยงการจ่ายราคาแพงเกินจริง และสร้างพอร์ตที่สอดคล้องกับเป้าหมายและความสามารถในการรับความเสี่ยง",
  },
  {
    question: "What are the key differences between investing in Thai stocks vs US stocks?",
    questionTh: "ความแตกต่างระหว่างการลงทุนหุ้นไทยและหุ้นอเมริกาคืออะไร?",
    answer:
      "US stocks offer access to the world's largest and most liquid market with companies like Apple, NVIDIA, and Microsoft. Key differences include: currency risk (THB/USD fluctuation), trading hours (US market opens at night Thai time), higher growth potential in tech sectors, different tax treatment for dividends, and a wider range of investment instruments including options and ETFs. Thai stocks offer familiarity, no currency risk, and access to local growth stories.",
    answerTh:
      "หุ้นสหรัฐช่วยให้เข้าถึงตลาดที่ใหญ่และมีสภาพคล่องสูงที่สุดในโลก ความแตกต่างหลักได้แก่ ความเสี่ยงจากอัตราแลกเปลี่ยน (THB/USD) เวลาซื้อขาย (ตลาดสหรัฐเปิดช่วงกลางคืนตามเวลาไทย) โอกาสเติบโตสูงในกลุ่ม tech การเสียภาษีจากเงินปันผลที่แตกต่างกัน และมีเครื่องมือลงทุนที่หลากหลายกว่า ขณะที่หุ้นไทยมีข้อดีคือคุ้นเคยกับธุรกิจ ไม่มีความเสี่ยงจากค่าเงิน และเข้าถึงโอกาสการเติบโตในประเทศ",
  },
];
