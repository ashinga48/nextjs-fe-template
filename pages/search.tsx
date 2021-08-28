import React from "react";
import Layout from "@components/Layout";
import { Box, Container, Flex, Heading, SimpleGrid } from "@resanec/gui.ui.themewrapper";
import { Searchbar } from "@resanec/gui.sp.searchbar";
import { Menucategories, menuMainCategories } from "@resanec/gui.sp.menucategories";
import { Menufilters } from "@resanec/gui.sp.menufilters";
import { menu_filters, map_center, map_markers, mapData, spcard } from "@constants/*";
import { Mapview } from "@resanec/gui.sp.mapview";
import { Card } from "@resanec/gui.sp.card";

const Home: React.FC = () => {
  return (
    <Layout>
      
      <Container maxW="100%" pt={5} mb={5}>
        
        {/* search bar */}
        <Flex mb={5}>
          <Searchbar initial="" placeholder="what services are you looking for..." />
        </Flex>

        <Flex gridGap={5}>
          {/* left sidebar */}
          <Box width={350}>
            <Heading size="lg" mb={5} >Filters</Heading>
            <Menucategories menu={menuMainCategories} />
            <Box p={2} mb={5}/>
            <Menufilters menu={menu_filters.menu} onSubMenuClick={menu_filters.onSubMenuClick} />
          </Box>

          {/* right sidebar */}
          <Box width="100%">
            <Box >
              <Mapview center={map_center} markers={map_markers}/>
            </Box>
            <Box>
            <SimpleGrid columns={3} spacing={3} mt={5}>
              {mapData.data.providerByName.map((eachSP: any) => {
                return <Card {...spcard} />
              })}
            </SimpleGrid>
            </Box>
          </Box>

        </Flex>

      </Container>
    </Layout>
  );
};
export default Home;
