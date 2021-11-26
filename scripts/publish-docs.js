const util = require('node:util');
const prompts = require('prompts');
const ghpages = require('gh-pages');
const color = require('picocolors');

const publishAsync = util.promisify(ghpages.publish);

const ghPagesOptions = {
  branch: 'gh-pages',
  message: `docs: update ${new Date().toISOString()}`,
};

const questions = [
  {
    name: 'publishDocs',
    type: 'confirm',
    message: `Do You want to publish the docs to '${color.cyan(ghPagesOptions.branch)}' branch?`,
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
    console.log(color.green(`\nDocumentation published successfully to ${color.cyan('\'gh-pages\'')} \n`));
  } catch (err) {
    console.log(color.red('Unable to publish docs. Error:'), err);
  }
};

publish();
