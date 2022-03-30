import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import React, {useState, useEffect} from 'react';
import './App.css'
import Scroll from '../components/Scroll'
import Header from '../components/Header'

const App = () => {
    const [robots, setRobots] = useState([]);
    const [arrayRobots, setArrayRobots] = useState(robots);


    if (!robots.length) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setRobots(data))
    }

    useEffect(() => {
        setArrayRobots(robots);
    }, [robots])

    return (
        <div className='tc App'>
            <Header >
                <h1>AlienFriends</h1>
                <SearchBox setArrayRobots={setArrayRobots} originRobots={robots}/>
            </Header>
            <Scroll>
                <CardList robots={arrayRobots} />
            </Scroll>
            
        </div>
    );
}

export default App;