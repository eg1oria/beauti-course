import Image from 'next/image';
import s from './Intro.module.scss';

export default function Intro() {
  return (
    <div className={s.intro}>
      <Image
        src="/woman.webp"
        alt="Intro Image"
        width={730}
        height={730}
        priority
        className={s.intro_image}
        sizes="(max-width: 768px) 412px, 730px"
      />
      <Image
        src="/flower.webp"
        alt="Intro Image"
        sizes="(max-width: 768px) 412px, 1050px"
        width={1050}
        height={700}
        className={s.intro_image_flower}
      />
      <div className="container">
        <div className={s.intro_content}>
          <p className={s.intro_subtitle}>Онлайн-курс Наталии Горлач</p>
          <h1 className={s.intro_title}>Готовый результат без лишнего опила и переделок.</h1>
          <p className={s.intro_description}>
            Системный подход к работе с верхними формами. <br />
            Без травм ногтевой пластины, без отслоек и непредсказуемого результата.
          </p>
          <div className={s.intro_buttons}>
            <a href="#" className={`${s.intro_buttons_button_primary} ${s.intro_buttons_button}`}>
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
