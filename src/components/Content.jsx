import React from 'react'

function Content({id,children,additionalClasses=""}) {
  return (
    <div className={`content ${additionalClasses}`} id={id}>
            {children}
    </div>
  )
}

export default Content