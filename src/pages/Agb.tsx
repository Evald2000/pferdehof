import Header from "../Header";

const Contact = () => {
    return (
        <div>
        <div className="mx-28">
           
        <div className="max-w-4xl mx-auto p-6">
    <header className="mb-8">
    <h1 className="text-3xl font-bold text-center mb-4">Allgemeine Geschäftsbedingungen</h1>
      <h1 className="text-2xl font-bold text-center">Islandpferde Lechleite GbR</h1>
      <p className="text-center text-sm text-gray-600">Ein landwirtschaftliches Unternehmen in Friedberg</p>
      <p className="text-center text-sm text-gray-600">Betriebsleiter: Veronika und Stjarna Frisch</p>
    </header>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Anmeldung zu Veranstaltungen</h2>
      <p className="mb-4">Für jede Veranstaltung ist eine schriftliche Anmeldung erforderlich, die verbindlich ist. Folgende Angaben werden benötigt:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Bezeichnung der Veranstaltung</li>
        <li>Name, Adresse und Alter des Teilnehmers</li>
        <li>Angaben zu Vorerfahrungen oder möglichen Behinderungen</li>
        <li>
          Bei Minderjährigen: die Einverständniserklärung eines Erziehungsberechtigten 
          (Anmeldungen von Verwandten wie Onkeln, Tanten oder Großeltern sind nicht ausreichend).
        </li>
      </ul>
      <p className="mt-4 underline">Mit der Anmeldung werden unsere Allgemeinen Geschäftsbedingungen (AGB) automatisch anerkannt.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Teilnahmebedingungen</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Die Teilnahmegebühr bleibt auch bei Nichterscheinen fällig. Ersatztermine werden nicht angeboten.</li>
        <li>„Fortlaufender Kurs“ und „Isi-Kids-Kurse“ finden auch an Feiertagen statt.</li>
        <li>Während der bayerischen Schulferien pausiert der „Fortlaufende Kurs“.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Stornierungsbedingungen</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Bei Anmeldung wird eine Bearbeitungsgebühr von 10 % der Teilnahmegebühr fällig.</li>
        <li>Stornierungen ab 4 Wochen vor Veranstaltungsbeginn: 40 % des Gesamtbetrags.</li>
        <li>Stornierungen innerhalb von 14 Tagen vor Veranstaltungsbeginn: 80 % des Gesamtbetrags.</li>
        <li>Absagen innerhalb von 48 Stunden oder unentschuldigtes Fehlen: 100 % des Betrags.</li>
        <li>Reit-Card-Termine: Absage spätestens 48 Stunden vorher.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Veranstaltungsbedingungen</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Veranstaltungen finden bei jedem Wetter statt.</li>
        <li>Zuschauer sind nur nach vorheriger Absprache erlaubt.</li>
        <li>Die Teilnahmegebühr muss bis spätestens 10 Tage vor Veranstaltungsbeginn überwiesen werden (Ausnahme: „Fortlaufender Kurs“).</li>
      </ul>
      <p className="mt-4">Für Tages- und Mehrtagesveranstaltungen fällt eine Verpflegungspauschale von 15 € pro Tag/Person an. Sie umfasst ein einfaches Mittagessen, Getränke und morgens Kaffee. Sonderwünsche wie vegetarische oder vegane Optionen müssen rechtzeitig mitgeteilt werden.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Haftung und Sicherheit</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Die Teilnahme erfolgt auf eigene Gefahr. Haftung besteht nur bei grober Fahrlässigkeit oder Versicherungsschutz.</li>
        <li>Jugendliche müssen eine Sturzkappe (nach DIN 33951) tragen. Kappen können gegen Gebühr geliehen werden.</li>
        <li>Angemessene Reitbekleidung ist verpflichtend (feste Schuhe, lange geschlossene Hose).</li>
      </ul>
      <p className="mt-4">Die Erziehungsberechtigten behalten die Aufsichts- und Haftpflicht. Ohne geeignete Kleidung ist eine Teilnahme ausgeschlossen.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Verhaltensregeln</h2>
      <p className="mb-4">Unsere Pferde unterstützen auch Menschen mit Behinderungen. Ein respektvoller Umgang mit Tieren und Menschen ist daher unerlässlich. Bitte beachten Sie unsere Stallregeln und setzen ein positives Beispiel für Kinder.</p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-4">Einstellung von Pferden</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Die Preise gelten ab einer Vertragslaufzeit von 3 Monaten.</li>
        <li>Zu Beginn des Vertrags ist eine Kaution in Höhe von zwei Monatsmieten zu hinterlegen.</li>
        <li>Mit Vertragsunterzeichnung werden die Stallregeln und AGB anerkannt.</li>
      </ul>
    </section>

    <footer className="mt-8 text-center text-sm text-gray-600">
      <p>© 2025 Islandpferde Lechleite GbR. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
        </div>
        </div>
    );

}

export default Contact;