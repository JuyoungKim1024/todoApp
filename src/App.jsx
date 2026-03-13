import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['공부하기', '야구보기', '저녁먹기'])

    const handleOnsubmit = (e) => {
        e.preventDefault()
        const form = e.target

        setTodos([...todos, form.todo.value])
    }
    const removeTodo = () => {
        console.log('삭제')
    }
    return (
        <>
            <form onSubmit={handleOnsubmit}>
                <input type="text" name="todo" />
                <button type="submit">입력</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={removeTodo}>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
