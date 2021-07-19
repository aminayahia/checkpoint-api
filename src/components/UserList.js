

import { Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

function UserList({users, load}) {
 
    return (
        <div>
            <div className="users">
            { load ? <Spinner animation="border" /> :
            users.map( (user, key) => <UserCard user={user} key={user.id} />)
            }
           
        </div>
        </div>
    )
}

export default UserList
