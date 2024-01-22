import { IAccount, ICampaign, IProfile } from '../types'

// NOTE: Here we temporary generate data which we gonna get from BE

const generateMockProfiles = (accountId: string): IProfile[] => {
	return Array.from({ length: 23 }, (_, profileId) => ({
		profileId: `${accountId}-${profileId + 1}`,
		country: `Country${accountId}-${profileId + 1}`,
		marketplace: `Marketplace${accountId}-${profileId + 1}`,
		accountId,
	}))
}

const generateMockCampaigns = (profileId: string): ICampaign[] => {
	return Array.from({ length: 10 }, (_, campaignId) => ({
		campaignId: `${profileId}-${campaignId + 1}`,
		clicks: Math.floor(Math.random() * 100),
		cost: +(Math.random() * 1000).toFixed(2),
		date: new Date(),
		profileId,
	}))
}

const generateMockAccounts = (): IAccount[] => {
	return Array.from({ length: 15 }, (_, accountId) => ({
		accountId: `${accountId + 1}`,
		email: `account${accountId + 1}@example.com`,
		authToken: `token${accountId + 1}`,
		creationDate: new Date(),
	}))
}

export { generateMockAccounts, generateMockCampaigns, generateMockProfiles }
