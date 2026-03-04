import "./tab.scss";

interface TabProps {
    label: string;
    content: string;
  }

export const Tab = ({label, content} : TabProps) => {
    return (
        <div className="tab-container">
            <div className="tab-buttons">
                <span className="label">label</span>
            </div>
            <div className="tab-content-container">
            </div>
        </div>
    );
}