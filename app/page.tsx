'use client';

import { useMemo, useState } from 'react';

type Lang = 'ru' | 'en';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru');

  const content = useMemo(() => {
    const ru = {
      brand: 'Aurora Mind',
      navServices: 'Направления',
      navPricing: 'Формат работы',
      navReviews: 'Отзывы',
      navContact: 'Контакты',

      heroTag: 'Психологическая поддержка · Онлайн',
      heroTitle1: 'Пространство,',
      heroTitle2: 'где можно выдохнуть',
      heroText:
        'Индивидуальная работа для тех, кто устал жить в постоянном напряжении, хочет лучше понимать себя и искать более устойчивую опору внутри.',
      heroBtnPrimary: 'Оставить заявку',
      heroBtnSecondary: 'Узнать больше',

      sideTag: 'Бережный подход',
      sideTitle: 'Внутри не должно быть постоянной войны',
      sideText:
        'Терапия — это пространство, где можно остановиться, услышать себя, разобраться в причинах внутреннего напряжения и начать двигаться к более спокойной и устойчивой жизни.',
      sideCard1Title: '1:1',
      sideCard1Text: 'индивидуальный формат',
      sideCard2Title: 'Online',
      sideCard2Text: 'из любой точки мира',

      servicesTitle: 'С чем я работаю',
      servicesText:
        'В центре работы — не только симптом, но и человек целиком: его чувства, история, внутренние конфликты и право идти в своём темпе.',
      services: [
        {
          title: 'Тревога и эмоциональное выгорание',
          text: 'Помогаю снизить внутреннее напряжение, вернуть чувство опоры и восстановить контакт с собой.',
        },
        {
          title: 'Самооценка и личные границы',
          text: 'Работаем с чувством вины, страхом отстаивать себя и поиском более устойчивой внутренней позиции.',
        },
        {
          title: 'Кризисы и жизненные перемены',
          text: 'Поддержка в периоды расставаний, переездов, потерь, смены работы и сложных решений.',
        },
      ],

      pricingTitle: 'Формат работы',
      pricingCards: [
        {
          tag: 'Первая встреча',
          price: '€30',
          text: 'Знакомство, обсуждение запроса и понимание направления работы.',
        },
        {
          tag: 'Регулярная работа',
          price: '€100',
          text: 'Пакет из 4 встреч для более устойчивого и глубокого процесса.',
          featured: true,
        },
        {
          tag: 'Долгосрочный формат',
          price: '€200',
          text: 'Более глубокая работа с сопровождением и устойчивой динамикой.',
        },
      ],

      reviewsTitle: 'Отзывы',
      reviews: [
        {
          text: 'После нескольких встреч я впервые почувствовала, что мне не нужно всё время быть сильной. Появилось больше спокойствия и ясности.',
          name: 'Анна, 24',
          role: 'индивидуальная терапия',
          img: '/girl1.jpg',
        },
        {
          text: 'Мне очень откликнулся бережный подход. Без давления, без оценок — только ощущение, что меня действительно слышат и понимают.',
          name: 'Мария, 29',
          role: 'работа с самооценкой',
          img: '/girl2.jpg',
        },
        {
          text: 'Я пришёл в состоянии сильного напряжения и усталости. Постепенно стало легче справляться с эмоциями и принимать решения без паники.',
          name: 'Алексей, 31',
          role: 'работа с тревогой',
          img: '/man.jpg',
        },
      ],

      contactTag: 'Контакты',
      contactTitle: 'Оставить заявку',
      contactText:
        'Если тебе откликается такой формат, можно оставить заявку через форму. Я внимательно читаю обращения и отвечаю в течение суток.',
      contactBtnPrimary: 'Открыть форму',
      contactBtnSecondary: 'Посмотреть отзывы',

      mini1Label: 'Формат',
      mini1Value: 'Онлайн',
      mini2Label: 'Ответ',
      mini2Value: 'до 24 часов',
      mini3Label: 'Первая встреча',
      mini3Value: 'знакомство и запрос',

      mockName: 'Имя',
      mockEmail: 'Email',
      mockMessage: 'Сообщение',
      mockBtn: 'Перейти к заявке',
      mockText:
        'Заявка открывается в отдельном окне формы, чтобы сохранить чистоту дизайна и спокойную атмосферу страницы.',
    };

    const en = {
      brand: 'Aurora Mind',
      navServices: 'Areas',
      navPricing: 'Work Format',
      navReviews: 'Reviews',
      navContact: 'Contact',

      heroTag: 'Psychological Support · Online',
      heroTitle1: 'A space',
      heroTitle2: 'where you can exhale',
      heroText:
        'Individual support for those who feel exhausted by constant inner tension, want to understand themselves better, and build a steadier inner foundation.',
      heroBtnPrimary: 'Leave a Request',
      heroBtnSecondary: 'Learn More',

      sideTag: 'Gentle Approach',
      sideTitle: 'There should not be a constant war inside',
      sideText:
        'Therapy is a space where you can slow down, hear yourself, understand the roots of inner tension, and move toward a calmer and more grounded life.',
      sideCard1Title: '1:1',
      sideCard1Text: 'individual format',
      sideCard2Title: 'Online',
      sideCard2Text: 'from anywhere in the world',

      servicesTitle: 'What I work with',
      servicesText:
        'The focus is not only on the symptom, but on the whole person: feelings, personal history, inner conflicts, and the right to move at their own pace.',
      services: [
        {
          title: 'Anxiety and Emotional Burnout',
          text: 'I help reduce inner tension, restore a sense of stability, and rebuild connection with yourself.',
        },
        {
          title: 'Self-Esteem and Personal Boundaries',
          text: 'We work with guilt, fear of standing up for yourself, and finding a steadier inner position.',
        },
        {
          title: 'Crises and Life Transitions',
          text: 'Support through breakups, relocation, loss, job changes, and difficult decisions.',
        },
      ],

      pricingTitle: 'Work Format',
      pricingCards: [
        {
          tag: 'First Session',
          price: '€30',
          text: 'A first meeting to get acquainted, discuss your request, and understand the direction of our work.',
        },
        {
          tag: 'Regular Work',
          price: '€100',
          text: 'A package of 4 sessions for a steadier and deeper process.',
          featured: true,
        },
        {
          tag: 'Long-Term Format',
          price: '€200',
          text: 'More in-depth work with ongoing support and sustainable progress.',
        },
      ],

      reviewsTitle: 'Reviews',
      reviews: [
        {
          text: 'After just a few sessions, I finally felt I did not have to be strong all the time. There was much more calm and clarity inside.',
          name: 'Anna, 24',
          role: 'individual therapy',
          img: '/girl1.jpg',
        },
        {
          text: 'The gentle approach really resonated with me. No pressure, no judgment — just a real sense of being heard and understood.',
          name: 'Maria, 29',
          role: 'self-esteem work',
          img: '/girl2.jpg',
        },
        {
          text: 'I came in feeling tense and exhausted. Over time, it became easier to handle emotions and make decisions without panic.',
          name: 'Alex, 31',
          role: 'anxiety support',
          img: '/man.jpg',
        },
      ],

      contactTag: 'Contact',
      contactTitle: 'Leave a Request',
      contactText:
        'If this format feels right for you, you can leave a request through the form. I read every message carefully and reply within 24 hours.',
      contactBtnPrimary: 'Open Form',
      contactBtnSecondary: 'View Reviews',

      mini1Label: 'Format',
      mini1Value: 'Online',
      mini2Label: 'Reply',
      mini2Value: 'within 24 hours',
      mini3Label: 'First Session',
      mini3Value: 'intro and request',

      mockName: 'Name',
      mockEmail: 'Email',
      mockMessage: 'Message',
      mockBtn: 'Go to Form',
      mockText:
        'The form opens in a separate window to preserve the clean design and calm atmosphere of the page.',
    };

    return lang === 'ru' ? ru : en;
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#071126] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[#8ec5ff]/10 blur-3xl" />
        <div className="absolute right-[-5%] top-[120px] h-[380px] w-[380px] rounded-full bg-[#c9b8ff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071126]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-semibold tracking-tight">{content.brand}</div>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              {content.navServices}
            </a>
            <a href="#pricing" className="transition hover:text-white">
              {content.navPricing}
            </a>
            <a href="#reviews" className="transition hover:text-white">
              {content.navReviews}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {content.navContact}
            </a>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setLang('ru')}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                lang === 'ru'
                  ? 'bg-white text-[#071126]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              RU
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                lang === 'en'
                  ? 'bg-white text-[#071126]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-16 pt-20 md:grid-cols-2 md:items-center md:pt-28">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/45">
            {content.heroTag}
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
            {content.heroTitle1}
            <span className="mt-2 block bg-gradient-to-r from-[#d7ccff] to-[#97cbff] bg-clip-text text-transparent">
              {content.heroTitle2}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/68">
            {content.heroText}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#071126] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              {content.heroBtnPrimary}
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              {content.heroBtnSecondary}
            </a>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-8">
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">
              {content.sideTag}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
              {content.sideTitle}
            </h2>

            <p className="mt-5 leading-8 text-white/68">{content.sideText}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-bold">{content.sideCard1Title}</div>
                <div className="mt-2 text-sm text-white/55">{content.sideCard1Text}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-bold">{content.sideCard2Title}</div>
                <div className="mt-2 text-sm text-white/55">{content.sideCard2Text}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">{content.servicesTitle}</h2>
          <p className="mt-4 leading-8 text-white/62">{content.servicesText}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.services.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/8"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-8 text-white/62">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">{content.pricingTitle}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.pricingCards.map((card) => (
            <div
              key={card.tag}
              className={
                card.featured
                  ? 'rounded-[28px] border border-[#c9b8ff]/35 bg-gradient-to-b from-[#c9b8ff]/18 to-white/5 p-7 shadow-xl shadow-[#c9b8ff]/5'
                  : 'rounded-[28px] border border-white/10 bg-white/5 p-7'
              }
            >
              <div
                className={
                  card.featured
                    ? 'text-sm uppercase tracking-[0.25em] text-[#ddd3ff]'
                    : 'text-sm uppercase tracking-[0.25em] text-white/45'
                }
              >
                {card.tag}
              </div>
              <div className="mt-4 text-3xl font-bold">{card.price}</div>
              <p className={card.featured ? 'mt-3 text-white/70' : 'mt-3 text-white/60'}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">{content.reviewsTitle}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.reviews.map((review, index) => (
            <div
              key={index}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/8"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <p className="text-sm font-medium text-white/90">{review.name}</p>
                  <p className="text-xs text-white/45">{review.role}</p>
                </div>
              </div>

              <p className="mt-5 leading-7 text-white/72">“{review.text}”</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/6 backdrop-blur-2xl">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                {content.contactTag}
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                {content.contactTitle}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                {content.contactText}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://forms.yandex.ru/u/69cc417c49af47001f74b105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-7 py-4 font-semibold text-[#071126] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  {content.contactBtnPrimary}
                </a>

                <a
                  href="#reviews"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-medium text-white transition hover:bg-white/10"
                >
                  {content.contactBtnSecondary}
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/45">{content.mini1Label}</div>
                  <div className="mt-2 text-lg font-semibold">{content.mini1Value}</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/45">{content.mini2Label}</div>
                  <div className="mt-2 text-lg font-semibold">{content.mini2Value}</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/45">{content.mini3Label}</div>
                  <div className="mt-2 text-lg font-semibold">{content.mini3Value}</div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[360px] border-t border-white/10 bg-gradient-to-br from-[#c9b8ff]/12 via-transparent to-[#8ec5ff]/10 lg:min-h-full lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />

              <div className="relative flex h-full items-center justify-center p-8 md:p-12">
                <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#0d111a]/90 p-5 shadow-2xl shadow-black/30">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-[#090d14] p-5">
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 text-sm text-white/45">{content.mockName}</div>
                        <div className="h-12 rounded-xl border border-white/10 bg-white/5" />
                      </div>

                      <div>
                        <div className="mb-2 text-sm text-white/45">{content.mockEmail}</div>
                        <div className="h-12 rounded-xl border border-white/10 bg-white/5" />
                      </div>

                      <div>
                        <div className="mb-2 text-sm text-white/45">{content.mockMessage}</div>
                        <div className="h-28 rounded-xl border border-white/10 bg-white/5" />
                      </div>

                      <a
                        href="https://forms.yandex.ru/u/69cc417c49af47001f74b105"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-xl bg-[#7ea2ff] px-5 py-3 font-medium text-white transition hover:opacity-90"
                      >
                        {content.mockBtn}
                      </a>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    {content.mockText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}