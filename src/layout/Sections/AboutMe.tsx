import { CardDetail } from '../../components/CardDetail';
import { CountCard } from '../../components/CountCard';
import '../../styles/sections/aboutme.scss'

const otherInfo = [
    {count: "9+", subLabel: "Years Experience"},
    {count: "4", subLabel: "Companies"},
    {count: "10+", subLabel: "System Applications"},
    {count: "∞", subLabel: "Lines of Code"},
]

const cardInfo = [
    {icon: "✉", detailType: "Email", description: "ketchandetera@gmail.com"},
    {icon: "☎", detailType: "Phone", description: "0928-185-1521"},
    {icon: "in", detailType: "LinkedIn", description: "christian-detera"},
    {icon: "📍", detailType: "Location", description: "Philippines"},
]

export const AboutMe = () => {
    return (
        <section className="section-about-me">
            <div className="about-me-container">
                <div className="about-me-content">
                    <div>
                        <div className="about-me-header">
                            <span className="section-bullet"/>
                            About Me
                        </div> 
                        <h2>
                            Passionate
                            <br/>
                            <span>Engineer.</span>
                        </h2>
                        <div className="about-me-description">
                            <p>I'm a <span>Senior Software Engineer</span> with nearly a decade of experience building robust web applications, microservices, and enterprise systems.</p>
                            <p>From <span>RFID/IoT applications</span> early in my career to architecting <span>microservices & affiliate platform</span> today, I bring end-to-end ownership and technical depth.</p>
                            <p>I thrive in collaborative environments — working alongside product owners, designers, and stakeholders to bring ideas from <span className="accent">whiteboard to production.</span></p>
                        </div>
                    </div>
                    <div>
                        <div className="about-me-other-info">
                            { otherInfo.map((data, index) => (
                                <CountCard count={data.count} subLabel={data.subLabel} key={index}></CountCard>
                            ))}
                        </div>
                        <div>
                            <CardDetail title="Contact Info" info={cardInfo}></CardDetail>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}