import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`p-2 ${styles.socials}`}>
        <Link href='https://www.linkedin.com/in/ecpieritz/' target="blank">
          <Image
            src="/imgs/linkedin.png"
            alt="Linkedin logo"
            width={40}
            height={40}
            style={{ fill: 'purple', color: 'red' }}
          />
        </Link>

        <Link href='https://github.com/ecpieritz' target="blank">
          <Image
            src="/imgs/github.png"
            alt="Github logo"
            width={40}
            height={40}
            style={{ fill: 'purple' }}
          />
        </Link>

        <Link href='https://www.instagram.com/ecpieritz/' target="blank">
          <Image
            src="/imgs/instagram.png"
            alt="Instagram logo"
            width={40}
            height={40}
            style={{ fill: 'purple' }}
          />
        </Link>

      </div>
      <p>Made with 💜 by Emilyn C. Pieritz</p>
    </footer>
  );
}