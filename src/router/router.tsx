import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import { ROUTES } from '../constants'
import {
	AccountsTable,
	CampaignsTable,
	ErrorScreen,
	ProfilesTable,
} from '../screens'

export const router = createBrowserRouter([
	{
		path: ROUTES.ROOT,
		element: <App />,
		errorElement: <ErrorScreen />,
		children: [
			{
				path: ROUTES.ACCOUNTS,
				element: <AccountsTable />,
			},
			{
				path: ROUTES.PROFILES,
				element: <ProfilesTable />,
			},
			{
				path: ROUTES.CAMPAIGNS,
				element: <CampaignsTable />,
			},
		],
	},
])
