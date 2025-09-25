import AboutSection from "@/page-sections/about";
import CallToAction from "@/page-sections/call-to-action";
import Contact from "@/page-sections/contact";
import Header from "@/page-sections/header";
import Partners from "@/page-sections/partner-sponsors";
import ProgramOverview from "@/page-sections/program-overview";
import SocialLinks from "@/page-sections/socialHandle";
import SponsorshipOpportunities from "@/page-sections/sponsorship";
import TargetAudience from "@/page-sections/target-audience";

export default function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Header />
        <AboutSection />
        <ProgramOverview />
        <SponsorshipOpportunities />
        <TargetAudience />
        <Partners />
        <Contact />
        <CallToAction />
        <SocialLinks />
      </div>
    </>
  );
}
