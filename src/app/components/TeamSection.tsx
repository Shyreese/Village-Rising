import imgTeam1 from "../../assets/75c03813d4a94881b4de7c6080acd2bffa437309.png";
import imgTeam2 from "../../assets/3811fa8ea5875c75af4581dbfa94b1b2adfb0e22.png";
import imgTeam3 from "../../assets/12d4a28f24013bf83891d502f621748e295002fe.png";
import { Link } from "react-router";

const team = [
  {
    name: "Shyreese Tyiska",
    title: "Executive Director",
    image: imgTeam1,
  },
  {
    name: "Paskael Tyiska Jr.",
    title: "Chief Operating Officer (COO)",
    image: imgTeam2,
  },
  {
    name: "Domoniquic McPherson",
    title: "Community Engagement & Advocacy Coordinator",
    image: imgTeam3,
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-[#f3f4f6] py-16 lg:py-20 px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="font-['Playfair_Display',serif] text-[#0a0a0a] text-[28px] sm:text-[33px] mb-12">
          Meet Our Board
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 max-w-[1200px] mx-auto mb-10">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="w-[128px] h-[128px] rounded-full overflow-hidden border-4 border-[#50c878] shadow-[3px_3px_3px_0px_rgba(0,0,0,0.25)] mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] mb-1">
                {member.name}
              </h3>
              <p className="font-['Inter',sans-serif] text-[#4a5565] text-[16px]">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/board"
          className="font-['Inter',sans-serif] font-semibold text-[#fe9a00] text-[16px] hover:underline"
        >
          Meet the full board →
        </Link>
      </div>
    </section>
  );
}
