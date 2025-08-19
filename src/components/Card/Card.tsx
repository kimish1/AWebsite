
type MyCardProps = {
    title: string;
    buttonName: string;
    children: React.ReactNode;
};


const Card = (props:MyCardProps) =>{
    return (
            <div className="card">
                <div className="content">
                    <div className="title">{props.title}</div>
                    {props.children}
                </div>
                <button>
                {props.buttonName}
                </button>
            </div>
    )
}

export default Card