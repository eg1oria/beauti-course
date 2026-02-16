import Image from 'next/image';
import s from './Suitable.module.scss';

export const Suitable = () => {
  return (
    <div className={s.suitable}>
      <Image
        src="/flower.webp"
        alt="Mastering Background"
        width={1050}
        height={700}
        className={s.suitable_flower}
      />
      <h2 className={s.suitable_title}>Кому подойдет этот курс?</h2>
      <p className={s.suitable_description}>
        Если вы хотите работать аккуратно, системно и без переделок
      </p>
      <div className="container">
        <ul className={s.suitable_list}>
          <li className={s.suitable_list_item}>
            <p className={s.suitable_list_item_tag}>НАЧИНАЮЩИМ</p>
            <h3 className={s.suitable_list_item_title}>Начинающим мастерам</h3>
            <span className={s.suitable_list_item_description}>Если вы:</span>
            <ul className={s.suitable_list_item_sublist}>
              <li className={s.suitable_list_item_sublist_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Только осваиваете верхние формы
              </li>
              <li className={s.suitable_list_item_sublist_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Не уверены в постановке и форме
              </li>
              <li className={s.suitable_list_item_sublist_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Боитесь перепелить и сделать неровно
              </li>
              <li className={s.suitable_list_item_sublist_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Тратите много времени на исправления
              </li>
            </ul>
            <div className={s.suitable_list_item_additional}>
              <h4 className={s.suitable_list_item_additional_title}> Вы получите:</h4>
              <p className={s.suitable_list_item_additional_description}>
                Чёткую систему построения формы, понимание логики архитектуры и уверенность в
                результате уже после первых моделей.
              </p>
            </div>
          </li>
          <li className={s.suitable_list_item}>
            <p className={`${s.suitable_list_item_tag_2} ${s.suitable_list_item_tag}`}>ПРОФИ</p>
            <h3 className={s.suitable_list_item_title}>Практикующим мастерам</h3>
            <span className={s.suitable_list_item_description}>Если вы:</span>
            <ul className={s.suitable_list_item_sublist}>
              <li className={s.suitable_list_item_sublist_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Работаете, но результат нестабилен
              </li>
              <li className={s.suitable_list_item_sublist_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Сталкиваетесь с отслойками
              </li>
              <li className={s.suitable_list_item_sublist_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Тратите лишнее время на опил
              </li>
              <li className={s.suitable_list_item_sublist_item}>
                <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
                Хотите повысить уровень и чек
              </li>
            </ul>
            <div className={s.suitable_list_item_additional}>
              <h4 className={s.suitable_list_item_additional_title}> Вы получите:</h4>
              <p className={s.suitable_list_item_additional_description}>
                Алгоритм работы без переделок, экономию времени и предсказуемый, чистый результат на
                любом типе ногтевой пластины.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
