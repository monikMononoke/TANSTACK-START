import { ENV } from '#core/constants';
import * as apiModel from './api';
import * as viewModel from './house.vm';

export const mapHouseFromApiToVm = (
  house: apiModel.House
): viewModel.House => ({
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
  amenities: house.amenities,
  reviews: house.reviews.map(mapHouseReviewFromApiToVm),
});

export const mapHouseReviewFromApiToVm = (
  review: apiModel.Review
): viewModel.Review => {
  return {
    id: review.id,
    author: review.author,
    date: review.date,
    comment: review.comment,
    rating: review.rating,
  };
};
