import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "./TeamSlider.css";

interface TeamMember {
  id: number;
  name: string;
  bio: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Olena",
    bio: `Hello, I’m Olena!
My journey in the beauty industry began over 30 years ago in Ukraine, where I created my own salon and lovingly shared beauty with my clients. Ten years ago, I emigrated to Canada and continued my work here, always staying true to professionalism, attention to detail, and genuine care.

I believe that beauty begins with inner harmony. I find inspiration in sports, traveling, and new experiences — they give me energy, openness, and help me create a warm and welcoming atmosphere for every guest.

Today, I’m happy to invite you to my salon — a space where experience and skill come together with warmth, and where every guest feels truly special.
`,
    image: "./src/assets/images/1.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "alex@company.com",
    },
  },
  {
    id: 2,
    name: "Oksana",
    bio: `Hello, I’m Oksana!
My career in the beauty industry has been my passion for over 29 years. In Ukraine, I built my own successful salon, became a prizewinner of regional and interregional hairdressing championships, and received a European-standard teaching diploma. I’ve had the honor of training many students — today they work in different countries around the world, carrying a part of my knowledge and love for this craft.

Throughout the years, I’ve worked with thousands of clients, and my greatest reward is their trust, smiles, and happiness after each visit.

Now, I’m proud to welcome you to AROX Beauty — a salon where professionalism, creativity, and care meet warmth and sincerity. Here, every guest is unique, and I’m always happy to create beauty that reflects your individuality.
`,
    image: "./src/assets/images/2.png",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "sarah@company.com",
    },
  },
  {
    id: 3,
    name: "Svitlana Nelep",
    bio: `I am a certified Permanent Makeup Artist with 3+ years of experience.  
I specialize in advanced permanent makeup techniques for brows, lips and lash line.  
My services also include lash and brow lamination, professional brow shaping and tinting, as well as safe and effective removal of previous permanent makeup using a remover.

I work with clients of all ages and skin types, carefully selecting the shape and shade that enhance your natural beauty. It’s important to me that every procedure is as comfortable as possible and the result looks clean and natural.

I approach each client with individual care and find joy in seeing their happiness after the procedure. My mission is to ensure you wake up with flawless makeup and carry confidence every day.
`,
    image: "./src/assets/images/3.JPG",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "marcus@company.com",
    },
  },
  {
    id: 4,
    name: "Zhanna ",
    bio: `I’ve been a lash artist for 5 years, and lashing has truly become my passion. For me, it’s not just about creating beautiful lashes – it’s about helping women feel more confident and radiant every day.

I love tailoring each set to my client’s style, whether it’s soft and natural or bold and glamorous. Seeing the smile on someone’s face when they look in the mirror after a lash appointment is the best part of my work.

When you come to me, you can expect a cozy, relaxing experience and lashes that make you feel like the best version of yourself. 
`,
    image: "./src/assets/images/4.JPEG",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "luna@company.com",
    },
  },
  {
    id: 5,
    name: "Anna",
    bio: `My name is Anna, and I am a certified brow artist with a specialization in lash & brow lamination. I studied at NBE Studio in Kyiv in 2021 and later gained professional experience working in a beauty studio in Ukraine.

I work exclusively with high-quality Thya (Spain) products, ensuring every treatment is not only beautiful but also completely safe.

Currently, I am advancing my skills at the Beauty Icon course with renowned Ukrainian makeup guru Yehor Andriushyn. My mission is to highlight natural beauty and help every woman feel more confident

`,
    image: "./src/assets/images/5.JPG",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "luna@company.com",
    },
  },

  {
    id: 6,
    name: "Evgenia",
    bio: `I’m Evgenia, a beginner nail technician.
Since childhood, I’ve loved beauty and creativity, and now my dream is coming true through the work I love. For me, a manicure is not just a service, but a way to highlight each woman’s individuality and bring her joy.

I’m only at the start of my journey, but I put my heart, care, and responsibility into every client. My goal is to make your hands look elegant, stylish, and make you feel confident every day.

I aspire to keep learning, mastering new techniques, and creating beauty that you’ll fall in love with again and again.
 
`,
    image: "./src/assets/images/6.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "luna@company.com",
    },
  },
];

const TeamSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  // const SocialIcon = ({ type, url }: { type: string; url: string }) => {
  //   return (
  //     <a
  //       href={url}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       className="social-icon"
  //     ></a>
  //   );
  // };

  return (
    <div className="team-slider-container">
      <div className="team-slider-header">
        <h2 className="team-title">Meet Our Team</h2>
        <p className="team-subtitle">
          the talented team dedicated to making you look and feel your best
        </p>
      </div>

      <div className="team-slider-wrapper">
        <div className="team-navigation">
          {teamMembers.map((member, index) => (
            <button
              key={member.id}
              className={`nav-tab ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="nav-tab-image"
              />
            </button>
          ))}
        </div>
        <Swiper
          modules={[Navigation, Pagination, EffectCards]}
          spaceBetween={30}
          slidesPerView={1}
          autoHeight={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="team-swiper"
          grabCursor={true}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-slide">
                <div className="team-content">
                  <div className="team-info">
                    <div className="member-details">
                      <h3 className="member-name">{member.name}</h3>
                      {/* <p className="member-role">{member.role}</p> */}
                      <p className="member-bio">{member.bio}</p>
                    </div>
                  </div>

                  <div className="team-visual">
                    <div className="member-image-container">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="member-image"
                      />
                      <div className="image-overlay"></div>
                    </div>

                    {/* <div className="member-socials">
                      {Object.entries(member.socials).map(([platform, url]) => (
                        <SocialIcon key={platform} type={platform} url={url} />
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
