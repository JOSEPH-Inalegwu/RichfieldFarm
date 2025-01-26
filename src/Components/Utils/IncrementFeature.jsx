import { useState } from "react"

const IncrementFeature = () => {
  const [value, setValue] = useState(1)
  return (
    <>
      <div className="w-28 flex items-center justify-between rounded-full border border-teal-800 p-1">
        <div onClick={() => setValue(value => value > 1 ? value - 1 : 1)}
        className="w-8 p-1 text-white font-bold cursor-pointer bg-teal-900 flex items-center justify-center rounded-full hover:bg-teal-950"
        >
          -  
        </div>

        <p>{value}</p>

        <div  onClick={() => setValue(value => value + 1)}
        className="w-8 p-1 text-white font-bold cursor-pointer bg-teal-900 flex items-center justify-center rounded-full hover:bg-teal-950"
        >  
          +
        </div>
      </div>
    </>
  )
}

export default IncrementFeature