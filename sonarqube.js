const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'https://sonarcloud.io',
  token: process.env.SONAR_TOKEN,
  options: {
    'sonar.organization': 'sreerampr-github',
    'sonar.exclusions': 'node_modules, mycache',
    'sonar.sources': 'src',
    'sonar.javascript.lcov.reportPaths':'dist/test/lcov.txt'
  },
}, () => console.log('Sonar Analysis done'));
