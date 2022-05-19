import logo from './logo.svg';
import './App.css';
import { Container,Nav,Navbar,Row,Col,Form,Button,Offcanvas,Card,Modal } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import * as Icons from 'react-bootstrap-icons';
import maps from './maps.PNG';
function App() {
  const [user, setUser] = useState(null);
  const [page,setPage]=useState("login");
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalMaps, setShowModalMaps] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const render=()=>{
    if(page==="login"){
      return  <Container style={{margin:20,maxWidth:350,paddingTop:40}}>
       <Form  onSubmit={(e)=>{
          e.preventDefault();
          setPage("home")
          setUser({name:"new crew member",sugars:0,preferences:"",desert:"",strong:0})
       }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <br>
          </br>
          <br></br>
          <Form.Group controlId="formBasicPassword">
          
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br>
          </br>
          <br></br>
          <Button  type="submit" style={{backgroundColor:"#D83752",width:100}}>
            Submit
          </Button>
       </Form>
      </Container>
    }
    if(page==="home"){
      console.log(user)
      return  <Container style={{margin:20,maxWidth:350,paddingTop:40}}>
        <Card style={{borderRadius:"10px"}}> 
        <Card.Body>
        <Card.Title>
          {user.name}
        </Card.Title>
        <br></br>
        <Card.Text style={{textAlign:"center"}}>
          <Row className="justify-content-center">
            <Col>
          <div style={{borderRadius:"50%",border:"2px solid black",height:45,width:45,backgroundColor:"#845410",textAlign:"center",padding:10,fontSize:10,fontWeight:"bold",color:"white"}}>
                {user.strong}%
              </div>
              </Col>
              <Col>
              <Row>
            <Col style={{fontSize:15,fontWeight:"bold"}}>
              Sugar: {user.sugars}
            </Col>
            </Row>
            <Row>
            <Col style={{fontSize:15,fontWeight:"bold"}}>
              Desert: {user.desert}
            </Col>
            </Row>
              </Col>
          </Row>
          
        </Card.Text>
      </Card.Body>
        </Card>
        <br></br>
        <Button style={{backgroundColor:"#D83752",width:200}} onClick={()=>{
          setShowModal(true);
        }}>
          Make a order
        </Button>
        <br></br>
        <br></br>
        <Button style={{backgroundColor:"#D83752",width:200}} onClick={()=>{
          setShowModalMaps(true);
        }}>
          Show map
        </Button>
      </Container>
    
    }
    if(page==="register"){
      return  <>
       <Container style={{margin:20,maxWidth:350,paddingTop:40}}>
       <Form onSubmit={(e)=>{
         e.preventDefault();
          setPage("home")
          setUser({name:"new crew member",sugars:0,preferences:"",desert:"",strong:0})
       }}>
       <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <br>
          </br>
          <br></br>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <br>
          </br>
          <br></br>
          <Form.Group controlId="formBasicPassword">
          
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br>
          </br>
          <br></br>
          <Button  type="submit" style={{backgroundColor:"#D83752",width:100}}>
            Submit
          </Button>
       </Form>
      </Container>
      </>
    }
  }
  return (
    <div className="App">
        <Navbar variant="dark" style={{backgroundColor:"#845410",color:"white"}}>
        <Container>
          <Navbar.Brand href="#home">
            Brew Crew
          </Navbar.Brand>

          {!user?
          <Row onClick={()=>{
            if(page==="login"){
              setPage("register")
            }
            else
            {
              setPage("login")
            }
          }}>
            <Col>
              <Icons.PersonFill size="20" />
            </Col>
            <Col>
              {!user?page=="login"?"Register":"Login":<></>}
            </Col>
          </Row>:
          <Row>
          <Col onClick={()=>{
            setPage("login")
            setUser(null)
          }}>
            <Col>
              <Icons.PersonFill size="20" />
            </Col>
            <Col>
              Logout
            </Col>
            </Col>
            <Col onClick={handleShow}>
            <Col>
              <Icons.Wrench size="20" />
            </Col>
            <Col>
              Settings
            </Col>
            </Col>
            </Row>
            
            }
          </Container>
   
        </Navbar>
        {render()}
        <Offcanvas show={show} onHide={handleClose} placement={'bottom'} style={{height:500}}>
        <Offcanvas.Header  style={{textAlign:"center"}}>
          <Offcanvas.Title style={{textAlign:"center"}}>Update Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{textAlign:"center"}}>
         <Form onSubmit={(event)=>{
          event.preventDefault();
            console.log((event.target[0].value))
            console.log((event.target[1].value))
            console.log((event.target[2].value))
            console.log((event.target[3].value))
            setUser({name:event.target[0].value,sugars:event.target[1].value,desert:event.target[3].value,strong:event.target[2].value})
            handleClose();
         }}>
         <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
            <br></br>
            <br></br>
            {/* dropwdown */}
           
            <Form.Control as="select">
              <option>Select sugar</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              </Form.Control>
            {/* progress bar  */}
            <br></br>
            <br></br>
            <Form.Range />
            <br></br>
            <br></br>
            <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter dessert" />
          </Form.Group>
          <br></br>
            <br></br>
            <Button  type="submit" style={{backgroundColor:"#D83752",width:100}}>
            Submit
          </Button>
         </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <Modal show={showModal} onHide={()=>{
        setShowModal(false)
      }
      }>
        <Modal.Header closeButton>
          <Modal.Title>Make a order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event)=>{
            event.preventDefault();
            console.log((event.target[0].value))
           
            setShowModal(false)
          }}>
          {/* select from dropdown */}
          <Form.Control as="select">
            <option>Select coffe shop</option>
            <option>Starbucks</option>
            <option>Coffee Bean</option>
            <option>5 to go</option>
            </Form.Control>
            <br></br>
            <br></br>
            <Button  type="submit" style={{backgroundColor:"#D83752",width:100}}>
            Submit
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* Modal maps */}
      <Modal show={showModalMaps} onHide={()=>{
        setShowModalMaps(false)
      }
      }>
        <Modal.Header closeButton>
          <Modal.Title>Show map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={maps} style={{height:350,width:350}}></img>

        </Modal.Body>
      </Modal>

    </div>
  );
}

export default App;
