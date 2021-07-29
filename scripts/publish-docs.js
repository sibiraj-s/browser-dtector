const util = require('node:util');

const prompts = require('prompts');
const ghpages = require('gh-pages');
const chalk = require('chalk');

const publishAsync = util.promisify(ghpages.publish);

const ghPagesOptions = {
  branch: 'gh-pages',
  message: `docs: update ${new Date().toISOString()}`,
};

const questions = [
  {
    name: 'publishDocs',
    type: 'confirm',
    message: `Do You want to publish the docs to '${chalk.cyan(ghPagesOptions.branch)}' branch?`,
  },
];

const publish = async () => {
  try {
    if (process.env.CI) {
      prompts.inject([true]);
    }

    const answers = await prompts(questions);

    if (!answers.publishDocs) {
      return;
    }

    await publishAsync('dist/docs', ghPagesOptions);
    console.log(chalk.green(`\nDocumentation published successfully to ${chalk.cyan('\'gh-pages\'')} \n`));
  } catch (err) {
    console.log(chalk.red('Unable to publish docs. Error:'), err);
  }
};

publish();
