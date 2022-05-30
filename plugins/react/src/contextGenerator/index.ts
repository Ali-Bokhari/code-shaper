import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
import path from 'path';

export const contextGenerator: Generator = {
  id: 'context',
  name: 'Context',
  description: 'generates a context',
  generate: generateContext,
};

async function generateContext(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'State to be kept in context? (e.g. "User" or "ViewState")',
    },
    {
      type: 'list',
      name: 'workspace',
      message: 'Which workspace should this go to?',
      choices: () => {
        // TODO: Get workspace globs from package.json, don't hardcode here.
        const dirSpecs = FileUtils.resolvePaths(process.cwd(), [
          'apps/*',
          'packages/*',
        ]);
        return dirSpecs.map((dirSpec) => ({
          name: dirSpec.name,
          value: dirSpec.path,
        }));
      },
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { itemName, workspace } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Assume that the item in this generator is the state we are keeping in context.
  // Example: itemName = ViewState

  // itemNameKebabCase = view-state
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = viewState
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = ViewState
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = View State
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);

  const { itemNameCamelCase, itemNamePascalCase } = options;

  // filename = ViewStateContext (then add extension)
  options['filename'] = `${itemNamePascalCase}Context`;

  // stateName = ViewState
  options['stateName'] = itemNamePascalCase;

  // stateNameCamelCase = viewState
  options['stateNameCamelCase'] = itemNameCamelCase;

  // stateSetter = ViewStateSetter
  options['stateSetter'] = `${itemNamePascalCase}Setter`;

  // contextName = ViewStateContext
  options['contextName'] = `${itemNamePascalCase}Context`;

  // contextNameCamelCase = viewStateContext
  options['contextNameCamelCase'] = `${itemNameCamelCase}Context`;

  // providerName = ViewStateContextProvider
  options['providerName'] = `${itemNamePascalCase}ContextProvider`;

  // hookName = useViewStateContext
  options['hookName'] = `use${itemNamePascalCase}Context`;
  // --------------------------------------------------------------------------

  const { contextName, hookName, providerName } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = path.join(workspace, `src/contexts/${contextName}`);

  console.log();
  console.log(`Creating ${contextName}...`);

  // Create the page
  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done.');
  console.log();
  console.log(`1. Implement ${contextName} to meet your requirements.`);
  console.log();
  console.log(
    `2. Import ${providerName} where you want to provide this context.`
  );
  console.log();
  console.log(`3. Import ${hookName} where you want to consume this context.`);
  console.log();
  console.log(
    `P.S. Feel free to move the ${contextName} folder to another location in your workspace`
  );
  console.log();

  return Promise.resolve();
}
