import { useMemo, useState } from 'react'

/**
 * Hook implementing pagination logic
 * @param data Any list
 * @param volume Amount of items per page
 */

// NOTE: better to handle pagination logic on BE side, from FE side only to pass page number into params

export const usePagination = <T>(data: T[], volume: number = 10) => {
	const [page, setPage] = useState(0)
	const totalPages = useMemo(
		() => Math.ceil(data.length / volume),
		[volume, data.length]
	)
	const slicedData = data.slice(page * volume, page * volume + volume)

	const handleClickPrevious = () => {
		setPage(page => page - 1)
	}

	const handleClickNext = () => {
		setPage(page => page + 1)
	}

	return {
		data: slicedData,
		currentPage: page,
		totalPages,
		handleClickPrevious,
		handleClickNext,
	}
}
