import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/RaphaelSBarros.png",
      name: "Raphael Souza",
      role: "Developer Intern @ SZSoluções",
    },
    content: [
      {
        type: "paragraph",
        content: "Hello, my name is Raphael and welcome to my world 🌎 !",
      },
      {
        type: "paragraph",
        content:
          "🎓 Analysis and Systems Development student at Católica SC 🎓",
      },
      {
        type: "paragraph",
        content: "💻 Learning Full-stack Javascript development at B7Web 💻",
      },
      {
        type: "paragraph",
        content: "💼 Software Development Intern at SZ Soluções 💼",
      },
      {
        type: "link",
        content: "https://www.linkedin.com/in/raphael-alexsandro-25331a237",
      },
    ],
    publishedAt: new Date("2024-10-12 18:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/DaniloBertolini.png",
      name: "Danilo Bertolini",
      role: "Fullstack Developer @ Soon",
    },
    content: [
      { type: "paragraph", content: "Olá! Eu sou o Danilo Bertolini" },
      {
        type: "paragraph",
        content:
          "Desenvolvedor Web Full Stack curioso e apaixonado por programação. Meu primeiro contato com a programação foi na faculdade que eu fiz Redes de Computadores no IFC, e uma das matérias foi Desenvolvimento Web. Atraído pela Tecnologia, estudei por fora também, em um site chamado DIO. Lá fiz alguns cursos básicos, e posteriormente ingressei na Trybe, uma escola de Tecnologia.",
      },
      { type: "link", content: "https://www.linkedin.com/in/danilobertolini/" },
    ],
    publishedAt: new Date("2024-10-11 19:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
