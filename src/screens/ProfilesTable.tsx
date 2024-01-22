import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { BackButton, Pagination, TableHeader, TableLayout } from '../components'
import { PER_PAGE, PROFILE_HEADERS } from '../constants'
import { usePagination } from '../hooks/usePagination'
import { IProfile } from '../types'
import { generateMockProfiles } from '../utils'

const ProfilesTable: FC = () => {
	const [profilesData, setProfilesData] = useState<IProfile[]>([])
	const {
		currentPage,
		totalPages,
		data,
		handleClickNext,
		handleClickPrevious,
	} = usePagination(profilesData, PER_PAGE)
	const { accountID } = useParams()
	const navigateTo = useNavigate()

	const handleClickRow = (profileId: string) => {
		navigateTo(`/accounts/${accountID}/profiles/${profileId}/campaigns`)
	}

	useEffect(() => {
		// Imitate getting profiles from the backend
		const profiles = generateMockProfiles(`${accountID}`)
		setProfilesData(profiles)
	}, [])

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<TableHeader headerName='Profiles' />
			<BackButton />
			<TableLayout headers={PROFILE_HEADERS}>
				{data.map(({ profileId, marketplace, country }) => (
					<tr
						key={profileId}
						className='border-b border-gray-300 transition-colors duration-300 ease-in-out hover:bg-blue-100 cursor-pointer'
						onClick={() => handleClickRow(profileId)}
					>
						<td className='py-3 px-6 text-center'>{profileId}</td>
						<td className='py-3 px-6 text-center'>{country}</td>
						<td className='py-3 px-6 text-center'>{marketplace}</td>
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

export default ProfilesTable
