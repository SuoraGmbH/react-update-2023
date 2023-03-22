import Form from "~/component/core/Form";
import Field from "~/component/core/Form/Field";
import Select from "~/component/core/Form/Select";
import { fetchProjects } from "~/models/projects.server";
import { useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  addTimeEntry,
  TimeEntry,
  TimeEntrySchema,
} from "~/models/timeEntries.server";
import { ZodError, ZodIssue } from "zod";

export const loader = async () => {
  const projects = await fetchProjects();
  return json({ projects });
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());
  const timeEntryData = TimeEntrySchema.omit({ id: true }).safeParse(values);
  if (!timeEntryData.success) {
    return json({
      success: false as const,
      errors: timeEntryData.error,
    });
  }

  await addTimeEntry(timeEntryData.data);
  throw redirect("/timeEntries");
};

export default function AddTimeEntryPage() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const submit = useSubmit();

  if (actionData?.success) {
    return <div>Success, new timeEntry</div>;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // grab the form element
    let $form = event.currentTarget;

    // get the formData from that form
    let formData = new FormData($form);

    // and finally submit the form data, re-using the method and action from the form
    submit(formData, {
      method: "post",
      action: $form.getAttribute("action") ?? $form.action,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <pre>{JSON.stringify(actionData, undefined, 2)}</pre>
      <Field label="Comment" name="comment" />
      <Field label="Start Time" name="startTime" />
      <Field label="End Time" name="endTime" />
      <Field label="Date" name="date" type="date" />
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
