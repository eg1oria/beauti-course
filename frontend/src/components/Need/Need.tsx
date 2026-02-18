import Image from 'next/image';
import s from './Need.module.scss';
import FlowerDecor from '../Flower/Flower';

export default function Need() {
  return (
    <div className={s.need}>
      <FlowerDecor position="right" className={s.need_flower} />
      <h2 className={s.need_title}>Что входит в курс</h2>
      <p className={s.need_description}>
        Всё необходимое для стабильного, чистого и предсказуемого результата.
      </p>
      <ul className={s.need_list}>
        <li className={s.need_list_item}>
          <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
          Подробные видеоуроки по архитектуре верхних форм
        </li>
        <li className={s.need_list_item}>
          <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
          Пошаговый алгоритм работы без лишнего опила
        </li>
        <li className={s.need_list_item}>
          <Image src="/checmark.svg" alt="checkmark" width={25} height={25} /> Разбор типичных
          ошибок мастеров
        </li>
        <li className={s.need_list_item}>
          <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
          Чек-листы для контроля формы
        </li>
        <li className={s.need_list_item}>
          <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
          Практические задания для закрепления
        </li>
        <li className={s.need_list_item}>
          <Image src="/checmark.svg" alt="checkmark" width={25} height={25} />
          Обратная связь по выполненным моделям
        </li>
      </ul>
    </div>
  );
}
