export default function CardAssessoria(props) {
    return (
        <div className="col-md-4 col-12">
            <div className="card-progress position-relative">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: props.porcentagem}} aria-valuenow={props.porcentagem} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="position-absolute">{props.numero}</span>
            </div>
            <h4 className="mt-5 mb-0 pb-0"><b>{props.nome}</b></h4>
            <p>{props.texto}</p>
        </div>
    )
}