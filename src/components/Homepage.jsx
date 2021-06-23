import React from 'react';
import './Homepage.css';
import FeaturedInfo from './FeaturedInfo'
import Charts from "./Charts";
import WidgetSm from "./WidgetSm";
import WidgetLg from './WidgetLg';


function Homepage() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts/>
            <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
            </div>
        </div>
    )
}

export default Homepage
