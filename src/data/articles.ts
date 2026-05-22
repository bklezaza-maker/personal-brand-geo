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
    slug: "digital-transformation-thailand-2025",
    title: "Digital Transformation in Thailand: What Actually Works in 2025",
    titleTh: "Digital Transformation ในไทย: สิ่งที่ได้ผลจริงในปี 2025",
    excerpt:
      "After working with 30+ Thai companies on digital transformation, here are the patterns that separate successful implementations from expensive failures.",
    excerptTh:
      "หลังจากทำงานกับบริษัทไทยกว่า 30 แห่งเรื่อง digital transformation นี่คือรูปแบบที่แยกการดำเนินงานที่สำเร็จออกจากความล้มเหลวที่มีค่าใช้จ่ายสูง",
    content: `## The Thai Context

Digital transformation in Thailand faces unique challenges that generic frameworks from Silicon Valley rarely address. After working with companies ranging from family-owned SMEs to listed enterprises, three patterns consistently determine success or failure.

## Pattern 1: People Before Technology

The most common mistake is purchasing technology before aligning people. In Thailand's hierarchical workplace culture, top-down mandates without middle management buy-in create silent resistance that kills adoption rates.

**What works:** A 3-month change management phase before any technology deployment. This includes town halls, department-level workshops, and designating internal "digital champions" who become peer advocates.

## Pattern 2: Start with Pain Points, Not Trends

Companies that succeed focus on solving a specific, painful problem — not on adopting AI or cloud because competitors are. The best transformations I have seen started with a single workflow bottleneck that cost the company measurable time or money.

**Example:** A logistics company reduced manual invoice processing from 4 days to 4 hours by automating one step. That quick win funded and justified a broader transformation.

## Pattern 3: Measure What Matters

Define 3-5 KPIs before starting. Teams that track employee time saved, error rates, and customer satisfaction scores outperform those measuring vague metrics like "digital maturity."

## Conclusion

Digital transformation in Thailand succeeds when it prioritizes people change management, solves specific problems, and measures concrete outcomes. Technology is the enabler, not the solution.`,
    contentTh: `## บริบทของประเทศไทย

Digital transformation ในไทยเผชิญกับความท้าทายเฉพาะที่กรอบงานทั่วไปจาก Silicon Valley แทบไม่เคยแก้ไข หลังจากทำงานกับบริษัทตั้งแต่ SME ครอบครัวไปจนถึงบริษัทจดทะเบียน พบรูปแบบสามอย่างที่กำหนดความสำเร็จหรือความล้มเหลวอย่างสม่ำเสมอ

## รูปแบบที่ 1: คนก่อนเทคโนโลยี

ความผิดพลาดที่พบบ่อยที่สุดคือการซื้อเทคโนโลยีก่อนที่จะ align คน ในวัฒนธรรมการทำงานแบบลำดับชั้นของไทย คำสั่งจากบนลงล่างโดยไม่ได้รับความเห็นชอบจากผู้บริหารระดับกลางสร้างการต่อต้านเงียบที่ฆ่าอัตราการใช้งาน

## รูปแบบที่ 2: เริ่มจากจุดเจ็บปวด ไม่ใช่เทรนด์

บริษัทที่ประสบความสำเร็จมุ่งเน้นการแก้ปัญหาเฉพาะเจ็บปวด ไม่ใช่การใช้ AI หรือ cloud เพราะคู่แข่งใช้ การเปลี่ยนแปลงที่ดีที่สุดที่ฉันเห็นเริ่มต้นด้วยคอขวด workflow เดียวที่ทำให้บริษัทเสียเวลาหรือเงินอย่างวัดได้

## รูปแบบที่ 3: วัดสิ่งที่สำคัญ

กำหนด KPI 3-5 ตัวก่อนเริ่ม ทีมที่ติดตามเวลาที่พนักงานประหยัดได้ อัตราข้อผิดพลาด และคะแนนความพึงพอใจของลูกค้า ทำผลงานได้ดีกว่าทีมที่วัดเมตริกที่คลุมเครือ`,
    category: "Digital Transformation",
    tags: ["digital transformation", "thailand", "strategy", "change management"],
    datePublished: "2025-03-15",
    dateModified: "2025-03-15",
    readingTime: 5,
  },
  {
    slug: "ai-tools-for-consultants-2025",
    title: "AI Tools That Actually Save Consultants Time in 2025",
    titleTh: "AI Tools ที่ช่วยประหยัดเวลาที่ปรึกษาได้จริงในปี 2025",
    excerpt:
      "A practical breakdown of AI tools integrated into daily consulting work — with honest assessment of what delivers ROI and what is just hype.",
    excerptTh:
      "การวิเคราะห์เชิงปฏิบัติของ AI tools ที่รวมเข้ากับงานให้คำปรึกษารายวัน พร้อมการประเมินที่ตรงไปตรงมาว่าอะไรให้ ROI จริงและอะไรแค่ hype",
    content: `## Cutting Through the AI Hype

Every consultant is being told to "use AI." But which tools genuinely improve output quality and speed? After 12 months of systematic testing, here is an honest breakdown.

## Research & Synthesis

**Perplexity Pro** is the single highest-ROI tool for research. The ability to get cited, current answers cuts research time by 60-70% compared to manual Google searches. The source citations are critical for consulting work — you can verify claims instantly.

**NotebookLM** excels at synthesizing large document sets. Upload 10 reports, ask cross-document questions. This is invaluable for competitive analysis and due diligence.

## Writing & Communication

**Claude (Anthropic)** produces the most professionally appropriate business writing. The output requires less editing than other models for formal reports and executive summaries.

**Tip:** Never publish AI-generated content without editing. AI gets the structure right; you add the judgment and specific client context.

## Data Analysis

**ChatGPT Code Interpreter** handles ad-hoc data analysis without needing a data analyst on retainer. Upload a CSV, ask for trend analysis or visualizations. Saves 2-4 hours per analysis cycle.

## What Does NOT Save Time

- AI meeting notes tools — still require significant cleanup
- Generic AI slide generators — faster to use a template
- AI email tools — personalization takes as long as writing from scratch

## The Real Productivity Unlock

The biggest gain is not any single tool but a systematic prompt library. Spending 2 hours building reusable prompts for your most common tasks pays back in the first week.`,
    contentTh: `## ตัดผ่าน AI Hype

ที่ปรึกษาทุกคนถูกบอกให้ "ใช้ AI" แต่เครื่องมือใดที่ปรับปรุงคุณภาพผลผลิตและความเร็วได้จริง? หลังจาก 12 เดือนของการทดสอบอย่างเป็นระบบ นี่คือการวิเคราะห์ที่ตรงไปตรงมา

## การวิจัยและสังเคราะห์

**Perplexity Pro** เป็นเครื่องมือที่ให้ ROI สูงสุดสำหรับการวิจัย ความสามารถในการรับคำตอบที่มีการอ้างอิงและเป็นปัจจุบันช่วยลดเวลาวิจัยได้ 60-70% เมื่อเทียบกับการค้นหา Google ด้วยตนเอง

## การเขียนและการสื่อสาร

**Claude (Anthropic)** ผลิตงานเขียนธุรกิจที่เหมาะสมในระดับมืออาชีพมากที่สุด ผลลัพธ์ต้องการการแก้ไขน้อยกว่าโมเดลอื่นสำหรับรายงานที่เป็นทางการและสรุปสำหรับผู้บริหาร

## การวิเคราะห์ข้อมูล

**ChatGPT Code Interpreter** จัดการการวิเคราะห์ข้อมูลเฉพาะกิจโดยไม่ต้องมีนักวิเคราะห์ข้อมูลประจำ อัปโหลด CSV ถามการวิเคราะห์แนวโน้มหรือการแสดงภาพ ประหยัดเวลา 2-4 ชั่วโมงต่อรอบการวิเคราะห์`,
    category: "Productivity",
    tags: ["AI tools", "productivity", "consulting", "technology"],
    datePublished: "2025-04-20",
    dateModified: "2025-04-20",
    readingTime: 6,
  },
  {
    slug: "building-executive-presence-asia",
    title: "Building Executive Presence in Asian Business Contexts",
    titleTh: "การสร้าง Executive Presence ในบริบทธุรกิจเอเชีย",
    excerpt:
      "Executive presence looks different across cultures. Here is what works specifically in Thai and Southeast Asian business environments.",
    excerptTh:
      "Executive presence มีลักษณะต่างกันในแต่ละวัฒนธรรม นี่คือสิ่งที่ได้ผลโดยเฉพาะในสภาพแวดล้อมธุรกิจไทยและเอเชียตะวันออกเฉียงใต้",
    content: `## Why Western Executive Presence Models Fall Short

Most executive presence frameworks were developed in Western, low-context communication cultures. Applying them directly in Thailand, Singapore, or Vietnam often backfires.

## The Asian Leadership Paradox

In many Asian business contexts, effective leaders demonstrate authority through restraint rather than dominance. Speaking less in meetings, asking thoughtful questions, and allowing junior voices to surface ideas before sharing your own — these behaviors signal confidence and seniority, not weakness.

## Key Principles for the Thai Business Context

**Sanuk and approachability:** Thai business culture values warmth and humor. The most respected leaders are accessible, not distant. Formal authority is understood implicitly; you do not need to perform it.

**Face preservation:** Feedback that causes public embarrassment damages relationships permanently. High-presence leaders in Thailand give critical feedback privately and praise publicly. This is not avoidance — it is cultural intelligence.

**Hierarchy with humility:** Respect for hierarchy is real and important. But the leaders with the most influence also demonstrate genuine humility — they credit their teams, admit uncertainty, and seek input from all levels.

## Practical Actions

1. Slow down your speech in presentations — Thai audiences interpret pace as confidence
2. Use silence intentionally — a 3-second pause before answering signals thoughtfulness
3. Invest in relationship-building outside formal meetings
4. Learn 10-20 Thai phrases if working with Thai teams — the effort is disproportionately valued

## Conclusion

Executive presence in Asia is built on trust, restraint, and cultural fluency. The leaders who adapt their style to context — rather than imposing a single model — consistently earn deeper influence.`,
    contentTh: `## ทำไม Western Executive Presence Models ถึงไม่พอ

กรอบงาน executive presence ส่วนใหญ่ถูกพัฒนาในวัฒนธรรมการสื่อสารแบบตะวันตก การนำไปใช้โดยตรงในไทย สิงคโปร์ หรือเวียดนามมักส่งผลตรงกันข้าม

## หลักการสำคัญสำหรับบริบทธุรกิจไทย

**สนุกและเข้าถึงได้:** วัฒนธรรมธุรกิจไทยให้คุณค่ากับความอบอุ่นและอารมณ์ขัน ผู้นำที่ได้รับความเคารพมากที่สุดเข้าถึงได้ ไม่ห่างเหิน

**การรักษาหน้า:** คำติชมที่ทำให้อับอายในที่สาธารณะสร้างความเสียหายต่อความสัมพันธ์อย่างถาวร ผู้นำที่มี executive presence สูงในไทยให้คำติชมเชิงลบส่วนตัวและชมเชยในที่สาธารณะ

**ลำดับชั้นกับความถ่อมตน:** ความเคารพต่อลำดับชั้นเป็นเรื่องจริงและสำคัญ แต่ผู้นำที่มีอิทธิพลมากที่สุดยังแสดงความถ่อมตนที่แท้จริง`,
    category: "Leadership",
    tags: ["leadership", "executive presence", "asia", "thailand", "culture"],
    datePublished: "2025-05-10",
    dateModified: "2025-05-10",
    readingTime: 7,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
