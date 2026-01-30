import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { api } from '#pods/house-list';

export const Route = createFileRoute('/houses')({
  head: () => ({
    meta: [{ title: 'List of houses for rent' }],
  }),
  loader: () => api.getHouseList(),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Link to="/houses">
        <h2>Casas disponibles</h2>
      </Link>
      <Outlet />
    </div>
  );
}
