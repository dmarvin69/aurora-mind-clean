'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const params = useSearchParams();
  const lang = params.get('lang') === 'en' ? 'en' : 'ru';

  const t = {
    ru: {
      title: 'Кризисные ситуации',
      text: 'Когда привычная жизнь меняется слишком резко',
      back: 'Назад',
    },
    en: {
      title: 'Crisis Situations',
      text: 'When life changes too abruptly',
      back: 'Back',
    },
  }[lang];

  return (
    <main className="page-transition min-h-screen text-white">

      <img src="/forest.jpg" className="fixed inset-0 w-full h-full object-cover -z-20"/>
      <div className="fixed inset-0 bg-black/40 -z-10"/>

      <div className="max-w-4xl mx-auto p-6">

        <Link href={`/?lang=${lang}`} className="btn">
          {t.back}
        </Link>

        <div className="glass mt-10 p-8 rounded-3xl">
          <h1 className="text-4xl font-bold">{t.title}</h1>
          <p className="mt-6 text-white/70">{t.text}</p>
        </div>

      </div>
    </main>
  );
}