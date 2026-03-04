import "./countcard.scss";

interface CountCardProps {
    count: string;
    subLabel: string;
  }

export const CountCard = ({count, subLabel} : CountCardProps) => {
    return (
        <div className="count-card">
            <div>
                <span className="count">{count}</span>
            </div>
            <div>
                <span className="sub-label">{subLabel}</span>
            </div>
        </div>
    );
}