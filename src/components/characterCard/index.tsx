export const CharacterCard = async ({ characterUrl }: { characterUrl: string }) => {
  const res = await fetch(characterUrl);
  const {name, gender, culture, born, died, titles} = await res.json();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white w-[300px] h-[300px]">
      <div className="font-bold text-gray-700 text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">Gender: {gender}</p>
      <p className="text-gray-700 text-base">Culture: {culture || 'N/A'}</p>
      <p className="text-gray-700 text-base">Born: {born || 'Unknown'}</p>
      <p className="text-gray-700 text-base">Status: {died ? `Died: ${died}` : 'Alive'}</p>
      <p className="text-gray-700 text-base">Titles: {titles.join(', ') || 'None'}</p>
    </div>
  )
}