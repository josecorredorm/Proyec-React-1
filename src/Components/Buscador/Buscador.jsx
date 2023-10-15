import React from 'react'

const Buscador = ({Search,setSearch}) => {
    const searchValue = (event) =>{ 
        setSearch(event.target.value)
    }
  return (
    <section className='container'>
      <input className="form-control" type="text" placeholder='Buscar por nombre' onChange={searchValue} value={Search}/>
    </section>
  )
}

export default Buscador
