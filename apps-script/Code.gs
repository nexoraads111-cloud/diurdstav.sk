/**
 * D-A DIURDSTAV – jednoduchý backend pre recenzie a dopyty (Google Apps Script).
 *
 * Čo to robí:
 *  - Dopyt z webu (formulár "Nezáväzný dopyt") -> e-mail majiteľovi + uloženie do hárka "Leads".
 *  - Recenzia z webu -> uloží sa ako "pending" + e-mail majiteľovi s tlačidlami PRIJAŤ / ODMIETNUŤ.
 *      Po kliknutí na PRIJAŤ sa recenzia označí "approved" a zobrazí sa na webe.
 *  - Web si cez GET vyžiada zoznam schválených recenzií (JSON).
 *
 * Nastavte len OWNER_EMAIL a SECRET nižšie.
 */

const OWNER_EMAIL = 'durdstav@gmail.com';
// Zmeňte na vlastné tajné heslo (ľubovoľný text) – chráni odkazy na schválenie.
const SECRET = 'ZMENTE_MA_na_nahodny_text_123';

/**
 * Vráti tabuľku (Spreadsheet) aj keď skript NIE je naviazaný na Google Sheet.
 * Ak nie je aktívna tabuľka, vytvorí sa raz nová a jej ID sa uloží.
 */
function getSS() {
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) return active;
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('SHEET_ID');
  if (id) {
    return SpreadsheetApp.openById(id);
  }
  const created = SpreadsheetApp.create('DIURDSTAV web data');
  props.setProperty('SHEET_ID', created.getId());
  return created;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = getSS();

    if (data.type === 'review') {
      const sheet = ss.getSheetByName('Reviews') || ss.insertSheet('Reviews');
      const id = Utilities.getUuid();
      const now = new Date().toISOString();
      const rating = Math.max(1, Math.min(5, parseInt(data.rating, 10) || 5));
      sheet.appendRow([id, now, data.name || '', rating, data.text || '', 'pending']);

      const base = ScriptApp.getService().getUrl();
      const approve = base + '?action=approve&id=' + id + '&key=' + encodeURIComponent(SECRET);
      const reject = base + '?action=reject&id=' + id + '&key=' + encodeURIComponent(SECRET);
      const html =
        '<div style="font-family:Arial,sans-serif">' +
        '<h2>Nová recenzia na schválenie</h2>' +
        '<p><b>' + escapeHtml(data.name) + '</b> &middot; ' + rating + '/5</p>' +
        '<p style="background:#f4f4f5;padding:12px;border-radius:8px">' + escapeHtml(data.text) + '</p>' +
        '<p style="margin-top:20px">' +
        '<a href="' + approve + '" style="background:#16a34a;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;font-weight:bold">PRIJAŤ</a>' +
        '&nbsp;&nbsp;&nbsp;' +
        '<a href="' + reject + '" style="background:#dc2626;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;font-weight:bold">ODMIETNUŤ</a>' +
        '</p></div>';
      MailApp.sendEmail({ to: OWNER_EMAIL, subject: 'Nová recenzia na schválenie', htmlBody: html });
    } else if (data.type === 'lead') {
      const sheet = ss.getSheetByName('Leads') || ss.insertSheet('Leads');
      sheet.appendRow([new Date().toISOString(), data.name || '', data.phone || '', data.email || '', data.message || '']);
      const html =
        '<div style="font-family:Arial,sans-serif">' +
        '<h2>Nový dopyt z webu</h2>' +
        '<p><b>Meno:</b> ' + escapeHtml(data.name) + '</p>' +
        '<p><b>Telefón:</b> ' + escapeHtml(data.phone) + '</p>' +
        '<p><b>E-mail:</b> ' + escapeHtml(data.email) + '</p>' +
        '<p><b>Správa:</b> ' + escapeHtml(data.message) + '</p>' +
        '</div>';
      MailApp.sendEmail({ to: OWNER_EMAIL, subject: 'Nový dopyt / cenová ponuka z webu', htmlBody: html });
    }
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  const ss = getSS();
  const action = e.parameter.action;

  if (action === 'approve' || action === 'reject') {
    if (e.parameter.key !== SECRET) {
      return HtmlService.createHtmlOutput('<p>Neplatný kľúč.</p>');
    }
    const sheet = ss.getSheetByName('Reviews');
    if (sheet) {
      const last = sheet.getLastRow();
      const ids = last > 0 ? sheet.getRange(1, 1, last, 1).getValues() : [];
      for (let i = 0; i < ids.length; i++) {
        if (ids[i][0] === e.parameter.id) {
          sheet.getRange(i + 1, 6).setValue(action === 'approve' ? 'approved' : 'rejected');
          const msg = action === 'approve' ? 'Recenzia bola SCHVÁLENÁ a zobrazí sa na webe.' : 'Recenzia bola ODMIETNUTÁ.';
          return HtmlService.createHtmlOutput('<div style="font-family:Arial;font-size:18px;padding:30px">' + msg + '</div>');
        }
      }
    }
    return HtmlService.createHtmlOutput('<p>Recenzia sa nenašla.</p>');
  }

  // Predvolene: vráť schválené recenzie ako JSON pre web.
  const sheet = ss.getSheetByName('Reviews');
  let out = [];
  if (sheet && sheet.getLastRow() > 0) {
    const rows = sheet.getRange(1, 1, sheet.getLastRow(), 6).getValues();
    out = rows
      .filter(function (r) { return r[5] === 'approved'; })
      .map(function (r) { return { name: r[2], rating: r[3], text: r[4], date: r[1] }; })
      .reverse();
  }
  return json(out);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
