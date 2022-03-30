import './SearchBox.css'

const SearchBox = ({setArrayRobots, originRobots}) => {
    return (
        <div className='SearchBox pb3'>
            <input 
            className='tc pa3 bg-lightest-blue br2 w-w-20-l grow'
            type='text' 
            placeholder='Search a robot'
            onInput={({target}) => {
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