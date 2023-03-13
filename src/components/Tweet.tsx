import * as Phosphor from 'phosphor-react';
import './Tweet.css';

const Tweet = () => {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/m4rcaoferole.png" alt="Marcos Vinicius" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Marcos Vinicius</strong>
          <span>@m4rcaoferole</span>
        </div>

        <p>
          Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os
          resultados foram:
          <br />
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s)
          <br />
          ✅ npm build: De 120s para 22s
          <br />
          <br />
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para
          8s 🔥
          <br />
        </p>
        <div className="tweet-content-footer">
          <button type="button">
            <Phosphor.ChatCircle />
            10
          </button>

          <button type="button">
            <Phosphor.ArrowClockwise />
            20
          </button>

          <button type="button">
            <Phosphor.Heart />
            15
          </button>
        </div>
      </div>
    </a>
  );
};

export default Tweet;
