import Form from "~/component/core/Form";
import Field from "~/component/core/Form/Field";
import Select from "~/component/core/Form/Select";
import { fetchProjects } from "~/models/projects.server";
import { useLoaderData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { addTimeEntry } from "~/models/timeEntries.server";

export const loader = async () => {
  const projects = await fetchProjects();
  return json({ projects });
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());
  const timeEntry = await addTimeEntry(values as any);

  return json({ success: true, timeEntry });
};

export default function AddTimeEntryPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <Form>
      <Field label="Comment" name="comment" />
      <Field label="Start Time" name="startTime" />
      <Field label="End Time" name="endTime" />
      <Field label="Date" name="date" />
      <Select label="Project" name="projectId">
        {data.projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </Select>
    </Form>
  );
}
