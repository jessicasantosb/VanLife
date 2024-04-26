import React from 'react';
import { Link } from 'react-router-dom';

function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list'>
        {vans.map(({ id, name, imageUrl, price, type }) => (
          <div key={id} className='van-tile'>
            <Link to={id}>
              <img src={imageUrl} />
              <div className='van-info'>
                <p>{name}</p>
                <p>
                  ${price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${type} selected`}>{type}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vans;
