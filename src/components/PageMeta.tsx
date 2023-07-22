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

export default function PageMeta({ title, description, other }: PageMetaProps) {
  return (
    <Head>
      <title>{title ? `${title} | iLaundry by FTS` : "iLaundry by FTS"}</title>

      {description && <meta name="description" content={description} />}

      {other}
    </Head>
  );
}
