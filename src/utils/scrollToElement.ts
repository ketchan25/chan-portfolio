export const goToSection = (e: React.MouseEvent<HTMLAnchorElement|HTMLButtonElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};