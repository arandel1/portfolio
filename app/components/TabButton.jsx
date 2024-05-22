import React from 'react'

const TabButton = ({ active, selectTab, children}) => {

const buttonClasses = active ? 'text-sky-700 border-b border-sky-200' : 'text-black'
  
  return (
    <div>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-sky-300 text-red ${buttonClasses}`}>
          {children}
        </p>
      </button>
    </div>
  )
}

export default TabButton;
