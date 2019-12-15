import uuid from 'uuid';

const db = [
    {id: uuid(), title: 'Matrix', description: 'Muito bom'},
    {id: uuid(), title: 'Clube da luta', description: 'Excelente!'},
    {id: uuid(), title: 'O poderoso chefão', description: 'Obra prima'}
];

export default {
    addReview: (review) => {
        console.log('adding review', review);
        const {title, description} = review;
        const entity = {id: uuid(), title, description};
        db.push(entity);
        return entity;
    },

    loadReviews: () => {
        const slice = db.slice(0);
        console.log("loading reviews", slice);
        return slice;
    }

}
