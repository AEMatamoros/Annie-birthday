import { useEffect, useState } from 'react';
import { invitation } from '../content/invitation';

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// Static content, so the target is computed once at module load.
const target = new Date(invitation.celebration.startsAt);

function getRemaining(now: Date): Remaining | null {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  };
}

const pad = (value: number) => String(value).padStart(2, '0');

export function Countdown() {
  const [remaining, setRemaining] = useState(() => getRemaining(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(getRemaining(new Date()));
    }, SECOND);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="countdown" aria-live="polite">
      <h2 className="countdown__title">Falta poquito para la fiesta</h2>
      {remaining ? (
        <div className="countdown__units">
          <div className="countdown__unit">
            <span className="countdown__value">{remaining.days}</span>
            <span className="countdown__label">días</span>
          </div>
          <div className="countdown__unit">
            <span className="countdown__value">{pad(remaining.hours)}</span>
            <span className="countdown__label">horas</span>
          </div>
          <div className="countdown__unit">
            <span className="countdown__value">{pad(remaining.minutes)}</span>
            <span className="countdown__label">min</span>
          </div>
          <div className="countdown__unit">
            <span className="countdown__value">{pad(remaining.seconds)}</span>
            <span className="countdown__label">seg</span>
          </div>
        </div>
      ) : (
        <p className="countdown__done">¡Es hoy! 🎉</p>
      )}
    </section>
  );
}
