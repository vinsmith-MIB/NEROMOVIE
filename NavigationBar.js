import { Nav, Navbar, Container } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div className=" wrapper">
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">NEROMOVIE</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                        <Nav.Link href="#romance">ROMANCE</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}


export default NavigationBar