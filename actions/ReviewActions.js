import ReviewDAO from '../services/ReviewDAO';
import {ADDED_REVIEW} from '../services/Constants';
export function addReview(review) {
    const entity = ReviewDAO.addReview(review);
    return {type: ADDED_REVIEW, review: entity};
}
