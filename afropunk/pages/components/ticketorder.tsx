import styles from '@/styles/ticketorder.module.css'

interface TicketOrderProps {
    pedido: number,
    nome: string | undefined,
    email: string | undefined,
    tipo: string
}
export default function TicketOrder({pedido, nome = '', email = '', tipo}: TicketOrderProps) {
    const numPedido = pedido
    const nomeComprador = nome
    const emailComprador = email
    const tipoIngresso = tipo

    return (
        <>
            <main className={styles.mainOrder}>
                <header className={styles.headerOrder}>
                    <div>
                        <h1>Pedido nº {numPedido}</h1>
                        <div>
                        <p>{nomeComprador}</p>
                        <p>{emailComprador}</p>
                        </div>
                    </div>
                    <div className={styles.divOrder}>
                        <p>Nº do pedido: <br/> {numPedido}</p>
                        <p>Compra APROVADA</p>
                    </div>
                </header>
                <section className={styles.contentOrder}>
                    <h2>Ingressos comprados neste pedido:</h2>
                    <div className={styles.sectionOrder}>
                        <div>
                            <p>PASSAPORTE ARENA</p>
                            <p className={styles.typeTicket}>26 e 27.11 | {tipoIngresso}</p>
                            <p>(2 days pass general admission)</p>
                            <p>Setor: <span>Arena</span></p>
                        </div>
                        <div className={styles.orderValue}>
                            <p>Valor total: <br/> R$ 0,00</p>
                        </div>
                    </div>
                </section>
                <footer className={styles.footerOrder}>
                    <div>
                        <h3>CLASSIFICAÇÃO INDICATIVA:</h3>
                        <p>16 anos</p>
                    </div>
                    <div>
                        <h3>INFORMAÇÕES IMPORTANTES:</h3>
                        <p>1. Apenas uma unidade do E-ticket impresso poderá ser utilizado para entrar no evento ou espetáculo. Todas as outras impressões ou cópias feitas do E-ticket serão recusadas.</p>
                        <p>2. Não nos responsabilizamos por ingressos comprados fora dos canais oficiais de venda.</p>
                        <p>3. O ingresso é válido somente para a data, horário, local e assento (quando aplicável) para o qual foi emitido.</p>
                    </div>
                </footer>
            </main>
        </>
    )
}