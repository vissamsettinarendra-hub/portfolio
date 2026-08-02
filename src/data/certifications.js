import aws from "../assets/images/certificates/aws.png";
import nptel from "../assets/images/certificates/nptel.png";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: aws,
    description:
      "Validated foundational knowledge of AWS Cloud concepts, core AWS services, security, pricing, and cloud architecture.",
    credential: aws,
  },
  {
    id: 2,
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    image: nptel,
    description:
      "Completed NPTEL certification covering IoT architecture, sensors, communication protocols, and real-world applications.",
    credential: nptel,
  },
];

export default certifications;