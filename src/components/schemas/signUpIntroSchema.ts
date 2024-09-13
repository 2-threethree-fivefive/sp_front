import { z } from 'zod';

export const signUpIntroSchema = z.object({
  terms: z.array(z.string()).refine(
    (value) => {
      const requiredItems = ['ness1', 'ness2', 'ness3'];
      return requiredItems.every((term) => value.includes(term));
    },
    {
      message: '필수 선택요소 3개를 모두 선택해야 합니다.',
    }
  ),
});
