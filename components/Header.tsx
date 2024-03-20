import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header
      className={`flex flex-col items-center pt-5`}
    >
      <h1 className={`p-10`}>Kpop Quiz</h1>
    </header>
  );
}