import type { Editor, TLocation } from 'platejs';

export const isPreviousCharacterEmpty = (editor: Editor, at: TLocation) => {
  const range = editor.api.range('before', at);

  if (range) {
    const text = editor.api.string(range);

    if (text) {
      const noWhiteSpaceRegex = new RegExp(`\\S+`);

      return !noWhiteSpaceRegex.exec(text);
    }
  }

  return true;
};
