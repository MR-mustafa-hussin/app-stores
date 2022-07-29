import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    const handleClick= () => {
       console.log(props.Title)
    }
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
            {props.Text}
        </Card.Text>
        <Button onClick = {handleClick} variant="primary">شاهد الان</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards ;