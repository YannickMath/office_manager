import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex justify-center w-screen items-center">
      <a href="https:/linkedin.com/" title="Cécile BOIRON Page LinkedIn">
        <FaLinkedin aria-hidden="true" size={25} />
      </a>
    </div>
  );
}
