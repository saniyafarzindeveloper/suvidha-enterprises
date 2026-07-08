"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  InstagramIcon,
} from "lucide-react";

const PHONE_NUMBER = "918419911555";

const WHATSAPP_MESSAGE =
  "Hello! I'm interested in your interior design services.";

// Replace with your actual Instagram profile
const INSTAGRAM_URL =
  "https://www.instagram.com/suvidhainteriors._?igsh=em91OGF2OW15bTZ6";

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

      {/* Instagram */}

      <Link
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          bg-gradient-to-r
          from-[#F58529]
          via-[#DD2A7B]
          to-[#8134AF]
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
        <InstagramIcon size={22} />

        <span className="hidden sm:block font-medium">
          Instagram
        </span>
      </Link>
    </div>
  );
}