# Plan prac — odświeżenie portfolio 2026

---

## Etap: Migracja stacku

**Cel:** Projekt działa na Next.js 16, React 19, HeroUI i aktualnych zależnościach. `npm run build` przechodzi bez błędów.

**Kroki:**

- Utworzyć branch `site2026` z `main`
- Zaktualizować `package.json`: `next` → v16, `react`/`react-dom` → v19, `@nextui-org/react` → `@heroui/react`, `tailwindcss` v3→v4 (jeśli HeroUI wspiera, jeśli nie — zostać na v3), `framer-motion` i `aos` do kompatybilnych wersji
- Zamienić wszystkie importy `@nextui-org/react` na `@heroui/react` w plikach: `Header.jsx`, `Technologies.jsx`, `NextProvider.jsx`, `tailwind.config.js` (plugin `nextui()` → `heroui()`)
- Naprawić znane błędy: usunąć obcięty prop `onCl` w `Technologies.jsx:47`, zmienić `async function Projects()` na zwykłą funkcję (async components nie działają z `"use client"` w parent)
- Uruchomić `npm run build` i naprawić ewentualne błędy kompatybilności

**Edge cases:**

- HeroUI może mieć zmienione nazwy komponentów lub propsów vs NextUI — sprawdzić dokumentację HeroUI przy migracji
- Tailwind v4 zmienia system konfiguracji (CSS-first config zamiast `tailwind.config.js`) — jeśli HeroUI nie wspiera v4, zostać na v3
- AOS nie jest aktywnie utrzymywany — jeśli nie działa z React 19, rozważyć zastąpienie prostymi CSS transitions (ale to przesunąć do etapu "Szlify wizualne")
- CSS custom properties (`--color-primary-blue`, `--color-light`) w `globals.css` i ikonach SVG muszą dalej działać po migracji

**Definicja "done":** `npm run build` przechodzi, `npm run dev` startuje, strona renderuje wszystkie sekcje w przeglądarce bez błędów w konsoli.

**Test:** `npm run build && npm run dev` — otworzyć `http://localhost:3000`, przejść przez wszystkie sekcje, sprawdzić konsolę przeglądarki na błędy.

---

## Etap: System i18n

**Cel:** Strona wyświetla się domyślnie po polsku. Przełącznik PL|EN w headerze zmienia język całej strony. Wybór języka zapisuje się w `localStorage`.

**Kroki:**

- Stworzyć `src/context/LanguageContext.jsx` z `LanguageProvider` i hookiem `useLanguage()` — domyślny język `pl`, zapis do `localStorage`, odczyt przy montowaniu
- Stworzyć pliki `src/locales/pl.json` i `src/locales/en.json` z kluczami dla wszystkich hardcodowanych tekstów: `header.menu` (Home, O mnie, Projekty, Kontakt), `intro.greeting`, `intro.name`, `intro.role`, `intro.description`, `about.title`, `about.text`, `tech.title`, `projects.title`, `projects.techLabel`, `contact.title`, `contact.text`, `footer.createdBy`
- Dodać `LanguageProvider` do `src/app/layout.js` (owinąć `NextProvider` lub dodać obok) i dodać przełącznik PL|EN do `Header.jsx` (przycisk/toggle obok menu)
- Zamienić hardcodowane teksty na klucze tłumaczeń we wszystkich komponentach: `Header.jsx`, `Introduction.jsx`, `AboutMe.jsx`, `Technologies.jsx`, `Projects.jsx`, `Contact.jsx`, `Footer.jsx`, `Heading.jsx`

**Edge cases:**

- Sekcja Introduction nie ma atrybutu `id` — nawigacja `/#home` nie działa. Dodać `id="home"` do sekcji w `Introduction.jsx`
- Anchory w nawigacji (`/#aboutme`, `/#projects`, `/#contact`) muszą działać niezależnie od wybranego języka — nie tłumaczyć `id` sekcji, tłumaczyć tylko wyświetlane nazwy menu
- Przy pierwszym wejściu brak wartości w `localStorage` — fallback na `pl`
- `Heading` przyjmuje prop `title` — zamiast hardcodowanego stringa, parent musi przekazać przetłumaczony tekst
- Komponent `Projects` renderuje `project.name` i `project.technologies` z `projectData.js` — te dane zostawić po angielsku (nazwy projektów i technologii się nie tłumaczą), tłumaczyć tylko label "Technologies:"

