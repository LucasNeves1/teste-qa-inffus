import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Duvidas() {
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
        <section className="bg-fade-out" id="duvidas" title="Duvidas">
            <div className="container">
                <motion.div 
                    className="row section-padding text-white justify-content-center"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                >
                    <div className="col-md-9 col-11 d-flex flex-md-row flex-wrap bg-orange-clean alig-items-center">
                        <div className="col-md-4 col-12 d-flex align-items-center justify-content-md-end justify-content-center pe-md-5 pe-0">
                            <Image src="/inffus-secao-final-01.svg" alt="Ícone Dúvidas" width={140} height={140} />
                        </div>
                        <div className="col-md-7 col-12 text-md-start text-center">
                            <h4 className="fw-bolder mt-md-0 mt-4">Está com dúvidas?</h4>
                            <p className="py-2">Solicite a Análise de Presença digital da sua marca, assim nossos especialistas irão apresentas relatórios que irão apontar o melhor caminho para seguir com a Assessoria de Marketing Digital da Inffus.</p>
                            <a href="#title-form"><button className="common-button">Solicitar análise de presença digital</button></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}