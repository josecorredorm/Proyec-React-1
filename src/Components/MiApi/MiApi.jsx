import { useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const MiApi = ({Info, setInfo, Search}) => {
    const [Orden, setOrden] = useState("")
    const UrlApi = "https://api.themoviedb.org/3/discover/movie?api_key"
    const ApiKey = "4715b43dca0ece73dee8655c6e1a4903"
    var datafilter =[];

    if (Search !== "") {
        datafilter = Info.filter((e) => {
            return e.title.toLowerCase().includes(Search.toLowerCase())
        })
    }else{
        datafilter = Info
    }
useEffect(() => {
    consultarApi()
},[])	

const consultarApi = async () => {
    const url = `${UrlApi}=${ApiKey}`;
    console.log(url)
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setInfo(resultado.results);  
};

const handleChange = (e) => {
    setOrden(e.target.value)
    if(e.target.value === "likes"){
        Info.sort((a, b) => {
            return b.vote_average - a.vote_average
        })
    }
    else if(e.target.value === "alfabetico"){
        Info.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })
    }
};
  return (
    <>
     <div className="container d-flex align-items-center py-3">
        <p className="form-label w-25">Ordenar por:</p>
        <select id="ordenSelect"  className="form-select" value={Orden} onChange={handleChange}> 
            <option value="likes">Mejor votado</option>
            <option value="alfabetico">Alfabetico</option>
        </select>
    </div>
    <div className="container d-flex flex-wrap justify-content-center gap-5">
           
        {datafilter.map((item) => (
            <Card key={item.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            <i className="fa-solid fa-thumbs-up"> </i> {item.vote_average}
            <br/>
            <i className="fa-solid fa-eye"></i> {item.vote_count}
            </Card.Text>
            </Card.Body>
            </Card>
        ))}
    </div>
    </>
  )
}

export default MiApi
