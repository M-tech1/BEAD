import { JSX } from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: <FaFacebook className="w-6 h-6" />,
    url: "https://www.facebook.com/share/173EaqPEzz/",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter className="w-6 h-6" />,
    url: "https://x.com/beadshowng?t=yoEVB9-Lptfy9YrABR3GEA&s=09",
  },

  {
    name: "Tiktok",
    icon: <FaTiktok className="w-6 h-6" />,
    url: "https://vm.tiktok.com/ZSHnAedphhBdE-5StkT/",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-10 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-3 text-green-900">
        Connect with us
      </h2>
      <div className="flex gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50 hover:text- transition-colors duration-300 hover:text-green-500"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
