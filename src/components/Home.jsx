import { Link } from "react-router-dom";

function Home() {
  const doctors = [
    {
      name: "Dr. John Doe",
      role: "Cardiologist",
      img: "https://cdn.hexahealth.com/Image/webp/480x480/1730892045298-137948404.webp",
    },
    {
      name: "Dr. Vicky Joshi",
      role: "Homeopathy",
      img: "https://lifecarehospital.ae/wp-content/uploads/2022/06/Untitled_design_-_2024-10-13T125424.599-removebg-preview.png",
    },
    {
      name: "Dr. Vicky Jain",
      role: "Founder • General Physician",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCj4zp8pMIXMwGrVmoiYcrGVGlKDVqJGZ-w&s",
    },
  ];

  const services = [
    {
      title: "Online Consultation",
      desc: "Quick video consults with verified specialists.",
    },
    {
      title: "Easy Appointments",
      desc: "Pick date/time and book in under 1 minute.",
    },
    {
      title: "Trusted Doctors",
      desc: "Experienced doctors across multiple specializations.",
    },
    {
      title: "Reports & Follow-ups",
      desc: "Track visits, prescriptions, and next steps.",
    },
  ];

  return (
    <main className="mc-page">
      {/* HERO */}
      <section className="mc-hero">
        <div className="mc-hero-left">
          <div className="mc-badge">🟢 24/7 Support • Trusted Care</div>

          <h1 className="mc-h1">
            Welcome to <span className="mc-accent">MedCure+</span>
            <br />
            Your health, our priority.
          </h1>

          <p className="mc-sub">
            Book appointments, find specialists, and get care with a clean,
            simple experience. Fast scheduling, real doctors, and smooth
            follow-ups.
          </p>

          <div className="mc-actions">
            <Link to="/appointment" className="mc-btn">
              Book Appointment
            </Link>
            <Link to="/doctors" className="mc-btn-ghost">
              View Doctors
            </Link>
          </div>

          <div className="mc-stats">
            <div className="mc-stat">
              <div className="mc-stat-num">120+</div>
              <div className="mc-stat-text">Verified Doctors</div>
            </div>
            <div className="mc-stat">
              <div className="mc-stat-num">2k+</div>
              <div className="mc-stat-text">Appointments</div>
            </div>
            <div className="mc-stat">
              <div className="mc-stat-num">4.8★</div>
              <div className="mc-stat-text">Patient Rating</div>
            </div>
          </div>
        </div>

        <div className="mc-hero-right">
          <img
            className="mc-hero-img"
            src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg"
            alt="Doctors team"
          />
          <div className="mc-floating-card">
            <div className="mc-floating-title">Next Available</div>
            <div className="mc-floating-sub">Today • 4:30 PM</div>
            <div className="mc-floating-chip">Instant Booking</div>
          </div>
        </div>
      </section>

      {/* SPECIALISTS */}
      <section className="mc-section">
        <div className="mc-section-head">
          <h2 className="mc-h2">Our Specialists</h2>
          <Link to="/doctors" className="mc-link-pill">
            Explore all →
          </Link>
        </div>

        <div className="mc-grid-3">
          {doctors.map((d, i) => (
            <div className="mc-card" key={i}>
              <img className="mc-avatar" src={d.img} alt={d.name} />
              <div className="mc-card-body">
                <h3 className="mc-card-title">{d.name}</h3>
                <p className="mc-card-sub">{d.role}</p>
                <Link to="/appointment" className="mc-mini-btn">
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mc-section">
        <div className="mc-section-head">
          <h2 className="mc-h2">What we help with</h2>
          <span className="mc-muted">Simple, fast and patient-first.</span>
        </div>

        <div className="mc-grid-4">
          {services.map((s, i) => (
            <div className="mc-service" key={i}>
              <h3 className="mc-service-title">{s.title}</h3>
              <p className="mc-service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mc-cta">
        <div>
          <h2 className="mc-cta-title">Ready to book your appointment?</h2>
          <p className="mc-cta-sub">
            Choose a doctor, pick a time, and confirm. That’s it.
          </p>
        </div>
        <Link to="/appointment" className="mc-btn">
          Book Now
        </Link>
      </section>

      <footer className="mc-footer">
        © {new Date().getFullYear()} MedCure+ • Built with React
      </footer>
    </main>
  );
}

export default Home;
