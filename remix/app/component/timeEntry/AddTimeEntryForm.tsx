import { useNavigate } from "react-router-dom";

const AddTimeEntryForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { addTimeEntry } = useAddTimeEntryMutation();
  const { data: projects } = useProjects();
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
    },
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    await addTimeEntry(data);
    navigate("/timeEntries");
  };

  if (!projects) {
    return <LoadingIndicator />;
  }

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
