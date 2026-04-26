import type { CounterState } from '../types';

const STORAGE_KEY = 'smoke-counter';

export function getCounter(): CounterState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CounterState;
    if (typeof parsed.value !== 'number' || Number.isNaN(parsed.value)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function setCounter(state: CounterState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

export function clearCounter(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore storage errors
  }
}
