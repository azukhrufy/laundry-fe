import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Represents the custom `Document` component used for server-side rendering (SSR) and generating the HTML structure of the application.
 * 
 * The `Document` component is responsible for rendering the overall HTML layout of the application with proper head and body elements.
 * It is used by Next.js to generate the initial HTML for each page during server-side rendering.
 * 
 * @returns {JSX.Element} The rendered JSX element representing the custom `Document` component.
 */
export default function Document() {
  return (
    <Html lang="en">
      {/* The Head component is used to specify metadata and import external resources */}
      <Head />

      {/* The body of the HTML structure */}
      <body>
        {/* The Main component is the root component of the page */}
        <Main />

        {/* The NextScript component includes the necessary JavaScript files for the page */}
        <NextScript />
      </body>
    </Html>
  )
}

