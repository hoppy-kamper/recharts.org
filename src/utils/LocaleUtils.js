import _ from 'lodash';
import invariant from 'invariant';
import Locale from '../locale';

export const localeGet = (locale, component, path) => {
  return _.get(Locale, `${locale}.${component}.${path}`);
};

export const getLocaleType = (props) => {
  const pathname = (props && props.location && props.location.pathname) || '/';
  const routes = pathname.split('/');
  const locale = routes && routes.length >= 2 ? routes[1] : 'en-US';

  return locale;
};

export const parseLocalObj = (locale, value) => {
  if (!value) { return ''; }

  if (_.isObject(value)) {
    return _.get(value, `${locale}`, '') || _.get(value, `en-US`, '');
  }

  return value || '';
};
