import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './footer.css';

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Mohit Geryani</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https://linkedin.com/in/mohit-geryani"><FiLinkedin/></a>
      <a href="https://facebook.com/mohitgeryani"><FiFacebook/></a>
      <a href="https://www.instagram.com/mohit_geryan/?hl=en"><FiInstagram/></a>
      <a href="https://github.com/MohitGeryani"><FiGithub/></a>
      <a href="https://x.com/mohitgeryani"><FiTwitter/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; {new Date().getFullYear()} Mohit Geryani, All rights reserved.</small>
    </div>

   </footer>
  )
}

export default Footer