import React from "react";
import { ICampaign } from "fixtures/campaign.interfaces";
import { CampaignItem } from './CampaignItem';


export interface ICampaignProps {
  campaign: ICampaign;
}

export const Campaign: React.FunctionComponent<ICampaignProps> = props => {
  const {
    id,
    title,
    description,
    budget,
    items,
    currentStatus,
    timers
  } = props.campaign;
  return (
    <div className="campaign-container">
      <h1>Campaign {title}</h1>
      {items.map( item => <CampaignItem key={item.id} campaignItem={item} />)}
      
    </div>
  );
};
