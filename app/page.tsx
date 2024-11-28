import AboutPage from "@/components/about/aboutpage";
import ProfessionalPage from "@/components/about/professionalpage";
import HomePage from "@/components/home/homepage";
import PortfolioPage from "@/components/projects/portfolio";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HomePage />
      <AboutPage />
      <ProfessionalPage />
      <PortfolioPage />
    </div>
  );
}
