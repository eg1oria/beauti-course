export interface ITelegramForm {
  name: string;
  telegram: string;
  phone: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const sendToTelegram = async (formData: ITelegramForm) => {
  try {
    const endpoint = BASE_URL ? `${BASE_URL}/api/telegram/send` : '/api/telegram/send';
    const response = await fetch(endpoint, {
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
