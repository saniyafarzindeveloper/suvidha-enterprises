"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "919819852331";
const WHATSAPP_MESSAGE =
  "Hello! I'm interested in your interior design services.";

export default function FloatingActions() {
  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-[100]
        flex
        flex-col
        gap-3
      "
    >
      {/* WhatsApp */}

      <Link
        href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
          WHATSAPP_MESSAGE
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          bg-[#25D366]
          px-5
          py-4
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-2xl
        "
      >
        <MessageCircle size={22} />

        <span className="hidden sm:block font-medium">
          WhatsApp
        </span>
      </Link>

      {/* Call */}

      <Link
        href={`tel:+${PHONE_NUMBER}`}
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          bg-[#8A7650]
          px-5
          py-4
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-105
          hover:bg-[#6F5E40]
          hover:shadow-2xl
        "
      >
        <Phone size={22} />

        <span className="hidden sm:block font-medium">
          Call Now
        </span>
      </Link>
    </div>
  );
}