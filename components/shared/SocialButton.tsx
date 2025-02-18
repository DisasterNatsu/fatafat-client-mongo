import { IoLogoWhatsapp } from "react-icons/io";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaWandMagicSparkles } from "react-icons/fa6";

const SocialButton = ({ home }: { home?: boolean }) => {
  return (
    <section
      className={`w-full flex ${
        home ? "sm:justify-start gap-5 justify-center" : "justify-around"
      }`}
    >
      <a
        href="https://chat.whatsapp.com/DpHMhgEsHZ5KHxWzcgs0D0"
        target="_blank"
        className="flex items-center gap-2 bg-green-700 py-2 px-3 rounded-md text-white font-semibold hover:scale-105 duration-500"
      >
        <IoLogoWhatsapp className="text-green-400 w-5 h-5" />
        Whatsapp
      </a>

      <a
        href="#last-ten-days"
        className="flex items-center gap-2 bg-red-500 py-2 px-3 rounded-md text-black font-semibold hover:scale-105 duration-700 animate-pulse"
      >
        <FaWandMagicSparkles className="text-black w-6 h-6 -mr-1" />
        Magic Tool
      </a>
    </section>
  );
};

export default SocialButton;
