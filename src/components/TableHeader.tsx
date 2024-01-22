import { FC } from 'react'

interface ITableHeaderProps {
	headerName: string
}

const TableHeader: FC<ITableHeaderProps> = ({ headerName }) => {
	return <h2 className='text-2xl font-semibold mb-4'>{headerName} table</h2>
}

export default TableHeader
