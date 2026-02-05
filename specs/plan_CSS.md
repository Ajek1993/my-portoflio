# Plan poprawek wizualnych i treściowych

## Nawigacja (Header.jsx)

**Problem:** Logo i linki są wycentrowane. Hamburger menu wyświetla tekst zamiast ikony.

**Rozwiązanie:**
- Przenieść `NavbarBrand` (logo) na lewą stronę, linki nawigacyjne na prawą (`justify="end"`)
- Przycisk języka zostawić obok linków (po prawej, przed hamburger)
- `NavbarMenuToggle` domyślnie w HeroUI renderuje tekst `aria-label` zamiast ikony hamburgera — trzeba upewnić się, że nie nadpisujemy domyślnego renderowania. Prawdopodobnie brakuje importu stylu HeroUI lub `NavbarMenuToggle` nie ma prawidłowego pozycjonowania. Sprawdzić czy HeroUI Navbar ma poprawne style, a jeśli nie — dodać własną ikonę SVG (3 kreski) jako `children` w `NavbarMenuToggle`

**Pliki:** `src/components/Header.jsx`

---

## Polityka cookies i prywatności (RODO)

**Problem:** Podstrony `/cookies` i `/privacy` mają tylko placeholder.

**Rozwiązanie:**
- Wygenerować pełną treść Polityki Cookies na wzór popularnych szablonów polskich stron (po polsku i angielsku)
- Wygenerować pełną Politykę Prywatności / RODO — zgodną z GDPR, na wzór polskich szablonów
- Treść jako sekcje w tłumaczeniach (`src/locales/pl.json`, `src/locales/en.json`)
- Rozbudować komponenty `/cookies/page.js` i `/privacy/page.js` — wyświetlanie sekcji z nagłówkami i paragrafami
- Zawartość: informacje o administratorze danych, cel przetwarzania, rodzaje cookies, prawa użytkownika, kontakt

**Pliki:** `src/locales/pl.json`, `src/locales/en.json`, `src/app/cookies/page.js`, `src/app/privacy/page.js`

---

## Sekcja Projekty — ulepszenie wizualne (Projects.jsx)

**Problem:** Sekcja jest surowa — lista projektów to prosta siatka obrazków na jednokolorowym tle.

**Propozycja usprawnień:**
- Karty projektów zamiast gołych obrazów — każdy projekt jako `Card` z HeroUI z lekkim cieniem i zaokrągleniami
- Overlay na hover z efektem — delikatne powiększenie obrazu (`scale-105`) + pojawienie się przycisku "Zobacz projekt" / "Live demo"
- Tagi technologii jako chipy/badge pod obrazem zamiast zwykłego tekstu
- Usunięcie jednolitego niebieskiego tła (`bg-primary-300`) — zamiast tego sekcja na jasnym tle z kolorowymi akcentami na kartach
- Delikatna ramka lub cień na kartach z hover efektem (np. `hover:shadow-lg transition-shadow`)
- Opcjonalnie: dodać link do GitHub repo jeśli istnieje (nowe pole w `projectData.js`)

**Pliki:** `src/components/Projects/Projects.jsx`, `src/components/Projects/projectData.js`

---

## Paleta kolorów i ogólny wygląd strony

**Problem:** Białe tło jest zbyt surowe, strona wygląda "gołe".

**Główna zasada:** Niebieski (`#0070f0`) zostaje jako kolor wiodący. Reszta kolorów dopasowana do niego.

**Paleta kolorów:**
- **Primary (niebieski):** `#0070f0` — bez zmian, kolor wiodący
- **Tło główne:** zamienić czyste białe na delikatnie niebieski odcień (`#f8faff` lub `#f0f4ff`) — dodaje głębi bez natarczywości
- **Tło sekcji alternujące:** co druga sekcja z lekko ciemniejszym tłem (`#edf2ff`) — tworzy wizualne oddzielenie sekcji
- **Tekst główny:** `#1a1a2e` (ciemny granat zamiast czarnego) — lepiej harmonizuje z niebieskim
- **Tekst drugorzędny:** `#64748b` (slate)
- **Akcent hover:** jaśniejszy niebieski (`#3b8ff0`) lub ciemniejszy (`#0058c4`) na hover
- **Bordery/separatory:** `#e2e8f0` (delikatny slate)

**Zmiany globalne:**
- `globals.css` — zmiana `--background-start-rgb` i `--background-end-rgb` na odcienie niebieskiego
- Dodanie klas CSS dla sekcji z alternującym tłem
- Dodanie CSS custom properties dla nowych kolorów
- Hover na linkach nawigacyjnych: `transition-colors duration-300` + zmiana koloru
- Hover na przyciskach kontaktowych: delikatna animacja `transform` + zmiana koloru tła
- Hover na kartach technologii: `hover:shadow-md hover:border-primary-400 transition-all duration-300`
- Heading (`Heading.jsx`): opcjonalnie gradient na tekście nagłówka lub kolor primary

**Pliki:** `src/app/globals.css`, `tailwind.config.js`, `src/components/Header.jsx`, `src/components/Introduction/Introduction.jsx`, `src/components/AboutMe/AboutMe.jsx`, `src/components/Projects/Projects.jsx`, `src/components/Technologies/Technologies.jsx`, `src/components/Contact/Contact.jsx`, `src/components/Footer.jsx`

---

## Nowe technologie — źródło ikon (Icons.jsx)

**Problem:** Chcesz dodać Python, Docker, Claude Code, VSC, PostgreSQL, Jira — skąd brać ikony?

**Źródła ikon SVG:**
- **Simple Icons** (simpleicons.org) — największa baza ikon technologicznych w SVG, darmowe, MIT License. Mają: Python, Docker, PostgreSQL, Jira, VSCode, i setki innych
- **Devicons** (devicon.dev) — ikony specjalnie dla technologii programistycznych, SVG
- **Font Awesome** (fontawesome.com) — mają Docker, Python, Jira jako SVG (Free tier)
- **Iconify** (iconify.design) — agregator wielu zestawów ikon, w tym Simple Icons i Devicons

**Rekomendacja:** Użyć **Simple Icons** — kopiujesz SVG path i wklejasz do komponentu React tak samo jak obecne ikony w `Icons.jsx`. Wszystkie ikony będą spójne wizualnie (monocolor, `fill` ustawione na `var(--color-primary-blue)`).

**Dla Claude Code:** Simple Icons nie ma tej ikony (za nowa). Rozwiązanie: użyć generycznego logo Anthropic z Simple Icons lub stworzyć prosty SVG z tekstem "CC" / ikoną terminala.

**Implementacja:**
- Dodać nowe komponenty SVG w `Icons.jsx`: `PythonIcon`, `DockerIcon`, `ClaudeCodeIcon`, `VSCodeIcon`, `PostgreSQLIcon`, `JiraIcon`
- Rozszerzyć tablice `backendIcons` i `toolIcons` o nowe pozycje
- Opcjonalnie dodać nową kategorię (np. "DevOps" albo "Bazy danych") w `Technologies.jsx`

**Pliki:** `src/components/Icons.jsx`, `src/components/Technologies/Technologies.jsx`, `src/locales/pl.json`, `src/locales/en.json`

---

## Kolejność realizacji

- Paleta kolorów i globals.css (fundament wizualny)
- Nawigacja (Header.jsx)
- Sekcja Projekty (karty + hover)
- Technologie (nowe ikony)
- Hovery i animacje na całej stronie
- Polityka cookies i prywatności (treść)
