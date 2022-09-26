import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            <span className={css.status} style={{ backgroundColor: isOnline ? "green" : "red" }}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="85" height="85" />
            <p className={css.name}>{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}