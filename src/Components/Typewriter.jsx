import { useState, useEffect } from 'react'

const roles = [
	'Software Engineer',
	'Full-stack Developer',
	'Gamer',
	'Web Developer',
	'Musician',
	'Game Developer',
]

const Typewriter = () => {
	const [text, setText] = useState('')
	const [index, setIndex] = useState(0)
	const [charIndex, setCharIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		const currentRole = roles[index]

		const typingSpeed = isDeleting ? 50 : 100
		const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1

		if (!isDeleting && charIndex === currentRole.length) {
			// Pause before deleting
			setTimeout(() => setIsDeleting(true), 1000)
		} else if (isDeleting && charIndex === 0) {
			// Move to next word after deleting
			setIsDeleting(false)
			setIndex((prev) => (prev + 1) % roles.length)
		}

		const timeout = setTimeout(() => {
			setText(currentRole.substring(0, nextCharIndex))
			setCharIndex(nextCharIndex)
		}, typingSpeed)

		return () => clearTimeout(timeout)
	}, [charIndex, isDeleting, index])

	return (
		<span className='text-white'>
			{text}
			<span className='text-secondary'>|</span>
		</span>
	)
}

export default Typewriter
