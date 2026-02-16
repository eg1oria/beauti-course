import Image from 'next/image';
import s from './Mestering.module.scss';

export default function Mastering() {
  return (
    <div className={s.mastering} id="program">
      <Image
        src="/flower.webp"
        alt="Mastering Background"
        width={1050}
        height={700}
        className={s.mastering_flower}
      />
      <h1 className={s.mastering_title}>Что вы освоите на курсе</h1>
      <p className={s.mastering_description}>
        Системный подход к верхним формам и архитектуре ногтей без лишнего опила.
      </p>

      <div className="container">
        <ul className={s.mastering_content}>
          <li className={s.mastering_content_item}>
            <div className={s.mastering_content_item_titles}>
              <span className={s.mastering_content_item_tag}>ПОДХОД</span>
              <h2 className={s.mastering_content_item_title}>Архитектура верхних форм</h2>
            </div>
            <Image
              src={'/mastering-icon1.webp'}
              alt="Mastering Icon 1"
              width={185}
              height={155}
              className={s.mastering_content_item_image}
            />
            <p className={s.mastering_content_item_description}>
              Вы научитесь правильно выстраивать форму с учётом анатомии ногтевой пластины, соблюдая
              пропорции, баланс и геометрию. Это позволит создавать прочную и эстетичную архитектуру
              без лишних корректировок.
            </p>
          </li>
          <li className={s.mastering_content_item}>
            <div className={s.mastering_content_item_titles}>
              <span className={s.mastering_content_item_tag}>ТЕХНИКА</span>
              <h2 className={s.mastering_content_item_title}>Минимилизация опила</h2>
            </div>
            <Image
              src={'/mastering-icon2.webp'}
              alt="Mastering Icon 2"
              width={222}
              height={155}
              className={s.mastering_content_item_image}
            />
            <p className={s.mastering_content_item_description}>
              Освоите технику работы, при которой форма закладывается сразу корректно. Без
              перепилов, лишних движений и потери времени — результат получается аккуратным уже на
              этапе моделирования.
            </p>
          </li>
          <li className={s.mastering_content_item}>
            <div className={s.mastering_content_item_titles}>
              <span className={s.mastering_content_item_tag}>БЕЗОПАСНОСТЬ</span>
              <h2 className={s.mastering_content_item_title}>Здоровье ногтевой пластины</h2>
            </div>
            <Image
              src={'/mastering-icon3.webp'}
              alt="Mastering Icon 3"
              width={145}
              height={155}
              className={s.mastering_content_item_image}
            />
            <p className={s.mastering_content_item_description}>
              Вы поймёте, как работать без травмирования натурального ногтя, избегать отслоек и
              перегрузки материала, сохраняя прочность и комфорт клиента.
            </p>
          </li>
          <li className={s.mastering_content_item}>
            <div className={s.mastering_content_item_titles}>
              <span className={s.mastering_content_item_tag}>СИСТЕМА</span>
              <h2 className={s.mastering_content_item_title}>Чёткий алгоритм работы</h2>
            </div>
            <Image
              src={'/mastering-icon4.webp'}
              alt="Mastering Icon 4"
              width={162}
              height={155}
              className={s.mastering_content_item_image}
            />
            <p className={s.mastering_content_item_description}>
              Получите структурированную схему действий — от подготовки до финального покрытия. Это
              позволит добиваться стабильного, повторяемого результата независимо от сложности
              формы.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
