'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { sendToTelegram, ITelegramForm } from '../../api/telegram';
import s from './Form.module.scss';
import FlowerDecor from '../Flower/Flower';

interface FormErrors {
  name?: string;
  telegram?: string;
  phone?: string;
}

export const Form = () => {
  const [formData, setFormData] = useState<ITelegramForm>({
    name: '',
    telegram: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (data: ITelegramForm): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    if (!data.telegram.trim()) {
      newErrors.telegram = 'Введите Telegram username';
    } else if (data.telegram.replace('@', '').trim().length < 3) {
      newErrors.telegram = 'Username должен содержать минимум 3 символа';
    } else if (!/^@?[a-zA-Z0-9_]+$/.test(data.telegram)) {
      newErrors.telegram = 'Username может содержать только латинские буквы, цифры и _';
    }

    const phoneClean = data.phone.replace(/\D/g, '');
    if (!data.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (phoneClean.length < 10 || phoneClean.length > 12) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleTelegramBlur = () => {
    if (formData.telegram.trim() && !formData.telegram.startsWith('@')) {
      setFormData((prev) => ({ ...prev, telegram: `@${prev.telegram}` }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      await sendToTelegram(formData);
      setStatus('success');
      setFormData({ name: '', telegram: '', phone: '' });
      setErrors({});
      alert('Заявка успешно отправлена!');
    } catch (error) {
      setStatus('error');

      alert(error instanceof Error ? error.message : `${status} , Ошибка при отправке заявки`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={s.form} id="form">
      <FlowerDecor position="left" width="clamp(150px, 20vw, 1050px)" className={s.flower} />
      <FlowerDecor position="right" width="clamp(150px, 20vw, 1050px)" className={s.flower1} />

      <span className={s.form_step}>Остался 1 шаг до доступа</span>
      <h2 className={s.form_title}>Заполните данные для участия в курсе</h2>
      <p className={s.form_description}>После оплаты вы получите доступ и инструкции в Telegram.</p>

      <form className={s.form_form} onSubmit={handleSubmit} noValidate>
        <div className={s.form_form_group}>
          <div className={s.form_form_group_inputs}>
            <label htmlFor="name">
              <p className={s.form_form_group_label}>Ваше имя</p>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
                className={`${s.form_form_group_input} ${errors.name ? s.form_form_group_input__error : ''}`}
              />
              {errors.name && <span className={s.form_form_group_error}>{errors.name}</span>}
            </label>

            <label htmlFor="telegram">
              <p className={s.form_form_group_label}>Telegram (@username)</p>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                onBlur={handleTelegramBlur}
                placeholder="Например: @anna_nails"
                className={`${s.form_form_group_input} ${errors.telegram ? s.form_form_group_input__error : ''}`}
              />
              {errors.telegram && (
                <span className={s.form_form_group_error}>{errors.telegram}</span>
              )}
            </label>

            <label htmlFor="phone">
              <p className={s.form_form_group_label}>Номер телефона</p>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___ __ __"
                className={`${s.form_form_group_input} ${errors.phone ? s.form_form_group_input__error : ''}`}
              />
              {errors.phone && <span className={s.form_form_group_error}>{errors.phone}</span>}
            </label>
          </div>

          <span className={s.form_form_group_price}>20 000 ₸</span>

          <p className={s.form_form_group_agreement}>
            Нажимая кнопку, вы подтверждаете согласие с условиями участия
          </p>

          <button
            type="submit"
            className={s.form_form_group_button}
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.7 : 1 }}>
            {isLoading ? 'Отправка...' : 'Отправить заявку'}
          </button>

          <p className={s.form_form_group_access}>Доступ открывается сразу после оплаты</p>
        </div>
      </form>
    </div>
  );
};
