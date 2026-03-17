import DataImage from "../data";

const About = () => {
  return (
    <div className="mt-10 py-10" id="about">
      <div
        className="w-full md:w-3/4 lg:w-2/4 mx-auto p-7 bg-green-600/30 rounded-4xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img
          src={DataImage.HeroImage}
          alt="Image"
          loading="lazy"
          className="w-12 rounded-md md:hidden"
        />
        <p className="text-base/loose mb-10">
          Hi, perkenalkan saya Putra Al Rifki, seorang Front-end Developer. Saya
          percaya bahwa desain dan fungsionalitas harus berjalan beriringan,
          sehingga setiap proyek yang saya kembangkan tidak hanya terlihat
          menarik tetapi juga memberikan pengalaman pengguna yang optimal.
        </p>
        <div className="flex items-center justify-between">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            loading="lazy"
            className="w-12 rounded-md hidden md:block"
          />
          <div className="flex items-center gap-7">
            <div className="text-center">
              <h1 className="text-3xl mb-1">
                3 <span>+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl mb-1">
                1 <span>+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
