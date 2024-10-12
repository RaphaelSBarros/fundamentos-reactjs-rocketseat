import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className='' src="https://github.com/RaphaelSBarros.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time title='11 de Outubro de 2024 às 16:18h' dateTime="11/10/2024 16:18:00">Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Raphael, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
