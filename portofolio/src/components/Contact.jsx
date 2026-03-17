const Contact = () => {
  return (
    <div className="mt-10 pt-10" id="contact">
      <h1
        className="text-3xl font-bold text-center mb-1"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Kontak
      </h1>
      <p
        className="text-base/loose text-center opacity-50 mb-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Mari terhubung dengan saya!
      </p>

      <form
        action="https://formsubmit.co/putraalrifkiiii19@gmail.com"
        method="POST"
        className="bg-green-600/30 md:w-2/3 md:mx-auto w-full  rounded-md md:p-10 p-5"
        autoComplete="off"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label for="" className="font-semibold">
              Nama Lengkap:
            </label>
            <input
              type="text"
              name="nama"
              placeholder="Masukkan nama..."
              required
              className="bg-zinc-800 py-1 px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label for="" className="font-semibold mt-3">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email..."
              required
              className="bg-zinc-800 py-1 px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pesan" className="font-semibold mt-3">
              Pesan:
            </label>
            <textarea
              name="pesan"
              id="pesan"
              cols="40"
              rows="4"
              placeholder="Masukkan pesan..."
              required
              className="bg-zinc-800 py-1 px-3 rounded-lg"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="font-semibold mt-1 border hover:scale-105   bg-zinc-800 px-5 w-full py-2 rounded-md cursor-pointer "
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
