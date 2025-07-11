import type { Editor } from 'platejs';

import type { IndentCodeLineOptions } from '../transforms/indentCodeLine';

export const getIndentDepth = (
  editor: Editor,
  { codeLine }: IndentCodeLineOptions
) => {
  const [, codeLinePath] = codeLine;
  const text = editor.api.string(codeLinePath);

  return text.search(/\S|$/);
};
