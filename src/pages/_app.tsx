import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/styles.scss";
import theme from "@/theme/theme";
import { ReactNode } from "react";
import { AppProps } from "next/app";
import type { NextPage } from "next";
// swr
import { SWRConfig } from 'swr'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};
// SWR Config
const SWRConfigValue = {
  refreshInterval: 0,
  shouldRetryOnError: false,
  revalidateOnFocus: true
}

/**
 * Represents the custom Next.js App component, which acts as the entry point for rendering pages.
 * It wraps the ChakraProvider and provides layout management for pages.
 *
 * @param {object} props - The props object containing the following properties:
 * @param {ReactNode} props.Component - The NextPage component representing the current page.
 * @param {object} props.pageProps - The pageProps object passed to the current page.
 *
 * @returns {JSX.Element} The rendered JSX element representing the `App` component.
 */
export default function App({ Component, pageProps }: Props) {
  // Get the layout function defined in the Component or fallback to a default layout function
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <SWRConfig value={SWRConfigValue}>
    <ChakraProvider theme={theme}>
      {/* Render the current page within the specified layout */}
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
    </SWRConfig>
  );
}
