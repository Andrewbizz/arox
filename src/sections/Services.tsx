"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css"; // Import the vanilla CSS file
import heroImg from "/src/assets/images/hero.jpg";
import hairImg from "/src/assets/images/services/haircut.jpg";
import color from "/src/assets/images/services/haircolor.jpg";
import treatment from "/src/assets/images/services/treatment.jpg";
import chems from "/src/assets/images/services/chems.jpg";
import manicure from "/src/assets/images/services/manicure.png";
import peds from "/src/assets/images/services/ped.jpg";
import lash from "/src/assets/images/services/lash.jpg";
import brows from "/src/assets/images/services/brows.jpg";
import perm from "/src/assets/images/services/perm.jpg";

const servicesData = [
  {
    id: "hair",
    name: "Hair Services",
    inTitle: "Hair services",
    description:
      "Transform your look with our expert hair styling, coloring, and treatments.",
    subCategories: [
      {
        id: "haircuts",
        name: "Haircuts & Styling",
        bgImage: hairImg,
        items: [
          {
            id: "womens-haircut-blowdry",
            name: "Women's Haircut & Blow-Dry",
            price: "40–60",
          },
          { id: "blowout", name: "Blowout", price: "35–50" },
          {
            id: "curls-waves",
            name: "Curls/Waves (Flat or Curling Iron)",
            price: "40–70",
          },
          {
            id: "evening-updo",
            name: "Evening / Bridal Updo",
            price: "90–150",
          },
          { id: "mens-haircut", name: "Men’s Haircut", price: "30–40" },
          {
            id: "clipper-cut",
            name: "Clipper Cut (Fade, Buzz)",
            price: "25–35",
          },
          {
            id: "kids-haircut",
            name: "Kids’ Haircut (Up to 10 Years)",
            price: "20–30",
          },
        ],
      },
      {
        id: "coloring",
        bgImage: color,
        name: "Color Services",
        items: [
          { id: "root-touch-up", name: "Root Touch-Up", price: "70–90" },
          { id: "full-color", name: "Full Color", price: "100–150" },
          {
            id: "partial-highlights",
            name: "Partial Highlights",
            price: "120–160",
          },
          { id: "full-highlights", name: "Full Highlights", price: "150–200" },
          { id: "balayage-ombre", name: "Balayage / Ombre", price: "180–250" },
          { id: "airtouch", name: "AirTouch", price: "From 250" },
          { id: "lowlights", name: "Lowlights", price: "120–160" },
          {
            id: "toner-gloss",
            name: "Toner / Gloss (Shades EQ)",
            price: "40–70",
          },
        ],
      },
      {
        id: "treatments",
        bgImage: treatment,
        name: "Hair Care & Treatments",
        items: [
          {
            id: "hair-mask",
            name: "Hair Mask + Scalp Massage",
            price: "15–25",
          },
          {
            id: "repair-treatment",
            name: "Repair Treatment (Olaplex, K18)",
            price: "25–50",
          },
          { id: "hair-spa", name: "Hair SPA Treatment", price: "40–70" },
        ],
      },
      {
        id: "chemical-services",
        bgImage: chems,
        name: "Chemical Services",
        items: [
          {
            id: "keratin-alternative",
            name: "Keratin Alternative (Formaldehyde-Free)",
            price: "180–250",
          },
          { id: "perm", name: "Perm", price: "120–200" },
        ],
      },
    ],
  },
  {
    id: "nails",
    bgImage: heroImg,
    name: "Nail & Pedicure  ",
    inTitle: `Classic Hardware Pedicure`,
    description: `Clean. Comfortable. Beautiful.
The perfect choice for those who value comfort, hygiene, and flawless results. Using a modern machine with built-in vacuum suction, the dry technique allows for a safe and gentle treatment without soaking. Your feet feel smooth and refreshed, while your nails look neat, healthy, and polished for longer.
`,
    subCategories: [
      {
        id: "manicures",
        bgImage: manicure,
        name: "Manicures",
        items: [
          { id: "regular-mani", name: "Regular Manicure (Dry)", price: 50 },
          {
            id: "shellac-short",
            name: "Shellac Manicure with Structured Gel - Short",
            price: 80,
          },
          {
            id: "shellac-medium",
            name: "Shellac Manicure with Structured Gel - Medium",
            price: 85,
          },
          { id: "gel-overlay-short", name: "Gel Overlay (Short)", price: 85 },
          { id: "gel-overlay-medium", name: "Gel Overlay (Medium)", price: 90 },
          { id: "gel-overlay-long", name: "Gel Overlay (Long)", price: 120 },
          {
            id: "nail-extensions-short",
            name: "Short (Nail Extensions)",
            price: 95,
          },
          {
            id: "nail-extensions-medium",
            name: "Medium (Nail Extensions)",
            price: 105,
          },
          {
            id: "nail-extensions-long",
            name: "Long (Nail Extensions)",
            price: 120,
          },
        ],
      },
      {
        id: "pedicures",
        bgImage: peds,
        name: "Pedicures",
        items: [
          {
            id: "pedi-regular",
            name: "Pedicure with Regular Polish",
            price: 80,
          },
          { id: "pedi-shellac", name: "Pedicure with Shellac", price: 85 },
          { id: "pedi-dry", name: "Advanced Dry Pedicure", price: 100 },
        ],
      },
      {
        id: "lashes",
        bgImage: lash,
        name: "Lash Extensions",
        items: [
          { id: "classic-full", name: "Classic Full Set", price: 110 },
          { id: "classic-fill-2w", name: "Classic Fill (2 Weeks)", price: 55 },
          { id: "classic-fill-3w", name: "Classic Fill (3 Weeks)", price: 65 },
          { id: "hybrid-full", name: "Hybrid Full Set", price: 130 },
          { id: "hybrid-fill-2w", name: "Hybrid Fill (2 Weeks)", price: 60 },
          { id: "hybrid-fill-3w", name: "Hybrid Fill (3 Weeks)", price: 70 },
          { id: "volume-full", name: "Volume Full Set", price: 150 },
          { id: "volume-fill-2w", name: "Volume Fill (2 Weeks)", price: 70 },
          { id: "volume-fill-3w", name: "Volume Fill (3 Weeks)", price: 80 },
          { id: "mega-full", name: "Mega Volume Full Set", price: 170 },
          { id: "mega-fill-2w", name: "Mega Volume Fill (2 Weeks)", price: 85 },
          { id: "mega-fill-3w", name: "Mega Volume Fill (3 Weeks)", price: 95 },
          { id: "lash-removal", name: "Removal", price: 30 },
          { id: "foreign-fill", name: "Foreign Fill", price: 15 },
        ],
      },
    ],
  },
  {
    id: "facial",
    bgImage: heroImg,
    inTitle: `Makeup `,
    name: "  Makeup",
    description:
      "Enhance your natural beauty with our brow, lash, and permanent makeup services.",
    subCategories: [
      {
        id: "brows",
        bgImage: brows,
        name: "Brows & Lamination",
        items: [
          { id: "brow-shaping", name: "Brow Shaping & Tinting", price: 40 },
          {
            id: "brow-lash-tint",
            name: "Brow Shaping & Tinting + Lash Tint",
            price: 50,
          },
          {
            id: "brow-lamination",
            name: "Brow Lamination with Tint",
            price: 80,
          },
          {
            id: "lash-lamination",
            name: "Lash Lamination with Tint",
            price: 80,
          },
        ],
      },
      {
        id: "pmu",
        bgImage: perm,
        name: "Permanent Makeup & Removal",
        items: [
          { id: "pmu-eyebrow", name: "Permanent Eyebrow Makeup", price: 300 },
          { id: "pmu-lip", name: "Permanent Lip Makeup", price: 300 },
          {
            id: "pmu-eyeliner",
            name: "Permanent Eyeliner (Classic)",
            price: 250,
          },
          {
            id: "lash-enhancement",
            name: "Lash Enhancement (Thin Eyeliner)",
            price: 200,
          },
          {
            id: "dark-lip-neutralization",
            name: "Dark Lip Neutralization",
            price: 300,
          },
          { id: "pmu-removal", name: "PMU & Mini Tattoo Removal", price: 70 },
        ],
      },
    ],
  },
];

