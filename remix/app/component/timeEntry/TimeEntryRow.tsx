import React from "react";
import {TimeEntry} from "~/models/timeEntries.server";
import TableRow from "~/component/core/Table/TableRow";

interface Props {
  timeEntry: TimeEntry;
}
const TimeEntryRow: React.FunctionComponent<Props> = ({ timeEntry }) => {
  return (
    <TableRow
      columns={[timeEntry.projectId, timeEntry.date, timeEntry.comment]}
    />
  );
};

export default TimeEntryRow;
