import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import React, {useState, useEffect} from 'react';


const App = () => {
    const [arrayRobots, setArrayRobots] = useState(robots);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        setArrayRobots(() => {
            return robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            });
        })
    }, [searchField]);

    return (
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox setSearField={setSearchField}/>
            <CardList robots={arrayRobots} />
        </div>
    );
}

export default App;