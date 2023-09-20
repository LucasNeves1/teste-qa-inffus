import Image from "next/image";

export default function CardLogo(props) {
    return (
        <Image src={props.imagem} alt={"Logo "+props.alt} 
            width={0}
            height={0}
            style={{ width: '100%', height: '100%' }}
        />
    )
}