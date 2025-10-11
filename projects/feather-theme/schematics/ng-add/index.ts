import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

interface NgAddOptions {
  project?: string;
}

export default function (options: NgAddOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Adding Feather Theme to your project...');

    // Get the styles file path
    const stylesPath = 'src/styles.scss';

    // Check if styles.scss exists
    if (!tree.exists(stylesPath)) {
      context.logger.warn(`${stylesPath} not found. Creating it...`);
      tree.create(stylesPath, '');
    }

    // Read current styles
    const stylesContent = tree.read(stylesPath)?.toString() || '';

    // Check if Feather Theme is already imported
    if (stylesContent.includes('@feather/theme')) {
      context.logger.info('Feather Theme is already imported in styles.scss');
      return tree;
    }

    // Add import statement with correct path
    const importStatement = `// Feather Theme\n@import 'node_modules/@feather/theme';\n\n`;
    const newContent = importStatement + stylesContent;
    tree.overwrite(stylesPath, newContent);

    context.logger.info('✅ Added Feather Theme import to styles.scss');
    context.logger.info('');
    context.logger.info('Feather Theme has been successfully added to your project!');
    context.logger.info('');
    context.logger.info('Next steps:');
    context.logger.info('  1. Use Feather Theme classes in your components');
    context.logger.info('  2. Check the documentation: https://github.com/your-repo/feather-theme');
    context.logger.info('');

    return tree;
  };
}

