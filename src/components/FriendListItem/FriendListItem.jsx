import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css'


export default function FriendListItem({isOnline, name, avatar}) {
    const statusText = isOnline ? 'Online' : 'Offline';
    const statusClass = isOnline ? css.online : css.offline;
        
    return (
        <li className={css.item}>
        <div className={css.statusWrapper}>
        <span className={`${css.statusText} ${statusClass}`}>{statusText}</span>
      </div>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}