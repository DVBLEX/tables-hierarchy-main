export interface IProfile {
	profileId: string
	country: string
	marketplace: string
	accountId: string
}

export interface ICampaign {
	campaignId: string
	clicks: number
	cost: number
	date: Date
	profileId: string
}

export interface IAccount {
	accountId: string
	email: string
	authToken: string
	creationDate: Date
}
