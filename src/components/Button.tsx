import cx from "classnames";

interface ButtonProps {
    content: string | React.ReactNode;
    href?: string;
    onClick: () => void;
    className?: string;
    icon?: React.ReactNode;
  }

export const Button = ({content, href, onClick, className, icon} : ButtonProps) => {
    return (
        href
            ? <a className={className}>{content}</a>
            : <button className={className} onClick={onClick}>{content}</button>
    );
}