import Header from "./Header";
import hof from "./assets/Hof-aereal.jpg";

const Home = () => {
    return (
        <div>
        <Header></Header>
        <div className="grid sm:grid-cols-2 gap-4 mt-28 mx-14">
          <div className="min-h-24 rounded-lg shadow-inner bg-orange-500"><img src={hof} alt="Hof" className="w-full h-full object-cover rounded-lg" /></div>
          <div className="min-h-24 rounded-lg shadow-inner bg-background">
            <div className="p-10 text-lg">
            <h1 className="font-bold text-3xl text-lightBrown">Willkommen bei Islandpferde Lechleite</h1>
            <p>Unser Pferdehof an der schönen Lechleite liegt zwischen Friedberg und Augsburg. Wir sind spezialisiert auf Islandpferde – das sind nicht nur wunderschöne Tiere – sie eignen sich auch wunderbar als Schulpferd für Kinder und Erwachsene und begeistern sowohl Anfänger als auch anspruchsvolle Reitprofis.
Individuellen Reitunterricht und Kurse bieten wir nicht nur für Kinder und Jugendliche an, sondern auch individuell zugeschnitten für Erwachsene. Egal, ob erfahrener Reiter, Anfänger oder Wiedereinsteiger.
Unsere Events, Seminare und Lehrgänge rund ums Pferd finden Sie in unserem Jahresprogramm
</p>
</div>

          </div>
          <div></div>
        </div>
        </div>
       
    );

}

export default Home;