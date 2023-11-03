import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function ReadCard({title,author,publishYear}) {
  return (
    <>
      <Card style={{ width: '18rem',background:'#3444' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}
        </Card.Text>
        <Card.Text>
          {publishYear}
        </Card.Text>
       


      </Card.Body>
    </Card>
    </>
  )
}

ReadCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishYear: PropTypes.number.isRequired,

};

export default ReadCard
