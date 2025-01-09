import { useState } from 'react'
import './App.css'
import Tarea from "./models/Tarea.js";
import ListaTarea from "./componentes/ListaTarea.jsx";

function App() {
    const [listaTareas,setListaTareas] = useState([])
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fechaLimite, setFechaLimite] = useState(Date.now)

    const handleTituloChange = (e) => {
        setTitulo(e.target.value)
    }
    const handleDescripcion = (e) => {
        setDescripcion(e.target.value)
    }
    const handleFechaLimiteChange = (e)=> {
        setFechaLimite(Date.parse(e.target.value))
    }
    const handleAgregarClick = () => {
        setListaTareas([
            ...listaTareas,
            new Tarea(crypto.randomUUID(), titulo, descripcion, fechaLimite, false)
        ])
    }
    const handleCompletarChange = (id) => {
        setListaTareas.map((t) => {
            if(t.id === id){
                t.completado = true;
                return t;
            }
            return t;
        })
    }

    const handleEliminarClick= (id) => {
        /*Filtro las tareas y solo cojo las que el id no sea igual que el que pasamos como parametro
        * Por cada tarea comrpuebo si su id es el que pasamos como parametro. Si lo es devolvemos el objeto con
        * el valor de completado cambiado. Si no lo es devolvemos el objeto tal cual esta */

        setListaTareas(listaTareas.filter((t)=> t.id !== id))
    }

  return (
    <>
      <div className="contenedor_header">
        <h1>CONTROL TAREAS</h1>
      </div>
      <div className="contenedor_inputs">
        <p>Titulo</p>
        <input type="text" onChange={handleTituloChange}/>
        <p>Descripcion</p>
        <input type="text" onChange={handleDescripcion}/>
        <p>Fecha Límite</p>
        <input type="date" onChange={handleFechaLimiteChange}/>
        <button onClick={handleAgregarClick}>Agregar</button>
      </div>
        <div className="contenedor_listas">
            <ListaTarea
                listaTareas={listaTareas}
                completadas={false}
                eliminar={handleEliminarClick}
                completar={handleCompletarChange}/>
            <ListaTarea
                listaTareas={listaTareas}
                completadas={true}
                eliminar={handleEliminarClick}
                completar={handleCompletarChange}/>
        </div>
    </>
  )
}

export default App
