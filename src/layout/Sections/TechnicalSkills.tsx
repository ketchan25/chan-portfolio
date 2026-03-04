import { useState } from "react";
import cx from "classnames";
import "../../styles/sections/technicalskills.scss";
import { Button } from "../../components/Button";

interface SkillsTab {
    id: "skill-tag" | "proficiency",
    label: string
}

interface RecordSkill {
    name: string
    category: "backend" | "frontend" | "devops" | "database" | "tools"
    level: number
}

interface RecordCategories {
    id: CategoryFilter,
    legendColor?: string,
    label: string
}

type SkillsTabFilter = SkillsTab["id"];
type CategoryFilter = RecordSkill["category"] | "all"

const SKILLS: RecordSkill[] = [
    { name: "PHP", category: "backend", level: 95 },
    { name: "Laravel Framework", category: "backend", level: 95 },
    { name: "Codeigniter", category: "backend", level: 95 },
    { name: "Java", category: "backend", level: 80 },
    { name: "C#", category: "backend", level: 75 },
    { name: "RESTSOAP", category: "backend", level: 90 },
    { name: "SOAP", category: "backend", level: 90 },
    { name: "Microservices", category: "backend", level: 88 },
    { name: "Socket.IO", category: "backend", level: 75 },
    { name: "Pusher", category: "backend", level: 75 },
    { name: "Vue.js", category: "frontend", level: 82 },
    { name: "Node.js", category: "frontend", level: 75 },
    { name: "React", category: "frontend", level: 75 },
    { name: "JavaScript", category: "frontend", level: 88 },
    { name: "HTML5", category: "frontend", level: 85 },
    { name: "CSS / SCSS", category: "frontend", level: 85 },
    { name: "jQuery", category: "frontend", level: 80 },
    { name: "Docker", category: "devops", level: 80 },
    { name: "CI / CD", category: "devops", level: 78 },
    { name: "Linux", category: "devops", level: 85 },
    { name: "macOS", category: "devops", level: 85 },
    { name: "Apache", category: "devops", level: 82 },
    { name: "NGINX", category: "devops", level: 82 },
    { name: "AWS Lightsail", category: "devops", level: 72 },
    { name: "Cloudflare", category: "devops", level: 70 },
    { name: "MySQL", category: "database", level: 90 },
    { name: "MSSQL", category: "database", level: 75 },
    { name: "ElasticSearch", category: "database", level: 75 },
    { name: "Firebase", category: "database", level: 75 },
    { name: "GitHub", category: "tools", level: 90 },
    { name: "SVN", category: "tools", level: 90 },
    { name: "GitLab", category: "tools", level: 90 },
    { name: "WAMP / LAMP / LEMP", category: "tools", level: 85 },
]

const categories: RecordCategories[] = [
    {id: "all", label: "ALL"},
    {id: "backend", legendColor: "#ff6d3a", label: "BACKEND"},
    {id: "frontend", legendColor: "#3aabff", label: "FRONTEND"},
    {id: "devops", legendColor: "#3aff7a", label: "DEVOPS"},
    {id: "database", legendColor: "#ffd93a", label: "DATABASE"},
    {id: "tools", legendColor: "#c43aff", label: "TOOLS"},
]

const skillsTab: SkillsTab[] = [
    {id: "skill-tag", label: "Skill Tags"},
    {id: "proficiency", label: "Proficiency"}
]

export const TechnicalSkills = () => {
    const [category, setCategory] = useState<CategoryFilter>("all")
    const [tab, setTab] = useState<SkillsTabFilter>("skill-tag")
    const filtered = category === "all" ? SKILLS : SKILLS.filter(s => s.category === category)

    const getLegentColor = (category: string) => {
        return categories.filter((data) => data.id === category)[0].legendColor
    }

    return (
        <section className="section-technical-skills">
            <div className="technical-skills-container">
                <div className="technical-skills-content">
                    <div>
                        <div className="technical-skills-header">
                            <span className="section-bullet"/>
                            Technical Skills
                        </div> 
                        <h2>
                            What I
                            <br/>
                            <span>Work With.</span>
                        </h2>
                    </div>
                    <div className="technical-skills-category-buttons-container">
                        {categories.map((data) => (
                            <button key={data.id} className={cx("category-button", {["selected"]: data.id === category})} onClick={() => setCategory(data.id)}>
                                <div className="button-content">
                                    {data.id !== "all" ? <span className="legend" style={{backgroundColor: data.legendColor}}></span> : ""}
                                    <span>{data.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="technical-skills-tab">
                        {skillsTab.map((data) => (
                            <Button content={data.label} className={cx("tab", {["selected"]: data.id === tab})} onClick={() => setTab(data.id)}></Button>
                        ))}
                    </div>
                    <div className="technical-skills-tab-content-container">
                        {filtered.map((data) => (
                            <button key={data.name} className="category-button">
                                <div className="button-content">
                                    <span className="legend" style={{backgroundColor: getLegentColor(data.category)}} ></span>
                                    <span>{data.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}