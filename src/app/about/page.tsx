import AboutHero from "@/components/About/AboutHero";
import ChurchPartner from "@/components/About/ChurchPartner";
import Contact from "@/components/About/Contact";
import OurMission from "@/components/About/OurMission";


const page = () => {
    return (
        <div>
            <AboutHero />
            <OurMission />
            <ChurchPartner />
            <Contact />
        </div>
    )
}

export default page;