import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/descricao.module.css'
import LoginHeader from './components/loginheader'
import LogoDescricao from "./../public/images/image 5.svg"
import SetaParaBaixo from "./../public/images/setaparabaixo.svg"
import SetaParaCima from "./../public/images/setaparacima.svg"
import Mais from "./../public/images/mais.svg"
import Menos from "./../public/images/menos.svg"
import { useState } from "react";
import Link from 'next/link'
import { maxIngressos } from '@/services/services'
import MenuMobile from './components/menumobile'

export default function Home() {
    const [descriptionVisible, setDescriptionVisible] = useState<boolean>(false);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [visor1, setVisor1] = useState<number>(0);
    const [visor2, setVisor2] = useState<number>(0);
    const [visor3, setVisor3] = useState<number>(0);
    const [ingressos, setIngressos] = useState<number>();

    const handleDescription = () => {
        setDescriptionVisible(!descriptionVisible)
    }

    const handleAdd1 = () => {
        setVisor1(visor1+1)
        setSubtotal(subtotal + 85)
    }

    const handleAdd2 = () => {
        setVisor2(visor2+1)
        setSubtotal(subtotal + 95)
    }

    const handleAdd3 = () => {
        setVisor3(visor3+1)
        setSubtotal(subtotal + 170)
    }

    const handleReduce1 = () => {
        if (visor1 > 0) {
            setVisor1(visor1-1)
            setSubtotal(subtotal - 85)
        } else {
            setVisor1(0)
        }       
    }

    const handleReduce2 = () => {
        if (visor2 > 0) {
            setVisor2(visor2-1)
            setSubtotal(subtotal - 95)
        } else {
            setVisor2(0)
        }
    }

    const handleReduce3 = () => {
        if (visor3 > 0) {
            setVisor3(visor3-1)
            setSubtotal(subtotal - 170)
        } else {
            setVisor3(0)
        }
    }

  return (
    <>
      <Head>
        <title>AfroPunk - Descrição</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LoginHeader />
        <section className={styles.section}>
            <Image id={styles.logodescricao} src={LogoDescricao} alt="" />
            <div className={styles.descricao}>
                <h1>DESCRIÇÃO DO EVENTO</h1>
                <div className={styles.paragrafos}>
                    <p>Na cidade mais negra fora da África, o reencontro com a ancestralidade: 
    apresentamos a terceira edição brasileira do maior festival de cultura negra do mundo.</p>
                    <p>É hora de celebrar sua comunidade! Sejam bem-vindes ao AFROPUNK Bahia 2023!...</p>
                </div>
                {descriptionVisible && <div className={styles.plus}>
                    <p>ACESSOS:</p>
                    <p id={styles.span}>Arena</p>
                    <p>TIPOS DE INGRESSO:</p>
                    <div>
                        <p>Inteira: Ingresso válido apenas para o dia escolhido. Dá acesso apenas ao local determinado no ingresso.</p>
                        <p>Meia entrada: Ingresso destinado a estudantes, idosos, trans, professores e PCDs.</p>
                        <p>50% de desconto no valor do ingresso mediante a apresentação de comprovação (exigida apenas para estudantes, idosos e professores). Têm direito à meia-entrada estudantes de ensino público e particular (comprovante de matrícula aceito como comprovação); pessoas com idade igual ou superior a 60 anos; professores; pessoas com deficiência; e pessoas trans.</p>
                        <p>Ingresso social: A cada ingresso social, o festival destina R$ 10,00 (descontados os devidos impostos) para instituições e projetos que impulsionam a construção de novas possibilidades para o povo negro.</p>
                    </div>                    
                    <p>***O evento será filmado, gravado e fotografado, a critério do produtor/promotor, para posterior publicação, transmissão, retransmissão, reprodução ou divulgação em TV, cinema, rádio, internet, publicidade ou qualquer outro veículo de comunicação e nos canais digitais do festival e de seus patrocinadores.</p>
                </div>}
                <div id={styles.linha}></div>
                {!descriptionVisible && <div id={styles.seta}>                    
                    <a onClick={handleDescription}><Image id={styles.setabaixo} src={SetaParaBaixo} alt="" /></a>
                </div>}
                {descriptionVisible && <div id={styles.seta}>                    
                    <a onClick={handleDescription}><Image id={styles.setacima} src={SetaParaCima} alt="" /></a>
                </div>}             
            </div>
            <div className={styles.selecao}>
                <div className={styles.arena}>
                    <h2>Arena</h2>
                </div>
                <div className={styles.ingressos}>
                    <div className={styles.card}>
                        <div className={styles.cardtext}>
                            <p>Meia - EXCLUSIVE FOR STUDENT, ELDERLY, TRANS, PWD, TEACHER</p>
                            <p>R$ 85,00</p>
                        </div>                        
                        <div id={styles.ajuste} className={styles.numerosingressos}>
                            <a onClick={handleReduce1}><Image className={styles.botaomenos} src={Menos} alt='' /></a>
                            <p>{visor1}</p>
                            <a onClick={handleAdd1}><Image className={styles.botaomais} src={Mais} alt='' /></a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardtext}>
                            <p>MEIA SOCIAL - SOCIAL TICKET</p>
                            <p>R$ 95,00</p>
                        </div>                        
                        <div className={styles.numerosingressos}>
                            <a onClick={handleReduce2}><Image className={styles.botaomenos} src={Menos} alt='' /></a>
                            <p>{visor2}</p>
                            <a onClick={handleAdd2}><Image className={styles.botaomais} src={Mais} alt='' /></a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardtext}>
                            <p>Inteira</p>
                            <p>R$ 170,00</p>
                        </div>                        
                        <div className={styles.numerosingressos}>
                            <a onClick={handleReduce3}><Image className={styles.botaomenos} src={Menos} alt='' /></a>
                            <p>{visor3}</p>
                            <a onClick={handleAdd3}><Image className={styles.botaomais} src={Mais} alt='' /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.subtotal}>
                    <h2>Subtotal: R$ {subtotal.toFixed(2)}</h2>
                    {subtotal !== 0 && <Link href={`/ticketinfo?visor1=${visor1}&visor2=${visor2}&visor3=${visor3}&subtotal=${subtotal}`} className={styles.botaosubtotal}>Continuar</Link>}
                </div>
            </div>
        </section>
        <MenuMobile />
      </main>
    </>
  )
}
