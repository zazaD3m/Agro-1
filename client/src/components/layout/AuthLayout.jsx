import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex px-4 lg:px-28 ">
      <section className="flex-1 py-10 lg:basis-1/2">
        <div className="mx-auto max-w-md space-y-8 lg:mr-0">
          <h1 className="text-4xl text-primary">
            <Link to="/">ლოგო</Link>
          </h1>
          <Outlet />
        </div>
      </section>
      <div className="hidden h-dvh w-1/12 border-r border-secondary lg:flex" />
      <section className="hidden lg:block lg:basis-1/2">
        <div>სექცია</div>
      </section>
    </main>
  );
};
export default AuthLayout;
