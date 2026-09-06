# Bard Texstyle Lab

A Statamic 6 site that exists only to develop and test `jacksleight/statamic-bard-texstyle`. The package is pulled in over a composer path repository (`../statamic-bard-texstyle`), so `vendor/jacksleight/statamic-bard-texstyle` is a symlink into the package's working tree and edits there are live here with no rebuild. The lab always sees whatever branch the package is on, including uncommitted work.

Herd parks `~/Packages`, so the site answers on http://statamic-bard-texstyle--lab.test/ with no vhost step. The control panel is at `/cp`.

## Structure

There is one collection, `tests`, routed at `/tests/{slug}`. Each entry tests one distinct feature of the package and has:

- its own blueprint in `resources/blueprints/collections/tests/`, so the Bard field is configured for that feature alone
- its own template in `resources/views/tests/`, set on the entry's `template` key, so the rendered output can be checked

Every template renders each Bard field twice through `_field.antlers.html`: once as rendered HTML, once as the escaped HTML source. **The source panel is the point of the lab** — it is where you check what the package actually emitted.

| Entry | Edition | What it exercises |
| ----- | ------- | ----------------- |
| `/tests/styles` | free | One style per supported type: wildcard heading, locked heading, paragraph, both list types, link, span, div |
| `/tests/styles-menu` | pro | The same styles collapsed into the styles menu, one field with an icon button, one with a text button |
| `/tests/pins` | pro | All four pin kinds inline (assets field, plain field, fieldset import, custom `view`), plus the `{{ pins }}` tag pulling footnotes from two fields and buttons from one |
| `/tests/attributes` | pro | Standard attributes (`level`, `href`, `target`, `rel`, `language`), extra rendered attributes (`id`, `start`, `reversed`), a class mapped select (`align`), and a toggle with `values` (`pull`) |
| `/tests/hidden` | free | A hidden block, which should be absent from both the rendered output and the source |
| `/tests/defaults` | free | Unstyled elements picking up the `standard` defaults group, and a second field on the `article` group via `bts_defaults` |

The home page at `/` lists them all, driven by each entry's `summary` field.

## Demos and screenshots

Alongside `tests` there is a second collection, `demos`, routed at `/demos/{slug}`. Where a test entry is terse and exhaustive, a demo entry is a plausible article that happens to exercise one feature. **The demos exist to be photographed**: they are the source of the marketplace screenshots and the docs images, so they are written and styled as a real editorial site, not as the lab.

| Entry | Blueprint | What it shows |
| ----- | --------- | ------------- |
| `/demos/styles` | `styles` | Headline, Standfirst, Tick List, Steps, Highlight, Tip and Button styles in one article |
| `/demos/styles-menu` | `styles_menu` | The same styles behind the styles menu, one field with a text button and one with an icon button |
| `/demos/pins` | `pins` | Icon, Footnote, Rating and Tide pins inline, with the footnotes collected below the article |
| `/demos/attributes` | `attributes` | A heading ID, a code block language and a class-mapped blockquote toggle |
| `/demos/hidden` | `hidden` | A hidden block, present in the editor and absent from the page |
| `/demos/defaults` | `defaults` | Unstyled elements picking up the `demo` defaults group |

The demos have their own styles, pins and defaults group in `config/statamic/bard_texstyle.php`, kept in clearly marked sections below the test ones so the two sets never interfere. **Every demo Bard field sets `bts_defaults: demo`**, because the `standard` group would otherwise apply and put the tests' classes on the demo output. The demo front end is `resources/views/demo.antlers.html` plus `resources/views/demos/show.antlers.html`, styled by the Demos section of `resources/css/site.css`.

The demo entries are baked into the package's `.lab/` overlay and restored verbatim by the `setup-lab` skill, fixed UUIDs and all. There is no seed script: edit the entries in the control panel, then re-run the skill to bake them back. A rebuild is a straight copy, so a reshoot gives the same image.

### Taking the shots

**The capture pipeline is not in this lab.** It lives in the website project (`scripts/capture-shots` plus `screenshots/`), pointed at this lab's URLs, because the finished images are a website asset and the same pipeline serves every package. The lab's job is to hold demo content worth photographing.

```
cd ~/Projects/jacksleight
./scripts/capture-shots statamic-bard-texstyle            # every shot
./scripts/capture-shots statamic-bard-texstyle styles-editor,pins-page
herd php artisan shots:import statamic-bard-texstyle
```

`screenshots/shots/statamic-bard-texstyle.json` over there is the manifest, and it **hard-codes this lab's entry ids**. They stay valid because the demo entries are baked into the package's `.lab/` overlay as `.md` files with fixed UUIDs, so a lab rebuild restores the same ids. If an id ever changes, the manifest needs updating with it.

### Things the shots depend on

