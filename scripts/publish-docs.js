const inquirer = require('inquirer');
const ghpages = require('gh-pages');
const chalk = require('chalk');
const argv = require('yargs-parser')(process.argv.slice(2));

const packageJson = require('../package.json');

if (!Object.keys(argv).some((method) => method === 'update' || method === 'release')) {
  console.log(chalk.red('Error: Must Specify a relase method as arguments, either \'--update\' or \'--release\''));
  process.exit();
}

const releaseMessage = `docs: ${packageJson.name} v${packageJson.version}`;
const updateMessage = `docs: update ${new Date().toISOString()}`;

const ghPagesOptions = {
  branch: 'gh-pages',
  message: argv.update ? updateMessage : releaseMessage,
};

inquirer
  .prompt([
    {
      name: 'publishDocs',
      type: 'confirm',
      message: `Do You want to publish the docs to '${chalk.cyan(ghPagesOptions.branch)}' branch?`,
    },
  ])
  .then((answers) => {
    if (answers.publishDocs) {
      ghpages.publish('dist/docs', ghPagesOptions, (err) => {
        if (err) {
          chalk.red('Unable to publish docs. Error: ', err);
          return;
        }
        console.log(chalk.green(`\nDocumentation published successfully to ${chalk.cyan("'gh-pages'")} \n`));
      });
    }
  });
