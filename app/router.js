import EmberRouter from '@ember/routing/router';
import config from 'emroider-alias/config/environment';

import constants from 'utils/constants'

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {});