import { Link, useLoaderData } from "@remix-run/react";
import TableToolButton from "~/component/core/Table/TableToolButton";
import TableHead from "~/component/core/Table/TableHead";
import TableBody from "~/component/core/Table/TableBody";
import TimeEntryRow from "~/component/timeEntry/TimeEntryRow";
import Table from "~/component/core/Table";
import { json } from "@remix-run/node";
import { fetchTimeEntries } from "~/models/timeEntries.server";

export async function loader() {
  const timeEntries = await fetchTimeEntries();
  return json({ timeEntries });
}

const TimeEntriesTablePage = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <Table
      tools={
        <Link to="/timeEntries/add">
          <TableToolButton>Add TimeEntry</TableToolButton>
        </Link>
      }
    >
      <TableHead columns={["Project", "Date", "comment"]} />
      <TableBody>
        {data.timeEntries.map((timeEntry) => (
          <TimeEntryRow key={timeEntry.id} timeEntry={timeEntry} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TimeEntriesTablePage;
