import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function SobreInffus() {
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
        <section className="bg-fade-out" id="sobre" title="Sobre a Inffus">
            <div className="container">
                <motion.div 
                    className="row section-padding"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                >
                    <div className="col-12 d-flex text-center flex-wrap text-white justify-content-center align-items-center">
                        <h3 className="title">O que a <b>Inffus</b> faz?</h3>
                        <p>
                            Desde 2010 ajudamos empresas através do uso de tecnologia e marketing. Já ajudamos a criar negócios do zero, 
                            expandir operações e marcas para todo Brasil e a cada dia que passa, evoluímos nossos processos e metodologia
                            para atender você e sua empresa com excelência.
                        </p>
                        <ul className="w-100 list-sobre">
                            <li key="1">mais presença de marca</li>
                            <li key="2">mais reconhecimento e indicações</li>
                            <li key="3">mais vendas e faturamento</li>
                            <li key="4">mais lucro e prosperidade</li>
                        </ul>
                        <div className="col-md-4 col-12 my-md-5 my-2">
                            <p className="big mb-0"><b>+2 bilhões</b></p>
                            <p>em receitas para nossos clientes</p>
                        </div>
                        <div className="col-md-4 col-12 my-md-5 my-2">
                            <p className="big mb-0"><b>+350</b></p>
                            <p>empresas atendidas pela Inffus</p>
                        </div>
                        <div className="col-md-4 col-12 my-md-5 my-2">
                            <p className="big mb-0"><b>+1000</b></p>
                            <p>projetos desenvolvidos</p>
                        </div>
                        <a href="#title-form"><button className="common-button mt-0 mt-2">Solicitar atendimento de um especialista</button></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}