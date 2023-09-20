import CardDiferencial from "./diferenciais/CardDiferencial";
import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Diferenciais() {
    // controlando animação ao aparecer na tela
    const [hasAnimated, setHasAnimated] = useState(false);
    const squareVariants = {
        visible: { opacity: [0, 0.5, 1], transition: { duration: 1, ease: 'easeIn' } },
        hidden: { opacity: 0, scale: 0 }
      };
      const controls = useAnimation();
      const [ref, inView] = useInView();
      useEffect(() => {
        if (inView && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
        }
      }, [controls, inView, hasAnimated]);
    // 
    return (
        <section className="bg-orange-dark" id="diferenciais" title="Diferenciais">
            <div className="container">
                <motion.div 
                    className="row section-padding"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                >
                    <div className="col-md-9 col-12 d-flex flex-wrap justify-content-center mx-auto">
                        <CardDiferencial 
                            icone={"/inffus-lp-icons_icon-1.svg"} 
                            titulo="Público"
                            subtitulo="Ideal"
                            texto="Focamos no cliente certo para seu produto ou serviço, evitando que gastos desnecessários aconteçam."
                        />
                        <CardDiferencial 
                            icone={"/inffus-lp-icons_icon-2.svg"}
                            titulo="Inteligência"
                            subtitulo="Artificial"
                            texto="Utilizamos a inteligência artificial para construir estratégias mais assertivas, diminuindo o custo operacional."
                        />
                        <CardDiferencial 
                            icone={"/inffus-lp-icons_icon-3.svg"} 
                            titulo="Atendimento"
                            subtitulo="Humano"
                            texto="Somos apaixonados por tecnologia, mas nada substitui o atendimento humano. Nossa relação é baseada na confiança e bom senso."
                        />
                        <CardDiferencial 
                            icone={"/inffus-lp-icons_icon-4.svg"} 
                            titulo="Data-driven"
                            subtitulo="Marketing"
                            texto="Antes de tomar qualquer decisão olhamos os dados, para combinar com a sua intuição que deve ser considerada sempre."
                        />
                    </div>
                    <div className="col-12 d-flex text-center flex-wrap justify-content-center align-items-center mt-4">   
                        <a href="#title-form"><button className="common-button">Falar com um humano</button></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}