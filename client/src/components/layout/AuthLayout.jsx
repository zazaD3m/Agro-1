import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="relative w-full lg:grid lg:grid-cols-2">
      <section className="mx-auto flex max-w-md flex-col px-2 sm:min-w-[26rem]">
        <Link to="/" className="py-12 text-4xl text-primary">
          <img src="/logo-1.png" className="h-10" />
        </Link>
        <Outlet />
      </section>
      <section className="fixed left-1/2 top-0 hidden h-screen lg:block">
        <img
          src="/test-5.png"
          alt="Image"
          className="h-full object-cover object-left"
        />
      </section>
    </main>
  );
};
export default AuthLayout;
