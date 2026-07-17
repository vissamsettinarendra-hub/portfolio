import "./Hero.css";

import profile from "../../assets/images/profile/narendra.jpeg";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaReact,
  FaJava,
  FaPython,
  FaAws,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import { motion } from "framer-motion";


function Hero() {

  return (

    <section id="home" className="hero section">


      <div className="container hero-grid">


        {/* Left Side */}

        <motion.div

          className="hero-content"

          initial={{
            opacity:0,
            x:-80
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >


          <div className="chip">

            <span className="dot"></span>

            Available for new opportunities

          </div>



          <h1 className="hero-title">


            <span className="line">

              Hi, I'm 
              <span className="grad">
                Vissamsetti Narendra
              </span>

            </span>



            <span className="line">

              A 
              <span className="typed">
                Full Stack Developer
              </span>

            </span>


          </h1>



          <p className="hero-sub">

            I design and build modern, responsive and scalable web
            applications using Python, React, JavaScript and AWS.
            Passionate about creating high-performance applications
            with beautiful user experiences.

          </p>




          <div className="hero-buttons">


            <a href="#projects" className="btn btn-primary">

              <span>
                View Projects
              </span>

              <FaArrowRight />

            </a>



           <a
            href="/resume.pdf"
            download
            className="btn btn-outline"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>



            <a href="#contact" className="btn btn-ghost">

              <FaEnvelope />

              <span>
                Contact Me
              </span>

            </a>


          </div>





          <div className="hero-socials">


            <a href="https://github.com/vissamsettinarendra-hub"
              target="_blank"
              rel="noreferrer">

              <FaGithub />

            </a>



            <a href="http://www.linkedin.com/in/visssamsettinarendra"
              target="_blank"
              rel="noreferrer">
              className="btn btn-ghost"
              <FaLinkedinIn />
              <span>GitHub</span>

            </a>



            <a href="mailto:vissamsettinarendra@gmail.com">

              <FaEnvelope />

            </a>


          </div>



        </motion.div>






        {/* Right Side */}


        <motion.div

          className="hero-visual"


          initial={{
            opacity:0,
            x:80
          }}


          whileInView={{
            opacity:1,
            x:0
          }}


          transition={{
            duration:0.8
          }}

        >


          <div className="avatar-ring">


            <div className="profile-container">


              <img

                src={profile}

                alt="Vissamsetti Narendra"

                className="profile-image"

              />


            </div>




            <FaReact className="float-icon fi-1" />

            <FaJava className="float-icon fi-2" />

            <FaPython className="float-icon fi-3" />

            <FaAws className="float-icon fi-4" />

            <FaNodeJs className="float-icon fi-5" />

            <FaDatabase className="float-icon fi-6" />


          </div>



        </motion.div>


      </div>





      <a href="#about" className="scroll-hint">

        <span></span>

      </a>



    </section>

  );

}


export default Hero;