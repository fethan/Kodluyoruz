function List({ tasks }) {
    return (
        <div className="list">
            <h1>Task List</h1>
            <ul className="taskList">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task.task_text}</span>
                        <br />
                        <span>{task.isDone}</span>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default List;

