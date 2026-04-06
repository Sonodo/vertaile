import Link from 'next/link';
import { Home, Search, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sivua ei löytynyt',
  description: 'Etsimääsi sivua ei löytynyt. Palaa etusivulle tai kokeile hakua.',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-bold text-slate-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Sivua ei löytynyt</h1>
        <p className="text-slate-600 mb-8">
          Etsimääsi sivua ei valitettavasti löytynyt. Se on saattanut siirtyä uuteen osoitteeseen tai se on poistettu.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white transition-colors"
            style={{ backgroundColor: '#0891B2' }}
          >
            <Home className="w-4 h-4" />
            Etusivulle
          </Link>
          <Link
            href="/palvelut"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Search className="w-4 h-4" />
            Selaa palveluita
          </Link>
          <Link
            href="/blogi"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Lue blogia
          </Link>
        </div>
      </div>
    </div>
  );
}
