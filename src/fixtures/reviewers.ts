import { IReviewer } from './reviewer.interface';

export const Reviewer1: IReviewer = {
    userId: '1',
    nickname: 'GlassMan1',
    firstName: 'Ivan',
    lastName: 'Ogorodnikov',
    age: 27,
    sex: 'male',
    location: {
        city: 'Moscow'
    },
    contactInfo: {
        email: 'example@yahoo.com'
    },
    registrationDate: '10/07/2019',
    imageUrl: 'https://randomuser.me/api/portraits/med/men/65.jpg'
}
export const Reviewer2: IReviewer = {
    userId: '2',
    nickname: 'Sunny243',
    firstName: 'Anna',
    lastName: 'Salnikova',
    age: 34,
    sex: 'female',
    location: {
        city: 'Moscow'
    },
    contactInfo: {
        email: 'example@yahoo.com',
    },
    registrationDate: '10/07/2019',
    imageUrl: 'https://randomuser.me/api/portraits/med/women/66.jpg'
}