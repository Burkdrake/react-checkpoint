import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
const styles = {
  grid:{
display:"grid",
gridTemplateColumns: "repeat(3 , 1fr)",
gap:"1rem",
  }
}
  return (
    <>
   <div>
 
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="https://gomycodelearn.blob.core.windows.net/assets/logo/fullLogo.svg" alt="logo"  width={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">service</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </div>
   <div className='container my-4'>
      <h1>Drake</h1>
      <div style={styles.grid}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m124273-0001.png?impolicy=v7-grid&imwidth=240" />
      <Card.Body>
        <Card.Title>rolex date-just</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m124273-0001.png?impolicy=v7-grid&imwidth=240" />
      <Card.Body>
        <Card.Title>rolex date-just</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m124273-0001.png?impolicy=v7-grid&imwidth=240" />
      <Card.Body>
        <Card.Title>rolex date-just</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      </div>
    </>
  )
}

export default App
