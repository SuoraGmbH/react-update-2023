import Table from "../../component/Table";
import TableBody from "../../component/Table/TableBody";
import { Main } from "../../component/Layout";
import TableHead from "../../component/Table/TableHead";
import LoadingIndicator from "../../component/LoadingIndicator";
import useTimeEntries from "./useTimeEntries";
import TableToolButton from "../../component/Table/TableToolButton";
import React from "react";
import { Link } from "react-router-dom";
import TimeEntryRow from "./TimeEntryRow";

const TimeEntryTable: React.FunctionComponent = () => {
  const { data, isSuccess, isLoading } = useTimeEntries();
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!isSuccess || !data) {
    return <div>Something went wrong…</div>;
  }

  return (
    <>
      <Main>
        <Table
          tools={
            <Link to="/timeEntries/add">
              <TableToolButton>Add TimeEntry</TableToolButton>
            </Link>
          }
        >
          <TableHead columns={["Project", "Date", "comment"]} />
          <TableBody>
            {data.map((timeEntry) => (
              <TimeEntryRow key={timeEntry.id} timeEntry={timeEntry} />
            ))}
          </TableBody>
        </Table>
      </Main>
    </>
  );
};

export default TimeEntryTable;
