
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './compoments/NavBar'

function App() {

  return (
  <Grid templateAreas={
    {
      base:`"nav" "main"`,
      lg: `"nav nav" "main"`
    }}>
    <GridItem area="nav"><NavBar/></GridItem>
    <GridItem area="main" bg="green">Main</GridItem>
    </Grid>
  
  )
}

export default App
