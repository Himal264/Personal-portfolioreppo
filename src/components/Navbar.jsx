import { FaSquareXTwitter } from "react-icons/fa6";


import { FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <h1 className="line-through text-4xl tracking-widest">HP</h1>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/
         himalpachemagar
         " target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Himal264" target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https:www.instagram.com/himalpache/" target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://x.com/PacheHimal" target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter">
          <FaSquareXTwitter/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar