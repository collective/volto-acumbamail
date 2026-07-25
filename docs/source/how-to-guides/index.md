---
myst:
  html_meta:
    "description": "Acumbamail integration with Volto how-to guides"
    "property=og:description": "Acumbamail integration with Volto how-to guides"
    "property=og:title": "Acumbamail integration with Volto how-to guides"
    "keywords": "Acumbamail, service, Volto, integration, documentation, how-to, guides"
---

# How-to guides

This part of the documentation contains how-to guides, including installation and usage.

## Features

- Control panel in Plone registry to manage ``Acumbamail`` settings.

- RestApi endpoint that exposes these settings for Volto.

- Add a [new subscriber](https://acumbamail.com/apidoc/function/addSubscriber/) to the Acumbamail list.

## Plone CMS integration

To use this product in Plone CMS, you needs to include the following add-on in your project: https://github.com/collective/collective.volto.acumbamail

## Translations

This product has been translated into

- Basque

- Catalan

- English

- Galician

- Spanish

## Compatibility

- Tested with Node.js 22.16.0 and Volto 18.

## Install it

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 18 and later

Add `volto-acumbamail` to your `package.json`:

```json
"addons": [
    "volto-acumbamail": "*"
]
```

```json
"dependencies": {
    "volto-acumbamail": "*"
}
```

#### Install from Github

If you trying to install from Github you need edit the `mrs.developer.json` file:

```json
{
  "volto-acumbamail": {
    "develop": true,
    "output": "./packages/",
    "package": "volto-acumbamail",
    "url": "git@github.com:collective/volto-acumbamail.git",
    "https": "https://github.com/collective/volto-acumbamail.git",
    "branch": "main"
  }
}
```

The `mrs.developer.json` is using by an NodeJS utility called `mrs.developer` that makes
it easy to work with NPM projects containing lots of packages, of which you only want to
develop some.

Also add `volto-acumbamail` to your `package.json`:

```json
"addons": [
    "volto-acumbamail": "*"
]
```

```json
"dependencies": {
    "volto-acumbamail": "workspace:*",
}
```

---

### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon volto-acumbamail
cd my-volto-project
```

Add `volto-acumbamail` to your package.json:

```JSON
"addons": [
    "volto-acumbamail"
],

"dependencies": {
    "volto-acumbamail": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start volto with:

```
yarn start
```

## Enable it

Go to the `Site setup`, next to the `Add-ons` control panel, find the `collective.volto.acumbamail` add-on and click on the `Install` button. 

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.

## Settings it

To use this add-on, go to the `Site setup`, next to the ``Add-on Configuration`` icon, as shown below:

<img width="290" alt="Add-on Configuration" src="../images/addon-configuration-acumbamail-icon.png">

This `Acumbamail Settings`, you can access the control panel, as shown below:

<img width="720" alt="Acumbamail Settings" src="../images/acumbamail-settings.png">

In this control panel, you can configure the following fields:

- ``API URL``, The URL of the Acumbamail API endpoint.

- ``API Key``, Your personal token generated at the Acumbamail Dashboard website.

- ``List ID``, Numeric identifier of the list where subscribers will be added.

## Use it

To use the `Acumbamail` integration you need add the [volto-acumbamail](https://volto-acumbamail.readthedocs.io/) add-on, in your Volto project and
use the amazain features incluided.
