export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "FAEDA",
    location: "Saudi Arabia · Remote",
    type: "Internship",
    dates: "Jul 2026 – Present",
    product: "FAEDA WAZAYIF — a recruitment & career platform",
    live: "https://faeda-wazayif-1.onrender.com",
    bullets: [
      "Build features across React, TypeScript, Python and Flask: candidate profiles, job discovery, applications and university verification.",
      "Set up authentication and role-based access for four user types: job seekers, companies, universities and admins.",
      "Shipped full English/Arabic localisation with RTL and LTR layouts.",
      "Work directly with the CEO on product planning, UX decisions and testing.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Python", "Flask"],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "DripCheck",
    location: "Retail store · Client work",
    type: "Freelance",
    dates: "Jul 2026 – Present",
    product: "Two engagements, built solo end to end",
    live: null, // no public link to the client's production system
    engagements: [
      {
        title: "Retail POS & inventory system",
        status: "Shipped · Jul – Sep 2026",
        bullets: [
          "In daily use by 3 staff and 2 admins, processing 90–100 sales a day; expanding to a second store.",
          "Barcode (Code-128) checkout with real-time cart sync over Socket.io and PIN-based staff login.",
          "Analytics for revenue, inventory and product performance, plus Excel/PDF reports and a returns workflow.",
          "JWT auth with staff/admin roles on a layered backend (controllers, services, models).",
        ],
      },
      {
        title: "E-commerce platform with live POS sync",
        status: "In development · Oct 2026 – Present",
        bullets: [
          "The client came back to take the store online: a storefront that shares one live inventory with the in-store POS.",
          "Two-way stock sync plus a short checkout reservation hold, so online and in-store buyers can never buy the same last unit.",
          "Server-verified payments, auto-generated invoices, courier booking with shipping labels, and self-service order tracking.",
          "Automated publishing pipeline: a product registered in the POS becomes a reviewed web listing, with image processing, readable titles, SEO metadata and validation.",
        ],
      },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Node.js", "Express", "MongoDB", "Socket.io", "Recharts"],
  },
];
