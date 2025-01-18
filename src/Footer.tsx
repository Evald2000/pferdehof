import logo from './assets/logo.png';
const Footer = () => {
  return (
    

<footer className="bg-white dark:bg-gray-900 mt-14">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src={logo} className="h-16 me-3" alt="Lehcleite Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Kontakt</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="">
                          <p className="hover:underline font-bold">Islandpferde Lechleite</p>
                      </li>
                      <li>
                          <p  className="hover:underline">Schützenstraße 114</p>
                      </li>
                      <li>
                          <p  className="hover:underline">86316 Friedberg</p>
                      </li>
                      <li>
                          <p className="hover:underline">Deutschland</p>
                      </li>
                      <li>
                          <p  className="hover:underline">T: +49 (0)821 603330</p>
                      </li>
                      <li>
                          <p  className="hover:underline">E: info@lechleite.de</p>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Rechtliches</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="">
                          <a href='test.com' className="hover:underline">Allgemeine Geschäftsbedingungen</a>
                      </li>
                      <li className="">
                          <a href='test.com' className="hover:underline">Impressum</a>
                      </li>
                      <li className="">
                          <a href='test.com' className="hover:underline">Datenschutz</a>
                      </li>
                    
                  </ul>
              </div>
              
          </div>
      </div>
     
    </div>
</footer>

  );
}

export default Footer;