import PropTypes from 'prop-types'
import styles from "./styles.module.css"

export default function Profile({avatar, name, bio, phone, email, githubURL, linkedinURL}){
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar} alt={name} />
            <h2>{name}</h2>
            <div>{bio}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div className={styles.links}>
                <a href={githubURL} target='_blank' rel='noreferrer'>Github</a>
                <a href={linkedinURL} target='_blank' rel='noreferrer'>Linkedin</a>
            </div>
        </div>
    )
}

Profile.propTypes = {
    avatar: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    githubURL: PropTypes.string.isRequired,
    linkedinURL: PropTypes.string.isRequired, 
  };