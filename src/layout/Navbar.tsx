import '../styles/navbar.scss'
import { goToSection } from '../utils/scrollToElement';

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    {href: "#about", label: "About"},
    {href: "#skills", label: "Skills"},
    {href: "#career", label: "Experience"},
    {href: "#contact", label: "Contact"},
]

export const Navbar = () => {
    return (
        <header>
            <nav>
               <div className='navbar-name-abbrev'>CD<span>_DEV</span></div>
                <ul>
                    <li>
                        {navLinks.map((link, index) => (
                            <a onClick={(e) => goToSection(e, link.href.slice(1))} href={link.href} key={index}>{link.label}</a>
                        ))}
                    </li>
                </ul>
                <div className='navbar-right'>
                    <button className='theme'>☀</button>
                </div>
            </nav>
        </header>
    );
}