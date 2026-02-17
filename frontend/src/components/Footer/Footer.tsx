import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={s.footer} id="footer">
      <div className="container">
        <div className={s.footer_content}>
          <div className={s.footer_content_section}>
            <h2 className={s.footer_content_title}>Наталия Горлач</h2>
            <div className={s.footer_content_description}>
              <p className={s.footer_content_text}>Онлайн-курс по архитектуре верхних форм</p>
              <p className={s.footer_content_text}>Работа без переделок.</p>
              <p className={s.footer_content_text}>Системный подход</p>
              <p className={s.footer_content_text}>и чистый результат.</p>
            </div>
          </div>
          <div className={s.footer_content_section}>
            <h2 className={s.footer_content_title}>Навигация</h2>
            <ul className={s.footer_content_section_list}>
              <li className={s.footer_content_section_list_item}>
                <a href="#program">О курсе</a>
              </li>
              <li className={s.footer_content_section_list_item}>
                <a href="#howGo">Программа</a>
              </li>
              <li className={s.footer_content_section_list_item}>
                <a href="#situable">Кому подойдет</a>
              </li>
              <li className={s.footer_content_section_list_item}>
                <a href="#howGo">Как проходит обучение</a>
              </li>
              <li className={s.footer_content_section_list_item}>
                <a href="#join">Тариф</a>
              </li>
            </ul>
          </div>
          <div className={s.footer_content_section}>
            <h2 className={s.footer_content_title}>Контакты</h2>
            <p className={s.footer_content_social}>Telegram: @username</p>
            <p className={s.footer_content_social}>Instagram: @username</p>
            <p className={s.footer_content_social}>Email: example@mail.com</p>
          </div>
        </div>
        <div className={s.footer_policy}>
          <p className={s.footer_policy_item}>© 2025 Наталия Горач</p>
          <p className={s.footer_policy_item}>Все права защищены</p>
          <p className={s.footer_policy_item}>Политика конфиденциальности</p>
        </div>
        <span></span>
      </div>
    </div>
  );
};
