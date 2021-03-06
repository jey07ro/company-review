import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReviewsContainer as Reviews } from './containers/Reviews';
import { YourReviewContainer as YourReview } from './containers/YourReview';
import { ReviewsAddContainer as ReviewsAdd } from './containers/ReviewsAdd';
import { CompanyContainer as Company } from './containers/Company';
import { FilterReviewsContainer as FilterReviews } from './containers/FilterReviews';
import { ModalProvider } from 'styled-react-modal'
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { uniq } from './utils/uniq';
import { store } from './store';
import { theme } from './theme';
import { fetchReviews } from './actions/reviews';

const AppLayout = styled.div`
    margin: auto;
    padding: 15px;
    font-size: 13px;
    width: 500px;
`;

const FilterReviewLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
        margin-left: none;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

class App extends Component {

    renderReviews = ({ history }) => [
        <Company key={uniq`review`} />,
        <YourReview key={uniq`review`} history={history} />,
        <Reviews key={uniq`review`} history={history} />,
        <FilterReviewLayout key={uniq`review`}>
            <FilterReviews history={history}/>
        </FilterReviewLayout>,
    ];

    renderReviewsAdd = ({ history }) => (
        <ReviewsAdd history={history} />
    );

    componentDidMount = () => {
        store.dispatch(fetchReviews());
    }

    render = () => (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ModalProvider>
                    <Router>
                        <AppLayout>
                            <GlobalStyle />
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={this.renderReviews}
                                />
                                <Route
                                    exact
                                    path="/reviews"
                                    component={this.renderReviews}
                                />
                                <Route
                                    exact
                                    path="/reviews/add"
                                    component={this.renderReviewsAdd}
                                />
                            </Switch>
                        </AppLayout>
                    </Router>
                </ModalProvider>
            </ThemeProvider>
        </Provider>
    );
}

export { App };
