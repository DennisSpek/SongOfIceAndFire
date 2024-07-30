import Link from 'next/link';
import { HouseCardInterface } from '@/interface/houseCard.Interface';


export const HouseCard = ({ house }: {house: HouseCardInterface}) => {
  const id = house.url.split('/').pop();

  return (
    <Link href={`${+id!}`}>
      <div key={house.url} className="flex w-[300px] h-[300px] flex-col p-4 border border-gray-200 rounded-md shadow-md my-4 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
        <h1 className="text-2xl font-bold">{house.name}</h1>
        <p className="text-lg font-semibold">Region: {house.region}</p>
        <p className="text-lg font-semibold">Coat of Arms: {house.coatOfArms}</p>
        <p className="text-lg font-semibold">Words: {house.words}</p>
      </div>
    </Link>
  )
};