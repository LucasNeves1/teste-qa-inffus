import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Importante() {
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
        <section className="bg-orange-dark" id="importante" title="Importante">
            <div className="container">
                <motion.div 
                    className="row section-padding text-center justify-content-center"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                >
                    <div className="col-12 d-grid justify-content-center text-center text-white justify-items-center">
                        <Image src="/inffus-caution-01.svg" alt="Ícone de Atenção" width={150} height={130} />
                        <h3 className="title mt-5"><b>IMPORTANTE!</b><br />O que é preciso para contratar os serviços da Inffus?</h3>
                        <p className="mt-3 p-25">Sua empresa precisa ser estabelecida legalmente, possui ao menos um contato designado pra falar diretamente com a equipe da Inffus e verba de mídia estipulada.</p>
                        <a href="#title-form"><button className="common-button mt-3">Falar com um humano</button></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}