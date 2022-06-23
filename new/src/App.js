import React from 'react'
import {Tab} from 'semantic-ui-react'

import Components from "./01-components/Components";
import State from "./02-state/State";
import Pictures from "./03-events/Pictures";
import Player from "./04-video-player/Player";

const panes = [
    {menuItem: 'Components', render: () => <Tab.Pane><Components/></Tab.Pane>},
    {menuItem: 'State', render: () => <Tab.Pane><State/></Tab.Pane>},
    {menuItem: 'Pictures', render: () => <Tab.Pane><Pictures/></Tab.Pane>},
    {menuItem: 'Player', render: () => <Tab.Pane><Player/></Tab.Pane>},
];

const App = () => {
    return <div className="ui container" style={{marginBottom: '10px'}}>
        <Tab panes={panes}/>
    </div>
};

export default App;
