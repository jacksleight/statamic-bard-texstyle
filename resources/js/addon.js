/* @deprecated: Alias the Statamic v4 scales so the same classes can work in v3 as well, drop when v3 is dropped */
import '../css/addon.css';
import '../css/jstw.css';

import Provider from './provider'

Statamic.booting(() => {
    new Provider(Statamic.$config.get('bard-texstyle'));
});