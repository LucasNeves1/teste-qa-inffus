import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import '@/styles/main.css'
//import "bootstrap/dist/js/bootstrap.js";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // importando js assim, pois normalmente n funcionaria como esperado
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js")
  }, []);

  return <Component {...pageProps} />
}
