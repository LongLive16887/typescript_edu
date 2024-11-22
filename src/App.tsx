import { MouseEvent, PropsWithChildren, useState } from 'react'
import './App.css'

interface Props extends PropsWithChildren {
	name: string
}

function App(props: Props) {
	const [count, setCount] = useState(0)

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.log('egf')
	}

	return (
		<>
			<button onClick={onClick}>Click me</button>;
		</>
	)
}

export default App
