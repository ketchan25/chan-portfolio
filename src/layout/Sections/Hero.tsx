import { Button } from '../../components/Button';
import '../../styles/sections/hero.scss'

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
]

export const Hero = () => {
    return (
        <section>
            <div className='hero-container'>
                <div className="available">
                    <span>Available for freelance & full-time</span>
                </div>

                <h1 className="name">
                    <span className="firstname">Christian</span>
                    <span className="lastname">Detera</span>
                </h1>

                <p className='introduction'>
                    9+ years crafting robust, scalable web systems. From RFID & IoT to enterprise microservices & affiliate platforms — I bring 
                    <span> end-to-end ownership </span>  
                    and a passion for clean architecture.
                </p>

                <Button></Button>
            </div>
        </section>
    );
}