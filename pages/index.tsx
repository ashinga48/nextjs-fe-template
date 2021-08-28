import React from "react";
import Layout from "@components/Layout";
import { Infocard } from "@resanec/gui.sp.infocard";
import { home_invite_info_card, home_create_plan_info_card, home_find_service_provider_info_card } from "@constants/*";
import { LoveIcon } from "@resanec/gui.ui.icons";
import { Container, Flex } from "@resanec/gui.ui.themewrapper";

const Home: React.FC = () => {
  return (
    <Layout>
      
      <Container maxW="container.xl" pt={5} mb={5}>
        <Flex mb={5}>
          <Infocard {...home_create_plan_info_card} bgColor={'orange.200'} p={6} color="gray.900" borderRadius="xl" icon={<LoveIcon color="white" />} width={'100%'} />
        </Flex>
        <Flex gridGap={5}>
          <Infocard {...home_invite_info_card} bgColor={'green.600'} p={6} color="white" borderRadius="xl" width={'100%'} />
          <Infocard {...home_find_service_provider_info_card} bgColor={'purple.100'} p={6} color="gray.900" borderRadius="xl" icon={<LoveIcon color="white" />} width={'100%'} />
        </Flex>
      </Container>
    </Layout>
  );
};
export default Home;
