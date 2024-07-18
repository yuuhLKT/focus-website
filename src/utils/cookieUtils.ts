// Obtém o valor de um cookie e o retorna como string[]
export const getCookie = (name: string): string[] => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const cookieValue = parts.pop()?.split(';').shift() || '';
        return cookieValue ? cookieValue.split(',') : [];
    }
    return [];
}

// Define o valor de um cookie como uma string[]
export const setCookie = (name: string, value: string[], days: number): void => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value.join(',')}; ${expires}; path=/`;
}

// Obtém o valor de um cookie e o retorna como número
export const getCookieCount = (name: string): number => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const cookieValue = parts.pop()?.split(';').shift() || '';
        return parseInt(cookieValue, 10);
    }
    return 0;
}

// Define o valor de um cookie como número
export const setCookieCount = (name: string, count: number, days: number): void => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${count}; ${expires}; path=/`;
}
