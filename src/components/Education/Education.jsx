import React from 'react'
import { education } from '../../constants'

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-teal-900 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My educational background and qualifications
        </p>
      </div>

      <div className="relative">

        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Cards */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-start sm:pr-10" : "sm:justify-end sm:pl-10"
            }`}
          >

            {/* Timeline Circle */}
            <div 
              className="
                hidden sm:flex
                absolute left-1/2 transform -translate-x-1/2
                bg-gray-400 border-4 border-[#134E4A]
                w-12 h-12 sm:w-16 sm:h-16 
                rounded-full justify-center items-center z-10
              "
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Education Card */}
            <div className="w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_rgba(13,148,136,0.15)] hover:shadow-[0_0_25px_rgba(13,148,136,0.25)] transform transition-transform duration-300 hover:scale-105">

              <div className="flex items-center space-x-4">

                {/* Institute Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* School INFO */}
                <div className='flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl sm:text-2xl font-semibold text-white'>{edu.degree}</h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education