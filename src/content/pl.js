import { pluralPl } from "@/lib/plural";

export const site = {
  name: "Arkadiusz Sarach",
  title: "Arkadiusz Sarach — aplikacje i automatyzacja dla biznesu",
  description:
    "Tworzę aplikacje i automatyzację na potrzeby biznesowe. Rozwiązuję konkretne problemy — z pomocą narzędzi AI.",
  url: "https://my-portoflio-mu.vercel.app",
};

export const contact = {
  email: "arkadiusz.sarach@gmail.com",
  mailSubject: "Zapytanie ze strony",
  linkedin: "https://www.linkedin.com/in/arkadiusz-sarach/",
  github: "https://github.com/Ajek1993",
  gitlab: "https://gitlab.com/Ajek1993",
};

export const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(contact.mailSubject)}`;

export const nav = {
  skipLink: "Przejdź do treści",
  homeLabel: "Arkadiusz Sarach — strona główna",
  links: [
    { href: "#co-robie", label: "Co robię" },
    { href: "#jak-pracuje", label: "Jak pracuję" },
    { href: "#projekty", label: "Projekty" },
    { href: "#o-mnie", label: "O mnie" },
    { href: "#kontakt", label: "Kontakt" },
  ],
  cta: "Napisz do mnie",
  openMenu: "Otwórz menu",
  closeMenu: "Zamknij menu",
};

export const hero = {
  eyebrow: "Arkadiusz Sarach · aplikacje, automatyzacja, AI",
  headline: "Tworzę aplikacje i automatyzację na potrzeby biznesowe.",
  headlineAccent: "Rozwiązuję konkretne problemy.",
  lead: "Zamieniam ręczną pracę — arkusze, telefony, przepisywanie danych — w proste aplikacje, które ułatwiają ludziom codzienną robotę. Pracuję z narzędziami AI, ale decyzje i jakość zostają po mojej stronie.",
  primaryCta: "Zobacz projekty",
  secondaryCta: "Masz proces do usprawnienia? Napisz",
  productionCount: (n) =>
    `${n} ${pluralPl(n, ["aplikacja używana", "aplikacje używane", "aplikacji używanych"])} na co dzień`,
  productionNote: "w firmach i w domu",
};

export const whatIDo = {
  id: "co-robie",
  eyebrow: "Co robię",
  title: "Trzy rodzaje problemów, które rozwiązuję",
  areas: [
    {
      category: "business",
      title: "Aplikacje biznesowe",
      text: "Narzędzia szyte na miarę procesu w firmie — tam, gdzie gotowe programy nie pasują albo są za duże.",
      example: "Grafik serwisu samochodowego, zlecenia dla kierowców wypożyczalni.",
    },
    {
      category: "automation",
      title: "Automatyzacja procesów",
      text: "Zastępuję ręczną pracę: arkusze, przepisywanie danych, papierowe zestawienia i raporty sklejane w piątek po południu.",
      example: "Rejestr i statystyki zakażeń dla szpitala zamiast arkuszy Excela.",
    },
    {
      category: "ai",
      title: "Narzędzia z AI",
      text: "Aplikacje z modelem językowym w środku — rozumieją zwykłe zdania, tłumaczą, streszczają, przygotowują treści.",
      example: "Budżet domowy prowadzony rozmową, napisy i dubbing do filmów.",
    },
  ],
  exampleLabel: "Np.",
  seeProjects: "Zobacz przykłady",
};

export const howIWork = {
  id: "jak-pracuje",
  eyebrow: "Jak pracuję",
  title: "Najpierw plan, potem kod",
  lead: "Każdy projekt przechodzi przez tę samą ścieżkę — metodę PAF (Practical AI Framework). AI pisze dużo kodu, ale według planu, który ustalamy razem. Dzięki temu model nie zgaduje, a Ty wiesz, co dostaniesz.",
  steps: [
    {
      title: "Pomysł i persona",
      text: "Rozmawiamy o problemie i o tym, kto będzie z aplikacji korzystał.",
    },
    {
      title: "Specyfikacja",
      text: "Spisuję, co aplikacja ma robić — bez technologii, językiem użytkownika.",
    },
    {
      title: "User stories",
      text: "Konkretne sytuacje i pytania „a co, jeśli…”. Odpowiedzi to decyzje projektowe.",
    },
    {
      title: "Architektura",
      text: "Dobieram technologie do skali: tak prosto, jak się da.",
    },
    {
      title: "PRD",
      text: "Zamknięty zakres: co robimy, czego nie robimy i kiedy jest gotowe.",
    },
    {
      title: "SPEC",
      text: "Zasady pracy nad kodem: struktura, styl, testy i granice dla AI.",
    },
    {
      title: "Taski",
      text: "Małe, sprawdzalne zadania — realizowane i przeglądane po kolei.",
    },
    {
      title: "Realizacja i testy",
      text: "Kod powstaje z AI, a testy, przegląd i wdrożenie zamykają każdy etap.",
    },
  ],
  split: {
    me: {
      title: "Po mojej stronie",
      items: [
        "rozmowa o procesie i decyzje",
        "specyfikacja i zakres",
        "przegląd każdego etapu",
        "testy i wdrożenie",
      ],
    },
    ai: {
      title: "Po stronie AI",
      items: [
        "szybkie pisanie kodu według planu",
        "pierwsze wersje tekstów i dokumentacji",
        "wyłapywanie przypadków brzegowych",
      ],
    },
  },
  toolkit: {
    title: "Własny zestaw narzędzi",
    text: "Pracuję z Claude Code i własnym zestawem skilli, agentów i hooków: od prowadzenia metody PAF, przez generowanie CV, po powtarzalny proces commitów i audyt bezpieczeństwa. Każdy nowy projekt startuje z tego samego, sprawdzonego miejsca.",
  },
};

export const projectsSection = {
  id: "projekty",
  eyebrow: "Projekty",
  title: "Aplikacje, które działają",
  lead: "Większość kodu jest prywatna, bo powstała dla konkretnych firm — chętnie pokażę go na rozmowie.",
  casual: {
    id: "na-luzie",
    eyebrow: "Na luzie",
    title: "Projekty po godzinach",
    lead: "Rzeczy zrobione z ciekawości albo dla zabawy.",
  },
  course: {
    id: "wczesniej",
    eyebrow: "Wcześniej",
    title: "Projekty z okresu kursu",
    lead: "Tu zaczynałem — frontend w React i Next.js, 2023–2024.",
  },
};

export const projectCard = {
  details: "Szczegóły",
  hideDetails: "Zwiń",
  problem: "Problem",
  solution: "Co powstało",
  outcome: "Efekt",
  stack: "Technologie",
  client: "Dla",
  privateCode: "Kod prywatny — pokażę na rozmowie",
  links: {
    live: "Zobacz stronę",
    demo: "Zobacz demo",
    repo: "Kod na GitHubie",
  },
  statuses: {
    production: "Na produkcji",
    demo: "Demo",
    own: "Własny projekt",
    archived: "Archiwum",
  },
  categories: {
    business: "Aplikacja biznesowa",
    automation: "Automatyzacja",
    ai: "Narzędzie AI",
    web: "Strona www",
  },
  imageAlt: (name) => `Zrzut ekranu projektu ${name}`,
};

export const about = {
  id: "o-mnie",
  eyebrow: "O mnie",
  title: "Znam procesy od środka",
  paragraphs: [
    "Z wykształcenia jestem górnikiem. Przez lata pracowałem w logistyce i transporcie — zaczynałem jako kierowca, a po dwóch latach kierowałem oddziałem firmy kurierskiej obsługującej gastronomię.",
    "Tam zobaczyłem, ile czasu ludzie tracą na ręczne ustalanie, przepisywanie i pilnowanie rzeczy, które mógłby robić program. Komputery fascynowały mnie od dziecka, więc skończyłem kurs JavaScript i React i zacząłem budować.",
    "Dziś tworzę aplikacje dla firm i dla siebie, pracując z narzędziami AI. Najbardziej lubię moment, w którym proces, który kogoś męczył, po prostu przestaje być problemem.",
  ],
  photoAlt: "Arkadiusz Sarach",
  timeline: [
    { label: "Górnictwo", text: "wykształcenie" },
    { label: "Logistyka i transport", text: "od kierowcy do kierownika oddziału" },
    { label: "JavaScript i React", text: "kurs i pierwsze projekty" },
    { label: "Aplikacje z AI", text: "dla firm i do własnej pracy" },
  ],
};

export const technologiesSection = {
  eyebrow: "Technologie",
  title: "Czym pracuję",
};

export const cv = {
  title: "CV",
  text: "Szczegóły doświadczenia znajdziesz w CV.",
  files: [
    { href: "/Arkadiusz.Sarach_CV_PL_public.pdf", label: "CV po polsku" },
    { href: "/Arkadiusz.Sarach_CV_ENG_public.pdf", label: "CV in English" },
  ],
};

export const contactSection = {
  id: "kontakt",
  eyebrow: "Kontakt",
  title: "Potrzebujesz pomocy z procesami w firmie? Odezwij się.",
  lead: "Nie ma problemu, którego nie da się rozwiązać. Napisz — porozmawiamy o Twoim.",
  writeCta: "Napisz maila",
  copy: "Kopiuj",
  copied: "Skopiowano",
  copyFailed: "Zaznacz i skopiuj ręcznie",
  copyLabel: "Kopiuj adres e-mail",
  elsewhere: "Znajdziesz mnie też tu:",
};

export const footer = {
  rights: (year) => `© ${year} Arkadiusz Sarach`,
  backToTop: "Wróć na górę",
};

export const socialLinks = [
  { id: "linkedin", href: contact.linkedin, label: "LinkedIn" },
  { id: "github", href: contact.github, label: "GitHub" },
  { id: "gitlab", href: contact.gitlab, label: "GitLab" },
];
