import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import '../../styles/sections/hero.scss'
import { Reveal } from '../../components/Reveal'
import { goToSection } from '../../utils/scrollToElement'

const abilities: string[] = [
    "Senior Software Engineer",
    "Laravel Expert",
    "Full-Stack Developer",
]

const useTextTypeWriter = (labels: string[]) => {
    const [text, setText] = useState<string | null>(null)
    const [characterIndex, setCharacterIndex] = useState<number>(0)
    const [labelIndex, setLabelIndex] = useState<number>(0)
    const [deleting, setDeleting] = useState<boolean>(false)

    useEffect(() => {
        if (!deleting) setTimeout(() => { setCharacterIndex(characterIndex + 1) }, 100)

        const currentLabel = labels[labelIndex]
        const typedText = currentLabel.slice(0, characterIndex)

        if (typedText.length <= currentLabel.length && typedText.length > 0) {
            setText(typedText)
        }

        if (typedText.length == currentLabel.length) setTimeout(() => setDeleting(true), 200)

        if (deleting) {
            if (typedText.length <= currentLabel.length && typedText.length > 0) {
                setTimeout(() => setCharacterIndex(characterIndex - 1), 50)
            }

            if (typedText.length == 0) {
                setDeleting(false)

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
    const [preloaded, setPreloaded] = useState(false);
    useEffect(() => { const t = setTimeout(() => setPreloaded(true), 100); return () => clearTimeout(t); }, []);

    return (
        <section className="section-hero">
            <div className="glow-background"></div>
            <div className="glow-ball-1"></div>
            <div className="glow-ball-2"></div>
            <div className="hero-container">
                <Reveal delay={100} direction="left" className="available">
                    <span>Available for freelance & full-time</span>
                </Reveal>
                <h1 className="name">
                    <Reveal delay={200} direction="left">
                        <span className="firstname">Christian</span>
                    </Reveal>
                     <Reveal delay={300} direction="left">
                        <span className="lastname">Detera</span>
                     </Reveal>
                </h1>

                <Reveal delay={500} direction="left">
                    <span className="text-typed">{textTyped}</span>
                    <span className="cursor" />
                </Reveal>

                <Reveal delay={600} direction="up">
                    <p className="introduction">
                        9+ years crafting robust, scalable web systems. From <span>RFID & IoT to enterprise microservices & affiliate platform</span> — I bring end-to-end ownership.
                    </p>
                </Reveal>
                
                <Reveal delay={800} direction="left" className="action-buttons">
                    <Button href="#experience" content="VIEW EXPERIENCE" onClick={(e) => goToSection(e, "career")} className="view-experience"></Button>
                    <Button href="#contact" content="GET IN TOUCH" onClick={(e) => { goToSection(e, "contact") }} className="get-in-touch"></Button>
                    <Button href="mailto:ketchandetera@gmail.com" content="✉ EMAIL ME" className="email"></Button>
                </Reveal>
            </div>
        </section>
    );
}