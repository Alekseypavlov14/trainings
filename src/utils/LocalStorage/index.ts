export class LocalStorage<T> {
  constructor(private key: string) {}

  getValue(): T[] {
    const stringifiedValue = localStorage.getItem(this.key) || '[]'

    try {
      return JSON.parse(stringifiedValue)
    } catch (e) {
      return []
    }
  }

  setValue(value: T[]): void {
    localStorage.setItem(this.key, JSON.stringify(value))
  }
}