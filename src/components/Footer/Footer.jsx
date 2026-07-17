import "./Footer.css";

import {
    FaGithub,
    FaLinkedin,
    FaArrowUp
} from "react-icons/fa";


function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">


                <h3>
                    Vissamsetti Narendra
                </h3>


                <p>
                    Full Stack Developer | React.js | Node.js | AWS Cloud
                </p>



                <div className="footer-social">


                    <a 
                    href="https://github.com/vissamsettinarendra-hub"
                    target="_blank"
                    >
                        <FaGithub />
                    </a>



                    <a 
                    href="http://www.linkedin.com/in/visssamsettinarendra"
                    target="_blank"
                    >
                        <FaLinkedin />
                    </a>


                </div>



                <a 
                href="#home"
                className="back-top"
                >

                    <FaArrowUp />

                </a>



                <div className="copyright">

                    © 2026 Vissamsetti Narendra.
                    All Rights Reserved.

                </div>



            </div>


        </footer>

    );

}


export default Footer;