const Services = () => {
  const [activeTabId, setActiveTabId] = useState(servicesData[0].id);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(
    null
  );
  // const isActive = activeSubCategoryId === subCategory.id;

  const activeService = servicesData.find(
    (service) => service.id === activeTabId
  );

  const toggleSubCategory = (subCategoryId: string) => {
    setActiveSubCategoryId((prevId) =>
      prevId === subCategoryId ? null : subCategoryId
    );
  };
  const tabsNavRef = useRef<HTMLElement>(null); // Ref for the navigation element

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = servicesData.findIndex(
        (service) => service.id === activeTabId
      );
      let nextIndex = currentIndex;

      if (event.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % servicesData.length;
        event.preventDefault(); // Prevent page scrolling
      } else if (event.key === "ArrowLeft") {
        nextIndex =
          (currentIndex - 1 + servicesData.length) % servicesData.length;
        event.preventDefault(); // Prevent page scrolling
      }

      if (nextIndex !== currentIndex) {
        setActiveTabId(servicesData[nextIndex].id);
      }
    };

    const navElement = tabsNavRef.current;
    if (navElement) {
      navElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [activeTabId, servicesData]); // Re-run effect if activeTabId or servicesData changes

  return (
    <div className="services-container" id="services">
      <div className="container">
        <nav
          className="tabs-nav"
          ref={tabsNavRef}
          tabIndex={0}
          aria-label="Service Categories"
        >
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`tab-button ${activeTabId === tab.id ? "active" : ""}`}
              role="tab"
              aria-selected={activeTabId === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              style={{
                position: "relative",
                fontFamily: "CustomFont",
              }}
            >
              {activeTabId === tab.id && (
                <motion.span
                  layoutId="slider-rect"
                  className="slider-rect"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div
                className="tab-button-content"
                style={{
                  left: 0,
                  top: 0,
                  width: "max-content",
                  zIndex: 9990,
                  position: "relative",
                }}
              >
                {tab.name}
              </div>
            </button>
          ))}
        </nav>

        <motion.div className="tab-content-wrapper">
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="tab-content"
                role="tabpanel"
                style={{ width: "100%" }}
                id={`panel-${activeService.id}`}
                aria-labelledby={`tab-${activeService.id}`}
              >
                <div className="tabHeader">
                  <h2 className="service-title">{activeService.inTitle}</h2>
                  <p className="service-description">
                    {activeService.description}
                  </p>
                </div>

                <div className="sub-categories-container">
                  <div className=" services-list">
                    {activeService.subCategories.map((subCategory) => {
                      const isActive = activeSubCategoryId === subCategory.id; // ✅ inside the map, subCategory exists

                      return (
                        <div
                          style={{
                            backgroundImage: `url(${subCategory.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          className="service-card"
                          key={subCategory.id}
                        >
                          <h3 className="sub-category-title"></h3>

                          {/* <img src={subCategory.bgImage} alt="" /> */}
                          <div
                            className="shapeCont shapePrice"
                            style={{
                              backgroundColor: "var(--primary-color)",
                              paddingLeft: "1rem",
                              padding: ".2rem",
                              width: "120px",
                            }}
                          >
                            <button
                              className="secondary-button"
                              style={{
                                width: "96%",
                                background: "var(--secondary-color)",
                                padding: "0.5rem",
                                display: "flex",
                                justifyContent: "center",
                              }}
                              onClick={() => toggleSubCategory(subCategory.id)}
                            >
                              {isActive ? "Close" : "Show me"}
                            </button>
                            <div
                              className="shape1"
                              style={{
                                boxShadow: "-25px 25px var(--primary-color)",
                              }}
                            ></div>

                            <div
                              className="shape2"
                              style={{
                                boxShadow: "-25px 24px var(--primary-color)",
                              }}
                            ></div>
                          </div>

                          <div className="detCont">{subCategory.name}</div>

                          <div
                            className={`service-items ${
                              isActive ? "activeItem" : ""
                            }`}
                          >
                            {subCategory.items.map((item) => {
                              const itemActive = isActive; // ✅ linked to subCategory
                              return (
                                <div
                                  key={item.id}
                                  className={`service-item ${
                                    itemActive ? " " : ""
                                  }`}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "space-between",
                                    gap: "1rem",
                                    padding: "0.5rem 0",
                                  }}
                                >
                                  <div className="item-name">{item.name}</div>
                                  <div className="item-price">
                                    ${item.price}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

// import services from "../data/services"; // your list of services
// import type { Service } from "../types/service";

// import "./Services.css"; // optional CSS styling

// const Services = () => {
//   return (
//     <section className="services-section">
//       <div className="container">
//         <h2 className="services-title">Our Services</h2>
//         <div className="services-list">
//           {services.map((service: Service) => (
//             <div className="service-card" key={service.id}>
//               <p className="service-description">{service.description}</p>
//               <div className="shapeCont shapePrice" style={{backgroundColor: 'var(--secondary-color)', paddingLeft: '1rem', padding:'.2rem', width: '150px'}}>

//                 <button className="primary-button" style={{width: '96%'}}  > show me </button>
//               <div className="shape1" style={{boxShadow: '-25px 25px var(--secondary-color)'}}></div>

//               <div className="shape2" style={{boxShadow: '-25px 24px var(--secondary-color)'}}></div>

//               </div>

//               <div className="detCont">
//                 {service.title}
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
