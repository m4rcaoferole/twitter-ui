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
          Home
        </NavLink>
        <Link className="" to="#">
          <Phosphor.Hash />
          Explore
        </Link>
        <Link className="" to="#">
          <Phosphor.Bell />
          Notifications
        </Link>
        <Link className="" to="#">
          <Phosphor.Envelope />
          Messages
        </Link>
        <Link className="" to="#">
          <Phosphor.BookmarkSimple />
          Bookmarks
        </Link>
        <Link className="" to="#">
          <Phosphor.FileText />
          Lists
        </Link>
        <Link className="" to="#">
          <Phosphor.User />
          Profile
        </Link>
        <Link className="" to="#">
          <Phosphor.DotsThreeCircle />
          More
        </Link>
      </nav>

      <button className="new-tweet">Tweet</button>
    </aside>
  )
}