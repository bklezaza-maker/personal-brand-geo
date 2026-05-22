export type Faq = {
  question: string;
  questionTh: string;
  answer: string;
  answerTh: string;
};

export const faqs: Faq[] = [
  {
    question: "What services do you offer?",
    questionTh: "คุณให้บริการอะไรบ้าง?",
    answer:
      "I offer consulting, speaking engagements, workshops, and advisory services focused on [your field]. Each engagement is tailored to the client's specific needs and goals.",
    answerTh:
      "ให้บริการให้คำปรึกษา พูดบรรยาย จัดอบรม และให้คำแนะนำในด้าน [สาขาของคุณ] โดยปรับให้เหมาะสมกับความต้องการของแต่ละลูกค้า",
  },
  {
    question: "How many years of experience do you have?",
    questionTh: "คุณมีประสบการณ์กี่ปี?",
    answer:
      "I have over 10 years of experience in [your field], working with companies ranging from startups to Fortune 500 enterprises across Southeast Asia.",
    answerTh:
      "มีประสบการณ์มากกว่า 10 ปีในด้าน [สาขาของคุณ] ทำงานร่วมกับบริษัทตั้งแต่ startup ไปจนถึงองค์กรขนาดใหญ่ทั่วเอเชียตะวันออกเฉียงใต้",
  },
  {
    question: "Do you offer remote consulting?",
    questionTh: "คุณให้คำปรึกษาออนไลน์ได้ไหม?",
    answer:
      "Yes, I offer both in-person and remote consulting sessions via video call. Remote sessions are available for clients worldwide.",
    answerTh:
      "ใช่ครับ ให้บริการทั้งแบบพบปะและออนไลน์ผ่านวิดีโอคอล โดยบริการออนไลน์รองรับลูกค้าทั่วโลก",
  },
  {
    question: "How can I book a consultation?",
    questionTh: "จะจองคิวปรึกษาได้อย่างไร?",
    answer:
      "You can book a consultation by emailing me directly or filling out the contact form on this website. I typically respond within 24 hours.",
    answerTh:
      "สามารถจองคิวได้โดยอีเมลโดยตรงหรือกรอกแบบฟอร์มติดต่อบนเว็บไซต์นี้ โดยปกติจะตอบกลับภายใน 24 ชั่วโมง",
  },
  {
    question: "What industries have you worked with?",
    questionTh: "คุณเคยทำงานกับอุตสาหกรรมอะไรบ้าง?",
    answer:
      "I have worked across technology, finance, healthcare, retail, and education sectors. My cross-industry experience enables me to bring fresh perspectives to each client.",
    answerTh:
      "เคยทำงานในอุตสาหกรรมเทคโนโลยี การเงิน สาธารณสุข ค้าปลีก และการศึกษา ประสบการณ์หลากหลายอุตสาหกรรมช่วยให้มองปัญหาจากมุมที่แตกต่าง",
  },
];
