import { FormEvent, KeyboardEvent, useState } from "react";
import * as Phosphor from 'phosphor-react';

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
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState(['Meu primeiro Tweet', 'Teste', 'Deu certo tweeetaar!']);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers ]);
    setNewAnswer('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid repellendus deserunt provident cupiditate dolores velit recusandae dolor pariatur vel at voluptates est animi debitis, eos quis dolorum nesciunt dignissimos. Natus?" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/m4rcaoferole.png" alt="Marcos Vinicius" />
          
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {setNewAnswer(event.target.value)
          }} />
        </label>
        <button type="submit">
          <Phosphor.PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>


      {answers.map((answer) => (
        <Tweet content={answer} key={answer} />
      ))}
    </main>
  )
}