- **Link and div styles never reach the styles menu.** Only heading, paragraph and list types carry `styles_menu`, so `button_link` and `tip` stay as their own toolbar buttons even when listed in `bts_styles`.
- **The attributes panel and a pin's fields are stacks, not popovers.** They render into `.portal-targets` inside `#statamic` and slide in from the right, so those shots use a narrower stage aligned to the left.
- **An attribute stored with `store: class` holds the mapped class, not the key.** A blockquote's pull quote toggle is written as `pull: pull-quote`; writing `pull: true` renders `class="1"`.

The rest of the capture mechanics, and the traps in them, are documented in the website project's CLAUDE.md under Package Screenshots.

## Things to know

- **Toolbar button names are Statamic's, not the obvious ones.** The link button is `anchor`, not `link`. A wrong name is silently dropped from the toolbar and Bard then refuses the content with "Invalid content, link button/extension is not enabled" — but only in the control panel, so the front end looks perfectly fine while the entry cannot be opened. Every test blueprint had `link` and was broken this way until 2026-09-06. Check a blueprint change in the control panel, not just on the page.
- **A style button does not imply its base node.** A `tick_list` style on `unordered_list` still needs `unorderedlist` in the field's `buttons`, or the list nodes in the content are rejected the same way.
- **The `standard` defaults group applies to every Bard field**, so `class="para"`, `class="head-1"` and friends appear in the source on the other test pages too. That is the feature working, not noise — defaults fill in wherever no style is set.
- **`store` is a global config option**, so it cannot vary per entry. To test `store: key`, change it in `config/statamic/bard_texstyle.php` and re-save the entries through the CP.
- **Style classes are plain CSS in `resources/css/site.css`**, matched to the classes in `config/statamic/bard_texstyle.php`. Add a style to the config and it needs a rule here to be visible on the frontend. The config file is a Tailwind `@source`, so classes used directly as style or attribute classes (`text-center` and so on) are picked up.
- **Pin views** live in `resources/views/partials/pins/` (the `pins_path`), except `today`, which sets an explicit `view` and lives at `resources/views/pins/today.antlers.html`.
- **Pro is enabled** in `config/statamic/editions.php`. Turn it off there to check the free edition degrades correctly.
- **Assets** are in `public/assets`, container handle `assets`.

## Rebuilding

This lab is disposable, and everything in it that is worth keeping is baked into `.lab/` in the package repo. That directory is a flat mirror of these paths, copied over a fresh `statamic new` shell. To rebuild the lab from scratch, run the `setup-lab` skill; it creates the shell, strips the boilerplate, copies the overlay over and runs the generated steps (`composer`, `npm`, `php artisan skip:users`).

To add something that should survive a rebuild, re-run `setup-lab` with that instruction. It makes the change here, verifies it, and bakes the changed files into `.lab/` in the same pass. Do not edit `.lab/` by hand, and never sync the whole lab into it — the mess is the reason the lab is disposable.

**Entry files are baked verbatim, UUIDs included, and must stay byte-stable.** The website project's shot manifest hard-codes the six demo entry UUIDs, and a reshoot is only identical if the content files are. Edit entries through the CP or by hand and bake the result; do not regenerate them with a seeder.

**Changing demo content invalidates the marketplace screenshots.** They are captured from `/demos/*` by the website project (`./scripts/capture-shots statamic-bard-texstyle`) and committed there, so a demo change that is not reshot leaves shipped images showing something the package no longer does. Two failure modes to avoid: editing the lab directly, which works until the next rebuild silently reverts it; and changing demo content without telling whoever owns the shots. Bake the change through `setup-lab`, then get the shots retaken.

Some things in here look odd but are load-bearing, so do not tidy them:

- Every demo Bard field sets `bts_defaults: demo`. Without it the `standard` group applies and puts the tests' classes on demo output, which shows up in the shots.
- The `tick_list` style's `cp_css` is `list-style-type: "\2713  "`. The escape is deliberate; it renders the tick in the control panel.
- `styles_menu.yaml` has a second `alternate` field with thin content on purpose, so there is an icon-button variant of the styles menu to photograph.

## Commands

- `npm run dev` for the frontend in watch mode, `npm run build` for a production build
- The package's own JS is built in the package, not here: `npm run dev` in `../statamic-bard-texstyle`

## Skip (local login)

Local-only login bypass: `GET /!/skip/{handle}` logs in as `{handle}@example.test` and redirects home. Example: `/!/skip/admin`.

Available users:
- admin — admin@example.test — super user

The route lives in `routes/local.php`, loaded from `AppServiceProvider` only when the app environment is local, and gated again on a local request host. Statamic keeps users in flat files under `users/`, so there is no db reset to recover from, but if the file is deleted re-create it with `php artisan skip:users`.
