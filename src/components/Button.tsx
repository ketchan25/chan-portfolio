import cx from "classnames";

interface ButtonProps {
    label: string;
    href?: string;
    onClick: () => void;
    type?: string;
    icon?: React.ReactNode;
  }

export const Button = ({label, href, onClick, type, icon} : ButtonProps) => {
    return (
        href
            ? <button className={cx({
                ['view-experience']: type === "view-experience",
                ['get-in-touch']: type === "get-in-touch",
                ['email']: type === "email",
            })} onClick={onClick}>{label}</button>
            : <a className={cx({
                ['view-experience']: type === "view-experience",
                ['get-in-touch']: type === "get-in-touch",
                ['email']: type === "email",
            })}>{label}</a>
    );
}