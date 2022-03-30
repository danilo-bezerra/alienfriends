import './Card.css'

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-blue pa3 grow dib shadow-5 ma2 br3 bw'>
            <img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt='robot'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )   
}

export default Card;