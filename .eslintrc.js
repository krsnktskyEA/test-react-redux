module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
  "semi": ["error", "never"],
  "no-underscore-dangle": ["Off"],
  "arrow-body-style": ["warn", "as-needed"],
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  "react/prop-types": ["warn", { "ignore": [], "customValidators": [] }],
  "react/jsx-one-expression-per-line": 0,
  "object-curly-newline": 0
  }
};

