import TimeEntry from "../../domain/TimeEntry";
import TableRow from "../../component/Table/TableRow";
import React from "react";

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
