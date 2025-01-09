const TareaCard = ({ tarea, completar, eliminar }) => {
    return (
        <div className="tarea_card">
            {!tarea.completado && (
                <input
                    type="checkbox"
                    checked={tarea.completado}
                    onChange={() => completar(tarea.id)}
                />
            )}
            <p>{tarea.titulo}</p>
            <p>{tarea.descripcion}</p>
            {!tarea.completado && tarea.diasRestantes && (
                <p>Quedan {tarea.diasRestantes}</p>
            )}
            <button onClick={() => eliminar(tarea.id)}>Eliminar</button>
        </div>
    );
};

export default TareaCard;
