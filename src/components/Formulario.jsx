import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import Image from "next/image";
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function FormPrincipal() {
    // controlando animação ao aparecer na tela
    const [hasAnimated, setHasAnimated] = useState(false);
    const squareVariants = {
        visible: { opacity: [0, 0.5, 1], transition: { duration: 2, ease: 'easeIn' } },
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
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [segmento, setSegmento] = useState('*');
    const [qtdFuncionarios, setQtdFuncionarios] = useState('*');
    const [faturamento, setFaturamento] = useState('*');
    const [aceitouTermos, setAceitouTermos] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');
    const selectSegmentos = [
        'Educação',
        'Serviço',
        'E-commerce', 
        'SAAS',
        'Energia Solar',
        'Turismo',
        'Food Service',
        'Franquia',
        'Indústria',
        'Finanças',
        'Varejo',
        'Imobiliária',
        'Telecom',
        'Outro',
    ];
    const selectFuncionarios = [
        '00 - 01',
        '02 - 10',
        '11 - 20',
        '21 - 50',
        '51 - 100',
        '+ 100',
    ];
    const selectFaturamento = [
        'Até 20 mil',
        'De 21 mil à 50 mil',
        'De 51 mil à 70 mil',
        'De 71 mil à 100 mil',
        'De 101 mil à 400 mil',
        'De 401 mil à 1 milhão',
        'De 1 à 4 milhões',
        'De 4 à 16 milhões',
        'De 16 à 64 milhões',
        'Mais de 64 milhões',
    ];
    const [enviado, setEnviado] = useState(false);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviado(true); 
        if (aceitouTermos) {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('telefone', telefone);
            formData.append('empresa', empresa);
            formData.append('segmento', segmento);
            formData.append('qtd_funcionarios', qtdFuncionarios);
            formData.append('faturamento', faturamento);
            try {
                const response = await axios.post('https://www.inffus.com.br/ajax/formulario-lp.php', formData, {
                    // Your request data here
                });
                window.location.href = "/obrigado";
            } catch (error) {
                console.log(error);
            }
        } else {
            setEnviado(false); 
            setMensagemErro('Você deve aceitar os termos para enviar o formulário.');
        }

    };
    const handleCheckboxChange = () => {
        setAceitouTermos(!aceitouTermos);
        if (!aceitouTermos) {
            setMensagemErro('');
        }
    };
  return (
    <section className="bg-orange-dark" id="form-principal" title="Formulário principal">
    <div className="container">
        <motion.div 
            className="row justify-content-center section-padding text-center"
            ref={ref}
            initial={{ opacity:0 }}
            animate={controls}
            variants={squareVariants}
        >             
            <h3 className="py-4 title" id="title-form">Preencha o formulário para <b>garantir o seu atendimento</b> e sair na frente da concorrência</h3>
            {/* <div className="col-md-5 d-flex justify-content-md-end">
                <Image src="/inffus-foto-min.webp" alt="Representa da Inffus" 
                    width={0}
                    height={0}
                    style={{ width: '100%', height: '100%' }} 
                />
            </div>  */} 
            <div className="col-md-5 d-flex align-items-center">
                <form onSubmit={handleSubmit} id="form">
                <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    id="nome"
                    placeholder="Qual seu nome?"
                    className="form-control"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="E-mail corporativo"
                    className="form-control"
                    required
                />
                <InputMask
                    type="tel"
                    name="telefone"
                    mask="(99) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    id="telefone"
                    placeholder="Telefone?"
                    className="form-control"
                    required
                />
                <input
                    type="text"
                    name="empresa"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    id="empresa"
                    placeholder="Qual o nome da sua empresa?"
                    className="form-control"
                    required
                />
                <select
                    name="segmento"
                    value={segmento}
                    onChange={(e) => setSegmento(e.target.value)}
                    id="segmento"
                    className="form-control form-select"
                >
                    <option value="*" disabled>Qual o seu segmento?</option>
                    {selectSegmentos.map((segment, index) => (
                        <option key={index} value={segment}>
                            {segment}
                        </option>
                    ))}
                </select>
                <select
                    name="qtd_funcionarios"
                    value={qtdFuncionarios}
                    onChange={(e) => setQtdFuncionarios(e.target.value)}
                    id="qtd_funcionarios"
                    className="form-control form-select"
                >
                    <option value="*" disabled>Quantos funcionários você tem hoje?</option>
                    {selectFuncionarios.map((qtd, index) => (
                        <option key={index} value={qtd}>
                            {qtd}
                        </option>
                    ))}
                </select>
                <select
                    name="faturamento"
                    value={faturamento}
                    onChange={(e) => setFaturamento(e.target.value)}
                    id="faturamento"
                    className="form-control form-select"
                >
                    <option value="*" disabled>Qual faturamento mensal da sua empresa?</option>
                    {selectFaturamento.map((faturamento, index) => (
                        <option key={index} value={faturamento}>
                            {faturamento}
                        </option>
                    ))}
                </select>
                    <div className="pb-4">
                        <input type="checkbox" name="pp" id="pp" 
                            checked={aceitouTermos}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="pp" className="text-white">&nbsp; Li e aceito a <a href="https://inffus.com.br/politica-de-privacidade" target="_blank" className='text-underline'>Política de Privacidade</a>.</label>
                        {mensagemErro && <p className='text-center text-danger mb-0'>{mensagemErro}</p>}
                    </div>
                    <div className="pb-3">
                        <button type="submit" className="common-button" disabled={enviado}>
                            {enviado ? 'Enviando...' : 'Solicitar contato de um especialista'}
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    </div>
</section>
)};
