import { useState } from "react";
import cx from "classnames";
import "../../styles/sections/technicalskills.scss";
import { Button } from "../../components/Button";
import { Reveal } from "../../components/Reveal";
import { Icon } from "../../components/Icon";

interface SkillsTab {
    id: "skill-tag" | "proficiency",
    label: string
}

interface RecordSkill {
    name: string
    category: "backend" | "frontend" | "devops" | "database" | "tools"
    level: number,
    iconName?: string,
}

interface RecordCategories {
    id: CategoryFilter,
    legendColor?: string,
    label: string,
}

type SkillsTabFilter = SkillsTab["id"];
type CategoryFilter = RecordSkill["category"] | "all"

const SKILLS: RecordSkill[] = [
    { name: "PHP", category: "backend", level: 95, iconName: "php" },
    { name: "Laravel Framework", category: "backend", level: 95, iconName: "laravel"  },
    { name: "Lumen", category: "backend", level: 95, iconName: "lumen"  },
    { name: "Codeigniter", category: "backend", level: 95, iconName: "codeigniter"  },
    { name: "Java", category: "backend", level: 80, iconName: "java"  },
    { name: "C#", category: "backend", level: 75, iconName: "csharp"  },
    { name: "Node.js", category: "backend", level: 75, iconName: "nodejs"  },
    { name: "Android", category: "backend", level: 85, iconName: "android"  },
    { name: "Socket.IO", category: "backend", level: 75, iconName: "socketio"  },
    { name: "Bootstrap", category: "frontend", level: 82, iconName: "bootstrap"  },
    { name: "Vue.js", category: "frontend", level: 82, iconName: "vuejs"  },
    { name: "React", category: "frontend", level: 75, iconName: "react"  },
    { name: "JavaScript", category: "frontend", level: 88, iconName: "javascript"  },
    { name: "HTML5", category: "frontend", level: 85, iconName: "html5" },
    { name: "CSS3", category: "frontend", level: 85, iconName: "css3" },
    { name: "SCSS", category: "frontend", level: 85, iconName: "sass" },
    { name: "jQuery", category: "frontend", level: 80, iconName: "jquery" },
    { name: "Docker", category: "devops", level: 80, iconName: "docker" },
    { name: "Linux", category: "devops", level: 85, iconName: "linux"  },
    { name: "Apache", category: "devops", level: 82, iconName: "apache"  },
    { name: "NGINX", category: "devops", level: 82, iconName: "nginx"  },
    { name: "Cloudflare", category: "devops", level: 70, iconName: "cloudflare"},
    { name: "MySQL", category: "database", level: 90, iconName: "mysql"  },
    { name: "MSSQL", category: "database", level: 75, iconName: "mssql"  },
    { name: "SQLite", category: "database", level: 75, iconName: "sqlite"  },
    { name: "ElasticSearch", category: "database", level: 75, iconName: "elasticsearch"  },
    { name: "GitHub", category: "tools", level: 90 , iconName: "github" },
    { name: "GitLab", category: "tools", level: 90, iconName: "gitlab"  },
    { name: "Firebase", category: "tools", level: 85, iconName: "firebase"  },
    { name: "Selenium", category: "tools", level: 85, iconName: "selenium"  },
    
]

const categories: RecordCategories[] = [
    {id: "all", label: "ALL"},
    {id: "backend", legendColor: "rgb(255, 109, 58, 0.8)", label: "BACKEND"},
    {id: "frontend", legendColor: "rgb(58, 171, 255, 0.8)", label: "FRONTEND"},
    {id: "devops", legendColor: "rgb(58, 255, 122, 0.8)", label: "DEVOPS"},
    {id: "database", legendColor: "rgb(255, 217, 58, 0.8)", label: "DATABASE"},
    {id: "tools", legendColor: "rgb(196, 58, 255, 0.8)", label: "TOOLS"},
]

const skillsTab: SkillsTab[] = [
    {id: "skill-tag", label: "Skill Tags"},
]

export const TechnicalSkills = () => {
    const [category, setCategory] = useState<CategoryFilter>("all")
    const [tab, setTab] = useState<SkillsTabFilter>("skill-tag")
    const filtered = category === "all" ? SKILLS : SKILLS.filter(s => s.category === category)

    const getLegentColor = (category: string) => {
        return categories.filter((data) => data.id === category)[0].legendColor
    }
    
    return (
        <section id="skills" className="section-technical-skills">
            <div className="technical-skills-container">
                <div className="technical-skills-content">
                    <Reveal delay={200} direction="left">
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
                    </Reveal>
                    <div className="technical-skills-category-buttons-container">
                        {categories.map((data, index) => (
                            <Reveal delay={200 + index * 100} direction="up" key={data.id}>
                                <button className={cx("category-button", {["selected"]: data.id === category})} onClick={() => setCategory(data.id)} style={{borderColor: data.legendColor}}>
                                    <div className="button-content">
                                        <span>{data.label}</span>
                                    </div>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={200} direction="up" className="technical-skills-tab">
                        {skillsTab.map((data, index) => (
                            <Button key={index} content={data.label} className={cx("tab", {["selected"]: data.id === tab})} onClick={() => setTab(data.id)}></Button>
                        ))}
                    </Reveal>
                    <div className="technical-skills-tab-content-container">
                        {filtered.map((data, index) => (
                            <Reveal delay={200 + index * 100} direction="up" key={data.name}>
                                <button className="category-button" style={{borderColor: getLegentColor(data.category)}}>
                                    <div className="button-content">
                                        <span style={{width: "24px", height: "24px"}}><Icon name={data.iconName} /></span>
                                        <span>{data.name}</span>
                                    </div>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}