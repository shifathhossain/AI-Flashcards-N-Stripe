'use client';

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Typography, Toolbar, Button, Box, Container, Grid, Paper } from "@mui/material";
import Head from "next/head";

export default function Home() {

  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000', //Remember to change this to domain
      },
    })

    const checkoutSessionJson = await checkoutSession.json()
    
    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message)
      return
    }
  
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
  
    if (error) {
      console.warn(error.message)
    }
  }
  
  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #99f2c8, #1f4037, #99f2c8)', minHeight: '100vh', paddingTop: '64px' }}>
      <Head>
        <title>MemorAI</title>
        <meta name="description" content="Create your flashcards with AI" />
      </Head>

      <AppBar position="fixed" sx={{ backgroundColor: '#1f4037' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#f0fdfa', fontFamily: 'Lucida Handwriting' }}>
            MemorAI
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in" sx={{ color: '#f0fdfa', mr: 1 }}>Login</Button>
            <Button color="inherit" href="/sign-up" sx={{ color: '#f0fdfa', border: '1px solid #f0fdfa', borderRadius: '20px', px: 3 }}>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
          Welcome to MemorAI
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#3b8077' }}>
          The easiest way to create flashcards from your text.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" sx={{ mt: 2, mr: 2, py: 1.5, px: 4, borderRadius: '20px', backgroundColor: '#1f4037', color: '#f0fdfa', '&:hover': { backgroundColor: '#184734' } }} href="/generate">
            Get Started
          </Button>
          <Button variant="outlined" sx={{ mt: 2, py: 1.5, px: 4, borderRadius: '20px', borderColor: '#1f4037', color: '#1f4037', '&:hover': { borderColor: '#184734', backgroundColor: '#f0fdfa' } }}>
            Learn More
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: '#1f4037' }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: '12px', backgroundColor: '#f0fdfa' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1f4037' }}>
                Easy Text Input
              </Typography>
              <Typography sx={{ color: '#3b8077' }}>
                Simply input your text and let our software do the rest. Creating flashcards has never been easier.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: '12px', backgroundColor: '#f0fdfa' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1f4037' }}>
                Advanced Flashcard Generation
              </Typography>
              <Typography sx={{ color: '#3b8077' }}>
                Our model leverages the latest version of ChatGPT to deliver the best flashcards tailored for your studies.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: '12px', backgroundColor: '#f0fdfa' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1f4037' }}>
                Effortless Creation
              </Typography>
              <Typography sx={{ color: '#3b8077' }}>
                With our intuitive design, creating flashcards is seamless and efficient. Just input your text and watch the magic happen.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1f4037', mb: 4 }}>
          Pricing Plans
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Standard Plan */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={6} 
              sx={{ 
                p: 6, 
                borderRadius: '12px', 
                backgroundColor: '#1f4037', 
                color: '#f0fdfa', 
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Standard
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                $9.99/month
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                - Access to all features
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                - Unlimited flashcard sets
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                - Priority support
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                - Custom themes
              </Typography>
              <Button variant="contained" sx={{ mt: 4, borderRadius: '20px', backgroundColor: '#f0fdfa', color: '#1f4037' }}>
                Choose Standard
              </Button>
            </Paper>
          </Grid>

          {/* Premium Plan */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={6} 
              sx={{ 
                p: 6, 
                borderRadius: '12px', 
                backgroundColor: '#f0fdfa', 
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#1f4037' }}>
                Premium
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#1f4037' }}>
                $19.99/month
              </Typography>
              <Typography variant="body1" color="#3b8077" sx={{ mb: 2 }}>
                - All Standard plan features
              </Typography>
              <Typography variant="body1" color="#3b8077" sx={{ mb: 2 }}>
                - Personalized coaching sessions
              </Typography>
              <Typography variant="body1" color="#3b8077" sx={{ mb: 2 }}>
                - Early access to new features
              </Typography>
              <Typography variant="body1" color="#3b8077" sx={{ mb: 2 }}>
                - 24/7 dedicated support
              </Typography>
              <Button variant="contained" sx={{ mt: 4, borderRadius: '20px', backgroundColor: '#1f4037', color: '#f0fdfa' }} onClick={handleSubmit}>
                Go Premium
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
