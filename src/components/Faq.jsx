import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Faq() {
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
        <>
            <section className="bg-orange-dark" id="faq" title="FAQ">
                <div className="container">
                    <motion.div 
                        className="row section-padding justify-content-center"
                        ref={ref}
                        initial={{ opacity:0 }}
                        animate={controls}
                        variants={squareVariants}
                    >
                        <div className="col-12 d-flex text-center flex-wrap justify-content-center align-items-center">
                            <h3 className="py-4 title">Confira algumas<br/><b> Perguntas Frequentes</b></h3>
                        </div>
                        <div className="col-md-9 col-11 d-flex justify-content-center">
                            <div className="accordion w-100" id="accordionExample">
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        <strong>A Inffus pode atender às necessidades da minha empresa?</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
                                    <div className="accordion-body">
                                        <p className="mb-0">Sim, a Inffus se adapta às especificidades de cada empresa, grande ou pequena. Utilizamos a nossa vasta experiência, adquirida atendendo mais de 350 clientes, para auxiliar o seu negócio a alcançar os resultados desejados.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>Estou receoso em contratar a Inffus, pois já tive experiências negativas com outras agências, isso é compreensível?</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                    <div className="accordion-body">
                                        <p className="mb-0">Entendemos sua preocupação. A diferença é que não somos uma agência tradicional caçadora de prêmios, somos uma empresa que presta assessoria de marketing digital focada exclusivamente nos resultados de nossos clientes. Trabalhamos para identificar e executar as ações mais impactantes para o seu negócio, buscando crescimento mútuo. Nosso sucesso está diretamente ligado ao seu.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>Precisarei investir tanto quanto as grandes empresas para trabalhar com a Inffus?</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                    <div className="accordion-body">
                                        <p className="mb-0">Não, a Inffus atende negócios de todos os tamanhos e adapta a estratégia de investimento em mídia de acordo com a realidade atual da sua empresa, garantindo que você receba um serviço que atenda às suas necessidades específicas sem ultrapassar o seu orçamento. Foi pensando nisso que criamos 3 tipos de assessorias: iniciação, expansão e consolidação, que visa identificar cada fase do marketing da empresa.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong>Em quanto tempo poderei ver os resultados que desejo com a Inffus?</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour">
                                    <div className="accordion-body">
                                        <p className="mb-0">O tempo para ver resultados pode variar dependendo de cada caso. Porém, podemos assegurar que com a nossa assistência, o crescimento do seu negócio será acelerado, potencialmente reduzindo pela metade o tempo que levaria sem a nossa ajuda. Um de nossos consultores pode analisar seu caso específico e fornecer uma estimativa mais precisa. <a href="#title-form"><b>Solicite uma análise agora mesmo.</b></a></p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <strong>O custo dos serviços da Inffus não é muito elevado?</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive">
                                    <div className="accordion-body">
                                        <p className="mb-0">O investimento nos serviços da Inffus é uma aposta no crescimento acelerado do seu negócio. Adiar esse crescimento pode acabar custando mais no longo prazo. Além disso, nossos planos são adaptáveis ao seu orçamento atual, permitindo que você invista um montante que seja compatível com a situação atual do seu negócio.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}