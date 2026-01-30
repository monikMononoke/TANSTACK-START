import { HouseList, MapHouseListFromApiToVm, api } from '#pods/house-list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/houses/')({
  head: () => ({
    meta: [{ title: 'List of houses for rent' }],
  }),
  loader: () => api.getHouseList(),
  component: RouteComponent,
});

function RouteComponent() {
  const houses = Route.useLoaderData();

  return <HouseList houseList={MapHouseListFromApiToVm(houses)} />;
}
