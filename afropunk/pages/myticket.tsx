import LoginHeader from "./components/loginheader";
import styles from "@/styles/myticket.module.css";
import { useState, useEffect } from "react";
import { IngressoObj } from "@/services/services";
import UserTicket from "./components/userticket";
import type { Perfil } from "@/services/services";
import MenuMobile from "./components/menumobile";
import Head from "next/head";

export default function MyTicket() {
    const [active, setActive] = useState<boolean>(false);
    const [closed, setClosed] = useState<boolean>(false);
    const [tickets, setTickets] = useState<IngressoObj[] | null>(null);
    const [perfil, setPerfil] = useState<Perfil | null>(null);
    const [activeButton, setActiveButton] = useState<string>("closed");
    const [closedButton, setClosedButton] = useState<string>("closed");
  
    const handleActive = () => {
      setActive(true);
      setClosed(false);
      setActiveButton("active")
      setClosedButton("closed")
    };
  
    const handleClosed = () => {
      setClosed(true);
      setActive(false);
      setActiveButton("closed")
      setClosedButton("active")
    };

    

    useEffect(() => {
      const fetchPerfil = async () => {
        try {
          const response = await fetch("/api/usuario/perfil");
          if (response.ok) {
            const data = await response.json();
            setPerfil(data);
          } else {
            console.log("Erro ao obter perfil:", response.status);
          }
        } catch (error) {
          console.log("Erro ao obter perfil:", error);
        }
      };
      fetchPerfil();
    }, []);
  
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/usuario/ingressos");
        if (response.ok) {
          const data = await response.json();
          setTickets(data);
        } else {
          console.log("Erro ao obter os ingressos:", response.status);
        }
      } catch (error) {
        console.log("Erro ao obter os ingressos:", error);
      }
    };
    fetchTickets();
  }, []);

  return (
    <>
      <Head>
        <title>Meus ingressos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LoginHeader />
        <section>
          <div className={styles.title}>
            <h1>Meus ingressos</h1>
          </div>
          <div className={styles.menu}>
            <button onClick={handleActive} className={activeButton === "active" ? styles.activeButton: ""}>Ativos</button>
            <button onClick={handleClosed} className={closedButton === "active" ? styles.activeButton: ""}>Encerrados</button>
          </div>
          <div className={styles.myticket}>
            
            {active && (
              <>
                {tickets && tickets.length > 0 && (
                  tickets.map((ticket) => <div className={styles.divTickets}><p key={ticket.id}><UserTicket id = {ticket.id} nome = {perfil?.nome} email={perfil?.email} tipo = {ticket.tipo}/></p></div>)
                )}
              </>
            )}
            {active && (
              <>
                {tickets && tickets.length === 0 && (
                  <div className={styles.noTickets}>
                    <p>Não localizamos nenhum ingresso</p>
                    <a href="/descricao">COMPRAR INGRESSO</a>
                </div>
                )}
              </>
            )}
            {closed && <p>Não localizamos nenhum ingresso</p>}
          </div>
        </section>
        <MenuMobile/>
      </main>
    </>
  );
}
