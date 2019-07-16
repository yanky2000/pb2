import React from "react";
import { ICampaignItem } from "../../fixtures/campaign.interfaces";

export interface ICampaignItemProps {
    campaignItem: ICampaignItem;
}

export const CampaignItem: React.FunctionComponent<ICampaignItemProps> = props => {
  const {
    id,
    title,
    description,
    imageUrl,
  } = props.campaignItem
  return (
    <div className="campaignItem-container">
      <h1>Item title: {title}</h1>
      <img src={imageUrl} />
      <p>Description: {description}</p>
    </div>
  );
};
