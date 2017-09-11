import React from 'react';
import {Route, Switch} from 'react-router';
import HomePage from "./containers/pages/HomePage";
import LandingPage from "./containers/pages/LandingPage";
import NotFoundPage from "./containers/pages/NotFoundPage";
import Page from "./containers/layouts/Page";
import CVPage from "./containers/pages/CVPage";
import GalleryPage from "./containers/pages/GalleryPage";
import TimelinePage from "./containers/pages/TimelinePage";
import MusicPage from "./containers/pages/MusicPage";

function scrollToTop() {
    window.scrollTo(0, 0);
}

const Routes = () => {
    return (
        <Page>
            <Switch>
                <Route key={0} exact path="/" onEnter={scrollToTop} render={() => <LandingPage/>}/>,
                <Route key={1} path="/home" onEnter={scrollToTop} render={() => <HomePage/>}/>,
                <Route key={2} path="/cv" onEnter={scrollToTop} render={() => <CVPage/>}/>,
                <Route key={3} path="/gallery" onEnter={scrollToTop} render={() => <GalleryPage/>}/>,
                <Route key={4} path="/timeline" onEnter={scrollToTop} render={() => <TimelinePage/>}/>,
                <Route key={5} path="/music" onEnter={scrollToTop} render={() => <MusicPage/>}/>,
                <Route key={6} path="*" onEnter={scrollToTop} render={() => <NotFoundPage/>}/>,
            </Switch>
        </Page>
    );
};

export default Routes;