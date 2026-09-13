import styles from "./style.module.css"
import { Header } from "../componentes/Header"
import { ListaMusicas } from "../componentes/ListarMusicas"
import { Cadastro } from "../componentes/Cadastro"
import { useState } from "react";

export function PaginaPrincipal() {
    const [musicas, setMusicas] = useState([]);

    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.content}>
                <section className={styles.formcard}>
                    <div className={styles.sectionheader}>
                        <h2>Cadastrar música</h2>
                        <p>Preencha os dados da música abaixo.</p>
                    </div>
                    <Cadastro musicas={musicas}
                        setMusicas={setMusicas} />
                </section>
                <ListaMusicas musicas={musicas}
                        setMusicas={setMusicas}/>
            </div>
        </main>
    )
}