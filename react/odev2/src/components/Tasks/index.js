import { useState } from 'react';

import List from './List';
import Form from './Form';

function Tasks() {
    const [tasks, setTasks] = useState([
        {
            task_text: "bulaşıkları yıka", isDone: false
        },
        {
            task_text: "evi süpür", isDone: false
        },
        {
            task_text: "hocaya mail at", isDone: false
        },
        {
            task_text: "kitap oku", isDone: false
        },
        {
            task_text: "kahve yap", isDone: false
        }
    ]);

    return (
        <div id="container">
            <Form addTask={setTasks} tasks={tasks} />

            <br />
            <br />
            <List tasks={tasks} />
        </div>
    );
}

export default Tasks;