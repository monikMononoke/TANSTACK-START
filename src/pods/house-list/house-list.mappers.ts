import { ENV } from '#core/constants/index.js';
import * as apiModel from './api';
import * as viewModel from './house-list.vm';

export const MapHouseListFromApiToVm = (
  house: apiModel.House[]
): viewModel.House[] =>
  house.map((house) => ({
    id: house.id,
    name: house.name,
    description: house.description,
    address: house.address,
    city: house.city,
    country: house.country,
    bedrooms: house.bedrooms,
    beds: house.beds,
    bathrooms: house.bathrooms,
    price: house.price,
    image: `${ENV.BASE_PICTURES_URL}${house.image}`,
    amenities: [...house.amenities],
    reviews: MapReviewFromApiToVm(house.reviews),
  }));

const MapReviewFromApiToVm = (review: apiModel.Review[]): viewModel.Review[] =>
  review.map((review) => ({
    id: review.id,
    author: review.author,
    date: review.date,
    comment: review.comment,
    rating: review.rating,
  }));
