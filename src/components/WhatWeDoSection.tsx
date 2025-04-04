'use client'

// src/components/WhatWeDo.tsx

import Image from "next/image";

const services = [
  {
    title: "Web Graphics",
    description:
      "Custom UniLy design branding assets, and marketing visuals for a standout web presence.",
    image: "/images/web.avif",
  },
  {
    title: "Mobile App Development",
    description:
      "Intuitive and scalable mobile solutions for both iOS and Android devices.",
    image: "/images/mobile.avif",
  },
  {
    title: "Client Dashboards",
    description:
      "Real-time dashboards and portals to manage progress, communication, and collaboration.",
    image: "/images/dashboard.avif",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-neutral-950 py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-neutral-900 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
