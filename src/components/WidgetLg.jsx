import React from 'react';
import './WidgetLg.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import {ArrowUpward} from '@material-ui/icons';

function WidgetLg() {
    return (
        <div className="widgetlarge">
            <div className="widget1">
            <h4 className="widgetLgTitle">Referals and Campaign Stats</h4>
            <div className="widgetLgTitleleft">
            <span className="CmpaignSent"><TelegramIcon className="teleIcon"/>40 Campaigns Sent in total</span>
            <span className="CampaignSentdown">4 Campaigns sent in last month</span>
            </div>
            </div>
            <div className="containerLg">
            <div className="container1">
            <h4 className="containerTitle">User's Reached</h4>
            <span className="containerper"><ArrowUpward className="ArrowICon"/>+3.59%</span>
            <span className="containerno">7956</span>
            </div>
            <div className="container1">
            <h4 className="containerTitle">Referals</h4>
            <span className="containerper"><ArrowUpward className="ArrowICon"/>+9.01%</span>
            <span className="containerno">0662</span>
            </div>
            <div className="container1">
            <h4 className="containerTitle">Shares</h4>
            <span className="containerper"><ArrowUpward className="ArrowICon"/>+39.18%</span>
            <span className="containerno">1478</span>
            </div>
            <div className="container1">
            <h4 className="containerTitle">Applications</h4>
            <span className="containerper"><ArrowUpward className="ArrowICon"/>+12.00%</span>
            <span className="containerno">0564</span>
            </div>
            </div>
            <div className="buttons">
            <button className="button1">Start a New Campaign</button>
            <button className="button2">Pause All Running Campaign</button>
            </div>
        </div>
    )
}

export default WidgetLg