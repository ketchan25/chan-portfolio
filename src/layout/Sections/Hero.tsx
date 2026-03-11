import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import '../../styles/sections/hero.scss'

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
    const fadeUp = (delay: number): React.CSSProperties => ({ opacity: preloaded ? 1 : 0, transform: preloaded ? "none" : "translateY(40px)", transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms` })
    return (
        <section className="section-hero">
            <div className="glow-background"></div>
            <div className="glow-ball-1"></div>
            <div className="glow-ball-2"></div>
            <div className="hero-container">
                <div style={fadeUp(100)} className="available">
                    <span>Available for freelance & full-time</span>
                </div>
                <h1 className="name">
                    <span style={fadeUp(250)} className="firstname">Christian</span>
                    <span style={fadeUp(350)}className="lastname">Detera</span>
                </h1>

                <div style={fadeUp(400)}>
                    <span className="text-typed">{textTyped}</span>
                    <span className="cursor" />
                </div>

                <p style={fadeUp(550)} className="introduction">
                    9+ years crafting robust, scalable web systems. From <span>RFID & IoT to enterprise microservices & affiliate platform</span> — I bring end-to-end ownership.
                </p>

                <div style={fadeUp(700)} className="action-buttons">
                    <Button href="#experience" content="VIEW EXPERIENCE" onClick={() => { }} className="view-experience"></Button>
                    <Button href="#experience" content="GET IN TOUCH" onClick={() => { }} className="get-in-touch"></Button>
                    <Button content="✉ EMAIL ME" onClick={() => { }} className="email"></Button>
                </div>
            </div>
        </section>
    );
}