import * as Phosphor from 'phosphor-react';

import twitterLogo from '../assets/logo-twitter.svg';

import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <a className="active" href="#">
          <Phosphor.House weight="fill" />
          Home
        </a>
        <a className="" href="#">
          <Phosphor.Hash />
          Explore
        </a>
        <a className="" href="#">
          <Phosphor.Bell />
          Notifications
        </a>
        <a className="" href="#">
          <Phosphor.Envelope />
          Messages
        </a>
        <a className="" href="#">
          <Phosphor.BookmarkSimple />
          Bookmarks
        </a>
        <a className="" href="#">
          <Phosphor.FileText />
          Lists
        </a>
        <a className="" href="#">
          <Phosphor.User />
          Profile
        </a>
        <a className="" href="#">
          <Phosphor.DotsThreeCircle />
          More
        </a>
      </nav>

      <button className="new-tweet">Tweet</button>
    </aside>
  )
}