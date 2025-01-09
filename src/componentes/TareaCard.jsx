const TareaCard = ({tarea,completar,eliminar}) =>{
    return(
        <div className="tarea_card">
            {!tarea.completado && <input type="checkbox" onClick={completar}/>}
            <p>{tarea.titulo}</p>
            <p>{tarea.descripcion}</p>
            {!tarea.completado && <p>Quedan {tarea.diasRestantes}</p>}
            <button>Eliminar</button>
        </div>
    )
}

export default TareaCard;

