import type React from "react";
import "./timeline.scss";
import { Tag } from "../Tag";
import { Accordion } from "../Accordion";

interface TimelineProps {
    dateRangeContent: string | React.ReactNode;
    title: string;
    subTitle: string;
    tags: string[];
    descriptions: {
        collapsed: boolean
        data: string[]
    },
}

export const Timeline = ({dateRangeContent, title, subTitle, tags, descriptions} : TimelineProps) => {
    return (
        <div className="timeline-content">
            <div className="timeline-line"></div>
            <div className="timeline-bullet"></div>
            <div>
                <span>{dateRangeContent}</span>
            </div>
            <div>
                <span className="title">{title}</span>
            </div>
            <div>
                <span className="sub-title">{subTitle}</span>
            </div>
            <div className="tags">
                {tags.map((data, index) => (
                    <Tag key={index} label={data}></Tag>
                ))}
            </div>
            <div className="descriptions">
                <Accordion label="Timeline View" list={descriptions.data} isCollapsed={! descriptions.collapsed}></Accordion>
            </div>
        </div>
    );
}