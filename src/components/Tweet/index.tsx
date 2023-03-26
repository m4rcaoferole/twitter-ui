import * as Phosphor from 'phosphor-react';
import { Link } from 'react-router-dom'
import './Tweet.css';

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/m4rcaoferole.png" alt="Marcos Vinicius" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Marcos Vinicius</strong>
          <span>@m4rcaoferole</span>
        </div>

        <p>
          {props.content}
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
    </Link>
  );
};
