import Provider from './provider'

Statamic.booting(() => {
    new Provider(Statamic.$config.get('bardTexstyle'));
});