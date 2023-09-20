import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Equipe() {
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
        <section className="bg-fade-out" id="equipe" title="Equipe">
            <div className="container">
                <motion.div 
                    className="row section-padding text-white"
                    ref={ref}
                    initial={{ opacity:0 }}
                    animate={controls}
                    variants={squareVariants}
                >
                    <h3 className="title text-center mb-5">Eu posso montar a minha <b>própria equipe de marketing digital sem a Inffus?</b></h3>
                    <div className="col-md-6 col-12">
                        <p>Claro, mas para ter êxito, você precisa de uma equipe com no mínimo</p>
                        <ul className="list-equipe">
                            <li key="1">um Copywriter</li>
                            <li key="2">um Designer Gráfico</li>
                            <li key="3">um Gestor de Tráfego</li>
                            <li key="4">um Social Media</li>
                        </ul>
                        <p>Sem contar a Coordenação e Direção que são fundamentais para o sucesso de uma operação de marketing.</p>
                        <p>Mas se você não quer ter dor de cabeça motando uma equipe de marketing digital, deseja economizar tempo e dinheiro, você pode contar com a Inffus.</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="accordion accordion-flush mb-3" id="accordion1">
                            <div className="accordion-item">
                                <span className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <strong className="w-100 pe-2">Copywriter <b className="float-end"><s>R$ 3.0000,00</s></b></strong>
                                    </button>
                                </span>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordion1">
                                <div className="accordion-body">Este profissional cria o conteúdo que é usado em blogs, sites, mídias sociais e outros canais de marketing. Ele deve ter excelentes habilidades de escrita e entender o público-alvo da empresa. O salário pode variar de acordo com a experiência e nível, girando em torno de 3 mil reais.</div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion accordion-flush mb-3" id="accordion2">
                            <div className="accordion-item">
                                <span className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <strong className="w-100 pe-2">Designer gráfico <b className="float-end"><s>R$ 4.0000,00</s></b></strong>
                                    </button>
                                </span>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordion2">
                                <div className="accordion-body">Responsável pela criação de elementos visuais, como layouts, banners, infográficos, imagens para mídias sociais e outros materiais de marketing digital. O salário pode variar de acordo com a experiência e nível, girando em torno de 4 mil reais.</div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion accordion-flush mb-3" id="accordion3">
                            <div className="accordion-item">
                                <span className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <strong className="w-100 pe-2">Gestor de tráfego <b className="float-end"><s>R$ 5.0000,00</s></b></strong>
                                    </button>
                                </span>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordion3">
                                <div className="accordion-body">Este profissional é responsável pela gestão de campanhas de publicidade paga em motores de busca e redes sociais, como Google Ads, Facebook e Instagram. O salário pode variar de acordo com a experiência e nível, girando em torno de 5 mil reais.</div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion accordion-flush" id="accordion4">
                            <div className="accordion-item">
                                <span className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <strong className="w-100 pe-2">Social Media <b className="float-end"><s>R$ 3.0000,00</s></b></strong>
                                    </button>
                                </span>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordion4">
                                <div className="accordion-body">Este profissional gerencia as contas de mídias sociais da empresa, incluindo a criação e promoção de conteúdo, o monitoramento de engajamento e o gerenciamento de comunidades online. O salário pode variar de acordo com a experiência e nível, girando em torno de 3 mil reais.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center mt-5">
                        <a href="#title-form"><button className="common-button mx-auto">Não quero ter este custo, prefiro a ajuda da Inffus</button></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}