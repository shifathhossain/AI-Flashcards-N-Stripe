import Image from "next/image";
import getStripe from '@/utils/get-stripe'
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material'


export default function Home() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Generate Flashcards
      </Typography>
      </Box>
  );
}

