import { useOutletContext } from "react-router-dom";
import Header from "../components/dashboard/Header";
import FirstSection from "../components/dashboard/firstSection";
import ThirdSection from "../components/dashboard/thirdSection";
import LastSection from "../components/dashboard/lastSection";
import SecondSection from "../components/dashboard/secondSection";
export default function Dashboard() {
  return (
    <div className="pe-3">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastSection />
    </div>
  );
}
