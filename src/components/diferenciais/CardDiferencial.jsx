import Image from "next/image";

export default function CardDiferencial(props) {
    return (
        <div className="col-md-6 col-12 d-flex py-4 px-md-4 px-0">
            <div className="card-diferencial d-grid justify-content-center text-center text-white align-items-center">
                <Image src={props.icone} alt={"Ícone "+props.titulo} width={120} className="mb-4 mx-auto" height={120}/>
                <h4 className="title p-0">{props.titulo}<br /><b>{props.subtitulo}</b></h4>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}