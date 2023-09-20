import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Footer(props) {
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
        <footer className="bg-fade-out" id="footer" title="Rodapé">
            <div className="container">
                <motion.div 
                    className="row section-padding text-white justify-content-center text-center"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                >
                    <div className="col-12">
                        <a href="https://inffus.com.br" target="_blank" rel="noreferrer">
                            <Image src={props.logo} alt="Logo Inffus" width={300} height={100} />
                        </a>
                        <p className="fst-italic mt-2">Transformamos ideias em negócios competitivos e escaláveis.</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}