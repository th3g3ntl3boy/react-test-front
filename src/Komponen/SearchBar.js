import React, {useState} from 'react'
import { Form, FormControl, Button, Alert, Spinner, Container, Row, Col,Badge  } from 'react-bootstrap'
import { useLazyQuery} from '@apollo/client'
import { CARI_JUDUL } from '../Hooks/Querry'
import { Link } from 'react-router-dom';


// stylesheet

const center = {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-25px 0 0 -25px"
}

const SearchBar = () => {
    
    const [searchAlg, setAlg] = useState("")
    // const [getJudul, {loading, error, data}] = useLazyQuery(CARI_JUDUL,{
    //     variables: {judul: {contains: searchAlg}}
    // })

    // if(loading){
    //     return (
    //         <Spinner animation="border" variant="secondary" style={center}/>
    //     )
    // }

    // if(error){
    //     return(
    //         <Alert variant="danger">
    //             Coming soon...
    //         </Alert>
    //     )
    // }
    
    // console.log(data)

    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search Algorithm e.g KNN"
                    className="me-2"
                    aria-label="Search"
                    onChange={(event)=>{
                        setAlg(event.target.value);
                    }}
                />
                <Link to={`/algorithm/article/search/${searchAlg}`} style={{ textDecoration: 'none', color: 'black',textAlign: 'left' }}>
                    <Button variant="outline-secondary">Search</Button> 
                </Link>
            </Form>
            <br></br>            
        </div>
    )
}

export default SearchBar