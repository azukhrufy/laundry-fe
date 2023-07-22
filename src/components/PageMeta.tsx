// next
import Head from "next/head";

// ----------------------------------------------------------------------

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {ReactNode} [props.other]
 * @returns {JSX.Element}
 */

type PageMetaProps = {
  title?: string;
  description?: string;
  other?: any;
};

/**
 * Represents the PageMeta component, responsible for setting meta information in the document's head.
 * The component allows specifying the title, description, and other meta tags.
 *
 * @param {object} props - The props object containing the following properties:
 * @param {string} props.title - The title of the page to be displayed in the document's head.
 * @param {string} [props.description] - The description of the page to be displayed in the document's head.
 * @param {JSX.Element} [props.other] - Additional JSX elements representing other meta tags to be added in the document's head.
 *
 * @returns {JSX.Element} The rendered JSX element representing the `PageMeta` component.
 */

export default function PageMeta({ title, description, other }: PageMetaProps) {
  return (
    <Head>
      <title>{title ? `${title} | iLaundry by FTS` : "iLaundry by FTS"}</title>

      {description && <meta name="description" content={description} />}

      {other}
    </Head>
  );
}
