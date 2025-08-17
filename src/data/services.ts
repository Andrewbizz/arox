// /data/services.ts
import type { Service } from "../types/service";

const services: Service[] = [
  {
    id: 1,
    title: "Hair Styling",
    description: "Trendy cuts and color for every style.",
    image: "/assets/hair.jpg",
  },
  {
    id: 2,
    title: "Facials",
    description: "Rejuvenate your skin with premium facials.",
    image: "/assets/facial.jpg",
  },
  {
    id: 3,
    title: "Nail Care",
    description: "Complete nail treatment for hands and feet.",
    image: "/assets/nails.jpg",
  },
];

export default services;
