import { Link } from '@tanstack/react-router';
import { House } from '../api';

interface Props {
  house: House;
}

export const HouseItem = (props: Props) => {
  const { house } = props;

  return (
    <Link to="/houses/$id" params={{ id: house.id }}>
      <div className="item-card">
        <div
          key={house.id}
          className="flex flex-col gap-4 h-full justify-center items-center"
        >
          <div>
            <h3>{house.name}</h3>
          </div>
          <div className="w-full h-50 overflow-hidden">
            <img
              src={house.image}
              alt={house.name}
              width={300}
              height={300}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
