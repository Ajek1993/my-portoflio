# Plan odświeżenia portfolio — 2026

## Stan obecny

- Next.js 14.1, React 18, NextUI v2, Tailwind CSS 3, AOS, Framer Motion
- Jednojęzyczna strona po angielsku
- Narracja: "Junior Frontend Developer szukający pierwszej pracy"
- Sekcje: Introduction, AboutMe, Projects, Technologies (z CV do pobrania), Contact
- Animacje AOS na prawie każdym elemencie (fade-in, fade-up, flip-left, zoom-in)

## Cel

Profesjonalne portfolio software developera z doświadczeniem we frontendzie i backendzie. Domyślnie po polsku z opcją przełączenia na angielski. Stonowany, profesjonalny wygląd bez zbędnych efektów.

---

## Zakres zmian

### Branch

- Nowy branch: `site2026` (z `main`)

### Migracja Next.js 14 → 16

- Aktualizacja `next` do v16, `react` i `react-dom` do v19
- Aktualizacja `@nextui-org/react` do kompatybilnej wersji (HeroUI — NextUI został przemianowany w ekosystemie Next.js 16)
- Sprawdzenie kompatybilności `aos`, `framer-motion`
- Aktualizacja `tailwindcss` do v4 (jeśli NextUI/HeroUI wspiera) lub zostanie na v3
- Migracja `next.config.mjs` jeśli potrzebna
- Testy po migracji — `npm run build` musi przejść

### System i18n (PL/EN)

- Podejście: prosty context + pliki JSON z tłumaczeniami (bez `next-intl` — strona jest SPA-style, nie potrzebujemy routingu i18n)
- Pliki: `src/locales/pl.json`, `src/locales/en.json`
- `LanguageContext` z providerem w layout
- Przełącznik języka w headerze (przycisk/toggle PL|EN)
- Domyślny język: polski
- Wszystkie teksty w komponentach zamienione na klucze tłumaczeń
- Korekta treści tłumaczeń — do zrobienia przez użytkownika na końcu

### Nowa narracja i treści

- **Introduction**: zmiana z "Junior Frontend Developer" na "Software Developer"
- Opis: pasja do programowania, tworzenie rozwiązań biznesowych (frontend + backend), rozwiązywanie problemów biznesowych
- **AboutMe**: aktualizacja tekstu — profesjonalny opis kariery i umiejętności zamiast opowieści o górniku i logistyce (lub użytkownik sam zaktualizuje treść)
- Tekst domyślnie po polsku, tłumaczenie EN do korekty przez użytkownika

### Sekcja Technologie — aktualizacja

- Podział na kategorie: **Frontend**, **Backend**, **Narzędzia**
- Frontend: obecne technologie (HTML, CSS, SASS, Tailwind, JS, TS, React, Next.js)
- Backend: placeholder na technologie backendowe (Node.js, Express zostają + miejsce na nowe)
- Narzędzia: Git, GitHub + miejsce na nowe
- **Usunięcie sekcji CV** (linki do pobierania PDF) — zakomentowanie/usunięcie, zachowanie plików PDF w public na przyszłość

### Sekcja Projekty

- Sekcja zostaje, dane zaktualizuje użytkownik później
- Ewentualnie lekki redesign karty projektu (bardziej profesjonalny wygląd)

### Sekcja Kontakt

- Przyciski kontaktu (email, LinkedIn, GitHub) — zostają bez zmian
- Tekst opisu — przetłumaczony na PL/EN

### Polityka cookies i RODO

- Nowe podstrony: `/cookies` i `/privacy`
- Linki w stopce
- Treść — placeholder do uzupełnienia przez użytkownika (mogę wygenerować szablon)
- Prosty banner cookies przy pierwszej wizycie (opcjonalnie — user wybrał osobne podstrony, ale banner jest dobrą praktyką)

### Wygląd i animacje

- **Kolorystyka**: zachowanie obecnej palety (niebieski `#0070f0` jako primary, ciemne tło tekstu)
- **Redukcja animacji AOS**: usunięcie nadmiarowych efektów (flip-left na nagłówkach, zoom-in), pozostawienie subtelnych fade-in/fade-up
- **Typografia**: zachowanie fontu Kanit lub zamiana na bardziej profesjonalny (np. Inter)
- **Layout**: zachowanie obecnego układu, drobne poprawki spacing/padding
- **Responsywność**: zachowanie obecnej, ewentualne poprawki

### Stopka

- Aktualizacja roku: 2024 → 2026
- Dodanie linków: Polityka cookies, Polityka prywatności (RODO)

---

## Kolejność wdrażania

- Utworzenie brancha `site2026`
- Migracja Next.js 14 → 16 + aktualizacja zależności
- System i18n (context + pliki tłumaczeń + przełącznik)
- Aktualizacja treści (narracja, teksty sekcji)
- Aktualizacja sekcji Technologie (kategorie, usunięcie CV)
- Podstrony cookies i privacy + linki w stopce
- Redukcja animacji, poprawki wizualne
- Testy końcowe (build, responsywność, przełącznik języka)

---

## Pliki do modyfikacji

- `package.json` — zależności
- `next.config.mjs` — ewentualna migracja konfiguracji
- `tailwind.config.js` — ewentualna aktualizacja
- `src/app/layout.js` — provider i18n, metadata
- `src/app/page.js` — ewentualne zmiany
- `src/providers/NextProvider.jsx` — aktualizacja providerów
- `src/components/Header.jsx` — przełącznik języka, tłumaczenia menu
- `src/components/Introduction/Introduction.jsx` — nowa narracja
- `src/components/AboutMe/AboutMe.jsx` — nowy opis
- `src/components/Technologies/Technologies.jsx` — kategorie, usunięcie CV
- `src/components/Projects/Projects.jsx` — ewentualny redesign kart
- `src/components/Contact/Contact.jsx` — tłumaczenia
- `src/components/Footer.jsx` — rok, linki do polityk
- `src/components/Heading/Heading.jsx` — tłumaczenia
- `src/components/Icons.jsx` — ewentualne nowe ikony

## Nowe pliki

- `src/locales/pl.json` — tłumaczenia PL
- `src/locales/en.json` — tłumaczenia EN
- `src/context/LanguageContext.jsx` — context i18n
- `src/app/cookies/page.js` — podstrona polityki cookies
- `src/app/privacy/page.js` — podstrona polityki prywatności

---

## Uwagi

- Korekta treści tłumaczeń (PL i EN) — na końcu przez użytkownika
- Dane projektów — do zaktualizowania przez użytkownika
- Treść polityk cookies/RODO — placeholder, do uzupełnienia
- Technologie backendowe — użytkownik wskaże jakie dodać
