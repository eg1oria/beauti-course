import Image from 'next/image';
import s from './Join.module.scss';

export const Join = () => {
  return (
    <div className={s.join} id="join">
      <h1 className={s.join_title}>
        Присоединяйтесь к курсу и начните работать без переделок уже с первых моделей.
      </h1>
      <div className={s.join_card}>
        <div className={s.join_card_content}>
          <span className={s.join_card_content_tag}>ТАРИФ</span>
          <div className={s.join_card_divider}>
            <h2 className={s.join_card_title}>Записаться на курс</h2>
            <p className={s.join_card_description}>
              Получите доступ к видеоурокам, чек-листам и обратной связи от Наталии Горлач.
            </p>
            <ul className={s.join_card_list}>
              <li className={s.join_card_list_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Подробные видеоуроки
              </li>
              <li className={s.join_card_list_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Алгоритм работы без лишнего опила
              </li>
              <li className={s.join_card_list_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Чек-листы и практические задания
              </li>
              <li className={s.join_card_list_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Разбор типичных ошибок
              </li>
              <li className={s.join_card_list_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Обратная связь по моделям
              </li>
            </ul>
          </div>

          <span className={s.join_card_price}>20 000 ₸</span>
          <p className={s.join_card_note}>
            Доступ сразу после оплаты · Без подписки и скрытых платежей
          </p>
          <a href="#form" className={s.join_card_button}>
            Записаться на курс
          </a>
        </div>
      </div>
    </div>
  );
};
