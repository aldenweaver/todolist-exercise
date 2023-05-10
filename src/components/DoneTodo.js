import { Button, Card, Container, Icon, IconButton, Typography } from "@mui/material";
import { Done, Delete, Cancel } from "@mui/icons-material";
import DeleteDialog from "./DeleteDialog";

function DoneTodo({ index, doneTodo, deleteOneDone }) {
    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid",
        borderRadius: "5px",
        height: "100%",
    };

    return ( 
        <Container style={containerStyle}>
            <Typography
                variant="h5">
                {doneTodo.content}
            </Typography>
            <DeleteDialog index={index} deleteOne={deleteOneDone}></DeleteDialog>
        </Container>
     );
}

export default DoneTodo;