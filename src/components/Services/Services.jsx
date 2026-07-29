import "./Services.css";
import services from "../../data/services";

function Services() {
  return (
    <section className="services section" id="services">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            10 — Services
          </span>

          <h2>What I Can Do</h2>

          <p>
            I build modern, scalable and user-friendly web applications
            using the latest technologies.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (

            <div className="service-card" key={service.id}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;