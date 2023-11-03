import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { getUser } from '../../service/authorize';

// eslint-disable-next-line react/prop-types
function MyCard({title,author,publishYear,onDelete,onUpdate,onRead}) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}
        </Card.Text>
        <Card.Text>
          {publishYear}
        </Card.Text>
        {getUser() && (
        <div>
          <Button variant="danger" onClick={onDelete}>DELETE</Button>
          <Button variant="warning" onClick={onUpdate}>Update</Button>
        </div>
      )}

        
        <Button variant="success" onClick={onRead}>Reading</Button>


      </Card.Body>
    </Card>
    </>
  )
}

MyCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishYear: PropTypes.number.isRequired,

};

export default MyCard
