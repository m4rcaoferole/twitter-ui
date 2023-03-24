import * as Phosphor from 'phosphor-react';
import { Link, NavLink } from 'react-router-dom';

import twitterLogo from '../assets/logo-twitter.svg';

import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <Phosphor.House weight="fill" />
          <span>Home</span>
        </NavLink>
        <Link className="" to="#">
          <Phosphor.Hash />
          <span>Explore</span>
        </Link>
        <Link className="" to="#">
          <Phosphor.Bell />
          <span>Notifications</span>
        </Link>
        <Link className="" to="#">
          <Phosphor.Envelope />
          <span>Messages</span>
        </Link>
        <Link className="" to="#">
          <Phosphor.BookmarkSimple />
          <span>Bookmarks</span>
        </Link>
        <Link className="" to="#">
          <Phosphor.FileText />
          <span>Lists</span>
        </Link>
        <Link className="" to="#">
          <Phosphor.User />
          <span>Profile</span>
        </Link>
        <Link className="" to="#">
          <Phosphor.DotsThreeCircle />
          <span>More</span>
        </Link>
      </nav>

      <button className="new-tweet">
        <Phosphor.Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  )
}