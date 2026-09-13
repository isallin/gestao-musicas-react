import { useEffect, useState } from "react"
import styles from "./style.module.css"

export function ListaMusicas({ musicas, setMusicas }) {
    const [filtro, setFiltro] = useState("nome")
    const [busca, setBusca] = useState("")
    const [musicasFiltradas, setMusicasFiltradas] = useState([])

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
                <select
                    className={styles.filterselect}
                    value={filtro}
                    onChange={(event) => setFiltro(event.target.value)}
                >
                    {FILTROS.map(filtro => <option value={filtro} key={filtro}>
                        {filtro.charAt(0).toUpperCase() + filtro.slice(1)}
                    </option>)}
                </select>
                <input
                    type="text"
                    className={styles.filterinput}
                    placeholder="Filtrar músicas..."
                    value={busca}
                    onChange={(event) => setBusca(event.target.value)}
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
                <button
                    onClick={() => RemoverMusica(props.id)}
                    className={styles.btndelete}
                    title="Excluir música">
                    🗑
                </button>
            </div>
        )
    }

    function RemoverMusica(idMusica) {
        let listaNova = [...musicas]

        for (let i = 0; i < listaNova.length; i++) {
            if (listaNova[i].id == idMusica) {
                listaNova.splice(i, 1)
            }
        }
        setMusicas(listaNova)
    }

    function FiltrarMusica() {
        let listaNova = []
        if (busca != "") {
            for (let i = 0; i < musicas.length; i++) {

                let valor = musicas[i][filtro]

                if (valor.toLowerCase().includes(busca.toLowerCase())) {
                    listaNova.push(musicas[i])
                }
            }
        }
        setMusicasFiltradas(listaNova)
    }

    useEffect(() => {
        FiltrarMusica()
    }, [busca, filtro, musicas])

    return (
        <section className={styles.musiccard}>
            <Header />
            <Filtro />

            <div className={styles.musiclist}>
                {busca.length == 0 ? (
                    musicas.length == 0 ? (
                        <p>Sem música cadastrada</p>
                    ) : (
                        musicas.map(musica => (
                            <Musica
                                key={musica.id}
                                id={musica.id}
                                titulo={musica.nome}
                                artista={musica.artista}
                                album={musica.album}
                                duracao={musica.duracao}
                            />
                        ))
                    )
                ) : (
                    musicasFiltradas.length == 0 ? (
                        <p>Nenhuma música encontrada</p>
                    ) : (
                        musicasFiltradas.map(musica => (
                            <Musica
                                key={musica.id}
                                id={musica.id}
                                titulo={musica.nome}
                                artista={musica.artista}
                                album={musica.album}
                                duracao={musica.duracao}
                            />
                        ))
                    )
                )}

            </div>
        </section>
    )
}