import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import App from "next/app";

export default function SignUpPage() {
    return (
        <Container maxWidth="sm">
            <AppBar position="static" sx={{backgroundColor: '#3f51b5'}}>
                <Toolbar variant="dense">
                    <Typography variant="h6" sx={{flexGrow: 1,}}>
                        Flashcard SaaS
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    )
}