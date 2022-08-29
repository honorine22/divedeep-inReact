import React from 'react'
import PlaceList from '../components/PlaceList'
const UserPlaces = () => {
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrapers in the world!',
            imageUrl:
                '/images/yeahhedo.jpg',
            address: '20 W 34th St, New York, NY 10001',
            location: {
                lat: 40.7484405,
                lng: -73.9878584
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Emp. State Building',
            description: 'One of the most famous sky scrapers in the world!',
            imageUrl:
                '/images/pleaded.png',
            address: '20 W 34th St, New York, NY 10001',
            location: {
                lat: 40.7484405,
                lng: -73.9878584
            },
            creator: 'u2'
        }
    ];
    return <PlaceList items={DUMMY_PLACES} />
}
export default UserPlaces