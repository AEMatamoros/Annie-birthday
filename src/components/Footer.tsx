import { invitation } from '../content/invitation';
import { asset } from '../lib/assets';

export function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__sprite"
        src={asset('sprigatito.gif')}
        alt="Sprigatito saludando"
        width={96}
        height={96}
      />
      <p className="footer__title">¡Te esperamos!</p>
      <p className="footer__text">
        Con mucho cariño, la familia de {invitation.shortName}{' '}
        <span className="footer__heart" aria-hidden="true">
          ♥
        </span>
      </p>
    </footer>
  );
}
