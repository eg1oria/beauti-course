import Image from 'next/image';
import s from './Intro.module.scss';
import FlowerDecor from '../Flower/Flower';

export default function Intro() {
  return (
    <div className={s.intro}>
      <div className={s.intro_images}>
        <Image
          src="/woman.webp"
          alt="Intro Image"
          width={730}
          height={730}
          priority
          className={s.intro_images_woman}
        />
        <FlowerDecor className={s.intro_images_flower} />
      </div>
      <div className="container">
        <div className={s.intro_content}>
          <p className={s.intro_subtitle}>Онлайн-курс Наталии Горлач</p>
          <h1 className={s.intro_title}>Готовый результат без лишнего опила и переделок.</h1>
          <p className={s.intro_description}>
            Системный подход к работе с верхними формами. <br />
            Без травм ногтевой пластины, без отслоек и непредсказуемого результата.
          </p>
          <div className={s.intro_buttons}>
            <a
              href="#form"
              className={`${s.intro_buttons_button} ${s.intro_buttons_button_primary}`}>
              Записаться на курс
            </a>
            <a href="#program" className={s.intro_buttons_button}>
              Посмотреть программу
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
