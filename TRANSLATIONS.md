# Help on Translating

<!-- For translations maintainers: You don't need to translate this port -->

First of all, thank you for being interested in contributing to translations!

You can find the repositories for each existing translation in [README.md](./README.md). To help improve them, simply sending a Pull Request to their repo.

If the language you want to contribute isn't on the list, join [our Discord server](https://chat.sli.dev), and find the `#translations` channel to see if someone is already working on the language you want, consider joining them and translate together. If not, you can start a new translation project with the following steps.

In case it's already been translated but you're wondering how to maintain it, skip to the end.
## Some tips before you get started
- It is recommended that you use your IDE of choice (e.g VSCode) paired with a development server running, so you can see your translation changes in real-time.
- You can mark these checkmarks as the translation progresses or use your own workflow. The translations don't need to be made in any particular order.
- Translations don't need to be literal, but they should convey the same message. In case you're not sure how to translate something, you can either leave it as it is or use online tools like WordReference or Linguee to aid you.
- Most translations will simply consist in editing Markdown files. Certain areas are buried under Vue components, which will be listed below. You can also use your IDE to find the string to translate.

## Getting started

- [X] Fork the main docs repo: [slidevjs/docs](https://github.com/slidevjs/docs)
- [X] Translate README.md, you can take one of the already translated repositories as an example.
- [X] Share your repo's link to the `#translations` channel telling people you are working on it and find collaborators.

## Translating Markdown files

- [X] `showcases.md` - A gallery showcase of Slidev presentations.
- [X] `index.md` - Mainpage content, note that some of it is buried under Vue components listed further below.

### .vitepress/

- [X] `config.js` - Sitemap
- [X] `/theme/components/WorkingInProgress.vue` - WIP notice shown in mainpage
- [X] `/theme/components/demo/Demo.vue` - Animated demo shown in mainpage
- [X] `/theme/components/Environment.vue` - Describes the environment of a setting.

### builtin/

- [X] `components.md` - Use [Vue components](https://v3.vuejs.org/guide/component-basics.html) inside Slidev
- [X] `layouts.md` - Use Vue layouts inside Slidev

### custom/

- [X] `config-katex.md` - Configuring Katex
- [X] `config-mermaid.md` - Configuring Mermaid
- [X] `config-monaco.md` - Configuring Monaco
- [X] `config-shortcuts.md` - Configuring Shortcuts
- [X] `config-vite.md` - Configuring Vite
- [X] `config-vue.md` - Configuring Vue
- [X] `directory-structure.md` - Configuring the directory structure
- [X] `fonts.md` - Configuring fonts
- [X] `global-layers.md` - Configuring the global layers
- [X] `highlighters.md` - Configuring code highlighters
- [X] `index.md`- Customizations index page
- [X] `vue-context.md` - The Vue global context

### guide/

- [X] `animations.md` - Animations and transitions
- [X] `editors.md` - Editor integrations
- [X] `exporting.md`- Exporting your slides
- [X] `faq.md` - Frequent Answered Questions
- [X] `index.md` - Getting started with Slidev
- [X] `navigation.md` - Navigation across slides
- [X] `presenter-mode.md`- Toggling presenter mode
- [X] `recording.md`- Recording your presentation
- [X] `syntax.md` - Markdown syntax
- [X] `why.md` - _Why Slidev?_

### resources/

- [X] `covers.md` - Curated covers for Slidev

### themes/

- [X] `gallery.md` - Theme gallery
- [X] `use.md` - How to use Slidev themes
- [X] `write-a-theme.md` - Write your own theme

### addons/

- [ ] `use.md` - How to use Slidev addons
- [ ] `write-an-addon.md` - Write your own addon

## Publishing your translations

- [ ] When you finish the translation (at least 90%), `@antfu` in the Discord and we will invite you to the org and make the translation official.
- [ ] Once the transferring is done, we will set up the subdomain, auto-deployment, and a daily sync-up bot to keep the translation up-to-date with the latest English docs.
- [ ] The site is live, and we will send a shout-out tweet on [our Twitter account](https://twitter.com/Slidevjs).

## Maintaining the translations up-to-date

- `docschina-bot` will periodically submit merge requests from the `slidev/docs` repository. Switch to the branch created in the pull request, make any changes necessary and merge it. [example](https://github.com/slidevjs/docs-fr/pull/13).
- Sometimes it will occur that a merge request is made and you haven't merged the previous one. The latest PR always checks your main branch against the English one; so you can just close the previous PR(s), move your work to the latest one and merge it.

[Working-in-progress translation list](https://discord.com/channels/851817370623410197/851822360955977760/852614294017146900)

Thanks again!
