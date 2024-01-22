import { FC } from 'react'

interface IPaginationProps {
	handleClickNext: () => void
	handleClickPrevious: () => void
	currentPage: number
	totalPages: number
}

const Pagination: FC<IPaginationProps> = ({
	handleClickNext,
	currentPage,
	handleClickPrevious,
	totalPages,
}) => {
	return (
		<nav
			className='flex items-center flex-column flex-wrap md:flex-row p-4 px-10 gap-20'
			aria-label='Table navigation'
		>
			<span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
				<span className='font-semibold text-gray-900 dark:text-white'>
					Page {currentPage + 1} of {totalPages}
				</span>
			</span>
			<ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8'>
				<li>
					<a
						className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
							currentPage === 0 ? 'pointer-events-none opacity-50' : ''
						}`}
						onClick={handleClickPrevious}
					>
						Previous
					</a>
				</li>
				<li>
					<a className='flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300'>
						{currentPage + 1}
					</a>
				</li>
				<li>
					<a
						className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 cursor-pointer hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
							currentPage + 1 === totalPages
								? 'pointer-events-none opacity-50'
								: ''
						}`}
						onClick={handleClickNext}
					>
						Next
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Pagination
