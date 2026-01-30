import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="mb-4">Bienvenido!</div>
      <Link to="/houses">
        <h2>Ver casas disponibles</h2>
      </Link>
    </>
  );
}
