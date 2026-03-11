import { useState } from "react";
import "../../styles/sections/getintouch.scss";
import { ContactCard } from "../../components/ContactCard";

const contactInfo = [
    {icon: "✉", name: "Email", description: "ketchandetera@gmail.com", href: "mailto:ketchandetera@gmail.com",},
    {icon: "☎", name: "Phone", description: "0928-185-1521", href: "tel:+639281851521"},
    {icon: "in", name: "LinkedIn", description: "View Profile", href: "https://www.linkedin.com/in/christian-detera-b53024162"},
]

export const GetInTouch = () => {
    return (
        <section className="section-get-in-touch">
            <div className="get-in-touch-container">
                <div className="get-in-touch-content">
                    <div>
                        <div className="get-in-touch-header">
                            Get in Touch
                            <span className="section-bullet" />
                        </div>
                        
                    </div>
                    <div className="get-in-touch-pitch">
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
                    </div>
                    <div className="get-in-touch-contacts-container">
                        <div className="get-in-touch-contacts">
                            {contactInfo.map((data, index) => (
                                <ContactCard icon={data.icon} name={data.name} description={data.description} key={index} href={data.href} />
                            ))}
                        </div>
                        <div className="get-in-touch-send-message">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}