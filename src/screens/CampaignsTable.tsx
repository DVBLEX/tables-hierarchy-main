import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BackButton, Pagination, TableHeader, TableLayout } from '../components'
import {
	CAMPAIGN_HEADERS,
	PER_PAGE,
	SORT_CLICKS,
	SORT_COST,
} from '../constants'
import { usePagination } from '../hooks/usePagination'
import { ICampaign } from '../types'
import { generateMockCampaigns } from '../utils'

const CampaignsTable: FC = () => {
	const [campaignsData, setCampaignsData] = useState<ICampaign[]>([])
	const [sortBy, setSortBy] = useState<string>(SORT_COST) // Default sort by cost
	const {
		currentPage,
		totalPages,
		data,
		handleClickNext,
		handleClickPrevious,
	} = usePagination(campaignsData, PER_PAGE)
	const { accountID, profileID } = useParams()

	const handleSortChange = ({
		target,
	}: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(target.value)
		setCampaignsData(prevCampaigns =>
			prevCampaigns.sort((a, b) =>
				target.value === SORT_COST ? a.cost - b.cost : a.clicks - b.clicks
			)
		)
	}

	useEffect(() => {
		// Imitate getting campaigns from the backend
		const campaigns = generateMockCampaigns(`${accountID}-${profileID}`)
		// default sort by cost
		const sortedCampaigns = campaigns.sort((a, b) => a.cost - b.cost)
		setCampaignsData(sortedCampaigns)
	}, [accountID, profileID])

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<TableHeader headerName='Campaigns' />
			<div className='flex items-center'>
				<BackButton />
				<div className='ml-4'>
					<label htmlFor='sortBy' className='mr-2'>
						Sort by:
					</label>
					<select
						id='sortBy'
						name='sortBy'
						value={sortBy}
						onChange={handleSortChange}
						className='bg-white border border-gray-300 rounded px-3 py-1'
					>
						<option value={SORT_COST}>Cost</option>
						<option value={SORT_CLICKS}>Clicks</option>
					</select>
				</div>
			</div>
			<TableLayout headers={CAMPAIGN_HEADERS}>
				{data.map(({ campaignId, clicks, cost, date }) => (
					<tr
						key={campaignId}
						className='border-b border-gray-300 transition-colors duration-300 ease-in-out hover:bg-blue-100 cursor-pointer'
					>
						<td className='py-3 px-6 text-center'>{campaignId}</td>
						<td className='py-3 px-6 text-center'>{clicks}</td>
						<td className='py-3 px-6 text-center'>{cost}</td>
						<td className='py-3 px-6 text-center'>{date.toDateString()}</td>
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

export default CampaignsTable
