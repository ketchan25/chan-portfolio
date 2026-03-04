import cx from "classnames";
import "./accordion.scss";
import { useState } from "react";

interface AccordionProps {
    label: string;
    list: string[];
    isCollapsed: boolean;
  }

export const Accordion = ({label, list, isCollapsed} : AccordionProps) => {
    const [collapsed, setCollapse] = useState<boolean>(isCollapsed)

    return (
        <div className="accordion-container">
            <button className="btn-description-collapse" onClick={() => setCollapse(! collapsed)}>
            <span style={{ transform: ! collapsed ? "rotate(90deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>▶</span>
                {collapsed ? "Details" : "Hide"}
            </button>
            {! collapsed ? <ul>
                {list.map((data) => (
                    <li>
                        <span className="bullet">→</span>
                        <span className="label">{data}</span>
                    </li>
                ))}
            </ul> : null}
            
        </div>
    );
}