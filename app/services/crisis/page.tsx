'use client';

import Link from 'next/link';
import { useState } from 'react';

type Lang = 'ru' | 'en';

export default function CrisisPage() {
  const [lang, setLang] = useState<Lang>('ru');

  const t = {
    ru: {
      back: '← Назад на главную',
      section: 'Направление работы',
      title: 'Кризисные ситуации',
      p1: 'Жизненные кризисы могут приходить в самых разных формах: расставание, потеря, переезд, смена работы, тяжёлое решение, внутренний тупик, ощущение, что прежняя жизнь больше не подходит, а новой опоры пока нет.',
      p2: 'В такие периоды человек может чувствовать растерянность, страх, одиночество, внутренний хаос, потерю смысла, сильную тревогу или полное эмоциональное онемение. Иногда хочется срочно всё решить, а иногда — просто спрятаться от происходящего.',
      p3: 'Терапия в кризисе — это место, где можно не торопиться изображать силу, а дать место тем чувствам, которые сейчас действительно есть: боли, горю, гневу, усталости, сомнениям, страху перед будущим.',
      p4: 'Вместе можно постепенно разбирать происходящее, выдерживать сложные состояния, возвращать ощущение внутренней почвы и искать следующий шаг не из паники, а из большего контакта с собой.',
      p5: 'Цель такой работы — помочь тебе пройти сложный этап более бережно, осмысленно и с меньшим чувством одиночества внутри.',
      cardTitle: 'С чем можно прийти',
      item1: 'расставание, развод, сложный разрыв отношений',
      item2: 'переезд, эмиграция, потеря привычной опоры',
      item3: 'потеря, горевание, тяжёлые жизненные изменения',
      item4: 'смена работы, кризис смысла, внутренний тупик',
      item5: 'страх будущего и невозможность принять решение',
      cta: 'Оставить заявку',
    },
    en: {
      back: '← Back to home',
      section: 'Area of work',
      title: 'Crisis Situations',
      p1: 'Life crises can come in many different forms: a breakup, loss, moving, changing jobs, a difficult decision, an inner dead end, or the feeling that your old life no longer fits and there is not yet a new sense of support.',
      p2: 'During such periods, a person may feel confusion, fear, loneliness, inner chaos, loss of meaning, intense anxiety, or complete emotional numbness. Sometimes there is an urge to solve everything immediately, and sometimes the only wish is to hide from what is happening.',
      p3: 'Therapy in a crisis is a place where you do not have to rush to appear strong, but can give space to the feelings that are truly present right now: pain, grief, anger, exhaustion, doubt, and fear of the future.',
      p4: 'Together, we can gradually make sense of what is happening, stay with difficult states, restore a sense of inner ground, and look for the next step not from panic, but from a deeper connection with yourself.',
      p5: 'The goal of this work is to help you move through a difficult stage with more care, more meaning, and less inner loneliness.',
      cardTitle: 'What you can bring here',
      item1: 'breakup, divorce, or a painful end of a relationship',
      item2: 'moving, emigration, and loss of familiar support',
      item3: 'loss, grief, and difficult life changes',
      item4: 'job change, meaning crisis, inner dead end',
      item5: 'fear of the future and inability to make a decision',
      cta: 'Book a session',
    },
  }[lang];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 z-[-30]">
        <img src="/forest.jpg" alt="" className="h-full w-full object-cover" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[-20] bg-[#071126]/45" />

      <div className="pointer-events-none fixed inset-0 z-[-10]">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[#8ec5ff]/10 blur-3xl" />
        <div className="absolute right-[-5%] top-[120px] h-[380px] w-[380px] rounded-full bg-[#c9b8ff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-10 md:py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/15 bg-white/8 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/12"
          >
            {t.back}
          </Link>

          <div className="flex gap-2">
            <button
              onClick={() => setLang('ru')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                lang === 'ru'
                  ? 'bg-white text-black'
                  : 'border border-white/15 bg-white/8 text-white backdrop-blur-md hover:bg-white/12'
              }`}
            >
              RU
            </button>

            <button
              onClick={() => setLang('en')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                lang === 'en'
                  ? 'bg-white text-black'
                  : 'border border-white/15 bg-white/8 text-white backdrop-blur-md hover:bg-white/12'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              {t.section}
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              {t.title}
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-8 text-white/78">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
                <p>{t.p4}</p>
                <p>{t.p5}</p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/8 p-7 backdrop-blur-xl">
                <h2 className="text-2xl font-semibold">{t.cardTitle}</h2>

                <div className="mt-6 space-y-4 text-white/74">
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    {t.item1}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    {t.item2}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    {t.item3}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    {t.item4}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    {t.item5}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/#contact"
                    className="inline-flex rounded-2xl bg-gradient-to-r from-[#9fb8ff] to-[#7f9cff] px-6 py-3 font-medium text-white shadow-lg shadow-[#7f9cff]/20 transition hover:-translate-y-0.5 hover:opacity-95"
                  >
                    {t.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}