'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const params = useSearchParams();
  const lang = params.get('lang') === 'en' ? 'en' : 'ru';

  const t = {
    ru: {
      back: 'Назад',
      title: 'Тревога и эмоциональное выгорание',
      text: 'Когда внутри слишком много напряжения. Постоянная тревога может проявляться как ощущение внутренней опасности, напряжение в теле, трудности со сном, раздражительность и невозможность по-настоящему отдохнуть. Эмоциональное выгорание часто приходит незаметно: сначала исчезает энергия, потом — интерес к жизни, а затем даже простые задачи начинают ощущаться как слишком тяжёлые. В работе мы постепенно ищем причины этого состояния, учимся замечать свои реакции, снижать внутреннее давление и восстанавливать ощущение безопасности и опоры.',
          btn: 'Оставить заявку',',
    },
    en: {
      back: 'Back',
      title: 'Service details',
      text:'Constant anxiety can show up as a sense of inner danger, physical tension, sleep difficulties, irritability, and an inability to truly rest. Emotional burnout often comes gradually: first energy disappears, then interest in life fades, and eventually even simple tasks begin to feel overwhelming. In therapy, we carefully explore the roots of this state, learn to notice your reactions, reduce internal pressure, and restore a sense of safety and inner support.
    },
  }[lang];

  return (
    <main className="page min-h-screen text-white">

      <img src="/forest.jpg" className="fixed inset-0 w-full h-full object-cover -z-20"/>
      <div className="fixed inset-0 bg-black/40 -z-10"/>

      <div className="max-w-4xl mx-auto p-6">

        <Link href={`/?lang=${lang}`} className="btn">
          {t.back}
        </Link>

        <div className="glass p-8 mt-10">
          <h1 className="text-4xl font-bold">{t.title}</h1>
          <p className="mt-6 text-soft">{t.text}</p>
        </div>

      </div>
    </main>
  );
}