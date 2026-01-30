import { createServerFn } from '@tanstack/react-start';
import { House } from './house-list.api-model';
import { ENV } from '#core/constants';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouseList = createServerFn().handler(
  async (): Promise<House[]> =>
    await fetch(url).then((response) => response.json())
);
