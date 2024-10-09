import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="w-full lg:grid lg:grid-cols-2">
      <div className="h-screen overflow-y-auto">
        <section className="mx-auto flex max-w-md flex-col px-4 sm:min-w-[26rem] lg:col-span-1">
          <Link to="/" className="py-12 text-4xl text-primary">
            ლოგო
          </Link>
          <Outlet />
        </section>
      </div>
      <section className="hidden h-screen overflow-hidden bg-muted lg:col-span-1 lg:block">
        <img
          src="/test-5.png"
          alt="Image"
          className="h-screen w-full object-cover object-left"
        />
      </section>
    </main>
  );
};
export default AuthLayout;
