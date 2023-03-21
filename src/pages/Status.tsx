import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';

const answers = [
  'Concordor...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'
];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid repellendus deserunt provident cupiditate dolores velit recusandae dolor pariatur vel at voluptates est animi debitis, eos quis dolorum nesciunt dignissimos. Natus?" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/m4rcaoferole.png" alt="Marcos Vinicius" />
          
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>


      {answers.map((answer) => (
        <Tweet content={answer} key={answer} />
      ))}
    </main>
  )
}