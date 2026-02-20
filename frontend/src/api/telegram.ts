export interface ITelegramForm {
  name: string;
  telegram: string;
  phone: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendToTelegram = async (formData: ITelegramForm) => {
  try {
    const response = await fetch(`${BASE_URL}/telegram/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Ошибка отправки данных');
    }

    return await response.json();
  } catch (error) {
    console.error('Telegram API Error:', error);
    throw error;
  }
};
