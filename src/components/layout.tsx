import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Container from './container';
import '../css/typography.css';
import '../css/prism.css';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string | null;
  maxWidth?: number;
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

const theme = {
  grey: '#857272',
  margin: '2em',
};

export default ({ children, title: customTitle, description: customDescription, image, maxWidth }: Props) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={query}
      render={data => {
        let { title, description, keywords } = data.site.siteMetadata;
        title = customTitle ? `${customTitle} | ${title}` : title;
        description = customDescription || description;
        return (
          <>
            <Helmet title={title}>
              <html lang="en" />
              <meta name="description" content={description} />
              <meta name="keywords" content={keywords} />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta name="google-site-verification" content="8cQKXsfHMuCdSPV42iiMJB-KbCCykX8cdpZOcoW-U8M" />
              {image ? <meta property="og:image" content={image} /> : null}
            </Helmet>
            <Container maxWidth={maxWidth}>{children}</Container>
          </>
        );
      }}
    />
  </ThemeProvider>
);
