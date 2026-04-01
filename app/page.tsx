'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type Lang = 'ru' | 'en';

type FormState = {
  name: string;
  email: string;
  topic: string;
  message: string;
  company: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  topic: '',
  message: '',
  company: '',
};

const FOREST_BG = '/forest.jpg';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru');
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
          href: '/services/anxiety-burnout',
          more: 'Подробнее',
        },
        {
          title: 'Самооценка и личные границы',
          text: 'Работаем с чувством вины, страхом отстаивать себя и поиском более устойчивой внутренней позиции.',
          href: '/services/self-esteem-boundaries',
          more: 'Подробнее',
        },
        {
          title: 'Кризисные ситуации',
          text: 'Поддержка в периоды расставаний, переездов, потерь, смены работы и сложных решений.',
          href: '/services/crisis',
          more: 'Подробнее',
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
        'Если тебе откликается такой формат, можно оставить заявку прямо на сайте. Я внимательно читаю обращения и отвечаю в течение суток.',
      contactBtnSecondary: 'Посмотреть отзывы',

      mini1Label: 'Формат',
      mini1Value: 'Онлайн',
      mini2Label: 'Ответ',
      mini2Value: 'до 24 часов',
      mini3Label: 'Первая встреча',
      mini3Value: 'знакомство и запрос',

      formTitle: 'Форма заявки',
      formName: 'Имя',
      formEmail: 'Email',
      formTopic: 'Тема обращения',
      formMessage: 'Сообщение',
      formNamePlaceholder: 'Как к тебе обращаться?',
      formEmailPlaceholder: 'example@mail.com',
      formTopicPlaceholder: 'Например: тревога, самооценка, кризис',
      formMessagePlaceholder: 'Расскажи коротко, с чем ты хочешь прийти в работу',
      formBtn: 'Отправить заявку',
      formSending: 'Отправка...',
      formSuccess:
        'Спасибо. Твоя заявка отправлена. Я свяжусь с тобой в ближайшее время.',
      formErrorDefault:
        'Не удалось отправить заявку. Попробуй ещё раз чуть позже.',
      formNote:
        'Нажимая кнопку, ты отправляешь заявку на почту для обратной связи.',
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
          href: '/services/anxiety-burnout',
          more: 'Learn more',
        },
        {
          title: 'Self-Esteem and Personal Boundaries',
          text: 'We work with guilt, fear of standing up for yourself, and finding a steadier inner position.',
          href: '/services/self-esteem-boundaries',
          more: 'Learn more',
        },
        {
          title: 'Crisis Situations',
          text: 'Support through breakups, relocation, loss, job changes, and difficult decisions.',
          href: '/services/crisis',
          more: 'Learn more',
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
        'If this format feels right for you, you can leave a request directly on the website. I read every message carefully and reply within 24 hours.',
      contactBtnSecondary: 'View Reviews',

      mini1Label: 'Format',
      mini1Value: 'Online',
      mini2Label: 'Reply',
      mini2Value: 'within 24 hours',
      mini3Label: 'First Session',
      mini3Value: 'intro and request',

      formTitle: 'Contact Form',
      formName: 'Name',
      formEmail: 'Email',
      formTopic: 'Topic',
      formMessage: 'Message',
      formNamePlaceholder: 'What should I call you?',
      formEmailPlaceholder: 'example@mail.com',
      formTopicPlaceholder: 'For example: anxiety, self-esteem, crisis',
      formMessagePlaceholder: 'Briefly share what you would like support with',
      formBtn: 'Send Request',
      formSending: 'Sending...',
      formSuccess:
        'Thank you. Your request has been sent. I will contact you soon.',
      formErrorDefault:
        'Could not send your request. Please try again a bit later.',
      formNote:
        'By clicking the button, you send your request by email for follow-up.',
    };

    return lang === 'ru' ? ru : en;
  }, [lang]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccessMessage('');
    setErrorMessage('');
    setIsSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || content.formErrorDefault);
      }

      setSuccessMessage(content.formSuccess);
      setForm(initialForm);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : content.formErrorDefault;
      setErrorMessage(message);
    } finally {
      setIsSending(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071126] text-white">
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${FOREST_BG}')` }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#071126]/72" />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[#8ec5ff]/10 blur-3xl" />
        <div className="absolute right-[-5%] top-[120px] h-[380px] w-[380px] rounded-full bg-[#c9b8ff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071126]/65 backdrop-blur-xl">
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
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/8"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-8 text-white/62">{item.text}</p>
              <div className="mt-6 text-sm font-medium text-[#d7ccff] transition group-hover:text-white">
                {item.more} →
              </div>
            </Link>
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
                    <h3 className="mb-5 text-xl font-semibold text-white/95">
                      {content.formTitle}
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        autoComplete="off"
                        tabIndex={-1}
                        className="hidden"
                      />

                      <div>
                        <label className="mb-2 block text-sm text-white/45">
                          {content.formName}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder={content.formNamePlaceholder}
                          required
                          className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-white/45">
                          {content.formEmail}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder={content.formEmailPlaceholder}
                          required
                          className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-white/45">
                          {content.formTopic}
                        </label>
                        <input
                          type="text"
                          name="topic"
                          value={form.topic}
                          onChange={handleChange}
                          placeholder={content.formTopicPlaceholder}
                          className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-white/45">
                          {content.formMessage}
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder={content.formMessagePlaceholder}
                          required
                          rows={5}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/25"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSending}
                        className="inline-flex rounded-xl bg-[#7ea2ff] px-5 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSending ? content.formSending : content.formBtn}
                      </button>

                      {successMessage ? (
                        <p className="text-sm leading-6 text-emerald-300">
                          {successMessage}
                        </p>
                      ) : null}

                      {errorMessage ? (
                        <p className="text-sm leading-6 text-rose-300">
                          {errorMessage}
                        </p>
                      ) : null}
                    </form>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    {content.formNote}
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