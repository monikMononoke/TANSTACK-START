import React from 'react';
import { House } from './house-list.vm';
import { HouseItem } from './components';

interface Props {
  houseList: House[];
}

export const HouseList: React.FC<Props> = (props) => {
  const { houseList } = props;

  return (
    <div className="grow grid grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
      {houseList.map((house) => (
        <HouseItem key={house.id} house={house} />
      ))}
    </div>
  );
};
