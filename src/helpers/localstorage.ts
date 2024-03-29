export function getTokenFromLocalStorage(): string {
    const data = localStorage.getItem('token');
    const token: string = data ? data : ''; // Просто возвращаем сохраненное значение, без JSON.parse

    return token;
}

export function setTokenToLocalStorage(key: string, token: string): void {
    localStorage.setItem(key, JSON.stringify(token));

}

export function removeTokenFromLocalStorage(key: string): void {
    localStorage.removeItem(key)
}