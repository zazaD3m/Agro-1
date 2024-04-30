import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="w-full sm:grid sm:grid-cols-4">
      <section className="mx-auto mt-12 flex max-w-md flex-col px-4 sm:col-span-3 sm:min-w-[26rem] lg:col-span-2">
        <h1 className="mb-12 text-4xl text-primary">
          <Link to="/">ლოგო</Link>
        </h1>
        <div className="space-y-6">
          <Outlet />
        </div>
      </section>
      <section className="hidden h-screen bg-muted sm:col-span-1 sm:block lg:col-span-2">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="h-full w-full object-cover"
        />
      </section>
    </main>
  );
};
export default AuthLayout;
