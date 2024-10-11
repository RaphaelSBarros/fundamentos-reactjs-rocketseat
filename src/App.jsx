import { Header } from "./components/Header"
import { Post } from "./post"

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Usuário 1"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum perferendis non doloribus. Dolores quas recusandae non porro repudiandae voluptatem iste distinctio suscipit, quaerat eos perferendis architecto doloremque nam amet? Quod!"
      />

      <Post 
        author="Usuário 2"
        content="Um novo post muito legal"
      />
    </div>
  )
}

export default App
