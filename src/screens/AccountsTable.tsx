import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Pagination, TableHeader, TableLayout } from '../components'
import { ACCOUNT_HEADERS, PER_PAGE } from '../constants'
import { usePagination } from '../hooks/usePagination'
import { IAccount } from '../types'
import { generateMockAccounts } from '../utils'

const AccountsTable: FC = () => {
	const [accountsData, setAccountsData] = useState<IAccount[]>([])
	const {
		currentPage,
		totalPages,
		data,
		handleClickNext,
		handleClickPrevious,
	} = usePagination(accountsData, PER_PAGE)
	const navigateTo = useNavigate()

	const handleClickRow = (accountId: string) => {
		navigateTo(`/accounts/${accountId}/profiles`)
	}

	useEffect(() => {
		// Imitate getting accounts from the backend
		const accounts = generateMockAccounts()
		setAccountsData(accounts)
	}, [])

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<TableHeader headerName='Accounts' />
			<TableLayout headers={ACCOUNT_HEADERS}>
				{data.map(({ accountId, email, authToken, creationDate }) => (
					<tr
						key={accountId}
						className='border-b border-gray-300 transition-colors duration-300 ease-in-out hover:bg-blue-100 cursor-pointer'
						onClick={() => handleClickRow(accountId)}
					>
						<td className='py-3 px-6 text-center'>{accountId}</td>
						<td className='py-3 px-6 text-center'>{email}</td>
						<td className='py-3 px-6 text-center'>{authToken}</td>
						<td className='py-3 px-6 text-center'>
							{creationDate?.toDateString()}
						</td>
					</tr>
				))}
			</TableLayout>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				handleClickNext={handleClickNext}
				handleClickPrevious={handleClickPrevious}
			/>
		</div>
	)
}

export default AccountsTable
