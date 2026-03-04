import cx from "classnames";
import "./tag.scss";

interface TagProps {
    label: string;
    className?: string;
  }

export const Tag = ({label, className} : TagProps) => {
    return (
        <div className={cx("tag", className)}>
            <span className="label">{label}</span>
        </div>
    );
}