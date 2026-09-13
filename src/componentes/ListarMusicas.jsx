import styles from "./style.module.css"

export function ListaMusicas() {
    function Header() {
        return (
            <div className={styles.sectionheader}>
                <h2>Músicas cadastradas</h2>
                <p>Visualize e gerencie suas músicas.</p>
            </div>
        )
    }

    function Filtro() {
        let FILTROS = ["nome", "artista", "album", "duracao"]
        return (
            <div className={styles.filterarea}>
                <select className={styles.filterselect}>
                    {FILTROS.map(filtro => <option value={filtro}>
                        {filtro.charAt(0).toUpperCase() + filtro.slice(1)}
                    </option>)}
                </select>
                <input
                    type="text"
                    className={styles.filterinput}
                    placeholder="Filtrar músicas..."
                />
            </div>
        )
    }

    function Musica(props) {
        return (
            <div className={styles.musicitem}>
                <img
                    src="https://freeplaceholder.com/100x100"
                />
                <div className={styles.musicinfo}>
                    <h3>{props.titulo}</h3>
                    <span className={styles.artist}>
                        {props.artista}
                    </span>
                    <span className={styles.album}>
                        {props.album}
                    </span>
                </div>
                <span className={styles.duration}>
                    {props.duracao}
                </span>
                <button className={styles.btndelete} title="Excluir música">
                    🗑
                </button>
            </div>
        )
    }

    return (
        <section className={styles.musiccard}>
            <Header />
            <Filtro />

            <div className={styles.musiclist}>
                <Musica
                    titulo={"Blinding Lights"}
                    artista={"The Weeknd"}
                    album={"After Hours"}
                    duracao={"03:20"}/>
            </div>
        </section>
    )
}