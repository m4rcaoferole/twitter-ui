import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';

import './Timeline.css';

const tweets = ['Meu primeiro Tweet', 'Teste', 'Deu certo tweeetaar!'];

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/m4rcaoferole.png" alt="Marcos Vinicius" />
          
          <textarea id="tweet" placeholder="What's happening" />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet content={tweet} key={tweet} />
      ))}
    </main>
  );
}
