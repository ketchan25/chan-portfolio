import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import '../../styles/sections/hero.scss'

const abilities = [
    "Senior Software Engineer",
    "PHP / Laravel Expert",
    "Microservices Architect",
    "Full-Stack Developer",
]

const useTextTypeWriter = (labels: string[]) => {
    const [text, setText] = useState<string | null>(null);
    const [characterIndex, setCharacterIndex] = useState<number>(0);
    const [labelIndex, setLabelIndex] = useState<number>(0);
    const [deleting, setDeleting] = useState<boolean>(false);

    useEffect(() => {
        if (! deleting) setTimeout(() => { setCharacterIndex(characterIndex + 1)}, 100)
        
        const currentLabel = labels[labelIndex];
        const typedText = currentLabel.slice(0, characterIndex);

        if (typedText.length <= currentLabel.length && typedText.length > 0) {
            setText(typedText)
        }

        if (typedText.length == currentLabel.length) setTimeout(() => setDeleting(true), 1000)

         if (deleting) {
            if (typedText.length <= currentLabel.length && typedText.length > 0) {
                setTimeout(() => setCharacterIndex(characterIndex - 1), 100)
            }

            if (typedText.length == 0) {
                setDeleting(false);

                if (labels.length == labelIndex + 1) {
                    setLabelIndex(0)
                } else {
                    setLabelIndex(labelIndex + 1)
                }
            }
         }
        
    }, [characterIndex, labelIndex, deleting])

    return text;
}

export const Hero = () => {
    const textTyped = useTextTypeWriter(abilities)
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
                    <span className="text-typed">{textTyped}</span>
                    <span className="cursor" />
                </div>

                <p className="introduction">
                    9+ years crafting robust, scalable web systems. From <span>RFID & IoT to enterprise microservices & affiliate platforms</span> — I bring end-to-end ownership. 
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