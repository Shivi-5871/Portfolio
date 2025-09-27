import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profileimage.jpg';

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

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
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
            href="https://drive.google.com/file/d/12g23isKJZgKHGqc8G2OHQhmJbWtczyQD/view?usp=drive_link"
             target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD RESUME
          </a>

        </div>

            {/* RIGHT SIDE */}
            <div className='md:w-1/2 flex justify-center md:justify-end'>
              <Tilt
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <img
                  src={profileImage}
                  alt="Shivi Agarwal"
                  className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                />
              </Tilt>
          </div>
      </div>
    </section>
  );
};

export default About