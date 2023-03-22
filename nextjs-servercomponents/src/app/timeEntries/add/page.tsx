import { fetchProjects } from "@/models/projects.server";
import AddTimeEntryForm from "@/app/timeEntries/add/form";

/* @ts-expect-error Async Server Component */
const AddTimeEntryFormPage: React.FunctionComponent = async () => {
  const projects = await fetchProjects();
  return <AddTimeEntryForm projects={projects} />;
};

export default AddTimeEntryFormPage;
