import React from 'react'
import Card from './Card'
function Dogs({dogs,removedog}) {
  return (
    <div className='container'>
      <div>
        <h1 className='title'>Man's best friend</h1>
      </div>
      <div className='cards'>
        {
            dogs.map((dog) => {
            return <Card {...dog} removedog={removedog} ></Card>
        })
        }
      </div>
    </div>
  )
}

export default Dogs


