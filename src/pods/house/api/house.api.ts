import { createServerFn } from '@tanstack/react-start';
import { House } from './house.api-model';
import { ENV } from '#core/constants';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouse = createServerFn()
  .inputValidator((data: { id: string }) => data)
  .handler(
    async ({ data }): Promise<House> =>
      await fetch(`${url}/${data.id}`).then((response) => response.json())
  );
