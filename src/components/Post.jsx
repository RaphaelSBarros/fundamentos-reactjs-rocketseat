import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className='' src="https://github.com/RaphaelSBarros.png" />
          <div className={styles.authorInfo}>
            <strong>Raphael Souza</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Outubro de 2024 às 16:18h' dateTime="11/10/2024 16:18:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Voluptatem, neque esse! Molestias possimus iure error deserunt odit eaque repudiandae qui, perferendis tenetur magni, assumenda minima debitis doloribus, magnam similique itaque.</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#"> #novoprojeto</a>
          <a href="#"> #nlx</a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>
    </article>
  )
}