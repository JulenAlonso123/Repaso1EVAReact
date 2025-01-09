import TareaCard from "./TareaCard.jsx";

const ListaTareas = ({ listaTareas, completadas, completar, eliminar }) => {
    return (
        <div className="contenedor_listas">
            <h1>{completadas ? "TAREAS COMPLETADAS" : "TAREAS PENDIENTES"}</h1>
            <div className="lista_tareas">
                {listaTareas.map((t) => {
                    return t.completado === completadas ? (
                        <TareaCard
                            key={t.id}
                            tarea={t}
                            eliminar={eliminar}
                            completar={completar}
                        />
                    ) : null;
                })}
            </div>
        </div>
    );
};

export default ListaTareas;
