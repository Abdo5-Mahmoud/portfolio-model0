import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './Home.scss'
import { useEffect, useState } from 'react'
import Letter from '../AnimatedLetters/Letter.jsx'
import Logo from './Logo/Logo.jsx'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'Abdullah'.split('')
  const jobArray = 'Web developer'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <Letter
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />{' '}
            <br />{' '}
            <Letter letterClass={letterClass} strArray={jobArray} idx={23} />
          </h1>
          <h2>Frontend Developer / javaScript middle </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
