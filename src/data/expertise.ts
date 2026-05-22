export type ExpertiseItem = {
  title: string;
  titleTh: string;
  description: string;
  descriptionTh: string;
  skills: string[];
};

export const expertise: ExpertiseItem[] = [
  {
    title: "Strategic Consulting",
    titleTh: "ที่ปรึกษาเชิงกลยุทธ์",
    description:
      "Helping organizations define and execute winning strategies through data-driven analysis and industry expertise.",
    descriptionTh:
      "ช่วยองค์กรกำหนดและดำเนินกลยุทธ์ที่ชนะผ่านการวิเคราะห์ข้อมูลและความเชี่ยวชาญในอุตสาหกรรม",
    skills: ["Business Strategy", "Market Analysis", "Competitive Intelligence", "Growth Planning"],
  },
  {
    title: "Digital Transformation",
    titleTh: "การเปลี่ยนแปลงสู่ดิจิทัล",
    description:
      "Guiding companies through digital transformation journeys to increase efficiency and unlock new revenue streams.",
    descriptionTh:
      "นำพาบริษัทผ่านกระบวนการ digital transformation เพื่อเพิ่มประสิทธิภาพและสร้างรายได้ใหม่",
    skills: ["Process Automation", "AI Integration", "Change Management", "Technology Adoption"],
  },
  {
    title: "Leadership Development",
    titleTh: "พัฒนาภาวะผู้นำ",
    description:
      "Building high-performance leadership teams through coaching, training, and organizational development programs.",
    descriptionTh:
      "สร้างทีมผู้นำที่มีประสิทธิภาพสูงผ่านการโค้ช การฝึกอบรม และโปรแกรมพัฒนาองค์กร",
    skills: ["Executive Coaching", "Team Building", "Leadership Training", "Culture Design"],
  },
];
