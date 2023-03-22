"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  addTimeEntry,
  TimeEntry,
  TimeEntrySchema,
} from "@/models/timeEntries.server";
import { fetchProjects, Project } from "@/models/projects.server";
import Form from "@/component/Form";
import Field from "@/component/Form/Field";
import Select from "@/component/Form/Select";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const AddTimeEntryForm: React.FunctionComponent<{
  projects: Project[];
}> = ({ projects }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<TimeEntry>({
    resolver: zodResolver(TimeEntrySchema),
    defaultValues: {
      id: uuidv4(),
      date: format(new Date(), "yyyy-MM-dd"),
      startTime: format(new Date(), "HH:ii"),
      endTime: format(new Date(), "HH:ii"),
    },
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    await addTimeEntry(data);
    router.prefetch("/timeEntries");
    router.push("/timeEntries");
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      disableSubmit={!isDirty || !isValid}
    >
      <Field label="Comment" {...register("comment")} />
      <Field label="Start Time" {...register("startTime")} />
      <Field label="End Time" {...register("endTime")} />
      <Field label="Date" {...register("date")} />
      <Select label="Project" {...register("projectId")}>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </Select>
    </Form>
  );
};

export default AddTimeEntryForm;
