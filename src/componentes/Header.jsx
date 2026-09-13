import styles from "./style.module.css"

export function Header() {
    return (
        <header className={styles.pageheader}>
            <div>
                <h1>Gerenciamento de Músicas</h1>
                <p>Cadastre e gerencie suas músicas.</p>
            </div>
        </header>
    )
}