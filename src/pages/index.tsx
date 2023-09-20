import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import FormPrincipal from '@/components/Formulario';
import ListaComGrafico from '@/components/ListGraph';
import Assessorias from '@/components/Assessorias';
import SobreInffus from '@/components/Sobre';
import Diferenciais from '@/components/Diferenciais';
import Equipe from '@/components/Equipe';
import Empresas from '@/components/Empresas';
import Importante from '@/components/Importante';
import Duvidas from '@/components/Duvidas';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header logo="/logo-inffus-sem-cogumelo.svg"/>
      <FormPrincipal />
      <ListaComGrafico />
      <Assessorias />
      <SobreInffus />
      <Diferenciais />
      <Equipe />
      <Empresas />
      <Importante />
      <Duvidas />
      <Faq />
      <Footer logo="/logo-branca.svg" />
    </>
  )
}
