import styles from "./style.module.css"
import { Header } from "../componentes/Header"
import { Formulario } from "../componentes/Formulario"
import { ListaMusicas } from "../componentes/ListarMusicas"

export function PaginaPrincipal() {
    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Formulario />
                <ListaMusicas />
            </div>
        </main>
    )
}