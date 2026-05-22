export type Article = {
  slug: string;
  title: string;
  titleTh: string;
  excerpt: string;
  excerptTh: string;
  content: string;
  contentTh: string;
  category: string;
  tags: string[];
  datePublished: string;
  dateModified: string;
  readingTime: number;
};

export const articles: Article[] = [
  {
    slug: "หุ้นเมกาสำหรับมือใหม่",
    title: "US Stocks for Beginners: Everything Thai Investors Need to Know",
    titleTh: "หุ้นเมกาสำหรับมือใหม่: ทุกอย่างที่นักลงทุนไทยต้องรู้",
    excerpt:
      "Want to invest in US stocks but don't know where to start? This guide covers everything from opening an account to picking your first stock — written specifically for Thai investors.",
    excerptTh:
      "อยากลงทุนหุ้นอเมริกาแต่ไม่รู้จะเริ่มยังไง? คู่มือนี้ครอบคลุมทุกอย่างตั้งแต่เปิดบัญชีไปจนถึงการเลือกหุ้นตัวแรก เขียนสำหรับนักลงทุนไทยโดยเฉพาะ",
    contentTh: `## หุ้นเมกาคืออะไร และทำไมนักลงทุนไทยถึงสนใจ?

หุ้นเมกา คือหุ้นที่ซื้อขายในตลาดหลักทรัพย์สหรัฐอเมริกา ไม่ว่าจะเป็น NYSE หรือ Nasdaq ซึ่งเป็นที่อยู่ของบริษัทชื่อดังอย่าง Apple, NVIDIA, Microsoft, Amazon และ Tesla

นักลงทุนไทยสนใจหุ้นเมกาเพราะ 3 เหตุผลหลัก:
- **ขนาดตลาด:** ตลาดหุ้นสหรัฐมีมูลค่ารวมกว่า 40 ล้านล้านดอลลาร์ ใหญ่ที่สุดในโลก
- **บริษัทโลก:** เข้าถึงบริษัทเทคโนโลยีที่เปลี่ยนโลก ซึ่งไม่มีในตลาดไทย
- **ผลตอบแทนในอดีต:** S&P 500 ดัชนีหลักของสหรัฐ ให้ผลตอบแทนเฉลี่ยประมาณ 10% ต่อปีในระยะยาว

## เปิดบัญชีซื้อหุ้นเมกาได้ที่ไหน?

สำหรับนักลงทุนไทย มีตัวเลือกหลักอยู่ 2 กลุ่ม:

**กลุ่มที่ 1 — โบรกเกอร์ไทย (สะดวก เหมาะมือใหม่)**
- **Invest by KASIKORN (KPLUS)** — เปิดบัญชีผ่านแอปได้เลย ไม่ต้องมีเอกสารเพิ่ม
- **SCB Easy Invest** — รองรับหุ้นสหรัฐ เหมาะคนที่มีบัญชี SCB อยู่แล้ว
- **Jitta Wealth** — เน้น ETF และพอร์ตอัตโนมัติ เหมาะคนที่ไม่อยากเลือกหุ้นเอง

**กลุ่มที่ 2 — โบรกเกอร์ต่างประเทศ (ค่าธรรมเนียมถูกกว่า เหมาะมือเก่า)**
- **Interactive Brokers** — ค่าธรรมเนียมต่ำมาก เหมาะคนลงทุนจริงจัง
- **Webull** — มีแอปใช้งานง่าย เหมาะคนชอบดู chart

## เริ่มด้วยเงินเท่าไหร่ดี?

ไม่มีขั้นต่ำตายตัว แต่แนะนำดังนี้:
- **มือใหม่จริงๆ:** เริ่ม 5,000–10,000 บาท เพื่อเรียนรู้ระบบก่อน
- **อยากกระจายพอร์ตจริงจัง:** ควรมีอย่างน้อย 15,000–30,000 บาท เพื่อซื้อได้หลายตัว
- **เน้น ETF ดัชนี:** ไม่มีขั้นต่ำ เพราะหลายโบรกเกอร์รองรับ Fractional Shares

## ควรเริ่มซื้ออะไรก่อน?

สำหรับมือใหม่ แนะนำเริ่มด้วย **ETF ดัชนี** ก่อนเลือกหุ้นรายตัว:

- **VOO / SPY** — ETF ที่ติดตาม S&P 500 กระจายความเสี่ยงใน 500 บริษัทชั้นนำ
- **QQQ** — ETF ที่ติดตาม Nasdaq 100 เน้นหุ้นเทคโนโลยี

เมื่อเข้าใจตลาดพอแล้ว ค่อยขยับมาเลือกหุ้นรายตัวอย่าง Apple (AAPL), NVIDIA (NVDA) หรือ Microsoft (MSFT)

## สิ่งที่ต้องรู้ก่อนลงทุน

**1. ความเสี่ยงค่าเงิน (Currency Risk)**
เงินบาทและดอลลาร์ขึ้นลงไม่พร้อมกัน ถ้าค่าบาทแข็งขึ้น กำไรจากหุ้นอาจหายไปบางส่วนเมื่อแปลงกลับ

**2. เวลาซื้อขาย**
ตลาดหุ้นสหรัฐเปิด 21:30–04:00 น. (ตามเวลาไทย) ช่วง Summer และ 22:30–05:00 น. ช่วง Winter

**3. ภาษีเงินปันผล**
เงินปันผลจากหุ้นสหรัฐถูกหักภาษี ณ ที่จ่าย 30% สำหรับนักลงทุนต่างชาติ ควรคำนึงถึงเมื่อเลือกหุ้น

## สรุป

หุ้นเมกาเปิดโอกาสให้นักลงทุนไทยเข้าถึงบริษัทที่ดีที่สุดในโลก เริ่มต้นได้ด้วยเงินไม่มาก ผ่านโบรกเกอร์ไทยที่ใช้งานง่าย แนะนำให้เริ่มจาก ETF ดัชนีอย่าง VOO หรือ SPY ก่อน แล้วค่อยเรียนรู้การเลือกหุ้นรายตัวเมื่อมีความเข้าใจมากขึ้น

*หมายเหตุ: ข้อมูลนี้เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุน กรุณาศึกษาข้อมูลเพิ่มเติมและรับความเสี่ยงที่ยอมรับได้ก่อนลงทุนทุกครั้ง*`,
    content: `## What Are US Stocks and Why Do Thai Investors Care?

US stocks are shares traded on American exchanges — NYSE and Nasdaq — home to global giants like Apple, NVIDIA, Microsoft, Amazon, and Tesla.

Thai investors are drawn to US stocks for three main reasons:
- **Market size:** The US stock market is worth over $40 trillion — the largest in the world
- **Global companies:** Access to tech companies reshaping the world, unavailable on Thai exchanges
- **Historical returns:** The S&P 500 has delivered approximately 10% average annual returns over the long term

## Where to Open a US Stock Brokerage Account

Thai investors have two main groups of options:

**Group 1 — Thai Brokers (convenient, great for beginners)**
- **Invest by KASIKORN (KPLUS)** — Open via app instantly
- **SCB Easy Invest** — Supports US stocks, ideal for SCB account holders
- **Jitta Wealth** — Focuses on ETFs and automated portfolios

**Group 2 — International Brokers (lower fees, for experienced investors)**
- **Interactive Brokers** — Very low commission, ideal for serious investors
- **Webull** — Easy-to-use app, good for chart analysis

## How Much Do You Need to Start?

- **Complete beginners:** 5,000–10,000 THB to learn the system
- **Serious diversification:** At least 15,000–30,000 THB for multiple positions
- **Index ETF only:** No real minimum — most brokers support fractional shares

## What Should You Buy First?

For beginners, start with **index ETFs** before picking individual stocks:
- **VOO / SPY** — Track the S&P 500, diversified across 500 leading companies
- **QQQ** — Tracks Nasdaq 100, tech-focused

Once comfortable, move to individual stocks like Apple (AAPL), NVIDIA (NVDA), or Microsoft (MSFT).

## Key Risks to Understand

**Currency Risk:** THB/USD fluctuations can affect returns when converting back to baht.

**Trading Hours:** US market opens 9:30 PM–4:00 AM Bangkok time (summer) — plan accordingly.

**Dividend Tax:** US dividends are subject to 30% withholding tax for foreign investors.

## Summary

US stocks give Thai investors access to the world's best companies with relatively low barriers to entry. Start with index ETFs like VOO or SPY, use a Thai broker for simplicity, and build your knowledge before selecting individual stocks.

*Disclaimer: This content is for educational purposes only and does not constitute investment advice.*`,
    category: "หุ้นเมกา",
    tags: ["หุ้นเมกา", "US stocks", "มือใหม่", "การลงทุน", "S&P 500", "ETF", "นักลงทุนไทย"],
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    readingTime: 5,
  },
  {
    slug: "ใช้-ai-วิเคราะห์หุ้นเมกา",
    title: "Can AI Really Analyze US Stocks? A Practical Test for Thai Investors",
    titleTh: "ใช้ AI วิเคราะห์หุ้นเมกาได้จริงไหม? ทดสอบจริงสำหรับนักลงทุนไทย",
    excerpt:
      "ChatGPT, Claude, and Perplexity can all help analyze US stocks — but each has different strengths and blind spots. Here is what actually works and what to avoid.",
    excerptTh:
      "ChatGPT, Claude และ Perplexity ช่วยวิเคราะห์หุ้นอเมริกาได้จริง แต่แต่ละตัวมีจุดแข็งและข้อจำกัดต่างกัน นี่คือสิ่งที่ได้ผลจริงและสิ่งที่ควรระวัง",
    contentTh: `## AI วิเคราะห์หุ้นได้จริงไหม?

คำตอบสั้นๆ คือ **ได้ — แต่ต้องรู้วิธีใช้** AI ไม่สามารถทำนายราคาหุ้นได้ แต่ช่วยประหยัดเวลาวิจัยได้มหาศาล ถ้าใช้ถูกวิธี

## AI แต่ละตัวเหมาะกับงานไหน?

**ChatGPT (GPT-4o)**
เหมาะสำหรับ: อธิบายงบการเงิน สรุป earnings report และตอบคำถามทั่วไปเกี่ยวกับธุรกิจ
ข้อจำกัด: ข้อมูลราคาหุ้น real-time ไม่แม่นยำ อย่าถามราคาปัจจุบัน

**Claude (Anthropic)**
เหมาะสำหรับ: วิเคราะห์เอกสารยาว เช่น 10-K Annual Report หรือ Earnings Call Transcript อ่านได้ทีละหลายหน้า
ข้อจำกัด: ไม่มีข้อมูล real-time เช่นกัน

**Perplexity AI**
เหมาะสำหรับ: ค้นหาข่าวล่าสุด อ่านข้อมูลจากหลายแหล่งพร้อมกัน มีการอ้างอิง source ชัดเจน
ข้อจำกัด: วิเคราะห์เชิงลึกได้น้อยกว่า ChatGPT และ Claude

## วิธีใช้ AI วิเคราะห์หุ้นจริงๆ (Step-by-Step)

**ขั้นตอนที่ 1 — หาข้อมูลพื้นฐานบริษัท**
พิมพ์ใน Perplexity: *"NVIDIA Q1 2025 earnings results and analyst outlook"*
ได้ข้อมูลล่าสุดพร้อม source ภายใน 10 วินาที แทนที่จะต้องอ่านข่าว 30 นาที

**ขั้นตอนที่ 2 — วิเคราะห์งบการเงิน**
Copy ตัวเลขจาก Macrotrends.net หรือ Wisesheets แล้ว paste ให้ Claude หรือ ChatGPT:
*"วิเคราะห์ Revenue Growth, Net Margin และ P/E Ratio ของ NVDA เทียบกับ AMD ให้หน่อย"*

**ขั้นตอนที่ 3 — ประเมิน Valuation**
ถาม ChatGPT: *"ถ้า NVIDIA มี EPS คาดการณ์ที่ $3.50 และ Forward P/E ที่ 35x ราคาเป้าหมายควรอยู่ที่เท่าไหร่?"*
AI จะช่วยคำนวณและอธิบายสมมติฐาน แต่คุณต้องตรวจสอบตัวเลขเองเสมอ

**ขั้นตอนที่ 4 — ตรวจสอบ Sentiment**
ถาม Perplexity: *"What are analysts saying about Apple stock in May 2026?"*
ดู consensus ของ Wall Street ว่า Buy / Hold / Sell

## สิ่งที่ AI ทำได้ดี vs ทำไม่ได้

| ทำได้ดี | ทำไม่ได้ |
|---------|---------|
| สรุป earnings report | ทำนายราคาพรุ่งนี้ |
| อธิบายงบการเงิน | รู้ราคาหุ้น real-time |
| เปรียบเทียบหุ้น 2 ตัว | รับผิดชอบผลการลงทุน |
| แปล SEC filing เป็นภาษาง่าย | วิเคราะห์ insider trading |
| ช่วยสร้าง watchlist | การันตีผลตอบแทน |

## สรุป

AI เป็นผู้ช่วยวิจัยที่ดีมาก ไม่ใช่ที่ปรึกษาการลงทุน ใช้ Perplexity หาข่าว ใช้ Claude หรือ ChatGPT วิเคราะห์งบการเงิน แต่การตัดสินใจซื้อ-ขายยังต้องอาศัยความเข้าใจของคุณเอง ไม่มี AI ตัวไหนรับผิดชอบแทนได้

*หมายเหตุ: ข้อมูลนี้เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุน*`,
    content: `## Can AI Really Analyze Stocks?

The short answer: **yes — but you need to know how to use it.** AI cannot predict stock prices, but it can dramatically cut research time when used correctly.

## Which AI Tool for Which Task?

**ChatGPT (GPT-4o)** — Best for explaining financial statements, summarizing earnings reports, and answering general business questions. Avoid asking for real-time prices.

**Claude (Anthropic)** — Best for analyzing long documents like 10-K Annual Reports or Earnings Call Transcripts. Can process dozens of pages at once.

**Perplexity AI** — Best for finding the latest news with source citations. Pulls from multiple sources simultaneously with clear references.

## Step-by-Step: How to Use AI for Stock Research

**Step 1 — Get company fundamentals fast**
Type in Perplexity: *"NVIDIA Q1 2025 earnings results and analyst outlook"*
Get sourced, current information in 10 seconds instead of 30 minutes of reading.

**Step 2 — Analyze financial statements**
Copy numbers from Macrotrends.net, paste into Claude or ChatGPT:
*"Analyze NVDA's Revenue Growth, Net Margin, and P/E Ratio vs AMD"*

**Step 3 — Estimate valuation**
Ask ChatGPT: *"If NVIDIA has a forward EPS of $3.50 and trades at 35x forward P/E, what is the implied price target?"*
AI calculates and explains assumptions — always verify the numbers yourself.

**Step 4 — Check analyst sentiment**
Ask Perplexity: *"What are analysts saying about Apple stock in May 2026?"*
See Wall Street consensus: Buy / Hold / Sell.

## What AI Can and Cannot Do

| Can Do | Cannot Do |
|--------|-----------|
| Summarize earnings reports | Predict tomorrow's price |
| Explain financial statements | Access real-time prices |
| Compare two stocks | Guarantee returns |
| Translate SEC filings simply | Analyze insider trading |

## Summary

AI is an excellent research assistant — not an investment advisor. Use Perplexity for news, Claude or ChatGPT for financial analysis. The final buy or sell decision always requires your own judgment. No AI can take responsibility for your portfolio.

*Disclaimer: For educational purposes only. Not investment advice.*`,
    category: "AI & การลงทุน",
    tags: ["AI", "หุ้นเมกา", "ChatGPT", "Claude", "Perplexity", "วิเคราะห์หุ้น", "นักลงทุนไทย"],
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    readingTime: 5,
  },
  {
    slug: "อ่านงบการเงินหุ้นเมกา-30-นาที",
    title: "How to Read US Stock Financial Statements in 30 Minutes",
    titleTh: "อ่านงบการเงินหุ้นเมกาเป็นใน 30 นาที ฉบับนักลงทุนไทย",
    excerpt:
      "You don't need an accounting degree to read US stock financials. This 30-minute framework covers the 5 numbers that matter most — and where to find them for free.",
    excerptTh:
      "ไม่ต้องจบบัญชีก็อ่านงบการเงินหุ้นเมกาได้ คู่มือนี้ครอบคลุม 5 ตัวเลขสำคัญที่สุด พร้อมแหล่งข้อมูลฟรีที่หาได้ทันที",
    contentTh: `## ทำไมต้องอ่านงบการเงิน?

งบการเงินคือ "รายงานสุขภาพ" ของบริษัท ก่อนซื้อหุ้นตัวไหนก็ตาม การดูตัวเลขพื้นฐาน 5 อย่างใช้เวลาไม่ถึง 30 นาที แต่ลดความเสี่ยงในการซื้อหุ้นผิดตัวได้มาก

## หาข้อมูลได้ที่ไหนฟรี?

ก่อนเริ่มต้องรู้แหล่งข้อมูล:
- **Macrotrends.net** — ข้อมูลงบการเงินย้อนหลัง 10 ปี ฟรี ใช้งานง่ายที่สุด
- **Stockanalysis.com** — สรุปตัวเลขสำคัญครบ เหมาะมือใหม่
- **SEC.gov** — งบการเงินต้นฉบับจากบริษัทโดยตรง (10-K, 10-Q)

## 5 ตัวเลขที่ต้องดูใน 30 นาที

**1. Revenue (รายได้รวม) — ใช้เวลา 3 นาที**
ดูว่ารายได้เติบโตหรือหดตัวในช่วง 3-5 ปีที่ผ่านมา บริษัทที่ดีควรมี Revenue Growth สม่ำเสมอ
ตัวอย่าง: Apple มีรายได้ปี 2023 อยู่ที่ประมาณ 383,000 ล้านดอลลาร์

**2. Net Profit Margin (กำไรสุทธิ %) — ใช้เวลา 3 นาที**
คำนวณจาก Net Income ÷ Revenue × 100
ค่าที่ดี: เทคโนโลยี > 15%, ค้าปลีก > 3-5%
ตัวอย่าง: NVIDIA มี Net Margin สูงกว่า 50% ในปี 2024

**3. EPS (กำไรต่อหุ้น) — ใช้เวลา 5 นาที**
Earnings Per Share บอกว่าบริษัทสร้างกำไรได้กี่ดอลลาร์ต่อหุ้น ดูแนวโน้ม EPS 3 ปีว่าเพิ่มขึ้นหรือไม่
ถ้า EPS เพิ่มขึ้นสม่ำเสมอ แปลว่าธุรกิจแข็งแกร่งขึ้น

**4. P/E Ratio (ราคาต่อกำไร) — ใช้เวลา 5 นาที**
Price ÷ EPS = P/E Ratio บอกว่าคุณจ่ายเงินกี่บาทต่อกำไร 1 บาท
- P/E ต่ำ: อาจถูก (หรือธุรกิจมีปัญหา)
- P/E สูง: ตลาดคาดการณ์การเติบโตสูง
เปรียบเทียบ P/E กับคู่แข่งในอุตสาหกรรมเดียวกันเสมอ

**5. Debt-to-Equity Ratio (ภาระหนี้สิน) — ใช้เวลา 5 นาที**
หนี้สินรวม ÷ ส่วนของผู้ถือหุ้น ยิ่งต่ำยิ่งดี
- ต่ำกว่า 1.0: บริษัทมีหนี้น้อย มั่นคง
- สูงกว่า 2.0: ต้องระวัง โดยเฉพาะช่วงดอกเบี้ยสูง

## เปรียบเทียบกับคู่แข่ง (10 นาทีที่เหลือ)

อย่าดูตัวเลขบริษัทเดียว ให้เปรียบเทียบกับคู่แข่งในอุตสาหกรรมเดียวกันเสมอ
ตัวอย่าง: ถ้าวิเคราะห์ AMD ต้องเทียบกับ NVIDIA และ Intel ด้วย

ใช้ Stockanalysis.com แล้วกด "Compare" ได้เลย

## สรุปใน 1 ประโยค

บริษัทที่น่าลงทุนมักมี: **รายได้เติบโต + กำไร margin สูง + EPS เพิ่มขึ้น + หนี้ต่ำ + P/E สมเหตุสมผล**

ถ้าครบ 5 ข้อ ค่อยศึกษาเรื่อง Valuation และ Competitive Moat ต่อไป

*หมายเหตุ: ข้อมูลนี้เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุน*`,
    content: `## Why Read Financial Statements?

Financial statements are a company's "health report." Checking 5 key numbers takes under 30 minutes but dramatically reduces the risk of buying the wrong stock.

## Where to Find Free Data

- **Macrotrends.net** — 10 years of financial data, free and easy to use
- **Stockanalysis.com** — Key metrics summarized, ideal for beginners
- **SEC.gov** — Original filings directly from companies (10-K, 10-Q)

## The 5 Numbers to Check in 30 Minutes

**1. Revenue — 3 minutes**
Check if revenue has grown consistently over 3–5 years. A strong company shows steady growth.
Example: Apple reported approximately $383 billion in revenue for 2023.

**2. Net Profit Margin — 3 minutes**
Formula: Net Income ÷ Revenue × 100
Benchmarks: Tech > 15%, Retail > 3–5%
Example: NVIDIA's Net Margin exceeded 50% in 2024.

**3. EPS (Earnings Per Share) — 5 minutes**
Shows profit generated per share. Track the 3-year trend — rising EPS signals a strengthening business.

**4. P/E Ratio — 5 minutes**
Price ÷ EPS = P/E Ratio. Tells you how much you pay per $1 of earnings.
- Low P/E: potentially cheap (or business has problems)
- High P/E: market expects strong growth
Always compare P/E to industry peers, never in isolation.

**5. Debt-to-Equity Ratio — 5 minutes**
Total Debt ÷ Shareholders' Equity. Lower is safer.
- Below 1.0: low debt, financially stable
- Above 2.0: exercise caution, especially in high-interest environments

## Compare vs Competitors (remaining 10 minutes)

Never analyze a company in isolation. Always compare against sector peers.
Example: Analyzing AMD? Compare with NVIDIA and Intel too.
Use Stockanalysis.com → "Compare" feature.

## One-Line Summary

A strong stock typically has: **growing revenue + high profit margin + rising EPS + low debt + reasonable P/E**

If all 5 check out, move on to studying Valuation and Competitive Moat.

*Disclaimer: For educational purposes only. Not investment advice.*`,
    category: "วิเคราะห์หุ้น",
    tags: ["งบการเงิน", "financial statements", "หุ้นเมกา", "P/E ratio", "EPS", "วิเคราะห์หุ้น", "นักลงทุนไทย"],
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    readingTime: 5,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
