
import About from "@/components/About";
import Blog from "@/components/Blog";
import ClientFeed from "@/components/ClientFeed";
import CompanyLogo from "@/components/CompanyLogo";
import Hero from "@/components/Hero";
import PricingPlan from "@/components/PricingPlan";
import RecentWork from "@/components/RecentWork";
import Resume from "@/components/Resume";
import Services from "@/components/Services";



export default function Home({  pageProps }) {

  return (
   <div>
        <Hero/>
        <Services/>
        <Resume/>
        <About/>
        <RecentWork/>
        <ClientFeed/>
        <CompanyLogo/>
        <Blog />
        <PricingPlan/>
   </div>
  );
}
