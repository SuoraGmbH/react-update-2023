import { z } from "zod";

export interface TimeEntry {
  id: string;
  comment: string;
  date: string;
  startTime: string;
  endTime: string;
  projectId: string;
}

export const fetchTimeEntries = async (): Promise<TimeEntry[]> => {
  const response = await fetch("http://localhost:4712/timeEntries");
  return response.json();
};

export const addTimeEntry = async (
  timeEntry: Omit<TimeEntry, "id">
): Promise<TimeEntry> => {
  const response = await fetch("http://localhost:4712/timeEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(timeEntry),
  });

  return response.json();
};

export const TimeEntrySchema = z.object({
  id: z.string().min(1),
  comment: z.string(),
  startTime: z.string().regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
  endTime: z.string().regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
  date: z.string().regex(/^[\d]{4}[-][\d]{2}[-][\d]{2}$/),
  projectId: z.string().min(1),
});
