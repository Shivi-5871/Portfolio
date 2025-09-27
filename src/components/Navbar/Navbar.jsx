import React, { useState, useEffect } from 'react'
import {FiMenu, FiX} from 'react-icons/fi'
import {FaGithub, FaLinkedin} from 'react-icons/fa'


const Navbar = () => {
  const [activeSection, setActiveSection] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);


  //Scroll and navbar bg change
  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  //Smooth Scroll Function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];
  
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        
        {/* NAME */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-white'>Shivi</span>
          <span className='text-[#8245ec]'> </span>
          <span className='text-white'>Agarwal</span>
        </div>
      

      {/* MENUITEMS */}
      <ul className='hidden md:flex space-x-8 text-gray-300'>
        {menuItems.map((item) => (
          <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
            activeSection === item.id ? "text-[#8245ec]" : ""
          }`}>
            <button onClick={() => handleMenuItemClick(item.id)}>{item.label}
            </button>
          </li>
        ))}
      </ul>


        {/* ICONS */}
        <div className='hidden md:flex space-x-4'>
          <a
           href="https://github.com/Shivi-5871"
           target="_blank"
           rel="noopener noreferrer"
           className='text-gray-300 hover:text-[#8245ec]'>
            <FaGithub size={24} />
           </a>
          
          <a
           href="https://www.linkedin.com/in/shivi-agarwal-02018b228"
           target="_blank"
           rel="noopener noreferrer"
           className='text-gray-300 hover:text-[#8245ec]'>
            <FaLinkedin size={24} />
           </a>

        </div>

        {/* MOBILE MENU ICONS */}
        <div className="md:hidden">
          {
            isMenuOpen ? (
              <FiX className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsMenuOpen(false)} />
            ) : (
              <FiMenu className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsMenuOpen(true)} />
            )
          }
        </div>
      </div>
      
      {/* MOBILE MENU ITEMS */}
      {isMenuOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg 1-50 rounded-lg-shadow-lg'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white 
                ${ activeSection === item.id ? "text-[#8245ec]" : ""
              }`}>
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}

            <div className='flex space-x-4'>
              <a
                href="https://github.com/Shivi-5871"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-white'>
                 <FaGithub size={24} />
                </a>
                <a
                 href="https://www.linkedin.com/in/shivi-agarwal-02018b228"
                 target="_blank"
                 rel="noopener noreferrer"
                 className='text-gray-300 hover:text-white'>
                  <FaLinkedin size={24} />
                 </a>   
            </div>

          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar