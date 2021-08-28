import React from "react";
import GlobalStyle from "@styles/globalStyles";
import { ThemeWrapper } from "@resanec/gui.ui.themewrapper";
import { Footer } from "@resanec/gui.sp.footer";
import { Header } from "@resanec/gui.sp.header";
import { FooterMenu, HeaderMenu } from "@constants/*";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeWrapper>
      <GlobalStyle />

      <Header menu={HeaderMenu} onSignIn={()=> alert(33)} onSignUp={()=> alert(44)} />

      <div id="content">
        {children}
      </div>

      <Footer menu={FooterMenu} />
    </ThemeWrapper>
  );
}

export default Layout;
