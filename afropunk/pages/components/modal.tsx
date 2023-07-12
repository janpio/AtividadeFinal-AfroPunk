import styles from "@/styles/modal.module.css";
import { signOut } from "next-auth/react";

export default function InfoCard() {

  return (
    <>
      <main className={styles.main}>
        <a><div>
          <img src="../images/ticket.svg" alt="ícone de ingresso da aba comprar"/>
          <p>Comprar</p>
        </div>
        </a>
        <a><div>
          <img src="../images/ticket.svg" alt="ícone de ingresso da aba meus ingressos"/>
          <p>Meus ingressos</p>
        </div>
        </a>
        <button onClick={() => signOut({callbackUrl: '/'})}><div>
          <img src="../images/ticket.svg" alt="ícone de ingresso da aba sair"/>
          <p>Sair</p>
        </div>
        </button>
      </main>
    </>
  );
}
