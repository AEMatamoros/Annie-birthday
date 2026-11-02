import { invitation } from '../content/invitation';
import { asset } from '../lib/assets';

type DetailCardProps = {
  label: string;
  value: string;
};

function DetailCard({ label, value }: DetailCardProps) {
  return (
    <div className="card">
      <img className="card__icon" src={asset('pokeball.png')} alt="" width={30} height={30} />
      <span className="card__label">{label}</span>
      <span className="card__value">{value}</span>
    </div>
  );
}

export function EventDetails() {
  const { celebration, birthdayLabel } = invitation;

  return (
    <section className="details" aria-labelledby="details-title">
      <h2 id="details-title" className="details__title">
        ¡Ven a celebrar con nosotros!
      </h2>
      <p className="details__note">
        Su cumpleaños es el {birthdayLabel}, ¡pero la fiesta es el sábado!
      </p>
      <div className="details__grid">
        <DetailCard label="Fecha" value={celebration.dateLabel} />
        <DetailCard label="Hora" value={celebration.timeLabel} />
        <DetailCard label="Lugar" value={celebration.place} />
      </div>
    </section>
  );
}
