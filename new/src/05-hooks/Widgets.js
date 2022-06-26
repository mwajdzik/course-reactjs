import React from 'react';

import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {title: "What's React", content: "React is a front end js framework"},
    {title: "Why use React", content: "React is a favorite js library"},
    {title: "How do you use React", content: "You create components"},
];

export default () => {
    return <React.Fragment>
        <div className='ui container'>
            <Accordion items={items}/>
        </div>
        <br/><br/>
        <div className='ui container'>
            <Search/>
        </div>
    </React.Fragment>
};
