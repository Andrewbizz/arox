// import Image from "next/image"
import {
  Globe,
  PlayIcon as Run,
  NotebookIcon as Lotus,
  CheckSquare,
  ArrowRight,
  Square,
} from "lucide-react";
import "./about.css";
// import Link from "next/link"

export default function AboutSection() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <h2>Luxury hair treatments for a radiant glow</h2>

          <p>
            Discover a blissful escape through our premium salon services,
            designed to rejuvenate your style and renew your confidence
          </p>

          <div className="about-Buttons">
            <button className="primary-button">
              Book Now <ArrowRight />
            </button>
            <button className="secondary-button">
              Learn More <Square />
            </button>
          </div>

          <div className="about-image">
            {/* <Image
                            src="/images/about-image.jpg"
                            alt="About Us"
                            width={400}
                            height={600}
                            className="about-main-image"
                        /> */}
          </div>
        </div>
      </section>

      <section className="yoga-section">
        <div className="yoga-subtitle">Why us</div>
        <h2 className="yoga-heading">
          Feel the magic of gentle hair rejuvenation
        </h2>

        <div className="yoga-content-grid">
          <div className="yoga-features-left">
            <div className="feature-item">
              <div className="icon-wrapper">
                <Globe />
              </div>
              <h3>Unlimited Session</h3>
              <p>No limits. Request as much as you need, anytime you want</p>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <Lotus />
              </div>
              <h3>Custom Styling</h3>
              <p>
                Looks tailored to your unique features and personality, for a
                style that’s perfectly you.
              </p>
            </div>
          </div>

          <div className="yoga-main-image"></div>

          <div className="yoga-features-right">
            <div className="feature-item">
              <div className="icon-wrapper">
                <Run />
              </div>
              <h3>Premium Care</h3>
              <p>
                Receive top-tier treatments delivered promptly, so you can enjoy
                luxury without the wait.
              </p>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <CheckSquare />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                Every service meets our highest standards, ensuring flawless
                results every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
