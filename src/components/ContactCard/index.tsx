import "./contactcard.scss";

interface ContactCardProps {
    icon: string;
    name: string;
    description: string;
    href: string;
  }

export const ContactCard = ({icon, name, description, href} : ContactCardProps) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="icon">{icon}</span>
            <div className="details">
                <span className="name">{name}</span>
                <span className="description">{description}</span>
            </div>
            <span className="arrow">→</span>
        </a>
    );
}