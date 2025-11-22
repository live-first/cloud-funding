export const ContentsView = () => {
  return (
    <div className='flex flex-col gap-6 py-12'>
      <Outline />
      <Return />
    </div>
  )
}

const Outline = () => {
  return (
    <div className='flex flex-col'>
      <h2>概要</h2>
    </div>
  )
}

const Return = () => {
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6'></div>
    </div>
  )
}
