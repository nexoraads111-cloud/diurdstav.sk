# Backend pre recenzie a dopyty (Google Apps Script)

Bezplatný „mini‑backend", ktorý:

- pošle **dopyty** z webu na e‑mail majiteľa,
- pri novej **recenzii** pošle e‑mail s tlačidlami **PRIJAŤ / ODMIETNUŤ**,
- po prijatí recenzie ju **zobrazí na webe**.

E‑maily sa odosielajú z vášho Google (Gmail) účtu, zadarmo.

## Postup nasadenia (cca 5 minút)

1. Otvorte <https://sheets.google.com> a vytvorte **nový hárok** (Google Sheet). Názov ľubovoľný, napr. „DIURDSTAV web".
2. V hárku kliknite **Rozšírenia → Apps Script** (Extensions → Apps Script).
3. Zmažte všetko v editore a **vložte celý obsah súboru `Code.gs`** z tohto priečinka.
4. Hore v súbore upravte:
   - `OWNER_EMAIL` – e‑mail, kam majú chodiť dopyty a recenzie (predvolene `durdstav@gmail.com`).
   - `SECRET` – zmeňte na vlastný náhodný text (chráni odkazy na schválenie).
5. Kliknite **Nasadiť → Nové nasadenie** (Deploy → New deployment).
   - Typ: **Webová aplikácia** (Web app).
   - **Spustiť ako:** *Ja* (Execute as: Me).
   - **Kto má prístup:** *Ktokoľvek* (Who has access: Anyone).
   - Kliknite **Nasadiť** a povoľte prístup (Authorize) – Google sa raz spýta na povolenia.
6. Skopírujte **URL webovej aplikácie** (končí na `/exec`).

## Čo poslať

Pošlite mi skopírovanú **URL webovej aplikácie** (`https://script.google.com/macros/s/.../exec`).
Ja ňou prepojím formulár dopytu aj recenzie. Adresu zoberiem do kódu zamaskovane.

> Pozn.: prvýkrát môže Google pýtať potvrdenie povolení („Advanced → Go to project (unsafe)") – je to váš vlastný skript, je to v poriadku.
