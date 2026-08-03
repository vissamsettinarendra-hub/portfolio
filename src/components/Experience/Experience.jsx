import "./Experience.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCloud,
  FaCode
} from "react-icons/fa";

function Experience() {
  return (
    <section className="experience section" id="experience">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            04 — Experience
          </span>

          <h2>
            Learning & Professional Journey
          </h2>

          <p>
            My journey of continuously learning new technologies,
            building projects and preparing for a career as a
            Full Stack Developer.
          </p>

        </div>

        <div className="timeline">

          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div className="icon">
              <FaCode />
            </div>

            <div>

              <span className="year">
                2026 - Present
              </span>

              <h3>
                SAP ABAP Training
              </h3>

              <h4>
                Chalapathi Institute of Technology
              </h4>

              <p>
                Learning SAP ABAP fundamentals including Data Dictionary,
                Reports, Module Pool Programming, Smart Forms,
                Function Modules and ALV Reports while developing
                enterprise application skills.
              </p>

            </div>

          </motion.div>

          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div className="icon">
              <FaLaptopCode />
            </div>

            <div>

              <span className="year">
                2025 - Present
              </span>

              <h3>
                MERN Stack Development
              </h3>

              <h4>
                Personal Projects
              </h4>

              <p>
                Developing responsive full stack applications using
                React.js, Node.js, Express.js and MongoDB including
                CropBridge, Placement Management System and Portfolio.
              </p>

            </div>

          </motion.div>

          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div className="icon">
              <FaCloud />
            </div>

            <div>

              <span className="year">
                2025
              </span>

              <h3>
                AWS Cloud Learning
              </h3>

              <h4>
                AWS Certified Cloud Practitioner
              </h4>

              <p>
                Gained knowledge of AWS Cloud concepts,
                EC2, S3, IAM, VPC, Cloud Security,
                pricing models and cloud best practices.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Experience;