import React, {useState} from 'react'
import DeleteModal from './DeleteModal'
import AvatarChoice from './AvatarChoice'
import '../styles.scss'

const ProfileEdit = (props) => {
    const [modalState, changeModalState] = useState({display: false})
    const [passwordState, changePasswordState] = useState({display: false})
    
    const toggleModal = () => {
        changeModalState({display: !modalState.display})
    }

    const togglePassword = (event) => {
        event.preventDefault()
        changePasswordState({display: !passwordState.display})
    }

    const handleSelection = () => {
        let selection = props.avatars.filter(avatar => avatar.name === props.avatar.name)
        let obj = selection[0]
        let image
        for (let key in obj) {
            if (key === "image")
            image = obj[key]
        }
        return image
    }

    return(
        <div className="sign-up-screen">
            <div className="sign-up-form">
                <p className="edit-heading">Edit Profile</p>

                <form className="form" onSubmit={props.handleSubmit}>
                    <label>
                        <div className="username-div">
                            <p className="username-label">username</p>
                            <input className="input-field" type="text" name="username" value={props.user.username} onChange={props.handleChange}/>
                        </div>
                    </label>
                    <label>
                        <div className="password-div">
                            <p className="username-label">password</p>
                            {passwordState.display ? 
                                <input className="input-field" type="text" name="password" value={props.user.password} onChange={props.handleChange}/>
                                :
                                <input className="input-field" type="password" name="password" value={props.user.password} onChange={props.handleChange}/>
                            }   
                        </div>
                    </label>
                        {passwordState.display ? <img onClick={togglePassword} src="/game-images/hide-password.png" alt="hide password" className="eye"/> : <img onClick={togglePassword} src="/game-images/show-password.png" alt="show-password" className="eye"/>}                        
                    <br/>
                    <p className="choose-your-ride">SWITCH YOUR RIDE</p>
                <div className="avatar-frame">
                    {props.avatars.map((avatar, index) => 
                        <AvatarChoice 
                        key={avatar.id} 
                        {...avatar} 
                        number={index + 1}
                        handleRadioChange={props.handleRadioChange}
                        className={props.avatar.name === avatar.name ? "gold-border" : "none"}
                        />)}
                    <div className="inner-circle">
                        <img id="fill-this-image" src={handleSelection()} alt={handleSelection()}/>
                    </div>
                </div>
                        <input className="submit-btn" type="submit" value="Submit"/> | 
                        <button className="cancel-btn" onClick={props.toggleEdit}>Cancel</button>
                    </form>
                        <button className="delete-btn" onClick={toggleModal}>Delete Account</button>
                        {modalState.display && 
                            <DeleteModal 
                            toggleModal={toggleModal} 
                            deleteAccount={props.deleteAccount}
                            />}

            </div>
        </div>
    )
}

export default ProfileEdit