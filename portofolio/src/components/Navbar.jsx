import ScrollActive from "../logic/ScrollActive";
const Navbar = () => {
  const active = ScrollActive();
  return (
    <div className="Navbar py-7 flex items-center justify-between ">
      <div className="logo animate__animated animate__backInLeft animate__delay-2s">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Putra Al Rifki
        </h1>
      </div>
      <ul
        className={` flex items-center gap-6 md:gap-10 w-full fixed md:static left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 opacity-100 rounded-br-2xl rounded-bl-2xl p-4   transition-all backdrop-blur-md justify-center bg-green-600/30 md:bg-transparent animate__animated animate__backInRight animate__delay-2s z-50 ${active ? "top-0 opacity-100" : "-top-15 opacity-0"}`}
      >
        <li>
          <a className="sm:text-lg text-base font-light" href="#">
            Beranda
          </a>
        </li>
        <li>
          <a className="sm:text-lg text-base font-light" href="#about">
            Tentang
          </a>
        </li>
        <li>
          <a className="sm:text-lg text-base font-light" href="#project">
            Proyek
          </a>
        </li>
        <li>
          <a className="sm:text-lg text-base font-light" href="#contact">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
