import profilePic from "/public/vercel-logotype-light.png";
import Image from "next/image";

export default function footer() {
  return (
    <footer className="footer">
      <a href="google.com" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
      </a>
      <Image src={profilePic} alt="Picture of the author" />
    </footer>
  );
}
