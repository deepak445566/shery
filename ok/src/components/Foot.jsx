import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Foot() {
    useEffect(() => {
      if (window.Shery && window.gsap) {
        window.Shery.makeMagnet(".magnet", { duration: 1 });
      }
    }, []);

  return (
    <>
      <footer className=" w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <a href="https://prebuiltui.com" className="inline-block magnet text-center">
                <img src="../logo.png" className="h-16 md:h-18 mx-auto lg:mx-0 " alt="Logo"/>
              </a>
              <p className="mt-4 max-w-md mx-auto lg:mx-0 text-gray-500 mont">
                Making every customer feel valued—no matter the size of your audience.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start items-center gap-4 mt-6 text-black">
                <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer" className="magnet">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer" className="magnet">
                  <i className="fa-brands fa-facebook-f text-xl"></i>
                </a>
                <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer" className="magnet">
                  <i className="fa-brands fa-linkedin-in text-xl"></i>
                </a>
                <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer" className="magnet">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-2">
              
              {/* Product Links */}
              <div className="text-center md:text-left">
                <p className="text-black big font-semibold text-lg mb-4">Product</p>
                <ul className="space-y-2 alan">
                  <li><HashLink smooth to="#" className="hover:text-[#9FE2DA] transition block py-1">Home</HashLink></li>
                  <li><HashLink smooth to="#about" className="hover:text-[#9FE2DA] transition block py-1">About</HashLink></li>
                  <li><HashLink smooth to="#project" className="hover:text-[#9FE2DA] transition block py-1">Services</HashLink></li>
                  <li><HashLink smooth to="#work" className="hover:text-[#9FE2DA] transition block py-1">Work</HashLink></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="text-center md:text-left">
                <p className="text-black big font-semibold text-lg mb-4">Resources</p>
                <ul className="space-y-2 alan">
                  <li><a href="/" className="hover:text-[#7ED8CE] transition block py-1">Review's</a></li>
                  <li><a href="/" className="hover:text-[#7ED8CE] transition block py-1">Blogs</a></li>
              

<li>
  <Link to="/term" className="hover:text-[#7ED8CE] transition block py-1">
    Terms and Condition
  </Link>
</li>

                 
                </ul>
              </div>

              {/* Contact */}
              <div className="text-center md:text-left">
                <p className="text-black big font-semibold text-lg mb-4">Reach Out To Us</p>
                <ul className="space-y-2 alan">
              <li>
  <a
    href={/Mobi|Android/i.test(navigator.userAgent)
      ? "mailto:ayushsharma00123456@gmail.com"
      : "https://mail.google.com/mail/?view=cm&to=ayushsharma00123456@gmail.com"}
    target="_blank"
    className="hover:text-[#7ED8CE] transition text-[12px] block py-1 break-words"
  >
    ✉️ ayushsharma00123456@gmail.com
  </a>
</li>

<li>
  <a
    href={/Mobi|Android/i.test(navigator.userAgent)
      ? "mailto:nehrarishabh16@gmail.com"
      : "https://mail.google.com/mail/?view=cm&to=nehrarishabh16@gmail.com"}
    target="_blank"
    className="hover:text-[#7ED8CE] transition block py-1 break-words"
  >
    ✉️ nehrarishabh16@gmail.com
  </a>
</li>

                  <li>
  { /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? (
    <a 
      href="tel:9557888062" 
      className="hover:text-[#7ED8CE] transition block py-1"
    >
      📞 9557888062
    </a>
  ) : (
    <span className="block py-1">
      📞 9557888062
    </span>
  )}
</li>

<li>
  { /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? (
    <a 
      href="tel:7982474628" 
      className="hover:text-[#7ED8CE] transition block py-1"
    >
      📞 7982474628
    </a>
  ) : (
    <span className="block py-1">
      📞 7982474628
    </span>
  )}
</li>

                  
                 
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-black">
              © 2025 <a href="#" className="hover:text-[#7ED8CE]">CraftoWeb</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Foot;