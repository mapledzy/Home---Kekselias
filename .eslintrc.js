module.exports = {
  "env": {
    "es6": true
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": false,
      "peerDependencies": false
    }]
    , "quotes": ["error", "single", { "allowTemplateLiterals": true }]
  },
  "extends": "airbnb",
  "plugins": [
    "jsx-a11y"
  ]
};
