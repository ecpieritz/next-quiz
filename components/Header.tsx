import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header
      className={`flex flex-col items-center p-2`}
    >
      <div className={`p-2 ${styles.socials}`}>
        <Link href='https://www.linkedin.com/in/ecpieritz/' target="blank">
          <Image
            src="/imgs/linkedin.png"
            alt="Linkedin logo"
            width={40}
            height={40}
            style={{fill: 'purple', color: 'red'}}
          />
        </Link>

        <Link href='https://github.com/ecpieritz' target="blank">
          <Image
            src="/imgs/github.png"
            alt="Github logo"
            width={40}
            height={40}
            style={{fill: 'purple'}}
          />
        </Link>

        <Link href='https://www.instagram.com/ecpieritz/' target="blank">
          <Image
            src="/imgs/instagram.png"
            alt="Instagram logo"
            width={40}
            height={40}
            style={{fill: 'purple'}}
          />
        </Link>

      </div>
      <h1 className={`p-10`}>Kpop Quiz</h1>
    </header>
  );
}