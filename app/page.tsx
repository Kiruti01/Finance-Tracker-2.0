import HomePage from "@/components/HomePage";
import InvestorPage from "@/components/landingPageTools/InvestorPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomePage />
      <InvestorPage />
    </main>
  );
}