**Definicja "done":** Strona startuje po polsku. Klik PL|EN przełącza język. Odświeżenie strony zachowuje wybrany język. Wszystkie widoczne teksty (nagłówki, opisy, menu, stopka) zmieniają się przy przełączeniu.

**Test:** Otworzyć stronę → tekst po polsku. Kliknąć "EN" → wszystko po angielsku. Odświeżyć stronę → nadal po angielsku. Kliknąć "PL" → z powrotem po polsku.

---

## Etap: Treści i sekcje

**Cel:** Nowa narracja "Software Developer" zamiast "Junior Frontend Developer". Technologie pogrupowane w 3 kategorie. Sekcja CV usunięta.

**Kroki:**

- Zaktualizować teksty w `pl.json` i `en.json`: `intro.role` → "Software Developer", `intro.description` → nowy opis (pasja do programowania, frontend + backend, rozwiązywanie problemów biznesowych), `about.text` → profesjonalny opis kariery (placeholder do korekty przez użytkownika)
- Podzielić tablicę `icons` w `Icons.jsx` na 3 tablice: `frontendIcons` (HTML, CSS, SASS, Tailwind, JavaScript, TypeScript, React, Next.js), `backendIcons` (Node, Express + miejsce na nowe), `toolIcons` (Git, GitHub + miejsce na nowe)
- Przebudować `Technologies.jsx` — renderować 3 grupy z nagłówkami kategorii (Frontend / Backend / Narzędzia), każda grupa wyświetla swoje ikony w gridzie. Usunąć cały blok CV (div z `PortfolioIcon`, tekstem i przyciskami do pobrania PDF)

**Edge cases:**

- Nazwy kategorii ("Frontend", "Backend", "Narzędzia") muszą być w systemie tłumaczeń — dodać klucze `tech.frontend`, `tech.backend`, `tech.tools` do obu plików JSON
- Pliki PDF (`Arkadiusz.Sarach_CV_PL_public.pdf`, `Arkadiusz.Sarach_CV_ENG_public.pdf`) zostają w `/public` — nie usuwać, tylko usunąć linki
- Teksty `about.text` i `intro.description` to placeholdery — oznaczyć komentarzem `// TODO: użytkownik zaktualizuje treść` w plikach JSON
- Po usunięciu sekcji CV komponent `PortfolioIcon` i import `Button` z HeroUI stają się nieużywane — usunąć te importy z `Technologies.jsx`

**Definicja "done":** Sekcja Introduction pokazuje "Software Developer". Sekcja Technologies wyświetla 3 kategorie z nagłówkami. Nigdzie na stronie nie ma linków do CV. Build przechodzi.

**Test:** Otworzyć stronę → Introduction mówi "Software Developer". Scrollować do Technologies → widać 3 grupy (Frontend / Backend / Narzędzia). Szukać na stronie "Curriculum Vitae" — nie ma.

---

## Etap: Podstrony prawne

**Cel:** Strona ma podstrony `/cookies` i `/privacy` z placeholder treścią. Stopka zawiera rok 2026 i linki do obu podstron.

**Kroki:**

- Stworzyć `src/app/cookies/page.js` — strona z nagłówkiem "Polityka cookies" / "Cookie Policy" (z systemu i18n), placeholder tekst, link powrotny do strony głównej
- Stworzyć `src/app/privacy/page.js` — strona z nagłówkiem "Polityka prywatności" / "Privacy Policy" (z systemu i18n), placeholder tekst, link powrotny do strony głównej
- Zaktualizować `Footer.jsx` — rok `2024` → `2026`, dodać linki do `/cookies` i `/privacy` z przetłumaczonymi labelami, dodać odpowiednie klucze do `pl.json` i `en.json` (`footer.cookies`, `footer.privacy`)

**Edge cases:**

- Podstrony `/cookies` i `/privacy` to osobne pages w App Router — potrzebują własnego layoutu lub dziedziczą z root `layout.js`. Upewnić się, że `LanguageProvider` jest w root layout (a nie w `page.js`) żeby i18n działał na podstronach
- Nawigacja: podstrony nie mają headera z menu głównym — dodać prosty link "← Powrót" / "← Back" do strony głównej
- Placeholder treść oznaczyć wyraźnie: "Ta sekcja wymaga uzupełnienia" / "This section needs to be filled in"

