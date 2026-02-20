export interface ITelegramForm {
  name: string;
  telegram: string;
  phone: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

const sanitize = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
    .slice(0, 500);
};

export const sendToTelegram = async (formData: ITelegramForm) => {
  try {
    const sanitizedData: ITelegramForm = {
      name: sanitize(formData.name),
      telegram: sanitize(formData.telegram),
      phone: sanitize(formData.phone),
    };

    const endpoint = BASE_URL ? `${BASE_URL}/api/telegram/send` : '/api/telegram/send';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
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
