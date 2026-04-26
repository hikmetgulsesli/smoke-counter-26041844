export type NoteStatus = 'active' | 'completed';

export interface Note {
  id: string;
  title: string;
  content: string;
  status: NoteStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CounterState {
  value: number;
  lastAction: 'increment' | 'decrement' | 'reset' | 'none';
  timestamp: string | null;
  previousValue: number;
}

export type AppScreen = 'main' | 'increment-feedback' | 'decrement-feedback' | 'error';

