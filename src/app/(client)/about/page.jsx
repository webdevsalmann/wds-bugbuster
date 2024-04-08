import Contact from "@/components/shared/Contact";
import About from "./About";
import Mission from "./Mission";
import Team from "./Team";
import Values from "./Values";
import WhyChoose from "./WhyChoose";

export default function page() {
    return (
        <>
            <About />
            <Mission />
            <Team />
            <WhyChoose />
            {/* <Values /> */}
            <Contact />
        </>
    )
}
