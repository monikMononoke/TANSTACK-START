import { createFileRoute } from '@tanstack/react-router';
import { api, House, mapHouseFromApiToVm } from '#pods/house';

export const Route = createFileRoute('/houses/$id')({
  loader: ({ params }) => api.getHouse({ data: { id: params.id } }),
  head: ({ loaderData }) => ({
    meta: [{ title: `House: ${loaderData?.address}` }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const house = Route.useLoaderData();
  return <House house={mapHouseFromApiToVm(house)} />;
}
