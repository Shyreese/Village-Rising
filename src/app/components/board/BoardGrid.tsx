import { BoardMemberCard } from "./BoardMemberCard";
import imgContainer from "../../../assets/75c03813d4a94881b4de7c6080acd2bffa437309.png";
import imgContainer1 from "../../../assets/3811fa8ea5875c75af4581dbfa94b1b2adfb0e22.png";
import imgContainer2 from "../../../assets/12d4a28f24013bf83891d502f621748e295002fe.png";
import imgContainer3 from "../../../assets/ffbefa8e8f2768f05fa8505df5da48e2afc43f92.png";
import imgContainer4 from "../../../assets/1258c71b3b838150a3af0614d2797e05552cafe9.png";
import imgContainer5 from "../../../assets/88abf02c29e161416516325b9c3d498dee4bfbec.png";

const boardMembers = [
  {
    name: "Shyreese Tyiska",
    title: "Executive Director",
    bio: "Shyreese leads Village Rising’s early learning programs, supporting children’s development while partnering with families to build strong foundations for long-term success. Her approach reflects the organization’s belief in connection as the foundation of thriving communities.",
    image: imgContainer,
  },
  {
    name: "Paskael Tyiska Jr.",
    title: "Chief Operating Officer (COO)",
    bio: "As Executive Director of Village Rising, Paskael leads programs and partnerships that connect families to resources and opportunities. His work is guided by integrity, service, and a commitment to strengthening family stability and community growth.",
    image: imgContainer1,
  },
  {
    name: "Domoniquic McPherson",
    title: "Community Engagement & Advocacy Coordinator",
    bio: "Domoniquic supports Village Rising as Community Engagement & Advocacy Coordinator, bringing 6 years of dedicated experience at the intersection of advocacy, program coordination, and civic engagement. With a proven background in community organizing, stakeholder collaboration, and service navigation, he excels at forging strategic partnerships and delivering wraparound services that address complex social needs. Grounded in lived experience and a commitment to equity, Domoniquic’s empathetic and results-driven leadership ensures programs are accessible, accountable, and sustainable.",
    image: imgContainer2,
  },
  {
    name: "Kristina Phillips",
    title: "Program Advisor",
    bio: "Kristina Phillips serves as a Program Advisor for Village Rising, bringing over 16 years of healthcare and regulatory leadership combined with more than 10 years of dedicated community and ministry service. As Practice Manager and Community Engagement Strategist at an oncology care center, she excels in optimizing operations, building partnerships, and aligning people, processes, and programs to drive mission-driven growth and support underserved populations.",
    image: imgContainer3,
  },
  {
    name: "Tyrone Jackson",
    title: "Financial Advisor",
    bio: "Tyrone C. Jackson serves as Chief Financial Officer and Board Member for Village Rising, drawing on over 50 years of combined public- and private-sector leadership in finance, operations, and management. With more than 30 years at California’s Franchise Tax Board as Administrator I and 20+ years managing fast-food operations, he brings expertise in compliance, team leadership, and operational efficiency. Committed to fiscal responsibility and community impact, Tyrone strengthens Village Rising’s financial transparency and long-term sustainability while co-owning INCHES Safety Solutions LLC.",
    image: imgContainer4,
  },
  {
    name: "Lucile Jackson",
    title: "Director of Resources",
    bio: "Lucile J. Jackson serves as Director of Resources for Village Rising, bringing over 15 years of experience in nonprofit leadership, resource development, and community safety education. Her background includes strategic planning, organizational operations, workforce training, and cross-sector partnerships, with a strong focus on building sustainable systems that expand access to critical resources for families and underserved communities. Her work reflects Village Rising’s commitment to accountability, empowerment, and long-term community resilience.",
    image: imgContainer5,
  },
];

export function BoardGrid() {
  return (
    <section className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {boardMembers.map((member) => (
          <BoardMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
