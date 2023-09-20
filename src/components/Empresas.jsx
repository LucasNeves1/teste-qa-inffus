import CardLogo from "./empresas/CardLogo";
import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Empresas() {
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
        <section className="bg-fade-out" id="empresas" title="Empresas">
            <div className="container">
                <motion.div 
                    className="row section-padding text-center text-white"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                >
                    <h3 className="title">A Inffus já ajudou no crescimento de centenas de empresas</h3>
                    <p className="pt-4 pb-5">Essas grandes empresas confiam na Inffus devido ao nosso método desenvolvido exclusivamente para perfomance online.</p>
                    <div className="d-grid logos-clientes">
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_1.svg"} alt="PDKMotors"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_2.svg"} alt="Paito Motors"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_3.svg"} alt="Kiko Autos"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_4.svg"} alt="Unimais"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_5.svg"} alt="Kia Ponto K"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_6.svg"} alt="Bahrein Motors"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_7.svg"} alt="Comfort Car"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_8.svg"} alt="Terzo Macchina"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_9.svg"} alt="Buggat Cars"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_10.svg"} alt="Studio Daytona"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_11.svg"} alt="Usual"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_12.svg"} alt="Mundo Livre FM"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_13.svg"} alt="Porto Camargo"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_14.svg"} alt="Fyr Studio"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_15.svg"} alt="Ryk Motors"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_16.svg"} alt="BMZ"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_17.svg"} alt="PDKBikes"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_18.svg"} alt="Fundação Abrinq"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_19.svg"} alt="Sebrae PR"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_20.svg"} alt="Avance"/>
                       <CardLogo imagem={"/logos/inffus-mosaico-clientes_21.svg"} alt="Prefeitura Curitiba"/>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center mt-5">
                        <a href="#title-form"><button className="common-button mx-auto">Quero ajuda da inffus</button></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}