import { FC } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorScreen: FC = () => {
	const error = useRouteError()
	console.error(error)

	return (
		<div className='flex items-center justify-center h-screen w-full bg-gray-100'>
			<div className='text-center p-8 bg-white shadow-lg rounded-md'>
				<h1 className='text-4xl font-bold text-red-600 mb-4'>Oops!</h1>
				<p className='text-gray-600 mb-4'>
					Sorry, an unexpected error has occurred.
				</p>
				<div className='text-left'>
					{isRouteErrorResponse(error) ? (
						<>
							<h2 className='text-2xl font-bold text-red-500 mb-2'>
								{error.status}
							</h2>
							<p className='text-gray-700 mb-2'>{error.statusText}</p>
							{error.data?.message && (
								<p className='text-red-600 mb-4'>{error.data.message}</p>
							)}
						</>
					) : (
						<p className='text-red-600 mb-4'>Unknown error message</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default ErrorScreen
