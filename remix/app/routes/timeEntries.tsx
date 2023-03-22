import Layout, { Main } from "~/component/core/Layout";
import { Outlet } from "@remix-run/react";

const TimeEntriesPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
};

export default TimeEntriesPage;
