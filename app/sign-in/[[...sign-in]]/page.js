'use client';

import { Container, AppBar, Toolbar, Typography, Box, Button, Divider, Paper, fontWeight } from "@mui/material";
import { SignIn } from "@clerk/nextjs";
import Link from 'next/link';

export default function SignUpPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #1f4037, #99f2c8)',
            py: 6
        }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', mb: 10 }}>
                <Toolbar variant="dense">
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff' }}>
                        Flashcard SaaS
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="sm">
                <Paper elevation={10} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            textAlign: 'center',
                            background: '#fff',
                            p: 4,
                            borderRadius: '16px'
                        }}
                    >
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1f4037' }}>
                            Create Your Account
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }} >
                            Join Flashcard SaaS today and start creating your own flashcards effortlessly.
                        </Typography>

                        <SignIn />
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
