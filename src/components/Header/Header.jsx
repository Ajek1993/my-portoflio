import React from "react";

export default function Header() {
  return (
    <>
      <header className="header_desktop w-full hidden md:block pt-6 pb-2">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="logo">Logo</div>
          <ul className="main__navigation flex gap-x-4">
            <li className="main__navigation__button">Home</li>
            <li className="main__navigation__button">About Me</li>
            <li className="main__navigation__button">Projects</li>
            <li className="main__navigation__button">Contact</li>
          </ul>
        </nav>
      </header>
      <header className="header_mobile w-full block md:hidden pt-6 pb-2">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="logo">Logo</div>
          <ul className="main__navigation flex flex-col gap-x-4">
            <li className="main__navigation__button">Home</li>
            <li className="main__navigation__button">About Me</li>
            <li className="main__navigation__button">Projects</li>
            <li className="main__navigation__button">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
