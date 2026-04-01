import Link from 'next/link';

export default function AnxietyBurnoutPage() {
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
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/15 bg-white/8 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/12"
          >
            ← Назад на главную
          </Link>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              Направление работы
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Тревога и эмоциональное выгорание
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-8 text-white/78">
                <p>
                  Постоянное внутреннее напряжение, ощущение тревоги без ясной причины,
                  усталость даже после отдыха, сложности с концентрацией, раздражительность
                  и чувство, что сил становится всё меньше, — это то, с чем многие люди
                  приходят в терапию.
                </p>

                <p>
                  Иногда тревога проявляется как бесконечный поток мыслей, ощущение
                  внутренней опасности, напряжение в теле, трудности со сном или
                  постоянное ожидание чего-то плохого. Эмоциональное выгорание может
                  ощущаться как опустошение, потеря чувствительности к жизни, усталость
                  от людей, работы и даже от самой себя.
                </p>

                <p>
                  В работе мы можем постепенно исследовать, что именно поддерживает это
                  состояние: хронический стресс, высокая внутренняя требовательность,
                  невозможность отдыхать без чувства вины, подавленные эмоции, старые
                  способы выживания или постоянная жизнь в режиме внутренней мобилизации.
                </p>

                <p>
                  Терапия здесь — это не давление и не требование «быстро взять себя в
                  руки», а пространство, где можно замедлиться, лучше понять себя и
                  начать возвращать внутреннюю устойчивость шаг за шагом.
                </p>

                <p>
                  Цель такой работы — не просто уменьшить симптом, а помочь тебе снова
                  почувствовать больше опоры, ясности, живости и контакта с собой.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/8 p-7 backdrop-blur-xl">
                <h2 className="text-2xl font-semibold">С чем можно прийти</h2>

                <div className="mt-6 space-y-4 text-white/74">
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    постоянная тревога и внутреннее напряжение
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    эмоциональная усталость и ощущение опустошения
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    сложности со сном и невозможность расслабиться
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    страх ошибок, перегрузка, ощущение “я больше не справляюсь”
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    потеря контакта с собой и своими потребностями
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/#contact"
                    className="inline-flex rounded-2xl bg-gradient-to-r from-[#9fb8ff] to-[#7f9cff] px-6 py-3 font-medium text-white shadow-lg shadow-[#7f9cff]/20 transition hover:-translate-y-0.5 hover:opacity-95"
                  >
                    Оставить заявку
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