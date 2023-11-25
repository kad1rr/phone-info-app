import { useEffect, useState } from 'react'

const App = () => {
  const info = navigator
  const [date, setDate] = useState(new Date())
  const [battery, setBattery] = useState(1)
  const [time, setTime] = useState(date.toTimeString())

  useEffect(() => {
    console.log(navigator.getBattery())
    if (navigator.getBattery) {
      setBattery(navigator.getBattery())
    }
    setDate(new Date())
    setTime(date.toTimeString())
  })

  return (
    <div className='grid grid-cols-2 justify-between w-full h-full gap-x-6'>
      <div className='bg-gray-800/20 rounded-lg w-full h-full p-2 flex flex-col items-center justify-center gap-y-8'>
        <h1 className='text-2xl'>Battery</h1>
        <div className='w-[150px] h-[75px] rounded-full border-[8px] border-white flex flex-col items-center justify-center'>
          <p>{typeof battery === 'string' ? battery : battery * 100 + '%'}</p>
        </div>
      </div>
      <div className='bg-gray-800/20 rounded-lg w-full h-full p-2 flex flex-col items-center justify-center gap-y-8'>
        <h1 className='text-2xl'>Time</h1>
        <p>{time}</p>
        <p{JSON.stringify(navigator.getBattery())}</p>
        
      </div>
    </div>
  )
}

export default App
