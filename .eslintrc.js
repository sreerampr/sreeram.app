module.exports = {
  extends: ["eslint:recommended", "google", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  globals: {
    shallow: true
  },
  rules: {
    "react/prop-types": 0,
    "max-len": ["error", { "code": 200 }],
    "arrow-parens": ["error", "as-needed"],
    "require-jsdoc": [
      "error", {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true
        }
      }
    ],
    "object-curly-spacing": ["error", "always"]
  }
};
