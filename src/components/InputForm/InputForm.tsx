import React, {useState} from "react";
import {Todo} from '../../types'

export interface FormProps  {
    value: string
    setValue: any //React.Dispatch<React.SetStateAction<string>>
    onSubmit: () => void
}

export const ImportForm:React.FC<FormProps> =  (props) => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [complete, setComplete] = useState()

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        props.onSubmit()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.target.value)
    }

    // const toggleTodo = (id: any) => {
    //     setTodos(
    //         todos.map((todo) => {
    //             if (todo.id !== id) return todo;
    //
    //             return {
    //                 ...todo,
    //                 done: !todo.done,
    //             };
    //         })
    //     );
    // };

    // const addTodo = (todo: any) => {
    //   if (!todo.text || /^\s*$/.test(todo.text)) {
    //     return;
    //   }
    //
    //   const newTodos: Todo[] = [todo, ...todos];
    //
    //   setTodos(newTodos);
    //
    // };

    const putTodo = (value: any): void  => {
        if (value) {
            const newTodo = {id: Date.now(), name: value, complete: false || true}
            setTodos([...todos, newTodo]);
            //setAllTodos(allTodos + 1);
        } else {
            alert("please, type the text");
        }
    };

    return (
        <form
            onSubmit={(event) => {
                handleSubmit(event)
            }}
        >
            <div>
                <input
                    type="text"
                    placeholder="Insert the text here..."
                    value={value}
                    onChange={(event) => handleChange(event)}
                    required
                />
                <button type="submit">
                    &rarr;
                </button>
            </div>
        </form>
    );
};
