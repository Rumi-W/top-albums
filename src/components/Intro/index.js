import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import musicNoteImg from '../../assets/music-note-64-blue.png'
import Tooltip from '../Tooltip'
import './styles.css'

const Intro = () => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = (e) => {
    e.stopPropagation()
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }
  return (
    <div className="intro fade-in">
      <div className="title-wrap">
        <div className="intro-title">Top 100 Albums</div>
        <div>
          <img className="spin" alt="music-note" src={musicNoteImg} />
        </div>
        <div style={{ position: 'relative', marginTop: '2rem' }}>
          <Link
            to="/top100"
            className="intro-title-sm color-in"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}>
            Click Here to Continue
          </Link>
          <div>
            <Tooltip show={showTooltip}>Go to Top 100 Albums</Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
