import { Typewriter } from 'react-simple-typewriter'
import profileImage from '../../assets/profileimage.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-6 lg:mt-8"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="ms:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hello, I'm
          </h1>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shivi Agarwal
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#134E4A] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={['Fullstack Developer', 'Programmer', 'Tech Enthusiast']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          {/* ABOUT ME */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed md:max-w-md">
            I'm a passionate Fullstack Developer with expertise 
            in MERN stack development. I love creating dynamic and 
            responsive web applications that provide a great user experience. 
            My skills include JavaScript, React, Node.js, Express, and MongoDB. 
            I'm always eager to learn new technologies and take on challenging projects.
          </p>

          <a
            href="https://drive.google.com/file/d/16HQEkC-FTjkhO0J2ZfARry_P3vxsIPhf/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #134E4A, #0F766E)',
              boxShadow: '0 0 4px #134E4A, 0 0 12px #134E4A, 0 0 30px #0F766E',
            }}
          >
            DOWNLOAD RESUME
          </a>


        </div>

            {/* RIGHT SIDE */}
            <div className='md:w-1/2 flex justify-center md:justify-end'>
              <img
                src={profileImage}
                alt="Shivi Agarwal"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(13,148,136,0.5)]"
              />
          </div>
      </div>
    </section>
  );
};

export default About