export default function CrisisPage() {
  return (
    <main className="min-h-screen bg-[#071126] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-white/60 transition hover:text-white">
          ← Назад
        </a>

        <h1 className="mt-6 text-4xl font-bold md:text-5xl">
          Кризисные ситуации
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-white/75">
          <p>
            Переезды, расставания, потери, смена работы, сложные жизненные решения и
            периоды сильной неопределенности могут выбивать из привычной опоры и
            оставлять ощущение, что почва уходит из-под ног.
          </p>
          <p>
            В такие периоды особенно важно не оставаться наедине с перегрузкой. Терапия
            может стать местом, где есть пространство для чувств, растерянности,
            боли и поиска следующего шага.
          </p>
          <p>
            Вместе можно постепенно пройти через сложный этап более бережно и с
            большим ощущением внутренней устойчивости.
          </p>
        </div>
      </div>
    </main>
  );
}