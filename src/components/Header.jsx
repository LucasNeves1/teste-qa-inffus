import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Header(props) {
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
        <header className="bg-fade-out" id="header" title="Cabeçalho">
            <div className="container">
                <div className="row section-padding">
                    <motion.div 
                        className="col-12 d-flex text-center flex-wrap justify-content-center align-items-center"
                        ref={ref}
                        initial={{ opacity:0 }}
                        animate={controls}
                        variants={squareVariants}
                    >
                        <Image src={props.logo} alt="Logo Inffus" width={350} height={150} />
                        <h1 className="py-4 title">Tenha uma <b>equipe completa de marketing digital</b> para sua empresa sem se preocupar com a gestão e encargos trabalhistas</h1>
                        <a href="#title-form"><button className="common-button">Como fazer marketing digital para minha empresa</button></a>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}