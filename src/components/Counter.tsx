import styles from './Counter.module.css';

interface CounterProps {
  value: number;
  label?: string;
  size?: 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dimmed' | 'ghost';
}

export function Counter({ value, label, size = 'xl', variant = 'default' }: CounterProps) {
  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={`${styles.value} ${styles[size]} ${styles[variant]}`}>
        {value}
      </div>
    </div>
  );
}
