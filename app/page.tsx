'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Reveal from './components/Reveal';

export default function Home() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'en') setLang('en');
  }, []);

  const t = {
    ru: {
      title: 'Пространство, где можно выдохнуть',
      subtitle: 'Психологическая поддержка онлайн',
      btn: 'Оставить заявку',
      services: 'С чем я работаю',
    },
    en: {
      title: 'A space where you can exhale',
      subtitle: 'Online psychological support',
      btn: 'Leave request',
      services: 'What I work with',
    },
  }[lang];

  return (
    <main className="page min-h-screen text-white">

      <img src="/forest.jpg" className="fixed inset-0 w-full h-full object-cover -z-20"/>
      <div className="fixed inset-0 bg-black/40 -z-10"/>

      {/* HEADER */}
      <header className="flex justify-between p-6">
        <div className="text-xl font-bold">Aurora Mind</div>

        <div className="flex gap-2">
          <button onClick={() => {setLang('ru'); localStorage.setItem('lang','ru')}}>RU</button>
          <button onClick={() => {setLang('en'); localStorage.setItem('lang','en')}}>EN</button>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20">
        <Reveal>
          <h1 className="text-5xl font-bold">{t.title}</h1>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-soft">{t.subtitle}</p>
        </Reveal>

        <Reveal>
          <a href="#contact" className="btn mt-8 inline-block">
            {t.btn}
          </a>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold">{t.services}</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Link href={`/services/anxiety-burnout?lang=${lang}`} className="glass card p-6">
            Тревога
          </Link>

          <Link href={`/services/self-esteem-boundaries?lang=${lang}`} className="glass card p-6">
            Самооценка
          </Link>

          <Link href={`/services/crisis?lang=${lang}`} className="glass card p-6">
            Кризис
          </Link>
        </div>
      </section>

      {/* FORM */}
      <section id="contact" className="max-w-md mx-auto mt-20 p-6 glass">
        <form className="space-y-4">
          <input placeholder="Имя" className="w-full p-3 bg-white/10 rounded-xl"/>
          <input placeholder="Email" className="w-full p-3 bg-white/10 rounded-xl"/>
          <textarea placeholder="Сообщение" className="w-full p-3 bg-white/10 rounded-xl"/>

          <button className="btn w-full">
            {t.btn}
          </button>
        </form>
      </section>

    </main>
  );
}