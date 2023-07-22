import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/styles.scss";
import theme from "@/theme/theme";
import { ReactNode } from "react";
import { AppProps } from "next/app";
import type { NextPage } from "next";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    // <CacheProvider>
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
    // </CacheProvider>
  );
}
