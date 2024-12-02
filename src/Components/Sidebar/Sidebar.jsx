import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import LogoA from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FaGithub, FaHome, FaLinkedin, FaUser } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link to={'/'} className="logo">
        <img src={LogoA} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to={'/'}>
          <FaHome color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className={'about-linkg'}
          to={'/about'}
        >
          <FaUser color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className={'contact-link'}
          to={'/contact'}
        >
          <IoIosMail color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            {' '}
            {/* for now */}
            <FaLinkedin color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="">
            {/* for now */}
            <FaGithub color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="">
            {/* for now */}
            <FaGithub color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
