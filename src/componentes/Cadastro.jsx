import { useState } from "react";
import styles from "./style.module.css"

export function Cadastro() {
    const[musicas, setMusicas] = useState([])

    function CamposTexto(props) {
        return (
            <div className={styles.formgroup}>
                <label>{props.titulo}</label>
                <input
                    type={props.tipo}
                    id={props.id}
                    name={props.id}
                    placeholder={props.placeholder}
                    required
                ></input>
            </div>
        )
    }

    function BotaoCadastro() {
        return (
            <button type="submit" className={styles.btncadastrar}>
                Cadastrar música
            </button>
        )
    }

    async function cadastrar(event) {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)
        
        const duracao = Number(formData.get("duracao"));
        if(duracao <= 0) {
            alert("A duração deve ser um número positivo")
            return
        }

        const musica = {
            id:crypto.randomUUID(),
            nome: formData.get("nome"),
            artista: formData.get("artista"),
            album: formData.get("album"),
            duracao: duracao
        }

        setMusicas([...musicas, musica])
        form.reset()
        alert("Música cadastrada com sucesso.")
    }

    return (
        <form onSubmit={cadastrar}>
            <div className={styles.formgroup}>
                <CamposTexto
                    id={"nome"}
                    titulo={"Nome da música"}
                    tipo={"text"}
                    placeholder={"Digite o nome da música"} />
                <CamposTexto
                    id={"artista"}
                    titulo={"Artista"}
                    tipo={"text"}
                    placeholder={"Digite o nome do artista"} />
                <CamposTexto
                    id={"album"}
                    titulo={"Álbum"}
                    tipo={"text"}
                    placeholder={"Digite o nome do álbum"} />
                <CamposTexto
                    id={"duracao"}
                    titulo={"Duração"}
                    tipo={"text"}
                    placeholder={"Digite a duração (em seg) da música"} />
            </div>
            <BotaoCadastro />
        </form>
    )
}