import _ from 'lodash';
import React from "react";
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";

function average(data) {
    return _.sum(data) / data.length;
}

export default (props) => {
    return (
        <div>
            <Sparklines height={160} width={240} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>{Math.round(average(props.data))}{props.units}</div>
        </div>
    )
}