import { connect } from 'react-redux';
import { Company } from '../components/Company';


export const CompanyContainer = connect(
    state => ({
        review: state.reviews.item,
        reviews: state.reviews.items,
    }),
    {}
)(Company);
