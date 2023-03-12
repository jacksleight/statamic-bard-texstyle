import '../css/addon.css';
import '../css/jstw.css';

import Provider from './provider'

Statamic.booting(() => {
    new Provider(Statamic.$config.get('bard-texstyle'));
});