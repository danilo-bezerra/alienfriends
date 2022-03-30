const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-blue pa3 grow dib shadow-5 ma2 br3 bw'>
            <img src={`https://robohash.org/${id ** 5 + 2}?set=set2&size=250x250&bgset=bg1`} alt='robot' className='br2 grow'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )   
}

export default Card;