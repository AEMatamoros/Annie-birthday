import { invitation } from '../content/invitation';
import { asset } from '../lib/assets';

type DetailCardProps = {
  label: string;
  value: string;
  /** When present, the whole card becomes an external link. */
  href?: string;
  hint?: string;
};

function DetailCard({ label, value, href, hint }: DetailCardProps) {
  const content = (
    <>
      <img className="card__icon" src={asset('pokeball.png')} alt="" width={30} height={30} />
      <span className="card__label">{label}</span>
      <span className="card__value">{value}</span>
      {hint && <span className="card__hint">{hint}</span>}
    </>
  );

  if (href) {
    return (
      <a className="card card--link" href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className="card">{content}</div>;
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
        <DetailCard
          label="Lugar"
          value={celebration.place}
          href={celebration.mapsUrl}
          hint="Ver en Google Maps"
        />
      </div>
    </section>
  );
}
