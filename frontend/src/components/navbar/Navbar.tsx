import userIcon from "../../assets/icons/user.svg";
import movieIcon from "../../assets/icons/movie.svg";
import musicIcon from "../../assets/icons/music.svg";
import gameIcon from "../../assets/icons/game.svg";
import bookIcon from "../../assets/icons/book.svg";
import logo from "../../assets/icons/logo-hive.svg";
import logoText from "../../assets/icons/logo-hive-text.svg";

import styles from "./navbar.module.css";

function Navbar() {
  const navItems = [
    { icon: userIcon, text: "Mon compte", path: "/profile" },
    { icon: movieIcon, text: "Films", path: "/movies" },
    { icon: musicIcon, text: "Musique", path: "/music" },
    { icon: gameIcon, text: "Jeux", path: "/games" },
    { icon: bookIcon, text: "Livres", path: "/library" },
  ];

  return (
    <>
      {/* logo + logo texte */}
      <nav className={styles.navLogo}>
        <a href="/" className={styles.logoLink}>
          <span className={styles.logoIcon}>
            <img src={logo} alt="Logo Hive" />
          </span>
          <span className={styles.logoText}>
            <img src={logoText} alt="Logo Hive texte" />
          </span>
        </a>
      </nav>
      <nav className={styles.navbar}>
        {/* nav items */}
        {navItems.map((item, index) => (
          <a key={index} href={item.path} className={styles.navLink}>
            <span className={styles.icon}>
              <img src={item.icon} alt={`Aller vers ${item.text}`} />
            </span>
            <span className={styles.text}>{item.text}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