**Definicja "done":** Kliknięcie "Polityka cookies" w stopce otwiera `/cookies` z placeholder treścią. Kliknięcie "Polityka prywatności" otwiera `/privacy`. Z obu podstron można wrócić do strony głównej. Przełącznik języka działa na podstronach.

**Test:** Otworzyć stronę → scrollować do stopki → kliknąć "Polityka cookies" → strona `/cookies` renderuje się z treścią. Kliknąć "← Powrót" → wraca na stronę główną. Powtórzyć dla `/privacy`. Zmienić język na EN → linki i treść podstron po angielsku.

---

## Etap: Szlify wizualne

**Cel:** Animacje są subtelne i profesjonalne. Żaden element nie "wlatuje" z boku, nie robi flip ani zoom.

**Kroki:**

- Usunąć agresywne animacje AOS: `flip-left` z `Heading.jsx`, `zoom-in` z `Contact.jsx`, `fade-left` ze staggerowanymi delayami z `Technologies.jsx`, `fade-up-right`/`fade-up-left` z `AboutMe.jsx`, naprzemienne `fade-right`/`fade-left` z `Projects.jsx`
- Zastąpić usunięte animacje subtelnymi: `fade-up` z `duration: 600` na sekcjach (nie na każdym elemencie osobno). Dodać `once: true` do konfiguracji AOS w `NextProvider.jsx` żeby animacje nie powtarzały się przy scrollowaniu w górę
- Sprawdzić responsywność na breakpointach `sm` (640px), `md` (768px), `lg` (1024px) — upewnić się że nowe kategorie Technologies i przełącznik języka nie psują layoutu na mobile

**Edge cases:**

- Po usunięciu staggerowanych animacji z Technologies ikony mogą wyglądać "nudno" — zamiast staggeru na każdej ikonie, dać jedną animację `fade-up` na cały grid
- `framer-motion` jest w zależnościach ale nigdzie nie jest używany w komponentach — rozważyć usunięcie z `package.json` jeśli AOS wystarcza (oszczędza ~30KB bundle)
- Font Kanit zostaje (brief mówi "zachowanie Kanit lub zamiana") — nie zmieniać w tej wersji, to zmiana kosmetyczna do dyskusji

**Definicja "done":** Przewinięcie strony od góry do dołu — elementy pojawiają się płynnie (fade-up), żaden nie wlatuje z boku, nie robi obrotu ani zoomu. Animacje odpalają się raz.

**Test:** Otworzyć stronę → powoli scrollować w dół przez wszystkie sekcje → każda sekcja pojawia się delikatnym fade-up. Scrollować z powrotem do góry → animacje się nie powtarzają. Zmniejszyć okno do 375px szerokości → layout nie jest połamany.

---

# Testy końcowe

## Test integracyjny (end-to-end)

Otworzyć `http://localhost:3000` po `npm run build && npm start`:

- Strona ładuje się po polsku
- Przełączyć na EN — wszystkie teksty po angielsku
- Scrollować przez wszystkie sekcje: Introduction ("Software Developer"), O mnie, Projekty, Technologie (3 kategorie), Kontakt
- Kliknąć link w stopce → podstrona `/cookies` lub `/privacy` renderuje się poprawnie
- Wrócić na stronę główną
- Odświeżyć — język zachowany
- Sprawdzić konsolę — brak błędów
- Zmniejszyć okno do 375px — layout responsywny, hamburger menu działa

## Scenariusz sukcesu

Użytkownik otwiera stronę → widzi profesjonalne portfolio po polsku z opisem "Software Developer". Klika "EN" → wszystko po angielsku. Scrolluje przez sekcje — technologie pogrupowane w Frontend/Backend/Narzędzia, animacje delikatne. Klika "Polityka prywatności" w stopce → widzi stronę z placeholder treścią. Wraca na główną jednym kliknięciem.

## Scenariusz błędu

Użytkownik otwiera stronę w przeglądarce z zablokowanym `localStorage` → strona wyświetla się po polsku (fallback). Przełącznik PL|EN działa w ramach sesji, ale wybór nie jest zapamiętywany po odświeżeniu. Brak komunikatu błędu — strona działa normalnie, tylko bez persystencji języka.
