import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const diferential = [{
    id: 0, 
    text: 'Tudo começa através da <b>consultoria de marketing</b>, com o objetivo de determinar em qual estágio sua empresa se encontra.',
  }, {
    id: 1, 
    text: 'Depois, um dos 3 tipos de <b>assessorias de marketing digital da Inffus</b> é recomendada para seu caso. ',
  }, {
    id: 2, 
    text: ' Avaliamos mensalmente a <b>evolução dos seus resultados</b>, adaptamos processos e definimos novas metas.',
  }, {
    id: 3, 
    text: 'Nosso propósito é construir a <b>presença digital</b> da sua empresa ou marca e <b>aumentar suas vendas</b>.',
  }];

export default function ListaComGrafico() {
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
    const listItems = diferential.map(diferential =>
        <li key={diferential.id}>
            <p dangerouslySetInnerHTML={{ __html: diferential.text }} />
        </li>
      );
    return (
        <section className="bg-fade-out" id="list" title="Lista com Gráfico">
            <div className="container">
                <motion.div 
                  ref={ref}
                  initial={{ opacity:0 }}
                  animate={controls}
                  variants={squareVariants}
                  className="row justify-content-center section-padding align-items-center text-center"
                >             
                    <h3 className="py-4 title">Você deseja <b>conquistar mais clientes</b> com marketing digital?</h3>
                    <div className="col-md-6">
                        <ul className="text-white text-start lista-graph">
                          {listItems}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <Image src={"/inffus-graphics-01.svg"} alt="Gráfico Inffus"  
                          width={0}
                          height={0}
                          style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <a href="#assessorias" className="mt-5"><button className="common-button">Saiba mais sobre nossas assessorias de marketing</button></a>
                </motion.div>
            </div>
        </section>
    )
}