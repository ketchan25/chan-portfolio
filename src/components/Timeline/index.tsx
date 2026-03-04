import type React from "react";
import "./carddetail.scss";

interface TimelineProps {
    dateRange: string;
    title: string;
    subTitle: string;
    children: React.ReactNode
}

export const Timeline = ({dateRange, title, subTitle, children} : TimelineProps) => {
    return (
        <div className="timeline-container">
            <div>
                <span className="title">{dateRange}</span>
            </div>
            <div>
                <span className="title">{title}</span>
            </div>
        </div>
    );
}