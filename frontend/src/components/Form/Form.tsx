import Image from 'next/image';
import s from './Form.module.scss';

export const Form = () => {
  return (
    <div className={s.form}>
      <Image
        src="/flower.webp"
        alt="Mastering Background"
        width={1050}
        sizes="(max-width: 768px) 412px, 1050px"
        height={700}
        className={s.form_flower}
      />
      <Image
        src="/flower.webp"
        alt="Mastering Background"
        width={1050}
        sizes="(max-width: 768px) 412px, 1050px"
        height={700}
        className={s.form_flower2}
      />
      <span className={s.form_step}>Остался 1 шаг до доступа</span>
      <h2 className={s.form_title}>Заполните данные для участия в курсе</h2>
      <p className={s.form_description}>После оплаты вы получите доступ и инструкции в Telegram.</p>

      <form className={s.form_form}>
        <div className={s.form_form_group}>
          <div className={s.form_form_group_inputs}>
            <label htmlFor="name">
              <p className={s.form_form_group_label}>Ваше имя</p>
              <input
                type="text"
                id="name"
                placeholder="Введите ваше имя"
                className={s.form_form_group_input}
              />
            </label>
            <label htmlFor="telegramm">
              <p className={s.form_form_group_label}>Telegram (@username)</p>
              <input
                type="text"
                id="telegramm"
                placeholder="Например: @anna_nails"
                className={s.form_form_group_input}
              />
            </label>
            <label htmlFor="number">
              <p className={s.form_form_group_label}>Номер телефона</p>
              <input
                type="tel"
                id="number"
                placeholder="+7 (___) ___ __ __"
                className={s.form_form_group_input}
              />
            </label>
          </div>
          <span className={s.form_form_group_price}>20 000 ₸</span>
          <p className={s.form_form_group_agreement}>
            Нажимая кнопку, вы подтверждаете согласие с условиями участия
          </p>
          <button type="submit" className={s.form_form_group_button}>
            Перейти к оплате — 20 000 ₸
          </button>
          <p className={s.form_form_group_access}>Доступ открывается сразу после оплаты</p>
        </div>
      </form>
    </div>
  );
};
