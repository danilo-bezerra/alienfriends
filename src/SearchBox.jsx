import React from "react";

const SearchBox = ({setSearField }) => {

    return (
        <div className='SearchBox pa3'>
            <input 
            className='pa3 ba b--green bg-lightest-blue br3 bw0 ot0'
            type='text' 
            placeholder='Search a robot'
            onInput={(input) => {
                setSearField(input.target.value);
                }}
            />
        </div>
    )
}

export default SearchBox;