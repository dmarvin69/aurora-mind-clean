export type Lang = "ru" | "en";

export function getLang(value?: string): Lang {
  return value === "en" ? "en" : "ru";
}

export const siteContent = {
  ru: {
    brand: "Aurora Mind",
    navServices: "Направления",
    navFormat: "Формат работы",
    navReviews: "Отзывы",
    navContact: "Контакты",

    heroTag: "Психологическая поддержка · Онлайн",
    heroTitle1: "Пространство,",
    heroTitle2: "где можно выдохнуть",
    heroText:
      "Индивидуальная работа для тех, кто устал жить в постоянном напряжении, хочет лучше понимать себя и искать более устойчивую опору внутри.",
    heroBtnPrimary: "Оставить заявку",
    heroBtnSecondary: "Узнать больше",

    sideTag: "Бережный подход",
    sideTitle: "Внутри не должно быть постоянной войны",
    sideText:
      "Терапия — это пространство, где можно остановиться, услышать себя, разобраться в причинах внутреннего напряжения и начать двигаться к более спокойной и устойчивой жизни.",
    sideCard1Title: "1:1",
    sideCard1Text: "индивидуальный формат",
    sideCard2Title: "Online",
    sideCard2Text: "из любой точки мира",

    servicesTitle: "С чем я работаю",
    servicesText:
      "В центре работы — не только симптом, но и человек целиком: его чувства, история, внутренние конфликты и право идти в своём темпе.",
    serviceCards: [
      {
        slug: "anxiety",
        title: "Тревога и эмоциональное выгорание",
        text: "Помогаю снизить внутреннее напряжение, вернуть чувство опоры и восстановить контакт с собой.",
      },
      {
        slug: "self-esteem",
        title: "Самооценка и личные границы",
        text: "Работаем с чувством вины, страхом отстаивать себя и поиском более устойчивой внутренней позиции.",
      },
      {
        slug: "crisis",
        title: "Кризисные ситуации",
        text: "Поддержка в периоды расставаний, переездов, потерь, смены работы и сложных решений.",
      },
    ],

    formatTitle: "Формат работы",
    pricingCards: [
      {
        tag: "Первая встреча",
        price: "€30",
        text: "Знакомство, обсуждение запроса и понимание направления работы.",
      },
      {
        tag: "Регулярная работа",
        price: "€100",
        text: "Пакет из 4 встреч для более устойчивого и глубокого процесса.",
        featured: true,
      },
      {
        tag: "Долгосрочный формат",
        price: "€200",
        text: "Более глубокая работа с сопровождением и устойчивой динамикой.",
      },
    ],

    reviewsTitle: "Отзывы",
    reviews: [
      {
        text: "После нескольких встреч я впервые почувствовала, что мне не нужно всё время быть сильной. Появилось больше спокойствия и ясности.",
        name: "Анна, 24",
        role: "индивидуальная терапия",
        img: "/girl1.jpg",
      },
      {
        text: "Мне очень откликнулся бережный подход. Без давления, без оценок — только ощущение, что меня действительно слышат и понимают.",
        name: "Мария, 29",
        role: "работа с самооценкой",
        img: "/girl2.jpg",
      },
      {
        text: "Я пришёл в состоянии сильного напряжения и усталости. Постепенно стало легче справляться с эмоциями и принимать решения без паники.",
        name: "Алексей, 31",
        role: "работа с тревогой",
        img: "/man.jpg",
      },
    ],

    contactTag: "Контакты",
    contactTitle: "Оставить заявку",
    contactText:
      "Если тебе откликается такой формат, можно оставить заявку через форму. Я внимательно читаю обращения и отвечаю в течение суток.",
    contactBtnPrimary: "Открыть форму",
    contactBtnSecondary: "Посмотреть отзывы",

    mini1Label: "Формат",
    mini1Value: "Онлайн",
    mini2Label: "Ответ",
    mini2Value: "до 24 часов",
    mini3Label: "Первая встреча",
    mini3Value: "знакомство и запрос",

    mockName: "Имя",
    mockEmail: "Email",
    mockMessage: "Сообщение",
    mockBtn: "Перейти к заявке",
    mockText:
      "Форма открывается в отдельном окне, чтобы сохранить чистоту дизайна и спокойную атмосферу страницы.",

    details: {
      anxiety: {
        title: "Тревога и эмоциональное выгорание",
        subtitle: "Когда внутри слишком много напряжения",
        paragraphs: [
          "Постоянная тревога может проявляться как ощущение внутренней опасности, напряжение в теле, трудности со сном, раздражительность и невозможность по-настоящему отдохнуть.",
          "Эмоциональное выгорание часто приходит незаметно: сначала исчезает энергия, потом — интерес к жизни, а затем даже простые задачи начинают ощущаться как слишком тяжёлые.",
          "В работе мы постепенно ищем причины этого состояния, учимся замечать свои реакции, снижать внутреннее давление и восстанавливать ощущение безопасности и опоры.",
        ],
      },
      "self-esteem": {
        title: "Самооценка и личные границы",
        subtitle: "Когда трудно выбирать себя без чувства вины",
        paragraphs: [
          "Низкая самооценка часто связана не только с неуверенностью, но и с привычкой сомневаться в себе, обесценивать свои чувства и постоянно искать внешнее подтверждение собственной ценности.",
          "Трудности с границами могут проявляться в страхе говорить “нет”, в ощущении, что нужно всегда быть удобной, и в болезненном чувстве вины, когда человек начинает отстаивать себя.",
          "В терапии мы постепенно укрепляем внутреннюю опору, возвращаем уважение к своим чувствам и учимся строить отношения с собой и другими без постоянного самоподавления.",
        ],
      },
      crisis: {
        title: "Кризисные ситуации",
        subtitle: "Когда привычная жизнь меняется слишком резко",
        paragraphs: [
          "Кризисные периоды могут быть связаны с расставанием, переездом, потерей работы, ощущением тупика или необходимостью принимать сложные решения, к которым невозможно подготовиться идеально.",
          "В такие моменты человеку часто не хватает не советов, а пространства, где можно замедлиться, осмыслить происходящее и не оставаться наедине со своей растерянностью.",
          "Работа в кризисе помогает проживать изменения более бережно, возвращать контакт с собой и находить внутренние ориентиры даже тогда, когда привычные опоры разрушаются.",
        ],
      },
    },

    backHome: "Вернуться на главную",
    leaveRequest: "Открыть форму",
  },

  en: {
    brand: "Aurora Mind",
    navServices: "Areas",
    navFormat: "Work Format",
    navReviews: "Reviews",
    navContact: "Contact",

    heroTag: "Psychological Support · Online",
    heroTitle1: "A space",
    heroTitle2: "where you can exhale",
    heroText:
      "Individual support for those who feel exhausted by constant inner tension, want to understand themselves better, and build a steadier inner foundation.",
    heroBtnPrimary: "Leave a Request",
    heroBtnSecondary: "Learn More",

    sideTag: "Gentle Approach",
    sideTitle: "There should not be a constant war inside",
    sideText:
      "Therapy is a space where you can slow down, hear yourself, understand the roots of inner tension, and move toward a calmer and more grounded life.",
    sideCard1Title: "1:1",
    sideCard1Text: "individual format",
    sideCard2Title: "Online",
    sideCard2Text: "from anywhere in the world",

    servicesTitle: "What I work with",
    servicesText:
      "The focus is not only on the symptom, but on the whole person: feelings, personal history, inner conflicts, and the right to move at their own pace.",
    serviceCards: [
      {
        slug: "anxiety",
        title: "Anxiety and Emotional Burnout",
        text: "I help reduce inner tension, restore a sense of stability, and rebuild connection with yourself.",
      },
      {
        slug: "self-esteem",
        title: "Self-Esteem and Personal Boundaries",
        text: "We work with guilt, fear of standing up for yourself, and finding a steadier inner position.",
      },
      {
        slug: "crisis",
        title: "Crisis Situations",
        text: "Support through breakups, relocation, loss, job changes, and difficult decisions.",
      },
    ],

    formatTitle: "Work Format",
    pricingCards: [
      {
        tag: "First Session",
        price: "€30",
        text: "A first meeting to get acquainted, discuss your request, and understand the direction of our work.",
      },
      {
        tag: "Regular Work",
        price: "€100",
        text: "A package of 4 sessions for a steadier and deeper process.",
        featured: true,
      },
      {
        tag: "Long-Term Format",
        price: "€200",
        text: "More in-depth work with ongoing support and sustainable progress.",
      },
    ],

    reviewsTitle: "Reviews",
    reviews: [
      {
        text: "After just a few sessions, I finally felt I did not have to be strong all the time. There was much more calm and clarity inside.",
        name: "Anna, 24",
        role: "individual therapy",
        img: "/girl1.jpg",
      },
      {
        text: "The gentle approach really resonated with me. No pressure, no judgment — just a real sense of being heard and understood.",
        name: "Maria, 29",
        role: "self-esteem work",
        img: "/girl2.jpg",
      },
      {
        text: "I came in feeling tense and exhausted. Over time, it became easier to handle emotions and make decisions without panic.",
        name: "Alex, 31",
        role: "anxiety support",
        img: "/man.jpg",
      },
    ],

    contactTag: "Contact",
    contactTitle: "Leave a Request",
    contactText:
      "If this format feels right for you, you can leave a request through the form. I read every message carefully and reply within 24 hours.",
    contactBtnPrimary: "Open Form",
    contactBtnSecondary: "View Reviews",

    mini1Label: "Format",
    mini1Value: "Online",
    mini2Label: "Reply",
    mini2Value: "within 24 hours",
    mini3Label: "First Session",
    mini3Value: "intro and request",

    mockName: "Name",
    mockEmail: "Email",
    mockMessage: "Message",
    mockBtn: "Go to Form",
    mockText:
      "The form opens in a separate window to preserve the clean design and calm atmosphere of the page.",

    details: {
      anxiety: {
        title: "Anxiety and Emotional Burnout",
        subtitle: "When there is too much tension inside",
        paragraphs: [
          "Constant anxiety can show up as a sense of inner danger, physical tension, sleep difficulties, irritability, and an inability to truly rest.",
          "Emotional burnout often comes gradually: first energy disappears, then interest in life fades, and eventually even simple tasks begin to feel overwhelming.",
          "In therapy, we carefully explore the roots of this state, learn to notice your reactions, reduce internal pressure, and restore a sense of safety and inner support.",
        ],
      },
      "self-esteem": {
        title: "Self-Esteem and Personal Boundaries",
        subtitle: "When choosing yourself feels difficult",
        paragraphs: [
          "Low self-esteem is often connected not only with insecurity, but with a habit of doubting yourself, dismissing your feelings, and constantly looking for external proof of your worth.",
          "Boundary difficulties may appear as fear of saying 'no', a need to stay convenient for others, and painful guilt whenever you begin to protect your own needs.",
          "In therapy, we gradually strengthen your inner foundation, rebuild respect for your feelings, and learn to relate to yourself and others without constant self-suppression.",
        ],
      },
      crisis: {
        title: "Crisis Situations",
        subtitle: "When life changes too abruptly",
        paragraphs: [
          "Crisis periods may be connected with breakups, relocation, job loss, feeling stuck, or having to make difficult decisions that no one can prepare for perfectly.",
          "At such times, what people often need is not advice, but a space where they can slow down, process what is happening, and not remain alone with their confusion.",
          "Therapeutic support in crisis helps you move through change more gently, restore contact with yourself, and find inner direction even when familiar supports collapse.",
        ],
      },
    },

    backHome: "Back to home",
    leaveRequest: "Open Form",
  },
};