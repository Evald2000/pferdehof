const Impressum = () => {

    var currentYaer = new Date().getFullYear();
  return (
    <div>
      <div className="mt-14 md:mx-28">
        <div className="max-w-4xl mx-auto p-6">
          <header className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Impressum
            </h1>

            <h1 className=" ">Islandpferde Lechleite GbR</h1>
            <h1 className="  ">Veronika und Stjarna Frisch</h1>
            <h1 className="  ">Schützenstr. 114</h1>
            <h1 className="  ">86316 Friedberg</h1>
            <h1 className="  ">Tel.: 0821 – 60 33 30 (Büro)</h1>
            <h1 className="  ">Fax: 0821 – 60 83 67</h1>
            <h1 className=" ">mail: info@Lechleite.de</h1>
          </header>

          <section className="mb-6">
            <section className="mb-4">
              <h1 className="text-2xl font-bold mb-4 ">Bankverbindungen:</h1>
              <h1 className="text-xl font-bold ">Reitschule:</h1>
              <h1 className=" ">Rai Ba Kissing / Mering; BIC: GENODEF 1MR I</h1>
              <h1 className=" ">IBAN: DE 63 720 691 55 000 18 39 799</h1>
            </section>
            <section className="mb-4">
              <h1 className="text-xl font-bold ">Pferdepension:</h1>
              <h1 className=" ">Rai Ba Kissing / Mering; BIC: GENODEF 1MR I</h1>
              <h1 className=" ">IBAN: DE 63 720 691 55 000 18 39 799</h1>
            </section>
          </section>

          <section className="mb-6">
            <p className="mb-4">
              Alle Inhalte dieser Webseite unterliegen dem vollen Urheberrecht
              von Islandpferde Lechleite und entsprechen jeweils dem aktuellsten
              Stand zum Veröffentlichungszeitpunkt. Es wird ausdrücklich darauf
              hingewiesen, dass keinerlei Garantie für die Aktualität,
              Richtigkeit oder Vollständigkeit der bereitgestellten
              Informationen übernommen wird – dies gilt ebenso für sämtliche
              externe Webseiten, die über Hyperlinks erreichbar sind, da
              Islandpferde Lechleite für deren Inhalte nicht verantwortlich
              gemacht werden kann. Die auf dieser Seite veröffentlichten
              Informationen sind keine rechtlich verbindlichen Zusicherungen
              oder Beratungen. Islandpferde Lechleite behält sich das Recht vor,
              Inhalte jederzeit zu ändern oder zu ergänzen, ohne daraus
              Ansprüche abzuleiten. Alle Angebote erfolgen in unverbindlicher
              Form. Eine Haftung für direkte oder indirekte Schäden, die aus der
              Nutzung der hier angebotenen Daten entstehen, wird ausdrücklich
              ausgeschlossen. Zwischen Islandpferde Lechleite und den einzelnen
              Nutzern oder Dritten besteht keinerlei Vertragsverhältnis. Die
              Inhalte dieser Webseite sind urheberrechtlich geschützt. Eine
              Vervielfältigung, Veröffentlichung oder Speicherung, auch in
              Auszügen, ist ohne vorherige schriftliche Zustimmung des Urhebers
              nicht gestattet. Für sämtliche Informationen, deren Nutzung sowie
              alle mit der Webseite zusammenhängenden Handlungen gilt
              ausschließlich deutsches Recht unter Ausschluss internationalen
              Rechts.
            </p>
          </section>

          <footer className="mt-8 text-center text-sm text-gray-600">
            <p>© {currentYaer} Islandpferde Lechleite GbR. Alle Rechte vorbehalten.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
