import { FC, ReactNode } from 'react'

interface ITableLayoutProps {
	headers: string[]
	children: ReactNode
}

const TableLayout: FC<ITableLayoutProps> = ({ headers, children }) => {
	return (
		<div className='w-1/2 max-h-[70vh] min-h-[30vh] overflow-auto'>
			<table className='w-full mx-auto bg-gray-100 border border-gray-300 divide-y divide-gray-300'>
				<thead className='bg-blue-500 text-white'>
					<tr>
						{headers.map(header => (
							<th
								key={header}
								scope='col'
								className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	)
}

export default TableLayout
