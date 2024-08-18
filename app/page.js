'use client'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import useSWR from "swr"
import Head from 'next/head'
import getStripe from '@/utils/get-stripe'
import {
  Container,
  TextField,
  Button,
  Typography,
  AppBar,
  Box,
} from '@mui/material'

export default function Home() {
    return (
        <Container maxWidth="lg">
            <Head>
                <title>Flashcards SaaS</title>
                <meta name="description" content="Create flashcards from your text" />
            </Head>

            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6">Flashcards SaaS</Typography>
                    <SignedOut>
                        <Button>Login</Button>
                        <Button>Sign Up</Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </Toolbar>
            </AppBar>
        </Container>
    )
}