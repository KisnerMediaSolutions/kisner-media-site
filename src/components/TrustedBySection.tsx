// src/components/TrustedBySection.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faApple,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function TrustedBySection() {
  const icons: { icon: IconDefinition; label: string }[] = [
    { icon: faGoogle, label: "Google" },
    { icon: faApple, label: "Apple" },
    { icon: faMicrosoft, label: "Microsoft" },
  ];

  return (
    <section className="bg-white dark:bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8">
          Trusted by innovators
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center text-4xl text-gray-800 dark:text-white">
          {icons.map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={icon} />
              <span className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}