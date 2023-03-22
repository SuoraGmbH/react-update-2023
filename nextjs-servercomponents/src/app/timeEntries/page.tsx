import { Main } from "@/component/Layout";
import Table from "@/component/Table";
import Link from "next/link";
import TableToolButton from "@/component/Table/TableToolButton";
import TableHead from "@/component/Table/TableHead";
import TableBody from "@/component/Table/TableBody";
import { fetchTimeEntries } from "@/models/timeEntries.server";
import TimeEntryRow from "@/app/timeEntries/TimeEntryRow";

export const revalidate = 0;

const TimeEntriesPage = async () => {
  const timeEntries = await fetchTimeEntries();
  return (
    <Main>
      <Table
        tools={
          <Link href="/timeEntries/add">
            <TableToolButton>Add TimeEntry</TableToolButton>
          </Link>
        }
      >
        <TableHead columns={["Project", "Date", "comment"]} />
        <TableBody>
          {timeEntries.map((timeEntry) => (
            <TimeEntryRow key={timeEntry.id} timeEntry={timeEntry} />
          ))}
        </TableBody>
      </Table>
    </Main>
  );
};

export default TimeEntriesPage;
