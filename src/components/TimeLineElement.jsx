import React from 'react'

function TimeLineElement({alignRight,text}) {
  return alignRight? (
        <div className="row timeline">
                <div className="col-4"></div>
                <div className="col-4 separator"></div>
                <div className="col-4 content-right"><h2>{text}</h2></div>
        </div>

  ):
  (
        <div className="row timeline">
            <div className="col-4 content-left">
                <h2>{text}</h2>
              </div>
            <div className="col-4 separator"></div>
            <div className="col-4"></div>
        </div>

  )
}

export default TimeLineElement