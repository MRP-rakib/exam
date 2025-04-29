import Image from "next/image";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import ClientFeed from "@/components/ClientFeed";
import CompanyLogo from "@/components/CompanyLogo";
import Blog from "@/components/Blog";

export default function Home() {
  return (
   <div>
    <Hero/>
        <Services/>
        <Resume/>
        <About/>
        <RecentWork/>
        <ClientFeed/>
        <CompanyLogo/>
        <Blog/>
       
   </div>
  );
}
