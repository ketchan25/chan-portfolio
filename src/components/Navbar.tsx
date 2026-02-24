import '../styles/navbar.scss'

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#skills", label: "Skills"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
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
                            <a href={link.href} key={index}>{link.label}</a>
                        ))}
                    </li>
                </ul>
                <div className='navbar-right'>
                    <button className='theme'>☀</button>
                    <a href='ketchandetera@gmail.com'>HIRE ME</a>
                </div>
            </nav>
        </header>
    );
}