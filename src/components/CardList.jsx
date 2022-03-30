import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div className="CardList">
            {
                robots.map(({name, id, email}) => {
                    return (
                        <Card 
                        key={id}
                        id={id} 
                        name={name} 
                        email={email}/>
                    )
                })
            }
        </div>
    );
}

export default CardList;