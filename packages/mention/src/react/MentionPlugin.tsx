import { toPlatePlugin } from 'platejs/react';

import { BaseMentionInputPlugin, BaseMentionPlugin } from '../lib';

export const MentionPlugin = toPlatePlugin(BaseMentionPlugin);

export const MentionInputPlugin = toPlatePlugin(BaseMentionInputPlugin);
