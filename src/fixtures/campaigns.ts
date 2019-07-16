import {ICampaign, ICampaignItem} from './campaign.interfaces'
import { CAMPAIGN_STATUS } from '../../constants';



const design1: ICampaignItem = {
    id: 'ci1',
    title: 'good design',
    description: 'xaacepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ',
    imageUrl: 'https://picsum.photos/200',
}

const design2: ICampaignItem = {
    id: 'ci2',
    title: 'excellent design',
    description: 'ads sfll at cupidatat non proident, sunt in culpa qui officia deserunt ',
    imageUrl: 'https://picsum.photos/300',
}
const dog1: ICampaignItem = {
    id: 'ci3',
    title: 'good dog',
    description: 'xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ',
    imageUrl: 'https://placedog.net/550',
}

const dog2: ICampaignItem = {
    id: 'ci4',
    title: 'excellent dog',
    description: 'ads sdfaslnft occaecat cupidatat non proident, sunt in culpa qui officia deserunt ',
    imageUrl: 'https://placedog.net/500',
}

export const designCampaign: ICampaign = {
    id: 'c1',
    title: 'Design A/B testing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
    budget: 100,
    items: [design1, design2],
    currentStatus: CAMPAIGN_STATUS.PLANNING,
    timers: {
        startDate: '10/07/2019',
        endDate: '25/07/2019',
    }
}
export const dogsCampaign: ICampaign = {
    id: 'c2',
    title: 'dogs lovers',
    description: 'please choose the dog u love',
    budget: 100,
    items: [dog1, dog2],
    currentStatus: CAMPAIGN_STATUS.PLANNING,
    timers: {
        startDate: '10/07/2019',
        endDate: '25/07/2019',
    }
}


