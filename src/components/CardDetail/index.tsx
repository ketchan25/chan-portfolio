import "./carddetail.scss";

interface CardDetailInfoProps {
    icon?: string;
    detailType: string;
    description: string;
}

interface CardDetailProps {
    title: string;
    info: Array<CardDetailInfoProps>
}

export const CardDetail = ({title, info} : CardDetailProps) => {
    return (
        <div className="card-detail">
            <div>
                <span className="title">{title}</span>
            </div>
            {info.map((data, index) => (
                <div key={index} className="detail">
                    <span className="icon">{data.icon}</span>
                    <span className="detail-type">{data.detailType}</span>
                    <div className="description">{data.description}</div>
                </div>
            ))}
        </div>
    );
}