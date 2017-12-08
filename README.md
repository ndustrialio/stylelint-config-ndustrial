# stylelint-config-ndustrial
A stylelint configuration for ndustrial.io web applications.

# Installation
`npm install @ndustrial/stylelint-config-ndustrial --save-dev`

# Usage
After you've installed the stylelint config, create a `.stylelintrc.json` file in your project. It should look like this:

```json
{
  "extends": "@ndustrial/stylelint-config-ndustrial"
}
```

Now, add an `npm` script to run the linter.
```json
{
  "scripts": {
    "lint": "stylelint ./src/**/*.scss"
  }
}
```

# Extending the config
Add a `"rules"` key to your config, then add your overrides/additions there. For instance, if you're Richard from the HBO (R) show Silicon Valley (TM), you can override the indendation rule by doing the following:

```json
{
  "extends": "@ndustrial/stylelint-config-standard",
  "rules": {
    "indentation": "tab"
  }
}
```