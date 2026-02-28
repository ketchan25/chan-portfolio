import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import '../../styles/sections/hero.scss'

const abilities = [
    "Senior Software Engineer",
    "PHP / Laravel Expert",
    "Microservices Architect",
    "Full-Stack Developer",
    "DevOps Enthusiast"
]

// const useTextTypeWriter = (labels: string[]) => {
//     const [text, setText] = useState<string | null>(null);
//     const [labelIndex, setLabelIndex] = useState<number>(0);

//     const currentLabel = labels[labelIndex];
//         setText(currentLabel.slice(0, 1))
//     useEffect(() => {
        
//     }, [])
//     return text;
// }

// const textTyped = useTextTypeWriter(abilities)

export const Hero = () => {
    return (
        <section>
            <div className="hero-container">
                <div className="available">
                    <span>Available for freelance & full-time</span>
                </div>

                <h1 className="name">
                    <span className="firstname">Christian</span>
                    <span className="lastname">Detera</span>
                </h1>

                <div>
                    {/* <span>{textTyped}</span> */}
                    <span style={{ display: "inline-block", width: 2, height: "1em", background: "rgb(255, 109, 58", animation: "blink 1s step-end infinite", verticalAlign: "middle" }} />
                </div>

                <p className="introduction">
                    9+ years crafting robust, scalable web systems. From RFID & IoT to enterprise microservices & affiliate platforms — I bring
                    <span> end-to-end ownership </span>
                    and a passion for clean architecture.
                </p>

                <div className="action-buttons">
                    <Button href="#experience" label="VIEW EXPERIENCE" onClick={() => { }} type="view-experience"></Button>
                    <Button href="#experience" label="GET IN TOUCH" onClick={() => { }} type="get-in-touch"></Button>
                    <Button label="✉ EMAIL ME" onClick={() => { }} type="email"></Button>
                </div>
            </div>
        </section>
    );
}