import { invitation } from '../content/invitation';
import { asset } from '../lib/assets';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__badge" aria-label={`Cumple ${invitation.age} años`}>
        <span className="hero__badge-number">{invitation.age}</span>
        <span className="hero__badge-label">años</span>
      </div>
      <p className="hero__kicker">¡Estás invitado al cumple de!</p>
      <h1 className="hero__name">{invitation.name}</h1>
      <p className="hero__sub">
        ¡{invitation.shortName} cumple {invitation.age} añitos!
      </p>
      <img
        className="hero__figure"
        src={asset('sprigatito.png')}
        alt="Sprigatito, el Pokémon favorito de Annie"
        width={475}
        height={475}
      />
    </header>
  );
}
