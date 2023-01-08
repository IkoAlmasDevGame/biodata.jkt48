import { Container, Navbar, Nav } from 'react-bootstrap';
import logoJKT from '../Assets/logo.svg';

const NavigationBar = () => {
    return(
        <div>
            <header style={{backgroundColor : "whitesmoke"}}>
                <div>
                    <Navbar variant='white' expand='lg' style={{fontSize : "medium", fontWeight : "500", letterSpacing : "1px"}}>
                        <Container>
                            <img src={logoJKT} alt="JKT Logo" onError={"this.onerror=null; this.src='/images/logo.png'"}
                            style={{height : "90px", width : "65px"}}/>
                            <div className='me-auto pt-2'>
                                <h1 style={{fontSize : "16px", textAlign : "start", marginLeft : "10px", color : "red"}}>JKT 48</h1>
                                <h1 style={{fontSize : "16px", display : "flex", justifyContent : "center",
                                position : "relative", marginLeft : "10px", color : "red"}}>OFFICIAL Web Site</h1>
                            </div>
                            <div className='mx-auto pt-1' style={{
                                fontSize : "14px", display : "flex", position : "relative",
                                justifyContent : "center", alignItems : "center", backgroundColor : "red", 
                                width : "350px", height : "27px", marginTop : "0.5rem", backgroundSize : "cover"
                            }}>
                                <div><Nav.Link href='#home' style={{marginLeft : "8px", fontSize : "15px", 
                                color : "white", textShadow : "2px 1px black"}}>Home</Nav.Link></div>
                                <div><Nav.Link href='#about' style={{marginLeft : "8px", fontSize : "15px", 
                                color : "white", textShadow : "2px 1px black"}}>About</Nav.Link></div>
                                <div><Nav.Link href='' style={{marginLeft : "8px", fontSize : "15px", 
                                color : "white", textShadow : "2px 1px black"}}>Contact</Nav.Link></div>
                                <div><Nav.Link href='#member' style={{marginLeft : "8px", fontSize : "15px",
                                color : "white", textShadow : "2px 1px black"}}>Member JKT48</Nav.Link></div>
                            </div>
                        </Container>
                    </Navbar>
                </div>  
            </header>
        </div>
    );
}

export default NavigationBar