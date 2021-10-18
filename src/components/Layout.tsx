import * as React from "react";
import GlobalStyle from "@styles/globalStyles";
import { ThemeWrapper } from "@raisethefire/gui.themewrapper";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <ThemeWrapper>
      <GlobalStyle />
      <div id="content">
        {children}
      </div>
    </ThemeWrapper>
  );
}

export default Layout;
