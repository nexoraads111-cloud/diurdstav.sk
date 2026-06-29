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

## Po úprave kódu (aby sa zmena prejavila na rovnakej URL)

Ak zmeníte `Code.gs`, treba nasadiť novú verziu (URL ostane rovnaká):

1. **Nasadiť → Spravovať nasadenia** (Deploy → Manage deployments).
2. Pri aktívnom nasadení kliknite **ceruzku (Upraviť)**.
3. V poli **Verzia (Version)** vyberte **Nová verzia (New version)**.
4. **Kto má prístup:** *Ktokoľvek (Anyone)*.
5. **Nasadiť (Deploy)**.

> Skript funguje aj keď nie je naviazaný na konkrétnu tabuľku – pri prvom použití si sám vytvorí tabuľku „DIURDSTAV web data" vo vašom Google Drive a tam ukladá dopyty aj recenzie.
