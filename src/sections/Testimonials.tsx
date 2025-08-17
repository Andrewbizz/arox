import { Star } from "lucide-react"
import './testimonial.css'

export default function TestimonialSection() {
const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "A truly rejuvenating experience! The balayage coloring was flawless.",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "Sarah Thompson",
  },
  {
    id: 2,
    rating: 4,
    text: "The keratin treatment left my hair feeling silky and smooth. I loved every moment of the visit!",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "Rachel Brown",
  },
  {
    id: 3,
    rating: 5,
    text: "I've never felt more pampered. The lash lift was so relaxing, and my eyes pop.",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "Linda Harris",
  },
  {
    id: 4,
    rating: 5,
    text: "The luxury hair spa treatment was amazing. My strands feel softer and look shinier.",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "Emily Richardson",
  },
  {
    id: 5,
    rating: 4,
    text: "Such a wonderful experience from start to finish. The hair gloss left my locks glowing, and I feel so confident easily!",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "David Lee",
  },
  {
    id: 6,
    rating: 4,
    text: "An exceptional salon experience. The stylists were skilled, and the atmosphere was so relaxing.",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "Olivia King",
  },
  {
    id: 7,
    rating: 4,
    text: "Hot oil scalp massage was exactly what I needed. My hair feels so much more nourished.",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "Jennifer Miller",
  },
  {
    id: 8,
    rating: 5,
    text: "Hair coloring was a game-changer! I feel more radiant and stylish. It's the perfect way to refresh.",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "Andrew Peterson",
  },
  {
    id: 9,
    rating: 4,
    text: "Lash extensions were a game-changer! I feel more confident and glamorous. It's the perfect beauty boost.",
    avatar: "/public/vite.svg?height=40&width=40",
    name: "Mark Williams",
  },
];


  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} className={`star-icon ${i < rating ? "filled" : "empty"}`} />)
    }
    return stars
  }

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="header-content">
          <div className="header-label">
            <span className="header-dot" />
            <span>Testimonial</span>
          </div>
          <h2 className="header-title">What our clients say about their experience</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="star-rating">{renderStars(testimonial.rating)}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="author-info">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="author-avatar"
                />
                <div className="author-name">{testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
