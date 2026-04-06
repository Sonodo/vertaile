'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Jokin meni pieleen</h1>
        <p className="text-slate-600 mb-8">
          Pahoittelemme, sivun lataamisessa tapahtui virhe. Yritä ladata sivu uudelleen.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white transition-colors cursor-pointer"
          style={{ backgroundColor: '#0891B2' }}
        >
          <RefreshCw className="w-4 h-4" />
          Yritä uudelleen
        </button>
      </div>
    </div>
  );
}
