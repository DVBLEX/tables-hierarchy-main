import { useNavigate } from 'react-router-dom'

const BackButton = () => {
	const navigateTo = useNavigate()

	const handleGoBack = () => {
		// Go back to the previous route
		navigateTo(-1)
	}
	return (
		<button
			className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5'
			onClick={handleGoBack}
		>
			Back
		</button>
	)
}

export default BackButton
