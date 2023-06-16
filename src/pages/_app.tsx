import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/styles.scss";
import { AppProps } from "next/app";
import theme from "@/theme/theme";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <CacheProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    // </CacheProvider>
  );
};

export default App;
