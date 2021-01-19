import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div id="resume" className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <a href={data.promotionPara}>
          My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Promotion
