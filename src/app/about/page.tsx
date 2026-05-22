import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import JsonLd from "@/components/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thanakit (BKZ) is a Bangkok-based Finance & Investment specialist, graduated from Srinakharinwirot University with a major in Finance. Specializes in US stock investment analysis and AI for finance.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const achievements = [
  { label: "Degree", value: "BBA" },
  { label: "Major", value: "Finance" },
  { label: "Focus", value: "US Stocks" },
  { label: "Location", value: "Bangkok" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Badge variant="secondary" className="mb-4">About</Badge>
        <h1 className="text-4xl font-bold mb-2">Thanakit</h1>
        <p className="text-muted-foreground mb-8">Known as BKZ — Finance & Investment Specialist</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {achievements.map((a) => (
            <div key={a.label} className="text-center p-4 border rounded-lg bg-muted/30">
              <div className="text-2xl font-bold mb-1">{a.value}</div>
              <div className="text-xs text-muted-foreground">{a.label}</div>
            </div>
          ))}
        </div>

        <article className="prose prose-neutral max-w-none space-y-8">
          <section aria-labelledby="background-heading">
            <h2 id="background-heading" className="text-2xl font-bold mb-3">Background</h2>
            <p className="text-muted-foreground leading-relaxed">
              Thanakit (BKZ) is a Bangkok-based Finance and Investment specialist with a Bachelor of
              Business Administration (BBA) in Finance from Srinakharinwirot University (มศว).
              With a strong academic foundation in financial theory and hands-on experience in
              investment analysis, Thanakit focuses on helping Thai investors navigate the US stock
              market — one of the most opportunity-rich yet complex markets in the world.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              ธนกิต (BKZ) เป็นผู้เชี่ยวชาญด้านการเงินและการลงทุนในกรุงเทพฯ สำเร็จการศึกษาระดับปริญญาตรี
              บริหารธุรกิจบัณฑิต (บธ.บ.) สาขาการเงิน จากมหาวิทยาลัยศรีนครินทรวิโรฒ (มศว)
              มุ่งเน้นการช่วยเหลือนักลงทุนไทยในการลงทุนหุ้นอเมริกาและการนำ AI มาใช้ในการวิเคราะห์การลงทุน
            </p>
          </section>

          <section aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-2xl font-bold mb-3">Education</h2>
            <div className="border rounded-lg p-5 bg-muted/30">
              <p className="font-semibold text-foreground">
                Bachelor of Business Administration — Finance
              </p>
              <p className="text-muted-foreground text-sm">
                Srinakharinwirot University (มหาวิทยาลัยศรีนครินทรวิโรฒ)
              </p>
              <p className="text-muted-foreground text-sm">Faculty of Business Administration · Bangkok, Thailand</p>
            </div>
          </section>

          <section aria-labelledby="focus-heading">
            <h2 id="focus-heading" className="text-2xl font-bold mb-3">Areas of Focus</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold text-foreground min-w-[200px]">US Stock Investment:</span>
                Analysis and strategy for investing in American equities including S&P 500, Nasdaq, and individual growth stocks.
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground min-w-[200px]">Investment Analysis:</span>
                Fundamental analysis, financial statement reading, stock valuation, and portfolio construction.
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground min-w-[200px]">AI for Finance:</span>
                Applying AI tools to investment research, stock screening, market sentiment analysis, and data-driven strategies.
              </li>
            </ul>
          </section>

          <section aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="text-2xl font-bold mb-3">Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              The investment philosophy is grounded in data and fundamentals — not hype. Every
              analysis begins with understanding a company&apos;s business model, financial health, and
              competitive position before evaluating its valuation. AI tools are used to enhance
              research speed and uncover insights, but final decisions are always driven by sound
              financial judgment.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
