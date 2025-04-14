import hof_panoram from "../assets/hof_panoram.jpg";
import hof from "../assets/derHof.jpg";

const UeberUns = () => {
  return (
    <div className="mt-20 mx-4 lg:mx-auto max-w-7xl">
      <h1 className="font-bold text-3xl md:text-4xl text-center text-lightBrown mb-8">
        Unser Hof
      </h1>
      
      {/* Hauptbereich mit Bild und Text */}
      <section className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img 
            className="w-full h-full object-cover min-h-[300px]"
            src={hof} 
            alt="Luftaufnahme unseres Hofes"
          />
        </div>

        <div className="space-y-6">
          <div className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Unser Hof liegt idyllisch im Lechtal an der Hügelkette „Lechleite“
              direkt am Ortsrand der Stadt Friedberg vor den Toren von Augsburg.
              Eine kleine ruhige Oase – und doch stadtnah, zentral und schnell
              zu erreichen. Der Betrieb wurde 1992 von Veronika und Sebastian
              Frisch gegründet und kontinuierlich aufgebaut. Mittlerweile ist er
              zu einer festen Institution in Friedberg geworden. Wir achten
              allerdings darauf, ständig in Bewegung zu bleiben und unsere
              Angebote regelmäßig zu hinterfragen und bei Bedarf auch zu
              erneuern.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-lightBrown mb-4">
              Zu unserer Anlage gehören:
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Mehrere Offenställe mit befestigten Ausläufen</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>10 Boxen mit Außenpaddocks</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Longierzirkel (ca. 16 m) mit Flutlicht</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Dressurviereck (20 X 40 m) mit Flutlicht</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Tölt-Ovalbahn (WM-tauglich) mit Flutlicht</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Reithalle (15 X 30 m)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Schöner Bachlauf</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Mehrere Anbinde-Putzplätze</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Zwei Waschplätze</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Pferde-Solarium</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>24 Hektar Weideland</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Mehrere Sattelkammern</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Reiterstüberl</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lightBrown">•</span>
                <span>Grillplatz</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Panorama-Bild Section */}
      <section className="mb-14">
        <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <img
            className="w-full h-[400px] object-cover"
            src={hof_panoram}
            alt="Panoramaansicht unseres Hofes"
          />
        </div>
      </section>
    </div>
  );
};

export default UeberUns;