const ROUTES = {
	ROOT: '/',
	ACCOUNTS: 'accounts',
	PROFILES: 'accounts/:accountID/profiles',
	CAMPAIGNS: 'accounts/:accountID/profiles/:profileID/campaigns',
}

const ACCOUNT_HEADERS = ['account Id', 'email', 'auth Token', 'creation Date']
const PROFILE_HEADERS = ['profile Id', 'country', 'marketplace']
const CAMPAIGN_HEADERS = ['campaign Id', 'clicks', 'cost', 'date']

const SORT_COST = 'cost'
const SORT_CLICKS = 'clicks'

const PER_PAGE = 10

export {
	ACCOUNT_HEADERS,
	CAMPAIGN_HEADERS,
	PER_PAGE,
	PROFILE_HEADERS,
	ROUTES,
	SORT_CLICKS,
	SORT_COST,
}
