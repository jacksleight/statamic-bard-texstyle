import '../css/addon.scss';

import Provider from './provider'

Statamic.booting(() => {
    new Provider(Statamic.$config.get('bard-texstyle'));
});