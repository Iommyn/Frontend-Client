export function getTokenFromLocalStorage(): string {
    const data = localStorage.getItem('token');
    const token: string = data ? JSON.parse(data) : '';

    return token;
}

export function setTokenToLocalStorage(key: string, token: string): void {
    localStorage.setItem(key, JSON.stringify(token));
    const tokenExpiration = new Date().getTime() + 5 * 60 * 1000;
    localStorage.setItem('tokenExpiration', JSON.stringify(tokenExpiration));
}

export function removeTokenFromLocalStorage(key: string): void {
    localStorage.removeItem(key)
}