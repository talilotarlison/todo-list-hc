import { useState } from 'react';
import "./TodoListApp.css";
import TerefaType from "../types/TerefaType"

function TodoList() {

    const [todos, setTodos] = useState<TerefaType[]>([]); // Definir o tipo corretamente aqui
    const [inputValue, setinputValue] = useState('');
    // inserir tarefa
    let handleSubmit = (e: any) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {

            const novaTarefa: TerefaType = {
                id: self.crypto.randomUUID(),
                nome: inputValue
            }

            setTodos((todos) => [...todos, novaTarefa]);
            setinputValue('');
        }
    }

    // exluir tarefa 
    function excluirTarefa(task: any) {
        console.log(task)
        let resultado = todos.filter((taskTodo) => {
            return taskTodo.id !== task
        })
        setTodos(resultado)
    }

    return (
        <div className='list-todo'>
            <form onSubmit={handleSubmit}>
                <div className='label'>
                    <label >Qual a sua tarefa de hoje:</label>
                    <input
                        onChange={(e: any) => setinputValue(e.target.value)}
                        type="text"
                        placeholder='Digite sua tarefa aqui...'
                        value={inputValue}
                    />
                </div>

                <button
                    type='submit'>
                    Salvar Tarefa
                </button>
            </form>
            <h3 className='title-list'>Todas a suas tarefas salvas:</h3>
            <ul>
                {todos.length != 0 ? (
                    todos.map((task) => {
                        return <li key={task.id}>
                            {task.nome}
                            <button
                                className='btnDelete'
                                onClick={() => excluirTarefa(task.id)}
                            >
                                Excluir
                            </button>
                        </li>
                    })
                ) : (
                    <li className='list-vazia'>Sem tarefas salvas</li>
                )}
            </ul>
        </div>
    )
}

export default TodoList
