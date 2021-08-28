import React from "react";
import GlobalStyle from "@styles/globalStyles";
import { ThemeWrapper } from "@resanec/gui.ui.themewrapper";
import { Footer } from "@resanec/gui.sp.footer";

const Home: React.FC = () => {
  return (
    <ThemeWrapper>
      <GlobalStyle />

      <Footer>
        Sample testing
      </Footer>
    </ThemeWrapper>
  );
};
export default Home;
