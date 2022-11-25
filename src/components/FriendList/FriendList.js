import  PropTypes from 'prop-types'
import css from './FriendList.module.css';

export const FriendList = ({ friend: { avatar, name, isOnline, id } }) => {
    return (
        <ul className={css.frlist}>
            <li className={css.item} key={id}>
                <span className={`${css[isOnline]}`}>{isOnline}o</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        </ul >
    );
};

FriendList.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
  }).isRequired,
};