import { robots } from './robots';

const SearchBox = ({setArrayRobots}) => {
    return (
        <div className='SearchBox pa3'>
            <input 
            className='pa3 ba b--green bg-lightest-blue br3 bw0 ot0'
            type='text' 
            placeholder='Search a robot'
            onInput={({target}) => {
                setArrayRobots(() => {
                    return robots.filter(robot => {
                        return robot.name.toLowerCase().includes(target.value.toLowerCase());
                    });
                })
            }}
                
            />
        </div>
    )
}

export default SearchBox;