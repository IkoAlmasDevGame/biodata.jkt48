import { Card, CardImg } from 'react-bootstrap';

import zee from '../Assets/zee.jpg';
import freya from '../Assets/freya.jpg';
import sisca from '../Assets/sisca.jpg';
import shani from '../Assets/shani.jpg';

const MemberJKT = () => {

    const dataMember = [
        {
            id : 1,
            src : zee,
            "judul" : "Azizi Asadel",
            "member" : "JKT48 New Era",
            "datebirthday" : "16 Mei 2004",
            "golongan" : "O",
            "zodiak" : "Gemini",
            "tb" : "162cm",
            "np" : "Zee"
        },{
            id : 2,
            src : freya,
            "judul" : "Freya Jayawardana",
            "member" : "JKT48 New Era",
            "datebirthday" : "13 Februari 2006",
            "golongan" : "B",
            "zodiak" : "Aquarius",
            "tb" : "154cm",
            "np" : "freya"
        },{
            id : 3,
            src : sisca,
            "judul" : "Fransisca Saraswati Puspa Dewi",
            "member" : "JKT48 New Era",
            "datebirthday" : "24 Februari 2000",
            "golongan" : "O",
            "zodiak" : "Pieces",
            "tb" : "163cm",
            "np" : "sisca"
        },{
            id : 4,
            src : shani,
            "judul" : "Shani Indira Natio",
            "member" : "JKT48 New Era",
            "datebirthday" : "5 Oktober 1998",
            "golongan" : "B",
            "zodiak" : "Libra",
            "tb" : "167cm",
            "np" : "shani"
        }
    ];

    return(
        <div>
            <header id='member' className='text-center pt-5 mt-5'>
                <h1 style={{fontWeight : "500", fontSize : "24px"}}>Member JKT48 Idol</h1>
            </header>
            {
                dataMember.map(({id,src,judul,member,datebirthday,golongan,zodiak,tb,np})=>(
                <Card key={id}>
                    <CardImg 
                        src={src} alt='Azizi Asadel' style={{width : "274px", width : "204px", margin : "auto"}}
                    />
                    <Card.Header>
                        <Card.Title className='fw-normal text-center'>{judul}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <p className=''>Nama Lengkap : {judul}</p>
                        <p className=''>Member : {member}</p>
                        <p className=''>Tanggal Lahir : {datebirthday}</p>
                        <p className=''>Golongan darah : {golongan}</p>
                        <p className=''>Zodiak : {zodiak}</p>                        
                        <p className=''>Tinggi badan : {tb}</p>                        
                        <p className=''>Nama panggilan : {np}</p>                        
                    </Card.Body>
                </Card>    
                ))
            }
        </div>
    );
}

export default MemberJKT