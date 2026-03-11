import "../../styles/sections/getintouch.scss";
import { ContactCard } from "../../components/ContactCard";
import { Reveal } from "../../components/Reveal";

interface ContactInfo {
    icon: string;
    name: string;
    description: string;
    href: string;
}

const contactInfo = [
    {icon: "✉", name: "Email", description: "ketchandetera@gmail.com", href: "mailto:ketchandetera@gmail.com",},
    {icon: "☎", name: "Phone", description: "0928-185-1521", href: "tel:+639281851521"},
    {icon: "in", name: "LinkedIn", description: "View Profile", href: "https://www.linkedin.com/in/christian-detera-b53024162"},
]

export const GetInTouch = () => {
    return (
        <section id="contact" className="section-get-in-touch">
            <div className="get-in-touch-container">
                <div className="get-in-touch-content">
                    <Reveal delay={200} direction="up">
                        <div className="get-in-touch-header">
                            Get in Touch
                            <span className="section-bullet" />
                        </div>
                    </Reveal>
                    <Reveal delay={200} direction="up" className="get-in-touch-pitch">
                        <h2>
                            Let's Build
                            <br />
                            <span>Something Great.</span>
                        </h2>

                        <div className="get-in-touch-pitch-message">
                            <p>
                                Open to new opportunities, freelance projects, and interesting collaborations.
                            </p>
                        </div>
                    </Reveal>
                    <div className="get-in-touch-contacts-container">
                        <div className="get-in-touch-contacts">
                            {contactInfo.map((data, index) => (
                                <Reveal delay={200 + index * 100} direction="left" key={index}>
                                    <ContactCard icon={data.icon} name={data.name} description={data.description} href={data.href} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}