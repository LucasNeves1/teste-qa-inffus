import CardAssessoria from "./assessorias/CardAssessoria";
import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Assessorias() {
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
        <section className="bg-orange-dark" id="assessorias" title="Assessorias">
            <div className="container">
                <motion.div 
                    className="row justify-content-center section-padding text-center text-white"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                >             
                    <h3 className="py-4 title">A <b>Inffus</b> possui um <b>tipo de assessoria</b> para cada etapa do seu negócio</h3>
                    <p>Um dos <b>3 tipos de assessorias de marketing da Inffus</b> irá se encaixar perfeitamente com a realidade atual do seu negócio, ajudando a fortalecer a imagem da empresa, resolver problemas, ganhar escala e aumentar as vendas.</p>
                    <CardAssessoria 
                        porcentagem="25%" 
                        numero="1" 
                        nome="Assessoria Iniciação" 
                        texto="Para negócios que estão iniciando, não possuem uma presença digital estabelecida e desejam crescer no seu nicho."
                    />
                    <CardAssessoria 
                        porcentagem="65%" 
                        numero="2" 
                        nome="Assessoria Expansão" 
                        texto="Para negócios que já iniciaram e possuem presença digital notável mas precisam expandir, aumentando suas vendas."
                    />
                    <CardAssessoria  
                        porcentagem="95%" 
                        numero="3" 
                        nome="Assessoria Consolidação" 
                        texto="Para negócios já estabelecidos, que possuem presença digital, reconhecimento de marca e desejam se consolidar."
                    />
                    <a href="#title-form"><button className="common-button mt-0 mt-5">Solicite uma análise e descubra qual o momento atual da sua empresa.</button></a>
                </motion.div>
            </div>
        </section>
    )
}