import React from 'react';
import './Sidebar.css';
import { useStateValue } from './StateProvider';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return ( 
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName} Icon={undefined}/> 
            <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 Information Center' src={undefined}/> 
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' src={undefined}/> 
            <SidebarRow Icon={PeopleIcon} title='Friends' src={undefined}/> 
            <SidebarRow Icon={ChatIcon} title='Messenger' src={undefined}/> 
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' src={undefined}/> 
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' src={undefined}/> 
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace' src={undefined}/>
        </div>
    );
}

export default Sidebar;