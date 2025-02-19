import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1>Hi, I'm Jacob</h1>
			<div>I am reconstructing my portfolio to use react. Come back soon!</div>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	)
}

export default App
