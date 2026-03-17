import { listTools, listProyek } from "../data";

function Tools() {
  return (
    <div className="mt-17">
      <div id="tools">
        <h1
          className="text-4xl/snug font-bold mb-4 text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Tools yang dipakai
        </h1>
        <p
          className=" w-full text-center text-base/loose opacity-50 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Berikut beberapa tools yang saya gunakan dalam pengembangan:
        </p>
        <div className="mt-10 md:mt-14 grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border rounded-md hover:bg-green-600/30 group"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay={tool.dad}
            >
              <img
                src={tool.gambar}
                alt="Tools image"
                loading="lazy"
                className="w-14 bg-green-700/30 p-1 group-hover:bg-green-900/10"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-17 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Berikut adalah beberapa proyek yang telah saya kerjakan:
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
          {/* {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="bg-transparent border rounded-2xl p-3"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay={proyek.dad}
            >
              <img
                src={proyek.gambar}
                alt="Project Image"
                loading="lazy"
                className="mb-1"
              />
              <div>
                <h1 className="font-bold text-lg mb-3">{proyek.nama}</h1>
                <p className="text-base/normal opacity-50 mb-2">
                  {proyek.desk}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {proyek.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="bg-green-600/30 font-medium px-3 py-1 border rounded-sm"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-3 text-center">
                <a
                  href="#"
                  className="block bg-green-600/30 hover:bg-green-600/50 p-2 rounded-md font-bold"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Tools;
