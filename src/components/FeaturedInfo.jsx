import React from 'react';
import './featuredinfo.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function FeaturedInfo() {
    return (
        <div className="feautured">
         <div className="featuredItem">
            <span className="feautredTitle">Total Applications <MoreHorizIcon className="threedots"/></span>
            <div className="featuredApp">
                <span className="feauturedAppNo">7956</span>
            </div>
            <span className="feauturedAppper">+3.59%<ArrowDownwardIcon className="down"/></span>
         </div>
            <div className="featuredItem">
            <span className="feautredTitle">Sorted Candidates<MoreHorizIcon className="threedots"/></span>
            <div className="featuredApp">
                <span className="feauturedAppNo">4658</span>
            </div>
            <span className="feauturedAppper">+0.6%<ArrowUpwardIcon className="up"/></span>
            </div>
            <div className="featuredItem">
            <span className="feautredTitle">Total Applications <MoreHorizIcon className="threedots"/></span>
            <div className="featuredApp">
                <span className="feauturedAppNo">1501</span>
            </div>
            <span className="feauturedAppper">-0.04%<ArrowDownwardIcon className="down"/></span>
            </div>
        </div>
    )
}

export default FeaturedInfo
