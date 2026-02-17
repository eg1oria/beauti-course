import Image from 'next/image';
import s from './HowCourseGo.module.scss';

export const HowCourseGo = () => {
  return (
    <section className={s.howCourseGo} id="howGo">
      <Image
        src="/flower.webp"
        alt="Mastering Background"
        width={1050}
        height={700}
        className={s.howCourseGo_flower}
        sizes="(max-width: 768px) 412px, 1050px"
      />
      <Image
        src="/line.svg"
        alt="Mastering Background"
        width={1430}
        height={215}
        className={s.howCourseGo_line}
      />
      <h2 className={s.howCourseGo_title}>Как проходит курс</h2>
      <p className={s.howCourseGo_description}>
        Учитесь пошагово чёткой системе, без воды и нагромождений
      </p>
      <div className="container">
        <ul className={s.howCourseGo_list}>
          <li className={s.howCourseGo_list_item}>
            <span className={s.howCourseGo_list_item_tag}>01</span>
            <h3 className={s.howCourseGo_list_item_title}>Теория</h3>
            <div className={s.howCourseGo_list_item_descriptions}>
              <p className={s.howCourseGo_list_item_description}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Короткие структурированные уроки с теорией
              </p>
              <p className={s.howCourseGo_list_item_description}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Без воды, только алгоритм
              </p>
            </div>
          </li>
          <li className={s.howCourseGo_list_item}>
            <span className={s.howCourseGo_list_item_tag}>02</span>
            <h3 className={s.howCourseGo_list_item_title}>Демонстрация</h3>
            <div className={s.howCourseGo_list_item_descriptions}>
              <p className={s.howCourseGo_list_item_description}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Показ постановки формы
              </p>
              <p className={s.howCourseGo_list_item_description}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Разбор типичных ошибок
              </p>
            </div>
          </li>
          <li className={s.howCourseGo_list_item}>
            <span className={s.howCourseGo_list_item_tag}>03</span>
            <h3 className={s.howCourseGo_list_item_title}>Практика</h3>
            <div className={s.howCourseGo_list_item_descriptions}>
              <p className={s.howCourseGo_list_item_description}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Работа по системе
              </p>
              <p className={s.howCourseGo_list_item_description}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Чек лист контроля
              </p>
            </div>
          </li>
          <li className={s.howCourseGo_list_item}>
            <span className={s.howCourseGo_list_item_tag}>04</span>
            <h3 className={s.howCourseGo_list_item_title}>Обратная связь</h3>
            <div className={s.howCourseGo_list_item_descriptions}>
              <p className={s.howCourseGo_list_item_description}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Разбор ваших моделей
              </p>
              <p className={s.howCourseGo_list_item_description}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Коррекция до чистого результата
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
