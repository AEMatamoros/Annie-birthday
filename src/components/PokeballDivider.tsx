import { asset } from '../lib/assets';

export function PokeballDivider() {
  return (
    <div className="divider" role="presentation">
      <img src={asset('pokeball.png')} alt="" width={30} height={30} />
    </div>
  );
}
