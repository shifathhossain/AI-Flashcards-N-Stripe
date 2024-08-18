import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Typography, Toolbar, Button, Box, Container, Grid } from "@mui/material";
import styles from "./page.module.css";
import Head from 'next/head'

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcards SaaS</title>
        <meta name="description" content="Create your flashcards with AI" />
      </Head>

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{flexGrow: 1}}>
          Flashcard SaaS
        </Typography>
        <SignedOut>
          <Button color="inherit" href="/sign-in">Login</Button>
          <Button color="inherit" href="/sign-up">Sign Up</Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>

    <Box sx={{textAlign: 'center', my: 4}}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Flashcard SaaS
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        The easiest way to create flashcards from your text.
      </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
          Get Started
        </Button>
        <Button variant="outlined" color="primary" sx={{mt: 2}}>
          Learn More
        </Button>
      </Box>

    <Box sx={{ my: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Easy Text Input
          </Typography>
          <Typography>
            Simply input your text and let our software do the rest. Creating flashcards has never been easier.
          </Typography>
        </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Advanced Flashcard Generation
        </Typography>
        <Typography>
          Our model leverages the latest version of ChatGPT to deliver the best flashcards tailored for your studies.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Effortless Creation
        </Typography>
        <Typography>
          With our intuitive design, creating flashcards is seamless and efficient. Just input your text and watch the magic happen.
        </Typography>
      </Grid>
      </Grid>
    </Box>


    <Box sx={{ my: 6, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Pricing
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Basic Plan */}
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 6, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Basic
            </Typography>
            <Typography variant="h6" gutterBottom>
              FREE
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Access to basic features
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - 5 flashcard sets per month
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Community support
            </Typography>
          </Box>
        </Grid>

        {/* Standard Plan */}
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 4.5, border: '1px solid #3f51b5', borderRadius: '8px', bgcolor: '#C41E3A' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Standard
            </Typography>
            <Typography variant="h6" gutterBottom>
              $9.99/month
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Access to all features
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Unlimited flashcard sets
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Priority support
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Custom themes
            </Typography>
          </Box>
        </Grid>

        {/* Premium Plan */}
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 4, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Premium
            </Typography>
            <Typography variant="h6" gutterBottom>
              $19.99/month
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - All Standard plan features
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Personalized coaching sessions
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - Early access to new features
            </Typography>
            <Typography variant="body1" color="textSecondary">
              - 24/7 dedicated support
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>

    

  
  );
}

