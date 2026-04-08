import Link from 'next/link';

export default function CrisisPage() {
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
              Кризисные ситуации
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-8 text-white/78">
                <p>
                  Жизненные кризисы могут приходить в самых разных формах: расставание,
                  потеря, переезд, смена работы, тяжёлое решение, внутренний тупик,
                  ощущение, что прежняя жизнь больше не подходит, а новой опоры пока нет.
                </p>

                <p>
                  В такие периоды человек может чувствовать растерянность, страх,
                  одиночество, внутренний хаос, потерю смысла, сильную тревогу или
                  полное эмоциональное онемение. Иногда хочется срочно всё решить,
                  а иногда — просто спрятаться от происходящего.
                </p>

                <p>
                  Терапия в кризисе — это место, где можно не торопиться изображать
                  силу, а дать место тем чувствам, которые сейчас действительно есть:
                  боли, горю, гневу, усталости, сомнениям, страху перед будущим.
                </p>

                <p>
                  Вместе можно постепенно разбирать происходящее, выдерживать сложные
                  состояния, возвращать ощущение внутренней почвы и искать следующий
                  шаг не из паники, а из большего контакта с собой.
                </p>

                <p>
                  Цель такой работы — помочь тебе пройти сложный этап более бережно,
                  осмысленно и с меньшим чувством одиночества внутри.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/8 p-7 backdrop-blur-xl">
                <h2 className="text-2xl font-semibold">С чем можно прийти</h2>

                <div className="mt-6 space-y-4 text-white/74">
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    расставание, развод, сложный разрыв отношений
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    переезд, эмиграция, потеря привычной опоры
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    потеря, горевание, тяжёлые жизненные изменения
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    смена работы, кризис смысла, внутренний тупик
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    страх будущего и невозможность принять решение
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