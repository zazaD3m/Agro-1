import { NavLink, Outlet } from "react-router-dom";

const EditAccountItem = ({ text, link }) => {
  return (
    <NavLink
      className="w-min text-nowrap rounded-md px-2 py-1 text-foreground/70 transition-all hover:bg-accent-dark hover:text-foreground aria-[current=page]:bg-accent-dark aria-[current=page]:text-foreground"
      to={link}
    >
      {text}
    </NavLink>
  );
};

const EditAccountLayout = () => {
  return (
    <div className="w-full space-y-4 lg:max-w-[768px]">
      <h2 className="text-xl font-semibold">პირადი ინფორმაცია</h2>
      <div className="flex rounded-md bg-background p-2 text-sm shadow-sm max-sm:flex-col max-sm:gap-y-2 sm:gap-x-4 md:w-min">
        {[
          { text: "ინფორმაციის რედაქტირება", link: "info" },
          { text: "პაროლის ცვლილება", link: "password" },
          { text: "ანგარიშის წაშლა", link: "deactivate" },
        ].map((e, i) => (
          <EditAccountItem key={i} link={e.link} text={e.text} />
        ))}
      </div>
      <div className="rounded-md bg-background px-4 py-4 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
};
export default EditAccountLayout;
