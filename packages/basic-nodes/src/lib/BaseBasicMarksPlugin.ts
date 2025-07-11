import { createSlatePlugin } from 'platejs';

import { BaseBoldPlugin } from './BaseBoldPlugin';
import { BaseCodePlugin } from './BaseCodePlugin';
import { BaseItalicPlugin } from './BaseItalicPlugin';
import { BaseStrikethroughPlugin } from './BaseStrikethroughPlugin';
import { BaseSubscriptPlugin } from './BaseSubscriptPlugin';
import { BaseSuperscriptPlugin } from './BaseSuperscriptPlugin';
import { BaseUnderlinePlugin } from './BaseUnderlinePlugin';

export const BaseBasicMarksPlugin = createSlatePlugin({
  plugins: [
    BaseBoldPlugin,
    BaseCodePlugin,
    BaseItalicPlugin,
    BaseStrikethroughPlugin,
    BaseSubscriptPlugin,
    BaseSuperscriptPlugin,
    BaseUnderlinePlugin,
  ],
});
