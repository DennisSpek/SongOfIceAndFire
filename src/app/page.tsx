import { HouseCard } from '@/ui/houseCard';
import { HouseCardInterface } from '@/interface/houseCard.Interface';

export default async function Home() {
  const res = await fetch('https://anapioficeandfire.com/api/houses')
  const data = await res.json()

  return (
      <div className="flex min-h-screen flex-col ">
        {
          <div>
            <h1 className="text-4xl font-bold text-center my-8">Game of Thrones Houses</h1>
            <div className="flex flex-wrap gap-4 p-4">
              {data.map((house: HouseCardInterface) => (
                <HouseCard key={house.url} house={house} />
              ))}
            </div>
          </div>
        }
      </div>
  );
}
