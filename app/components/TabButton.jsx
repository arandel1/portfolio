import React from 'react'

const TabButton = ({ active, selectTab, children}) => {

const buttonClasses = active ? 'text-black border-b border-purple-500': 'text-red'
  
  return (
    <div>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-black text-red border-b border-purple-500 ${buttonClasses}`}>
          {children}
        </p>
      </button>
    </div>
  )
}

export default TabButton
