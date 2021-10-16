import { useState, useEffect } from 'react'

const initialFormValues = { task_text: "", isDone: false };


function Form({ addTask, tasks }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [tasks]);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = () => {
        if (form.task_text === "") {
            return false;
        }
        addTask([...tasks, form]);
        console.log("added");

    }
    const handleKeyPress = (event) => {


        if (event.key === 'Enter') {
            event.preventDefault();
            console.log(form);
            console.log('Enter key pressed');
            handleSubmit();
        }
    }
    return (
        <form>
            <div className="form">
                <input
                    name="task_text"
                    autoFocus
                    value={form.task_text}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="What needs to be done?" />
                <br />
                {form.task_text}
            </div>
        </form>
    )
}

export default Form;