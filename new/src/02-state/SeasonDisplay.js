import './SeasonDisplay.css'

import React from 'react';

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: 'Summer!',
        iconName: 'sun'
    },
    winter: {
        text: 'Winter!',
        iconName: 'snowflake'
    }
}

class SeasonDisplay extends React.Component {

    render() {
        const season = getSeason(this.props.latitude, new Date().getMonth());
        const {text, iconName} = seasonConfig[season];

        return <div className={`season-display ${season}`}>
            <i className={`icon-left large ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right large ${iconName} icon`}/>
        </div>
    }
}

export default SeasonDisplay;
