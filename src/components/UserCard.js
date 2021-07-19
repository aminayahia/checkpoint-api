import React from 'react'
import {Card, Button} from "react-bootstrap"

const UserCard = ({user}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img style={{ width: '18rem' }} variant="top" src="https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/avatar.png" />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                {user.email}
                </Card.Text>
               
            </Card.Body>
        </Card>
    )
}

export default UserCard
