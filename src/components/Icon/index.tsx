import { useEffect, useState} from 'react';

export const Icon = ({name}: { name: string | undefined }) => {
    const [path, setPath] = useState("");

    useEffect(() => {
        const importIcon = async () => {
            try {
                const { default: _path } = await import(`../../assets/icons/${name}.svg`);
                setPath(_path);
            } catch (err) {
                console.error(err);
            }
        };
        importIcon();
    }, [name]);

    return (
        <>{ path && <img src={path} alt = "" />}</>
    );
}