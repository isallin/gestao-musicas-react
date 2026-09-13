import styles from "./style.module.css"
import { Cadastro } from "./Cadastro"

export function Formulario() {
    return (
        <section className={styles.formcard}>
            <div className={styles.sectionheader}>
                <h2>Cadastrar música</h2>
                <p>Preencha os dados da música abaixo.</p>
            </div>
            <Cadastro/>
        </section>
    )
}