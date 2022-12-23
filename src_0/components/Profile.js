import './Profile.css'

export default function Profile(props) {
    return (
        <div className='profile'>
            <h1>{props.firstName}</h1>
            <img className="avatar" src='https://i.imgur.com/yXOvdOSs.jpg' />
        </div>
    )
}