import hof_panoram from "../assets/hof_panoram.jpg";
import hof from "../assets/derHof.jpg";
const UeberUns = () => {
  return (
    <div className="mt-20 mx-4">
      <h1 className="font-bold text-2xl text-center text-lightBrown mb-4">
        Unser Hof
      </h1>
      <section className="grid sm:grid-cols-2 gap-4 lg:mx-14 mb-14 ">
        <img className="rounded-md shadow-md" src={hof}></img>
        <section className="grid sm:grid-rows-1 gap-4">
          <div className="bg-background rounded-md px-2 shadow-md self-start py-2">
            <p className="text-base">
              Unser Hof liegt idyllisch im Lechtal an der Hügelkette „Lechleite“
              direkt am Ortsrand der Stadt Friedberg vor den Toren von Augsburg.
              Eine kleine ruhige Oase – und doch stadtnah, zentral und schnell
              zu erreichen. Der Betrieb wurde 1992 von Veronika und Sebastian
              Frisch gegründet und kontinuierlich aufgebaut. Mittlerweile ist er
              zu einer festen Institution in Friedberg geworden. Wir achten
              allerdings darauf, ständig in Bewegung zu bleiben und unsere
              Angebote regelmäßig zu hinterfragen und bei Bedarf auch zu
              erneuren.
            </p>
          </div>
          <div className="bg-background rounded-md px-2 shadow-md py-2">
            <h1 className="text-base font-bold">Zu unserer Anlage gehören:</h1>
            <li className="grid grid-rows-1 list-outside px-4">
              <li>
                Mehrere Offenställe mit befestigten Ausläufen, großzügigen
                Futterständern und frostfreien Selbst – Tränken
              </li>
              <li> 10 Boxen mit Außenpaddocks</li>
              <li> ein Longierzirkel (ca. 16 m) mit Flutlicht</li>
              <li> ein Dressurviereck (20 X 40 m) mit Flutlicht</li>
              <li>
                {" "}
                eine Tölt – Ovalbahn (Kategorie A, d. h. WM – tauglich) mit
                Flutlicht
              </li>
              <li> eine Reithalle (15 X 30 m)</li>
              <li> schöner Bachlauf</li>
              <li> mehrere Anbinde – Putzplätze</li>
              <li> zwei Waschplätze</li>
              <li> Pferde – Solarium</li>
              <li>
                ca. 12 Hektar Weideland direkt am Hof (weitere 12 Hektar
                außerhalb Friedbergs)
              </li>
              <li> mehrere Sattelkammern</li>
              <li> Reiterstüberl</li>
              <li> Grillplatz</li>
            </li>
          </div>
        </section>
      </section>

    </div>
  );
};

export default UeberUns;
