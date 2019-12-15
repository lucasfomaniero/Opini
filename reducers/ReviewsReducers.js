import ReviewDAO from '../services/ReviewDAO';
import {ADDED_REVIEW} from '../services/Constants';

const INITIAL_STATE = ReviewDAO.loadReviews();

const reviewsReducers = (reviews = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDED_REVIEW:
            const {review} = action;
            return [...reviews, review];
        default:
            return reviews
    }
};

export default reviewsReducers;
