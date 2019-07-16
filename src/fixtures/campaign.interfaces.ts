import { CAMPAIGN_STATUS } from '../../constants';

export interface ICampaign {
    id: string;
    title: string;
    description: string;
    budget: number;
    items: ICampaignItem[];
    currentStatus: ICampaignStatus;
    timers: {
        startDate: string;
        endDate: string;
    }; 
    rating?: ICampaignRating;
    filters?: IFilter[];
}

type ICampaignStatus = CAMPAIGN_STATUS;

export interface ICampaignItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export interface ICampaignRating {
    rateValue: string;
    ratingComment?: string;
}

export interface IFilter {
    type: string;
    minValue: string;
    maxValue: string;
}