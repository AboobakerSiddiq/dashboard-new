import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Topbar() {
    return (
        <div className="topbar">
          <div className="topbarwrapper">
            <div className="topleft">
                <span className="logo">.logo</span>
            </div>
            <div className="Bothdiv">
            <div className="firstRow">
            <div className="topright">
                <div className="topbarIconsContainer">
                    <NotificationsNoneIcon/>
                </div>
                <img src="https://wallpapercave.com/wp/wp4263899.jpg" alt="" className="topAvatar"/>
                <div className="topbarIconsContainer">
                    <ExpandMoreIcon/> 
                </div>
                </div>
                <div className="SecondRow">
                <div className="button-div">
                <button className="addButton">+Add</button>
                </div>
                <div className="Searchdiv">
                <input placeHolder="Search Applicants" className="inputtop"/>
                </div>
                </div>
                </div>
            </div> 
          </div>
            
        </div>
    )
}

export default Topbar
