import { IoLogoWhatsapp } from "react-icons/io";
import { PiCurrencyInrBold } from "react-icons/pi";

const SocialButton = ({ home }: { home?: boolean }) => {
  return (
    <section
      className={`w-full flex ${
        home ? "sm:justify-start gap-5 justify-center" : "justify-around"
      }`}
    >
      <a
        href="https://chat.whatsapp.com/FxBXh6Hk15c06QtH8o8lI6"
        target="_blank"
        className="flex items-center gap-2 bg-green-700 py-2 px-3 rounded-md text-white font-semibold hover:scale-105 duration-500"
      >
        <IoLogoWhatsapp className="text-green-400 w-5 h-5" />
        Whatsapp
      </a>

      <a
        href="https://kolkataff.mini.site/"
        className="flex items-center gap-2 bg-yellow-400 py-2 px-3 rounded-md text-black font-semibold hover:scale-105 duration-700 animate-pulse"
      >
        <PiCurrencyInrBold className="text-black w-6 h-6 -mr-1" />
        VIP Tips
      </a>
    </section>
  );
};

export default SocialButton;
