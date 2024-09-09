import { about } from "@/data";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-[1366px] mx-auto relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            {about.map(({ id, img }) => (
              <div key={id} className="relative h-full">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <div className="mb-6 text-left">
              <h2 className="text-2xl font-bold">10 Years Experience</h2>
            </div>
            <div className="mb-6">
              <p className="text-lg">
                Raccoon Tech is a leading company in the tech industry,
                specializing in the development of innovative AI-based tools and
                photo editing apps. They are dedicated to creating products that
                beet the market and shape the future of technology. Their
                commitment to innovation and excellence makes them a key player
                in the digital innovation landscape.
              </p>
            </div>
            {/* Skills Section */}
            <div className="space-y-4">
              {[
                { name: "Android Apps Development", value: 85 },
                { name: "Flutter Apps Development", value: 95 },
                { name: "UI/UX Designer", value: 90 },
                { name: "AI Development", value: 85 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-lg">
                    <p>{skill.name}</p>
                    <p>{skill.value}%</p>
                  </div>
                  <div className="h-2 bg-gray-300 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-2000"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
