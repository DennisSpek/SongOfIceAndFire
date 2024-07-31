
import { Modal } from '@/ui/modal';
import { CharacterCard } from '@/components/characterCard';
import { BackNav } from '@/ui/backNav';

export default async function Page({ params }: { params: { houseId: string } }) {
  const res = await fetch('https://anapioficeandfire.com/api/houses/'+params.houseId);
  const data = await res.json();

  return (
    <Modal>
      <div className='flex'>
        <BackNav />
        <h1 className="text-4xl font-bold text-center my-8 flex-1">{data?.name}</h1>
      </div>
      <div className='flex flex-col items-center'>
        <label className='text-2xl'>Members</label>
        <div className='flex gap-4 flex-wrap p-4 justify-center h-full overflow-scroll w-full min-w-[400px] max-h-[400px]'>
          {data?.swornMembers?.length > 0 ? (
            data.swornMembers.map((character: string, key: number) => (
              <CharacterCard key={key} characterUrl={character} />
            ))
          ) : (
            <p>This house has no sworn members.</p>
          )}
        </div>
      </div>
    </Modal>
  )
}