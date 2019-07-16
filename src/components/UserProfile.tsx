import React from "react";
import { IReviewer } from "fixtures/reviewer.interface";

export interface IReviewerProps {
    reviewer: IReviewer
}

export const ReviewerProfile: React.FunctionComponent<IReviewerProps> = props => {
  const {
    contactInfo,
    firstName,
    imageUrl,
    lastName,
    location: {city},
    nickname,
    registrationDate,
    sex,
    userId
  } = props.reviewer;
  return (
    <div className="container">
      <h1>My Profile</h1>
      <img src={imageUrl} alt="" srcset=""/>
      <h3>{nickname}</h3>
      <div className="">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>{sex}</p>
      </div>
      <div className="contactInfo">
          <p>Email: {contactInfo.email}</p>
      </div>
      <div className="Address">
          <p>City {city}</p>
      </div>
    </div>
  );
};
