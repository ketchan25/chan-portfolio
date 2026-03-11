interface ButtonProps {
    content: string | React.ReactNode;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement>) => void;
    className?: string;
  }

export const Button = ({content, href, onClick, className} : ButtonProps) => {
    return (
        href
            ? <a href={href} className={className} onClick={onClick}>{content}</a>
            : <button className={className} onClick={onClick}>{content}</button>
    );
}