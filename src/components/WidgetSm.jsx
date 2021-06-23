import React from 'react';
import './WidgetSm.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

function WidgetSm() {
    return (
        <div className="widgetsmall">
            <span className="widgetSmTitle">New Applicants</span>
            <ul className="widgetSmList">
            <li className="widgetsmallListItems">
            <AccountCircleIcon className="widgetSmImg" />
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Rosie Mets</span>
            <span className="widgetSmUsernames">Applied for <a href="https://www.toptal.com/ios/job-description#:~:text=An%20iOS%20developer%20is%20responsible,%3A%20Objective%2DC%20or%20Swift.">IOS Developer</a></span>
            </div>
            <div className="widgetSmdiv">
            <EmailIcon className="email"/>
            <CallIcon className="callIcon"/>
            </div>
            </li>
            <li className="widgetsmallListItems">
            <AccountCircleIcon className="widgetSmImg"/>
            <div className="widgetSmUser">
            <span className="widgetSmUsername">James Scott</span>
            <span className="widgetSmUsernames">Applied for <a href="https://www.toptal.com/ios/job-description#:~:text=An%20iOS%20developer%20is%20responsible,%3A%20Objective%2DC%20or%20Swift.">Node.js Developer</a></span>
            </div>
            <div className="widgetSmdiv">
            <EmailIcon className="email"/>
            <CallIcon className="callIcon"/>
            </div>
            </li>
            <li className="widgetsmallListItems">
            <AccountCircleIcon className="widgetSmImg"/>
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Jamie Laurenson</span>
            <span className="widgetSmUsernames">Applied for <a href="https://www.toptal.com/ios/job-description#:~:text=An%20iOS%20developer%20is%20responsible,%3A%20Objective%2DC%20or%20Swift.">Marketing Manager</a></span>
            </div>
            <div className="widgetSmdiv">
            <EmailIcon className="email"/>
            <CallIcon className="callIcon"/>
            </div>
            </li>
            <li className="widgetsmallListItems">
            <AccountCircleIcon className="widgetSmImg"/>
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Elizabeth Hurton</span>
            <span className="widgetSmUsernames">Applied for <a href="https://www.toptal.com/ios/job-description#:~:text=An%20iOS%20developer%20is%20responsible,%3A%20Objective%2DC%20or%20Swift.">junior UX Designer</a></span>
            </div>
            <div className="widgetSmdiv">
            <EmailIcon className="email"/>
            <CallIcon className="callIcon"/>
            </div>
            </li>
            <li className="widgetsmallListItems">
            <AccountCircleIcon className="widgetSmImg"/>
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Danny Watson</span>
            <span className="widgetSmUsernames">Applied for <a href="https://www.toptal.com/ios/job-description#:~:text=An%20iOS%20developer%20is%20responsible,%3A%20Objective%2DC%20or%20Swift.">IOS Developer</a></span>
            </div>
            <div className="widgetSmdiv">
            <EmailIcon className="email"/>
            <CallIcon className="callIcon"/>
            </div>
            </li>
            <li className="widgetsmallListItems">
            <AccountCircleIcon className="widgetSmImg"/>
            <div className="widgetSmUser">
            <span className="widgetSmUsername">Reha Scarlett</span>
            <span className="widgetSmUsernames">Applied for <a href="https://www.toptal.com/ios/job-description#:~:text=An%20iOS%20developer%20is%20responsible,%3A%20Objective%2DC%20or%20Swift.">IOS Developer</a></span>
            </div>
            <div className="widgetSmdiv">
            <EmailIcon className="email"/>
            <CallIcon className="callIcon"/>
            </div>
            </li>
            </ul>
        </div>
    )
}

export default WidgetSm
