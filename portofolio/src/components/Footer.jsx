function Footer() {
  return (
    <>
      <footer className="bg-green-600/30 mt-20 max-w-full ">
        <div className="pt-5">
          <div className="flex md:flex-row flex-col md:justify-between">
            <h1 className="text-lg font-bold px-10 text-center  mb-3 md:mb-0 ">
              Portofolio
            </h1>
            <div className="flex gap-5 justify-center  md:gap-15">
              <a href="#" className="text-md font-semibold">
                Beranda
              </a>
              <a href="#about" className="text-md font-semibold">
                Tentang
              </a>
              <a href="#project" className="text-md font-semibold">
                Proyek
              </a>
              <a href="#contact" className="text-md font-semibold">
                Kontak
              </a>
            </div>
            <div className=" gap-5 md:pr-10 flex justify-center mt-3 md:mt-0">
              <a
                href="https://github.com/putraalrifkiiii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--github] text-3xl"></span>
              </a>
              <a
                href="https://instagram.com/putraalrifkiiii19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--instagram] text-3xl"></span>
              </a>
              <a
                href="https://linkedin.com/in/putra-al-rifki-374426322"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--linkedin] text-3xl"></span>
              </a>
            </div>
          </div>
          <div className="text-center mt-5">
            <p className="opacity-50 pb-3">
              &copy; 2026 Putra Al Rifki. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
