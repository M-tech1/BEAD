import { JSX } from "react";
import { FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";

interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: <FaFacebook className="w-8 h-8" />,
    url: "https://www.facebook.com/share/173EaqPEzz/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="w-8 h-8" />,
    url: "https://x.com/beadshowng?t=yoEVB9-Lptfy9YrABR3GEA&s=09",
  },

  {
    name: "Tiktok",
    icon: <FaTiktok className="w-8 h-8" />,
    url: "https://vm.tiktok.com/ZSHnAedphhBdE-5StkT/",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-green-900">
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
