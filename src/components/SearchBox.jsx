import './SearchBox.css'

const SearchBox = ({setArrayRobots, originRobots}) => {
    return (
        <div className='SearchBox pa3 pb3'>
            <input 
            className='pa3 bg-lightest-blue br3'
            type='text' 
            placeholder='Search a robot'
            onInput={({target}) => {
                console.log("filtrei")
                setArrayRobots(() => {
                    return originRobots.filter(robot => {
                        return robot.name.toLowerCase().includes(target.value.toLowerCase());
                    });
                })
            }}
                
            />
        </div>
    )
}

export default SearchBox;