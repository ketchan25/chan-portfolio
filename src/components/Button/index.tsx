interface ButtonProps {
    content: string | React.ReactNode;
    href?: string;
    onClick: () => void;
    className?: string;
  }

export const Button = ({content, href, onClick, className} : ButtonProps) => {
    return (
        href
            ? <a className={className}>{content}</a>
            : <button className={className} onClick={onClick}>{content}</button>
    );
}