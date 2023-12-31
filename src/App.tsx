import { Box, Divider, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./compoments/NavBar/NavBar";
import VideoSection from "./compoments/VideoSection";
import About from "./compoments/About";
import AboutMoblie from "./compoments/AboutMoblie";
import Gallery from "./compoments/Gallery";
import SoundCloud from "./compoments/soundCloud";
import Form from "./compoments/Form";
import ContactMe from "./compoments/contactMe";
import Footer from "./compoments/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Grid
        bg="linear-gradient(90deg, #490454 37%, #210268 100%)"
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Box mt={4}>
            <VideoSection />
          </Box>
          <Divider borderColor="white" my={4} />
          <Show above="lg">
            <Box mt={4}>
              {/* Add margin-top to reduce spacing */}
              <About />
            </Box>
          </Show>
          <Show below="md">
            <Box mt={4}>
              {/* Add margin-top to reduce spacing */}
              <AboutMoblie />
            </Box>
          </Show>
          <Box mt={4}>
            <SoundCloud />
          </Box>
          <Divider borderColor="white" my={4} />
          <Box mt={4}>
            <Gallery />
          </Box>
          <HStack mt={4} spacing={150} justifyContent={"center"}>
            <Box>
              <Form />
            </Box>
            <Show above="lg">
              <Box>
                <ContactMe />
              </Box>
            </Show>
          </HStack>
          <Box mt={4}>
            <Footer />
          </Box>
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
