import "../../styles/sections/career.scss";
import { Timeline } from "../../components/Timeline";
import { Tag } from "../../components/Tag";
import { Reveal } from "../../components/Reveal";

interface TimelineDataProps {
    dateRange: string,
    isCurrent?: boolean,
    title: string,
    subTitle: string,
    skillTags: string[],
    descriptions: {
        collapsed: boolean
        data: string[]
    },
}

const TimelineData: TimelineDataProps[] = [
    {
        dateRange: "May 2022 — Present",
        isCurrent: true,
        title: "EDM IT WEB Solutions OPC",
        subTitle: "Senior Software Engineer",
        skillTags: ["PHP", "LARAVEL", "REACT", "NODE.JS", "TYPESCRIPT", "ELASTICSEARCH", "PUSHER", "SOCKET.IO", "MYSQL", "NEW RELIC", "MACOS", "LINUX"],
        descriptions: {
            collapsed: true,
            data: [
                "Develops and manages 6 microservices built in PHP Laravel",
                "Maintains Linux servers for staging and production environments",
                "Develops and maintains an Affiliate System Software",
                "Conducts code reviews and administers 6 GitHub repositories",
                "Leads dev-to-provider API integration with new vendors",
                "Responsible for weekly production deployments",
                "Participates in planning sessions with product owner, designers & stakeholders"
            ]
        },
    },
    {
        dateRange: "Mar 2019 — May 2022",
        title: "Bonfire Technologies & Solutions",
        subTitle: "Software Engineer — Team Lead",
        skillTags: ["PHP", "LARAVEL", "C#", "VUE.JS", "NODE.JS", "TYPESCRIPT", "JQUERY", "POS SYSTEMS"],
        descriptions: {
            collapsed: false,
            data: [
                "Led a team of PHP and C# developers",
                "Developed SCROLLS — an automated HRIS software",
                "Built CDIS (Central Data Information System) for POS systems",
                "Developed CATAPULT — a POS integration & data extraction engine",
                "Maintained internal subscription system",
                "Set up POS servers for clients"
            ]
        },
    },
    {
        dateRange: "Mar 2017 — Mar 2019",
        title: "Nelsoft Systems Inc.",
        subTitle: "Software Engineer",
        skillTags: ["PHP", "LARAVEL", "JQUERY", "JAVA", "VUE.JS", "SELENIUM", "POS SYSTEMS"],
        descriptions: {
            collapsed: false,
            data: [
                "Developed TestMate — internal web automation app using Java + Selenium",
                "Maintained CIRMS, a web-based data center for POS systems",
                "Set up POS servers for clients",
            ]
        },
    },
    {
        dateRange: "May 2016 — Mar 2017",
        title: "Internet of Things Philippines Inc.",
        subTitle: "Software Developer",
        skillTags: ["ASP.NET", "JAVA", "MSSQL", "MYSQL", "RFID", "ANDROID"],
        descriptions: {
            collapsed: false,
            data: [
                "Developed Android app for RFID & Barcode inventory tracking",
                "Built apps using Speedway Connect & USB Plus (Impinj)",
                "Developed REST API-based RFID tag read/write application",
                "Enhanced IOTAIMMIS — Asset & Inventory Management System",
            ]
        },
    }
];

export const Career = () => {
    const generateDateRangeContent= (dateRange: string, isCurrent: boolean|undefined) => {
        return (
            <div style={{display: "flex", gap: "8px"}}>
                <div className="date">{dateRange}</div>
                {isCurrent === true ? <Tag className="current" label="Current"></Tag> : null}
            </div>
        );
    };

    return (
        <section id="career" className="section-career">
            <div className="career-container">
                <div className="career-content">
                    <Reveal delay={200} direction="left">
                        <div className="career-header">
                            <span className="section-bullet" />
                            Career
                        </div>
                        <h2>
                            Work
                            <br />
                            <span>Experience.</span>
                        </h2>
                    </Reveal>
                    <div className="career-content">
                        <Reveal delay={200} direction="left" className="timeline-container">
                            {TimelineData.map((data, index) => (
                                <Timeline dateRangeContent={generateDateRangeContent(data.dateRange, data.isCurrent)} title={data.title} subTitle={data.subTitle} tags={data.skillTags} descriptions={data.descriptions} key={index}></Timeline>
                            ))}
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}