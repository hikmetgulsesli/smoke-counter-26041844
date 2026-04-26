import { useCounter } from './hooks/useCounter';
import { AnaSayfaSmokeSayaci } from './screens/AnaSayfaSmokeSayaci';
import { BosDegerDurumuErrorFallback } from './screens/BosDegerDurumuErrorFallback';
import { ArtirmaSonrasiAnlikDurum } from './screens/ArtirmaSonrasiAnlikDurum';
import { AzaltmaSonrasiAnlikDurum } from './screens/AzaltmaSonrasiAnlikDurum';

export default function App() {
  const {
    value,
    previousValue,
    screen,
    hasError,
    increment,
    decrement,
    reset,
    dismissError,
    goToMain,
  } = useCounter();

  if (hasError || screen === 'error') {
    return (
      <div className="min-h-screen bg-background text-on-background flex flex-col items-center justify-center relative overflow-hidden">
        <BosDegerDurumuErrorFallback onReset={dismissError} />
      </div>
    );
  }

  if (screen === 'increment-feedback') {
    return (
      <div className="min-h-screen bg-background text-on-background flex flex-col relative overflow-hidden">
        <ArtirmaSonrasiAnlikDurum
          value={value}
          previousValue={previousValue}
          onGoToMain={goToMain}
          onIncrement={increment}
        />
      </div>
    );
  }

  if (screen === 'decrement-feedback') {
    return (
      <div className="min-h-screen bg-background text-on-background flex flex-col relative overflow-hidden">
        <AzaltmaSonrasiAnlikDurum
          value={value}
          previousValue={previousValue}
          onGoToMain={goToMain}
          onIncrement={increment}
          onDecrement={decrement}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col">
      <AnaSayfaSmokeSayaci
        value={value}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>
  );
}
