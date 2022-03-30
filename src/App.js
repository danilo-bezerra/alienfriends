import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import React, {useState} from 'react';

const App = () => {
    const [arrayRobots, setArrayRobots] = useState(robots);

    return (
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox setArrayRobots={setArrayRobots}/>
            <CardList robots={arrayRobots} />
        </div>
    );
}

export default App;