import { Container } from '@mui/material';
import DoneTodo from './DoneTodo';

function DoneTodosList({ doneTodos, deleteOne }) {
    const containerStyle = {
        border: "1px solid #50fa7b"
    }

    return ( 
        <Container style={containerStyle}>
            <h1>Track Record of Success</h1>
            {console.log(doneTodos)}
            {doneTodos.map((todo, index) => {
                return <DoneTodo key={index} doneTodo={todo} index={index} deleteOne={deleteOne}></DoneTodo>
            })}
        </Container>
     );
}

export default DoneTodosList;