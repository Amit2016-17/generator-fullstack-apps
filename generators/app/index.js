'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async init() {
    this.log(
      yosay(`Welcome to the wondrous ${chalk.red('appseed fullstack')} generator!`)
    );

    this.setup = await this.prompt([
      {
        type: 'list',
        name: 'frontend',
        message: 'Which frontend option would you like to use?',
        choices: ['Vue', 'React', 'Angular']
      }, {
        type: 'list',
        name: 'backend',
        message: 'Which backend option would you like to use?',
        choices: ['Express', 'Flask', 'Laravel']
      }
    ]);
  }

  fetchFromGit() {
    this.log(chalk("Fetching your desired files from our repository"));
    this.spawnCommandSync('git', ['init']);
    this.spawnCommandSync('git', ['remote', 'add', 'origin', 'https://github.com/rosoftdeveloper/appseed.git']);
    this.spawnCommandSync('git', ['fetch']);
    this.spawnCommandSync('git', ['checkout', 'origin/master', 'starter-' + this.setup.frontend.toLowerCase(), 'starter-' + this.setup.backend.toLowerCase()]);
  }
};
