import styles from "./Header.module.css";
import imgbanner from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header({ onCartShow }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Guedes</h1>
        <HeaderCartButton onCartShow={onCartShow} />
      </header>
      <div className={styles.main_image}>
        <img src={imgbanner} alt="table with food" />
      </div>
    </>
  );
}
