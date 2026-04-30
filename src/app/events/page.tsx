import Agape from "@/components/Events/Agape";
import Carnival from "@/components/Events/Carnival";
import EventsHero from "@/components/Events/EventsHero";
import Tech from "@/components/Events/Tech";
import WellGo from "@/components/Events/WellGo";


const page = () => {
    return (
        <div>
            <EventsHero />
            <Agape />
            <Carnival />
            <Tech />
            <WellGo />
        </div>
    )
}

export default page;