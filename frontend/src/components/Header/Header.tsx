import Link from 'next/link';
import s from './Header.module.scss';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav>
          <ul className={s.header_navList}>
            <li className={s.navItem}>
              <a href="#program">О курсе</a>
            </li>
            <li className={s.navItem}>
              <Link href="/about">Обо мне</Link>
            </li>
            <li className={s.navItem}>
              <Link href="/contact">Программа</Link>
            </li>
          </ul>
        </nav>
        <Image src="/logo.png" alt="Logo" width={78} height={70} />
        <nav className={s.header_nav}>
          <ul className={s.header_navList}>
            <li className={s.navItem}>
              <Link href="/contact">Сертификаты</Link>
            </li>
            <li className={s.navItem}>
              <Link href="/contact">Контакты</Link>
            </li>
          </ul>
          <ul className={s.header_navList_social}>
            <li className={s.navItem}>
              <Link href="/contact">
                <FaWhatsapp size={20} />
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href="/contact">
                <AiFillInstagram size={20} />
              </Link>
            </li>
            <li className={s.navItem}>
              <Link href="/contact">
                <MdAlternateEmail size={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
