'use client';

import Link from 'next/link';
import { useState } from 'react';

type Lang = 'ru' | 'en';

export default function AnxietyBurnoutPage() {
  const [lang, setLang] = useState<Lang>('ru');

  const t = {
    ru: {
      back: '← Назад на главную',
      section: 'Направление работы',
      title: 'Тревога и эмоциональное выгорание',
      p1: 'Постоянное внутреннее напряжение, ощущение тревоги без ясной причины, усталость даже после отдыха, сложности с концентрацией, раздражительность и чувство, что сил становится всё меньше, — это то, с чем многие люди приходят в терапию.',
      p2: 'Иногда тревога проявляется как бесконечный поток мыслей, ощущение внутренней опасности, напряжение в теле, трудности со сном или постоянное ожидание чего-то плохого. Эмоциональное выгорание может ощущаться как опустошение, потеря чувствительности к жизни, усталость от людей, работы и даже от самой себя.',
      p3: 'В работе мы можем постепенно исследовать, что именно поддерживает это состояние: хронический стресс, высокая внутренняя требовательность, невозможность отдыхать без чувства вины, подавленные эмоции, старые способы выживания или постоянная жизнь в режиме внутренней мобилизации.',
      p4: 'Терапия здесь — это не давление и не требование «быстро взять себя в руки», а пространство, где можно замедлиться, лучше понять себя и начать возвращать внутреннюю устойчивость шаг за шагом.',
      p5: 'Цель такой работы — не просто уменьшить симптом, а помочь тебе снова почувствовать больше опоры, ясности, живости и контакта с собой.',
      cardTitle: 'С чем можно прийти',
      item1: 'постоянная тревога и внутреннее напряжение',
      item2: 'эмоциональная усталость и ощущение опустошения',
      item3: 'сложности со сном и невозможность расслабиться',
      item4: 'страх ошибок, перегрузка, ощущение “я больше не справляюсь”',
      item5: 'потеря контакта с собой и своими потребностями',
      cta: 'Оставить заявку',
    },
    en: {
      back: '← Back to home',
      section: 'Area of work',
      title: 'Anxiety and Emotional Burnout',
      p1: 'Constant inner tension, a sense of anxiety without a clear reason, tiredness even after rest, difficulty concentrating, irritability, and the feeling that you have less and less strength — these are some of the reasons many people come to therapy.',
      p2: 'Sometimes anxiety shows up as an endless stream of thoughts, a sense of inner danger, tension in the body, sleep difficulties, or the constant expectation that something bad is about to happen. Emotional burnout may feel like emptiness, loss of sensitivity to life, exhaustion from people, work, and even from yourself.',
      p3: 'In therapy, we can gently explore what may be maintaining this state: chronic stress, high inner pressure, the inability to rest without guilt, suppressed emotions, old survival patterns, or living in a constant state of internal mobilization.',
      p4: 'Therapy here is not pressure and not a demand to “pull yourself together quickly,” but a space where you can slow down, understand yourself more deeply, and begin to restore inner stability step by step.',
      p5: 'The goal of this work is not only to reduce symptoms, but to help you feel more grounded, clear, alive, and connected to yourself again.',
      cardTitle: 'What you can bring here',
      item1: 'constant anxiety and inner tension',
      item2: 'emotional exhaustion and a sense of emptiness',
      item3: 'sleep difficulties and inability to relax',
      item4: 'fear of mistakes, overload, and the feeling of “I can’t cope anymore”',
      item5: 'loss of connection with yourself and your needs',
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