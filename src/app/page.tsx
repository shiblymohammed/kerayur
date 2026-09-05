import ArrivalSection from "@/components/sections/homepage/Arrival";
import KeralaReimaginedSection from "@/components/sections/homepage/KeralaReimagined";
import CultureSection from "@/components/sections/homepage/Culture";
import WisdomOfWellnessSection from "@/components/sections/homepage/WisdomOfWellness";
import TraditionToClinicalSection from "@/components/sections/homepage/TraditionToClinical";
import RitualsSection from "@/components/sections/homepage/Rituals";
import LandSection from "@/components/sections/homepage/Land";
import PeopleSection from "@/components/sections/homepage/People";
import SanctuariesSection from "@/components/sections/homepage/Sanctuaries";
import ChooseExperienceSection from "@/components/sections/homepage/ChooseExperience";
import PartnerResortsSection from "@/components/sections/homepage/PartnerResorts";
import BeginJourneySection from "@/components/sections/homepage/BeginJourney";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <ArrivalSection />
      <KeralaReimaginedSection />
      <CultureSection />
      <WisdomOfWellnessSection />
      <TraditionToClinicalSection />
      <RitualsSection />
      <LandSection />
      <PeopleSection />
      <SanctuariesSection />
      <ChooseExperienceSection />
      <PartnerResortsSection />
      <BeginJourneySection />
    </main>
  );
}

