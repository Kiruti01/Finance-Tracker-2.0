import Footer from "@/components/LandingPage/Footer";
import HomePage from "@/components/LandingPage/HomePage";
import SharePage from "@/components/LandingPage/SharePage";
import StartCalculating from "@/components/LandingPage/StartCalculating";
import Manager from "@/components/manager/manager";
// import InvestorPage from "@/components/landingPageTools/InvestorPage";

// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomePage />
      <Manager />
      <StartCalculating />
      {/* <InvestorPage /> */}
      <SharePage />
      <Footer />
    </main>
  );
}
