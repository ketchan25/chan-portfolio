import "./skillpill.scss";

interface SkillPillProps {
    indicator: string;
    label: string;
  }

export const SkillPill = ({indicator, label} : SkillPillProps) => {
    return (
        <div className="skill-pill">
            <div>
                <span className="skill-pill-indicator">{indicator}</span>
            </div>
            <div>
                <span className="sub-label">{label}</span>
            </div>
        </div>
    );
}