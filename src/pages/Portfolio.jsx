import React from "react";
import NavBar from "../components/NavBar";
import { FaGithub } from "react-icons/fa";

// นำเข้ารูปภาพตามที่คุณระบุ
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Bikes and Beards",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non.",
      image: img2, // ภาพรถ
      viewLink: "#",
      githubLink: "https://github.com/nattapong54121-ai",
      alignLeft: true,
    },
    {
      id: 2,
      title: "Learnify",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla.",
      image: img3, // ภาพถัดไป
      viewLink: "#",
      githubLink: "https://github.com/nattapong54121-ai",
      alignLeft: false,
    },
    {
      id: 3,
      title: "Anime-X",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed!",
      image: img4, // ภาพ Anime-X
      viewLink: "#",
      githubLink: "https://github.com/nattapong54121-ai",
      alignLeft: true,
    },
    {
      id: 4,
      title: "Tech-Z",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione! Accusantium placeat dolorem minus eos excepturi modi.",
      image: img5, // ภาพ Tech-Z
      viewLink: "#",
      githubLink: "https://github.com/nattapong54121-ai",
      alignLeft: false,
    },
  ];

  return (
    <>
      <NavBar pname="p" colorLinkNavBar="#FFF714" />

      <div className="min-h-screen text-white px-8 md:px-20 lg:px-40 xl:px-60 pt-10 pb-24">
        {/* หัวข้อหน้า Portfolio */}
        <div className="flex justify-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight">
            Portfolio
          </h1>
        </div>

        {/* รายการผลงาน */}
        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                project.alignLeft ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-between gap-12`}
            >
              {/* รูปผลงาน */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover max-h-[320px]"
                  />
                </div>
              </div>

              {/* ข้อความอธิบาย */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={project.viewLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-1.5 border border-white rounded-full text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>Git code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}