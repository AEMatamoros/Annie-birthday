import { Hero } from './components/Hero';
import { PokeballDivider } from './components/PokeballDivider';
import { EventDetails } from './components/EventDetails';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="page">
      <Hero />
      <div className="page__content">
        <PokeballDivider />
        <EventDetails />
        <Countdown />
        <PokeballDivider />
        <Footer />
      </div>
    </main>
  );
}
