import { useState } from "react";
import cx from "classnames";
import "../../styles/sections/career.scss";

export const Career = () => {
    return (
        <section className="section-career">
            <div className="career-container">
                <div className="career-content">
                    <div>
                        <div className="career-header">
                            <span className="section-bullet"/>
                            Career
                        </div> 
                        <h2>
                            Work
                            <br/>
                            <span>Experience.</span>
                        </h2>
                    </div>
                    <div className="career-content">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}