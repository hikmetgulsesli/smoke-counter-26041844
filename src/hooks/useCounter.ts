import { useCallback, useEffect, useState } from 'react';
import type { CounterState, AppScreen } from '../types';
import { getCounter, setCounter } from '../utils/storage';

const DEFAULT_STATE: CounterState = {
  value: 0,
  lastAction: 'none',
  timestamp: null,
  previousValue: 0,
};

export function useCounter() {
  const [state, setState] = useState<CounterState>(() => {
    const saved = getCounter();
    return saved ?? DEFAULT_STATE;
  });
  const [screen, setScreen] = useState<AppScreen>('main');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const saved = getCounter();
    if (saved === null) {
      // Check if there's garbage in localStorage
      try {
        const raw = window.localStorage.getItem('smoke-counter');
        if (raw && raw !== 'null' && raw !== '') {
          setHasError(true);
          setScreen('error');
        }
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (!hasError) {
      setCounter(state);
    }
  }, [state, hasError]);

  const increment = useCallback(() => {
    setState((prev) => ({
      value: prev.value + 1,
      lastAction: 'increment',
      timestamp: new Date().toISOString(),
      previousValue: prev.value,
    }));
    setScreen('increment-feedback');
  }, []);

  const decrement = useCallback(() => {
    setState((prev) => ({
      value: Math.max(0, prev.value - 1),
      lastAction: 'decrement',
      timestamp: new Date().toISOString(),
      previousValue: prev.value,
    }));
    setScreen('decrement-feedback');
  }, []);

  const reset = useCallback(() => {
    setState((prev) => ({
      value: 0,
      lastAction: 'reset',
      timestamp: new Date().toISOString(),
      previousValue: prev.value,
    }));
    setScreen('main');
  }, []);

  const dismissError = useCallback(() => {
    setHasError(false);
    setState(DEFAULT_STATE);
    setCounter(DEFAULT_STATE);
    setScreen('main');
  }, []);

  const goToMain = useCallback(() => {
    setScreen('main');
  }, []);

  return {
    value: state.value,
    previousValue: state.previousValue,
    lastAction: state.lastAction,
    timestamp: state.timestamp,
    screen,
    hasError,
    increment,
    decrement,
    reset,
    dismissError,
    goToMain,
  };
}
