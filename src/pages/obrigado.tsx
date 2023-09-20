import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link";

export default function Obrigado() {
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
        <section className="bg-fade-out">
            <div className="container" style={{height: "100vh"}}>
                <motion.div 
                    className="row section-padding text-center justify-content-center"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                    style={{height: "100vh"}}
                >
                    <div className="col-12 d-grid justify-content-center text-center text-white align-items-center justify-items-center">
                        <video muted autoPlay loop style={{width: "100%"}}>
                            <source src="https://www.shutterstock.com/shutterstock/videos/17795644/preview/stock-footage-receiving-email-e-mail-sign-on-holographic-screen-the-person-received-the-email-and-opens-it-with.webm" type="video/mp4"/>
                        </video>
                        <h1 className="title mt-5"><b>MENSAGEM ENVIADA</b></h1>
                        <p className="mt-3 p-25">Sua mensagem foi enviada com sucesso e em breve nossa equipe entrará em contato por um dos meios fornecidos.</p>
                        <Link href="/"><button className="common-button mt-3">Voltar para o site</button></Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}