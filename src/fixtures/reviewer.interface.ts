export interface IReviewer extends IUser {
    rating?: IReviewerRating;
    balance?: number;
}

export interface IUser {
    userId: string;
    nickname: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    // birth date
    gender: Igender,
    location: ILocation,
    contactInfo: IContactInfo,
    registrationDate: string;
    imageUrl?: string;
}

export interface IContactInfo {
    email: string;
    phoneNo?: string;
    workNo?:string;
    pageUrl?:string;
    // + social media
}

export interface ILocation {
    city: string;
    region?:string;
    street?: string;
    aptNo?: string;
    zipCode?: number;
    country?: string;
}

type IReviewerRating = string;

type Igender = 'male' | 'female'