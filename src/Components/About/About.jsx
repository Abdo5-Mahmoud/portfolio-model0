import { useEffect, useState } from 'react'
import Letter from '../AnimatedLetters/Letter.jsx'
import './About.scss'
import Loader from 'react-loaders'
import {
  FaCss3,
  FaGit,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const aboutletters = 'About me'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Letter
              strArray={aboutletters}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT companty with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working
            ono improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, love reading and planting
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cube cubespinner">
            <div className="face1">
              <FaReact color="#5ED4F4" />
            </div>
            <div className="face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="face3">
              <FaCss3 color="#28A4D9" />
            </div>
            <div className="face4">
              <FaJsSquare color="#EFD81D" />
            </div>
            <div className="face5">
              <FaNodeJs color="#68A063" />
            </div>
            <div className="face6">
              <FaGit color="#Ec4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />{' '}
    </>
  )
}

export default About
