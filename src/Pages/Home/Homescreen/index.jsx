import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import MySkills from "../MySkills";
import Projects from "../Projects";
import Education from "../Education";
import ContactMe from "../ContactMe";


export default function Home () {
    return(
        <>
           <HeroSection/>
           <AboutMe/> 
           <MySkills/>
           <Projects/>
           <Education/>
           <ContactMe/>
        </>
    )
}