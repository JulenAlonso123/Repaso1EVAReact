import TareaCard from "./TareaCard.jsx";

const listaTareas = ({listaTareas, completadas}) => {
    return (
        <div className="contenedor_listas">
            <h1>{completadas ? "TAREAS COMPLETADAS" : "TAREAS PENDIENTES"}</h1>
            <div className="lista_tareas">
                {
                    listaTareas.map((t)=>{
                        return t.completado === completadas ? <TareaCard tarea={t}/> : null;
                    })
                }
            </div>
        </div>
    )
}

export default listaTareas;