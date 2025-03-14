import * as React from 'react';
import ReactIntlProvider from './src/containers/ReactIntl';
import { defaultLanguage, defaultMessages } from './locales';
import type { WrapPageElementBrowser } from './src/types';

import './src/styles/index.scss';

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement: WrapPageElementBrowser = ({ element, props }) => {
  const { locale = defaultLanguage, intlMessages = defaultMessages } =
    props.pageContext;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <ReactIntlProvider locale={locale} messages={intlMessages}>
      {element}
    </ReactIntlProvider>
  );
};
