'use client';

import { useState } from 'react';
import Link from 'next/link';
import s from './Header.module.scss';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={s.header}>
      <div className={s.container}>
        {/* Левая часть (Десктоп) */}
        <nav className={s.header_desktopNav}>
          <ul className={s.header_navList}>
            <li className={s.navItem}>
              <a href="#program">О курсе</a>
            </li>
            <li className={s.navItem}>
              <a href="#">Обо мне</a>
            </li>
            <li className={s.navItem}>
              <a href="#howGo">Программа</a>
            </li>
          </ul>
        </nav>

        <Image src="/logo.png" alt="Logo" width={78} height={70} className={s.logo} />

        {/* Правая часть (Десктоп) */}
        <nav className={s.header_desktopNav}>
          <div className={s.header_nav}>
            <ul className={s.header_navList}>
              <li className={s.navItem}>
                <Link href="#">Сертификаты</Link>
              </li>
              <li className={s.navItem}>
                <Link href="#footer">Контакты</Link>
              </li>
            </ul>
            <ul className={s.header_navList_social}>
              <li className={s.navItem}>
                <Link href="#">
                  <FaWhatsapp size={20} />
                </Link>
              </li>
              <li className={s.navItem}>
                <Link href="#">
                  <AiFillInstagram size={20} />
                </Link>
              </li>
              <li className={s.navItem}>
                <Link href="#">
                  <MdAlternateEmail size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Бургер (Появляется на vp-1023) */}
        <button
          className={`${s.burger} ${isOpen ? s.burger__open : ''}`}
          onClick={toggleMenu}
          aria-label="Открыть меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Мобильное меню (Все ссылки здесь) */}
      <div className={`${s.mobileMenu} ${isOpen ? s.mobileMenu__open : ''}`}>
        <ul className={s.mobileMenu_list}>
          <li onClick={closeMenu}>
            <a href="#program">О курсе</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">Обо мне</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#howGo">Программа</a>
          </li>
          <li onClick={closeMenu}>
            <Link href="#">Сертификаты</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#footer">Контакты</Link>
          </li>
        </ul>

        <ul className={s.mobileMenu_social}>
          <li>
            <Link href="#">
              <FaWhatsapp size={24} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <AiFillInstagram size={24} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <MdAlternateEmail size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
