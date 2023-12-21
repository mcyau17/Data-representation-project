import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddCharacter from './components/CharacterCreator';
import ViewCharacters from './components/ViewCharacters';
import CharacterEdit from './components/Characteredit';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">D&D character Hub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/CharacterCreator">Create Character</Nav.Link>
            <Nav.Link href="/ViewCharacters">My Characters</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element={<Content></Content>}></Route>
        <Route path='/ViewCharacters' element={<ViewCharacters></ViewCharacters>}></Route>
        <Route path='/CharacterCreator' element={<AddCharacter></AddCharacter>}></Route>
        <Route path='/Characteredit/:id' element={<CharacterEdit></CharacterEdit>}></Route>
      </Routes>
      {/* <Header></Header>
      <Content></Content>
      <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
