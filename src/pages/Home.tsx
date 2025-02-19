import Footer from "../Footer";
import Header from "../Header";
import hof from "../assets/Hof-aereal.jpg";
import pony from "../assets/pony.jpg";
import hof_panoram from "../assets/hof_panoram.jpg";
import { useNavigate } from 'react-router-dom';

const Home = () => {

      const navigate = useNavigate();

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-4 mt-20 mx-4 lg:mt-32  lg:mx-14">
        <div className="min-h-24 rounded-lg shadow-inner ">
          <img
            src={hof}
            alt="Hof"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="min-h-24 rounded-lg shadow-inner bg-background">
          <div className="p-4 md:p-8 text-lg">
            <h1 className="font-bold text-2xl text-lightBrown">
              Willkommen bei Islandpferde Lechleite
            </h1>
            <p>
              Unser Pferdehof an der schönen Lechleite liegt zwischen Friedberg
              und Augsburg. Wir sind spezialisiert auf Islandpferde – das sind
              nicht nur wunderschöne Tiere – sie eignen sich auch wunderbar als
              Schulpferd für Kinder und Erwachsene und begeistern sowohl
              Anfänger als auch anspruchsvolle Reitprofis. Individuellen
              Reitunterricht und Kurse bieten wir nicht nur für Kinder und
              Jugendliche an, sondern auch individuell zugeschnitten für
              Erwachsene. Egal, ob erfahrener Reiter, Anfänger oder
              Wiedereinsteiger. Unsere Events, Seminare und Lehrgänge rund ums
              Pferd finden Sie in unserem <a className="text-blue-600 hover:cursor-pointer" onClick={() => navigate('/programm')}>Jahresprogramm</a>
            </p>
          </div>
        </div>
      </div>
      <div className="m-14">
        <img className="rounded-md h-0 md:h-full invisible md:visible" src={hof_panoram}></img>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-[-5rem] mx-4 md:mt-14  md:mx-14">
        <div className="min-h-24 rounded-lg shadow-inner bg-background">
          <div className="p-4 md:p-8 text-lg">
            <h1 className="font-bold text-2xl text-lightBrown">
              Über uns und unsere Philosophie
            </h1>
            <p>
              Der Islandpferdehof Lechleite wurde von Veronika und Sebastian
              Frisch vor über 35 Jahren gegründet. Im Jahr 2019 schloß Tochter
              Stjarna erfolgreich ihre Ausbildung zur Pferdewirtin ab und
              unterstützt seither den elterlichen Betrieb. Seit Sebastians
              plötzlichem Tod im August 2023 betreiben Veronika und Stjarna
              Frisch zusammen mit einem tollem Team die Lechleite gemeinsam. Wir
              unterrichten grundsätzlich sehr intensiv in kleinen Gruppen (3 – 5
              Personen). In allen Reiteinheiten ist das Putzen, Satteln, Zäumen
              und auch der Umgang mit dem Pferd wichtiger Bestandteil. Natürlich
              darf auch der Spaß nicht zu kurz kommen. Am Besten gleichermaßen
              für Reiter und Pferd. Leiten lassen wir uns vom Wesen und der
              Natur des Pferdes. Seinen Verhaltensweisen, seiner Anatomie,
              seinen Bedürfnissen und nicht zuletzt seiner Individualität. Wir
              sehen unsere Aufgabe im „Dolmetschen“ zwischen Mensch und Pferd,
              um größtmögliche Harmonie miteinander zu erreichen. Altes,
              klassisches Wissen sowie neueste Erkentnisse vermitteln wir
              innovativ und altersgerecht zugeschnitten. Wir möchten den
              Bewohnern an der Lechleite ein zu Hause bieten. Egal, ob Mensch
              oder Pferd. Den kompletten Überblick über das laufende Jahr
              erhalten Sie hier:
            </p>
            <a href="https://example.com/">Jahresprogramm</a>
            <p></p>
            <a href="https://example.com/">Gebrauchsanweisung Lechleite</a>
          </div>
        </div>
        <div className="min-h-24 rounded-lg shadow-inner bg-orange-500">
          <img
            src={pony}
            alt="Hof"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
