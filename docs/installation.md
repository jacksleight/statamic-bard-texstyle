---
title: Installation
order: 2
---

# Installation

You can search for this addon in the `Tools > Addons` section of the Statamic control panel and click **install**, or run the following command from your project root:

```bash
composer require jacksleight/statamic-bard-texstyle
```

## Enable Pro Edition

If you're using the Pro edition you can enable it by opening `config/statamic/editions.php` and adding it to the addons list:

```php
'addons' => [
    'jacksleight/statamic-bard-texstyle' => 'pro',
],
```