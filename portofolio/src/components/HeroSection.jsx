import DataImage from "../data";

function Section() {
  return (
    <>
      <div className="hero grid items-center grid-cols-1 md:grid-cols-2 gap-6 pt-3">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-5 mb-3 bg-green-600/30 w-fit p-2 md:p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Section Image"
              className="w-10 rounded-md"
            />
            <q>Konsisten akan mengalahkan kecerdasan!😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hai, Saya Putra Al Rifki
          </h1>
          <p className="text-base/loose text-justify mb-6 opacity-50 ">
            Saya adalah seorang mahasiswa Informatika yang antusias di bidang
            frontend development. Saya senang mengubah desain menjadi tampilan
            website yang interaktif dan responsif. Saat ini saya terus
            mengembangkan kemampuan dalam React, Tailwind CSS, dan pengembangan
            UI modern, serta membangun berbagai project untuk memperkuat skill
            dan portfolio.
          </p>
          <img
            src={DataImage.HeroImage}
            alt="Section Image"
            className="flex items-center mx-auto w-[400px] md:hidden mb-6"
          />
          <div className=" flex md:justify-start gap-5 justify-center">
            <div className="flex items-center gap-2 bg-green-600/30 p-2 rounded-2xl">
              <a href="#">Download CV</a>
              <span className="icon-[material-symbols--download-sharp]"></span>
            </div>
            <div className="flex items-center gap-2 bg-green-600/30 p-2 rounded-2xl">
              <a href="#">Lihat Proyek </a>
              <span className="icon-[solar--arrow-down-linear]"></span>
            </div>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Section Image"
          className="flex items-center mx-auto w-[400px] hidden md:flex animate__animated animate__fadeInUp animate__delay-2s"
        />
      </div>
    </>
  );
}

export default Section;
