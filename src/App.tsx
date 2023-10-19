
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
  <Grid templateAreas={
    {
      base:`"nav" "main"`,
      lg: `"nav nav" "main"`
    }}>
    <GridItem area="nav" bg="blue">Nav</GridItem>
    <GridItem area="main" bg="green">Main</GridItem>
    </Grid>
  
  )
}

export default App
