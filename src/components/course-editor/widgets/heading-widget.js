import React from 'react'

const HeadingWidget = ({widget}) => {
    return(
        <div>
            <h2 className="mda-h2">{widget.text}</h2>
        </div>
    )
}

export default HeadingWidget