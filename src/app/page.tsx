import Hero from "@/components/Home/Hero";
import FridayExperience from "@/components/Home/FridayExperience";
import Teams from "@/components/Home/Teams";
import MemoriesMilestones from "@/components/Home/MemoriesMilestones";
import DailyRhythms from "@/components/Home/DailyRhythms";
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy">
      {/* <Header /> */}
      <Hero />
      <FridayExperience />
      <Teams />
      <MemoriesMilestones />
      <DailyRhythms />
      <CTA />
      {/* <Footer /> */}
    </main>
  );
}
