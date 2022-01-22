import React, { useState } from 'react';
import './useravatar.styles.scss'
import EditIcon from '@mui/icons-material/Edit';

const UserAvatar = ({ image, color }) => {
    const [isHovering, setIsHovering] = useState(false);


    const handleMouseOver = () => {
        setIsHovering(true);

    };

    const handleMouseOut = () => {
        if (isHovering) {
            setIsHovering(false);

        } else {
            return;
        }

    };
    return (
        <div className="avatarContainer">

            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='avatar-background' style={{ backgroundColor: isHovering ? color : '#161616' }}>
                <img className="avatarImage" src={image} alt="user avatar" />
                <span className='avatarName'>Main User</span>
                {isHovering ? (<span className='avatar__edit-icon' style={{ background: 'grey', borderRadius: '50%', padding: '1rem', opacity: '.5' }}> <EditIcon className='icon' fontSize='small' /> </span>) : null}
            </div>

        </div>
    )
};

export default UserAvatar;