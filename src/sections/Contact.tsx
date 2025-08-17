import "./Contact.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left">
          <h1 className="main-heading">
            We are always ready to help you and answer your questions
          </h1>
          <p className="description">
            If you have a question about our products or services, don't
            hesitate to contact us. Our team is available to answer your
            questions and provide support.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <h3>Call Center</h3>
              {/* <p>855 100 4444</p> */}
              <p>+1 2265771451</p>
            </div>

            <div className="info-item">
              <h3>Our Location</h3>
              <p>785 Wonderland Rd S, </p>
              <p>London, ON N6K 2Y5</p>
            </div>

            <div className="info-item">
              <h3>Email</h3>
              <p>Aroxbeauty.salon@gmail.com</p>
            </div>

            <div className="info-item">
              <h3>Social network</h3>
              <div className="social-icons">
                <span className="social-icon">f</span>
                <span className="social-icon">X</span>
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/posts/azm-technologies_urgent-techabrcloud-freshers-activity-7360998398281379840-JfFU?utm_source=share&utm_medium=member_ios&rcm=ACoAABUBh_0BYonzRYKG44iq961DR0D9GrMRdxc"
                >
                  in
                </a>
                <a
                  href="mailTo:Aroxbeauty.salon@gmail.com"
                  className="social-icon"
                >
                  @
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="form-container">
            <h2>Get in Touch</h2>
            <p className="form-description">
              Define your goals and identify areas where we can help you
              succeed.
            </p>

            <form className="contact-form">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
              />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
              <textarea
                placeholder="Message"
                className="form-textarea"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="primary-button"
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.434829488982!2d-81.2934824!3d42.94804029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd8425d455f9%3A0x95d687c9bbcf305!2sAROX%20Beauty!5e0!3m2!1sen!2sng!4v1755448777159!5m2!1sen!2sng"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
