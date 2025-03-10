import React from 'react';
import { Helmet } from 'react-helmet';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@gatsbyjs/reach-router';
import config from '../../config.json';

interface Props {
  title?: string;
  description?: string;
  img?: string;
}

const SEO = ({ title, description, img }: Props): JSX.Element => {
  const location = useLocation();

  return (
    <Helmet
      title={title || config.title}
      meta={[
        {
          name: 'description',
          content: `${description || config.description}`,
        },

        { property: 'og:type', content: config.ogType },
        {
          property: 'og:title',
          content: `${title || config.title}`,
        },
        {
          property: 'og:description',
          content: `${description || config.description}`,
        },
        {
          property: 'og:url',
          content: `${config.siteUrl}${location.pathname}`,
        },
        {
          property: 'og:site_name',
          content: `${title || config.title}`,
        },
        {
          property: 'article:section',
          content: config.title,
        },
        { property: 'og:image:type', content: config.ogImgType },
        { property: 'og:image:width', content: config.ogImgWidth },
        { property: 'og:image:height', content: config.ogImgHeight },
        {
          property: 'og:image',
          content: `${img || config.featuredImage}`,
        },
        {
          property: 'og:image:secure_url',
          content: `${img || config.featuredImage}`,
        },
        {
          property: 'article:author',
          content: config.facebook,
        },
        {
          property: 'article:publisher',
          content: config.facebook,
        },
        {
          name: 'twitter:url',
          content: `${config.siteUrl}${location.pathname}`,
        },
        {
          name: 'twitter:creator',
          content: config.twitter,
        },
        {
          name: 'twitter:site',
          content: config.twitter,
        },
        {
          name: 'twitter:title',
          content: `${title || config.title}`,
        },
        {
          name: 'twitter:card',
          content: config.twitterCard,
        },
        {
          name: 'twitter:image',
          content: `${img || config.featuredImage}`,
        },
        {
          name: 'twitter:image:alt',
          content: config.twitterImgAlt,
        },
        {
          name: 'twitter:description',
          content: `${description || config.description}`,
        },
      ]}
    >
      <html lang={config.lang} />
    </Helmet>
  );
};

export default SEO;
