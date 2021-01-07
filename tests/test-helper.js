import Application from 'emroider-alias/app';
import config from 'emroider-alias/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
