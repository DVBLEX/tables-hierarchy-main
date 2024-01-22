import { FC, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from './constants'

const App: FC = () => {
	const navigateTo = useNavigate()
	const { pathname } = useLocation()

	useEffect(() => {
		if (pathname === ROUTES.ROOT) navigateTo(ROUTES.ACCOUNTS)
	}, [pathname, navigateTo])

	return <Outlet />
}
export default App
