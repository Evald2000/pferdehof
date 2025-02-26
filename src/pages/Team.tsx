import team from "../assets/team.jpg";
import veronika from "../assets/veronika-frisch.jpg";
import stjarna from "../assets/stjarna.jpg";
import christine from "../assets/christine.jpg";
import johanna from "../assets/johanna.jpg";
import sebastian from "../assets/sebastian.jpg";

const Team = () => {
  return (
    <div className="mt-20 mx-4">
      <section className=" gap-4 md:mx-14 mb-14 ">
        <div className="bg-background rounded-md px-2 shadow-md py-2 md:mb-10">
          <h1 className="font-bold text-center text-2xl mb-2">Unser Team</h1>
          <div className="grid grid-cols-2">
            <img
              className="h-auto col-span-2 rounded-md shadow-md mx-auto"
              src={team}
            ></img>
            <p className=" col-span-2 my-2 hyphens-auto md:mx-14">
              Unser Team hat einen festen Stamm und wechselnde MitarbeiterInnen.
              Da wir auch anerkannter Ausbildungsbetrieb sind, sowie
              PraktikantInnen der unterschiedlichsten Berufsgruppen betreuen,
              erhält unser Team regelmäßig „frischen Wind“.
            </p>
          </div>
        </div>

        <section className="grid sm:grid-rows-1 md:grid-cols-2 gap-4">
          <div className="bg-background rounded-md px-2 shadow-md py-2 md:px-7">
            <h1 className="font-bold text-center text-2xl mb-2">
              Veronika Frisch
            </h1>
            <div className="grid grid-cols-2">
              <img
                className="col-span-2 rounded-md shadow-md"
                src={veronika}
              ></img>
              <p className="col-span-2 my-2 break-all text-gray-700">
                Staatl. anerkannte Erzieherin, Dipl. Soz. Päd. FH, Dipl.
                Reitpäd. SGTR, IPZV Trainer C, staatl. anerkannte
                Pferdewirtschaftsmeisterin Zucht / Haltung / Islandpferde, PAL
                Reitpäd. SGTR
              </p>
              <p className=" col-span-2 my-2 hyphens-auto">
                Veronika obliegt die Betriebsleitung. Außerdem kümmert sie sich
                um den Reitunterricht für Kinder, Jugendliche und Erwachsene.
                Ihr obliegt auch die Leitung des heilpädagogischen Reitens,
                Zucht, Ausbildung und Verkauf sowie die Praktikumsanleitung für
                alle pädagogischen Berufe. Das Zusammenleben mit den Pferden,
                die kreative, spielerische Arbeit mit ihnen ist Veronikas
                liebeste Nebenbeschäftigung Veronika Frisch hat zusammen mit
                Joerp die Grundsteine für Islandpferde Lechleite gelegt und
                gemeinsam mit Ehemann Sebastian Frisch den gesamten Betrieb
                aufgebaut.
              </p>
            </div>
          </div>

          <div className="bg-background rounded-md px-2 shadow-md py-2 md:px-7">
            <h1 className="font-bold text-center text-2xl mb-2">
              Stjarna Frisch
            </h1>
            <div className="grid grid-cols-2">
              <img
                className="col-span-2 rounded-md shadow-md"
                src={stjarna}
              ></img>
              <p className="col-span-2 mt-2 break-all text-gray-700">
                Pferdewirtin Spezialreitweisen
              </p>
              <p className=" col-span-2 my-2 hyphens-auto">
                Stjarna Frisch kümmert sich gemeinsam mit Veronika Frisch um die
                Betriebsleitung. Außerdem ist sie mit zuständig für den
                Reitunterricht der Erwachsenen, Kinder und Jugendlichen sowie
                die Ausbildung der Jungpferde. Auch die Gestaltung der Social
                Media Auftritte der Islandpferde Lechleite obliegt ihr.
              </p>
            </div>
          </div>

          <div className="bg-background rounded-md px-2 shadow-md py-2 md:px-7">
            <h1 className="font-bold text-center text-2xl mb-2">
              Christine Förch
            </h1>
            <div className="grid grid-cols-2">
              <img
                className="col-span-2 rounded-md shadow-md mx-auto"
                src={christine}
              ></img>
              <p className="col-span-2 mt-2 break-all text-gray-700">Büro</p>
              <p className=" col-span-2 my-2 hyphens-auto">
                Christine Förch ist die gute Seele in unserem Büro. Sie kümmert
                sich um die gesamte Buchhaltung, Ihre Anmeldung. Christine
                treibt Gelder ein, bestätigt Termine, führt die Konten und
                korrespondiert….. In der Regel erreichen Sie Christine Mittwoch
                Nachmittag in unserem Büro. Sie teilt sich ihre Tage allerdings
                auch frei ein. Das heißt, Sie teilt sich das Büro mit unserem
                Anrufbeantworter. Der ist im Zweifelsfall immer für Sie
                erreichbar. Oder Sie schreiben uns eine freundliche Mail.
              </p>
            </div>
          </div>

          <div className="bg-background rounded-md px-2 shadow-md py-2 md:px-7">
            <h1 className="font-bold text-center text-2xl mb-2">
              Johanna Heinzel
            </h1>
            <div className="grid grid-cols-2">
              <img
                className="col-span-2 rounded-md shadow-md mx-auto"
                src={johanna}
              ></img>
              <p className=" col-span-2 my-2 hyphens-auto">
                Johanna Heinzel ist Pferdemensch von Kindesbeinen an. Sie hat
                bei uns die ersten Schritte auf dem Pferderücken gemacht und
                unterstützt uns mittlerweile in ihrer Freizeit mit großem
                Engagement überall dort, wo es notwendig ist.
              </p>
            </div>
          </div>

          <div className="bg-background rounded-md px-2 shadow-md py-2 md:px-7 md:col-span-2 md:mx-auto">
            <h1 className="font-bold text-center text-2xl mb-2">
              Sebastian Frisch I
            </h1>
            <h1 className="font-bold text-center text-2xl mb-2">
              04.01.1968 – 20.08.2023
            </h1>
            <div className="grid grid-cols-2">
              <img
                className="col-span-2 rounded-md shadow-md mx-auto"
                src={sebastian}
              ></img>
              <p className="col-span-2 mt-2 text-gray-700">
                „Überall deine Spuren – die bleiben. Überall deine Spuren – die
                Geschichte schreiben. Überall deine Spuren – Jetzt und hier. So
                viele kleine Spuren – erzählen von Dir.“
              </p>
              <p className=" col-span-2 my-2 hyphens-au">
                Sebastian Frisch hat gemeinsam mit Ehefrau Veronika Frisch den
                Grundstein für den Islandpferdehof Lechleite gelegt. Ihm oblag
                die organisatorische Leitung des landwirtschaftlichen Bereichs
                sowie die Reitstunden für Erwachsene, der Hufbeschlag, die
                Pferdeversorgung und die Ausbildung der Jungpferde. Sebastian
                Frisch war außderdem passionierter Musiker, schrieb eigene Songs
                und spielte in mehreren Bands. Er zeichnete verantwortlich für
                den offiziellen Song der Islandpferde Weltmeisterschaft 2013 in
                Berlin. Seine Songs sind unter anderem auf Spotify zu finden.
                Sebastian Frisch verunglückte am 20.08.2023 tödlich. Wir werden
                ihn sehr vermissen.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Team;
