import React from 'react';
import * as viewModel from './house.vm';

interface Props {
  house: viewModel.House;
}

export const House: React.FC<Props> = (props) => {
  const { house } = props;
  return (
    <div className="card">
      <div className="bg-cyan-900 p-4 rounded-t-2xl text-white">
        <h3>{house.name}</h3>
      </div>
      <div className="container p-6">
        <div>
          <img src={house.image} alt={house.name} width={500} height={500} />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center p-4">
          <div>
            <p>{house.description}</p>
            <p>
              Dirección: {house.address}, {house.city}
            </p>
            <p>
              Dormitorios: {house.bedrooms}, Camas: {house.beds}, Baños:{' '}
              {house.bathrooms}
            </p>
            <p>Precio por noche: €{house.price}</p>
          </div>

          <div>
            <h4>Reseñas:</h4>
            <ul>
              {house.reviews.map((review) => (
                <li key={review.id}>
                  <p>
                    <strong>{review.author}</strong> ({review.date}):
                    {review.comment} - Calificación: {review.rating}/5
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
