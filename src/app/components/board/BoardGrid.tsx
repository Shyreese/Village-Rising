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
    bio: "Shyreese brings over 15 years of nonprofit leadership experience to Village Rising. She founded the organization in 2016 with a vision to create comprehensive, integrated support systems for families in need. Under her leadership, Village Rising has grown from a grassroots volunteer effort into a robust organization serving thousands of families annually. Sarah holds a Master's degree in Social Work from State University and previously served as Program Director at Community Services Coalition. She is passionate about creating pathways to long-term stability for families and believes deeply in the power of community-driven solutions. When not working, Sarah enjoys hiking with her family and volunteering at the local food bank.",
    image: imgContainer,
  },
  {
    name: "Paskael Tyiska Jr.",
    title: "Chief Operating Officer (COO)",
    bio: "Paskael oversees all program operations at Village Rising, ensuring quality service delivery and continuous improvement across all initiatives. With a Master's in Social Work and over 10 years of experience in family services, Michael has been instrumental in designing and implementing our evidence-based programs since joining in 2018. He specializes in trauma-informed care and has developed training programs for staff and volunteers. Michael previously worked at Youth and Family Services where he managed case management teams. He is committed to measuring program outcomes and using data to improve services. Outside of work, Michael mentors graduate students and enjoys playing basketball.",
    image: imgContainer1,
  },
  {
    name: "Domoniquic McPherson",
    title: "Community Engagement & Advocacy Coordinator",
    bio: "Domoniquic leads all fundraising efforts and community partnerships for Village Rising. With over 12 years of experience in nonprofit development and corporate relations, she has successfully secured major grants and built lasting relationships with funding partners. Jennifer has a proven track record of capital campaigns and annual giving programs. She previously worked as Development Manager at Regional Health Foundation where she raised over $5 million in three years. Jennifer holds a degree in Communications and is certified in Fundraising Management. She serves on the board of the Local Philanthropy Network and is a frequent speaker at nonprofit conferences. In her free time, Jennifer enjoys cooking and traveling with her husband.",
    image: imgContainer2,
  },
  {
    name: "Kristina Phillips",
    title: "Program Advisor",
    bio: "Kristina is a local business leader and longtime supporter of family services in our community. As CEO of Thompson Industries, he brings strategic vision and business acumen to his role as Board Chair. David has been involved with Village Rising since its inception and has provided crucial guidance during periods of growth and transition. He is passionate about economic development and believes that strong families create strong communities. David holds an MBA from Business School and sits on several nonprofit and corporate boards. He has championed initiatives that connect local businesses with nonprofit organizations. David and his wife have three children and are active in their local community. He enjoys golf and mentoring young entrepreneurs.",
    image: imgContainer3,
  },
  {
    name: "Tyrone Jackson",
    title: "Financial Advisor",
    bio: "Tyrone is an attorney specializing in nonprofit law and governance. As Board Vice Chair, she ensures Village Rising maintains compliance with all legal requirements and follows best practices in nonprofit operations. Lisa has over 15 years of experience advising nonprofit organizations on corporate governance, contracts, and regulatory compliance. She is a partner at Patel & Associates Law Firm and regularly provides pro bono legal services to community organizations. Lisa holds a J.D. from State Law School and is licensed in multiple states. She is passionate about access to justice and serves on the Legal Aid Society board. Lisa is also an adjunct professor teaching Nonprofit Law at the local university. She enjoys yoga and spending time with her two children.",
    image: imgContainer4,
  },
  {
    name: "Lucile Jackson",
    title: "Director of Resources",
    bio: "Lucile is a Certified Public Accountant with extensive experience in nonprofit financial management. As Board Treasurer, he oversees Village Rising's financial health, budgeting, and reporting to ensure fiscal responsibility and sustainability. Robert has over 20 years of experience in accounting and has specialized in nonprofit finance for the past decade. He is a partner at Williams & Partners CPA and provides financial consulting to numerous charitable organizations. Robert implemented our current financial systems and reporting processes. He holds a degree in Accounting and maintains several professional certifications. Robert is committed to financial transparency and regularly presents to the board on fiscal matters. In his spare time, he volunteers as a financial literacy instructor and enjoys sailing.",
    image: imgContainer5,
  },
  {
    name: "Jennifer Martinez",
    title: "Development Director",
    bio: "Jennifer brings a background in education and community organizing to her role as Board Secretary. She has spent over 18 years working in public education as a teacher and administrator, with deep expertise in serving diverse student populations. Maria is passionate about educational equity and has been a vocal advocate for immigrant families and English language learners. She holds a Master's degree in Education and is fluent in English and Spanish. Maria has been involved with Village Rising since 2017 and helped launch our education support programs. She currently serves as Principal at Riverside Elementary School. Maria is also active in several community coalitions focused on family support and youth development. She enjoys reading, gardening, and spending time with her extended family.",
    initials: "MG",
    initialsGradient:
      "linear-gradient(136.219deg, rgb(0, 213, 190) 0%, rgb(0, 150, 137) 100%)",
  },
  {
    name: "David Thompson",
    title: "Board Member",
    bio: "David is a healthcare professional who advocates passionately for family wellness programs and brings valuable expertise in health equity to the board. As a physician with over 12 years of experience in family medicine, James has witnessed firsthand the social determinants of health and their impact on families. He currently practices at Community Health Center where he leads initiatives to address health disparities. James holds an M.D. from Medical School and completed his residency in Family Medicine. He has published research on the intersection of poverty and health outcomes. James helped develop Village Rising's approach to holistic family wellness. He serves on several health-related boards and advisory committees. Outside of medicine, James enjoys running marathons and coaching youth soccer.",
    initials: "JA",
    initialsGradient:
      "linear-gradient(136.219deg, rgb(255, 185, 0) 0%, rgb(225, 113, 0) 100%)",
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
