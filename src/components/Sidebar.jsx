import React, { Component } from 'react'
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FolderIcon from '@material-ui/icons/Folder';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MessageIcon from '@material-ui/icons/Message';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebarwrapper">
                    <div className="sidebarMenu">
                    <div className="sidebarTop">
                     <div className="x">
                       <HomeIcon className="sidebarIcon"/>
                     </div>                       
                     <div  className="x"><EqualizerIcon className="sidebarIcon"/></div>
                     <div className="x"><CameraAltIcon className="sidebarIcon"/></div>      
                      
                     <div className="x"><FolderIcon className="sidebarIcon"/></div> 
                     <div className="x"><EventAvailableIcon className="sidebarIcon"/></div>  
                     <div className="x"><PeopleAltIcon className="sidebarIcon"/></div>  
                     <div className="x"><MessageIcon className="sidebarIcon"/></div>  
                     <div className="x"><ExitToAppIcon className="sidebarIcon"/></div>  
                    </div>
                    <div className="sidebarBottom">
                        <SettingsIcon className="sidebarIcon"/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
