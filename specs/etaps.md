# Etapy realizacji — odświeżenie portfolio 2026

---

## Etap: Migracja stacku

Aktualizacja Next.js 14 → 16, React 18 → 19 i wszystkich zależności do wersji kompatybilnych ze sobą.

- **Input:** obecny `package.json` z Next.js 14.1, React 18, NextUI v2, Tailwind CSS 3
- **Output:** działający projekt na Next.js 16, React 19, HeroUI, Tailwind CSS 4 (lub 3 jeśli brak wsparcia)
- **Test:** `npm run build` przechodzi bez błędów, `npm run dev` uruchamia stronę, wszystkie sekcje renderują się poprawnie w przeglądarce

---

## Etap: System i18n

Wdrożenie przełączania języka PL/EN opartego na React Context i plikach JSON z tłumaczeniami.

- **Input:** komponenty z hardcodowanymi tekstami po angielsku
- **Output:** `LanguageContext`, pliki `pl.json`/`en.json`, przełącznik PL|EN w headerze, wszystkie teksty pobierane z tłumaczeń
- **Test:** kliknięcie przełącznika PL|EN w headerze — cały tekst na stronie zmienia się na wybrany język, odświeżenie strony zachowuje wybór

---

## Etap: Treści i sekcje

Aktualizacja narracji, reorganizacja sekcji Technologie (podział na kategorie) i usunięcie sekcji CV.

- **Input:** obecne teksty ("Junior Frontend Developer"), płaska lista technologii, sekcja z linkami do CV
- **Output:** nowa narracja ("Software Developer"), technologie w kategoriach (Frontend / Backend / Narzędzia), brak sekcji CV
- **Test:** otwarcie strony — sekcja Introduction pokazuje "Software Developer", sekcja Technologie wyświetla 3 kategorie, nigdzie nie ma linków do pobrania CV

---

## Etap: Podstrony prawne

Dodanie stron `/cookies` i `/privacy` z placeholderami oraz linków do nich w stopce.

- **Input:** stopka z rokiem 2024, brak podstron prawnych
- **Output:** podstrony `/cookies` i `/privacy` z szablonem treści, stopka z rokiem 2026 i linkami do obu podstron
- **Test:** kliknięcie linku "Polityka cookies" w stopce — otwiera się strona `/cookies` z treścią placeholder; analogicznie dla `/privacy`

---

## Etap: Szlify wizualne

Redukcja animacji AOS, ewentualna zmiana fontu i drobne poprawki spacing/padding.

- **Input:** strona z nadmiarowymi animacjami (flip-left, zoom-in na wielu elementach), font Kanit
- **Output:** subtelne animacje (tylko fade-in/fade-up), spójny, profesjonalny wygląd
- **Test:** przewinięcie strony od góry do dołu — żaden element nie "wlatuje" z boku ani nie robi zoom, animacje są delikatne i nierozpraszające

---

# Podsumowanie

## Kolejność realizacji

- **Pierwszy:** Migracja stacku — fundament, na którym opierają się wszystkie kolejne etapy
- **Drugi:** System i18n — wymaga działającego projektu, ale nie zależy od treści
- **Trzeci:** Treści i sekcje — korzysta z systemu i18n (nowe teksty trafiają od razu do plików tłumaczeń)
- **Czwarty:** Podstrony prawne — niezależne od treści głównych sekcji
- **Piąty:** Szlify wizualne — końcowy polish, wymaga gotowej strony do oceny efektu

## Etap KRYTYCZNY

**Migracja stacku** — bez działającego buildu na nowym Next.js/React żaden kolejny etap nie ma sensu. Jeśli migracja się nie uda, cała reszta jest zablokowana.

## Etap do POMINIĘCIA w pierwszej wersji

**Szlify wizualne** — strona działa w pełni bez redukcji animacji. To kwestia estetyki, nie funkcjonalności. Można wrócić do tego po wdrożeniu MVP.
