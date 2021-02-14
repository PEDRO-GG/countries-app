import React from "react";
const changeTheme = () => {
  document.body.classList.toggle("light-mode");
};
const Header = () => {
  return (
    <header>
      <h4>Where in the world?</h4>
      <div className="tgl">
        <div className="tgl-btn" onClick={changeTheme}></div>
        <div>Dark mode</div>
      </div>
    </header>
  );
};
export default Header;
