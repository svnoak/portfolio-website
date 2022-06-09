import { useParams } from 'react-router-dom';

function Project(){
    
    let { id } = useParams();
    console.log(id);
    return(
        <h1>{id}</h1>
    )
}

export default Project;