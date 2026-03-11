import { Reveal } from "../Reveal";
import "./accordion.scss";
import { useState } from "react";

interface AccordionProps {
    list: string[];
    isCollapsed: boolean;
  }

export const Accordion = ({list, isCollapsed} : AccordionProps) => {
    const [collapsed, setCollapse] = useState<boolean>(isCollapsed)

    return (
        <div className="accordion-container">
            <button className="btn-description-collapse" onClick={() => setCollapse(! collapsed)}>
            <span style={{ transform: ! collapsed ? "rotate(90deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>▶</span>
                {collapsed ? "Details" : "Hide"}
            </button>
            {! collapsed ? <ul>
                {list.map((data, index) => (
                    <Reveal delay={100 + index * 100} direction="left" key={index}>
                        <li>
                            <span className="bullet">→</span>
                            <span className="label">{data}</span>
                        </li>
                    </Reveal>
                ))}
            </ul> : null}
            
        </div>
    );
}