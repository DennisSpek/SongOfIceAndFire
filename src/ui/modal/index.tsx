export function Modal({
  children,
}: {
  children: React.ReactNode,
}) {
  return(
    <>
      <div className='absolute z-10 top-0 left-0 w-full h-full bg-black/[.9] flex items-center justify-center'>
        <div className='p-4 rounded-lg shadow-sm bg-black'>
          {children}
        </div>
      </div>
    </>
  );
}