import {Card, Button} from 'react-bootstrap'

const UserCard = ({image, username, balance})=> {

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Name: {username}</Card.Title>
          <Card.Text>Your balance: {balance} tokens</Card.Text>
          <Button variant="primary">Edit my profile</Button>
        </Card.Body>
      </Card>
    )
}

export default UserCard