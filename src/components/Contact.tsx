import { CONTACT_DETAILS } from "../data";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">04 — Contact</div>
      <h2>Let's build something</h2>
      <div className="section-divider" />

      <div className="contact-grid">
        {/* Left — info */}
        <div className="contact-info">
          <h3>Open to opportunities</h3>
          <p>
            Whether you have a project in mind, a role to fill, or just want to say
            hello — my inbox is always open. I typically respond within 24 hours.
          </p>
          {CONTACT_DETAILS.map((d) => (
            <div key={d.text} className="contact-detail">
              <div className="contact-icon">{d.icon}</div>
              <span>{d.text}</span>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="johndoe@company.com" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Project inquiry" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project…" />
          </div>
          <button
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}