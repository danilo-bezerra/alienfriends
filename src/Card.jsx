const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-blue pa3 grow dib shadow-5 ma2 br3 bw'>
            <img src={`https://robohash.org/${id + 20 * 2   }`} alt='robot'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )   
}

export default Card;