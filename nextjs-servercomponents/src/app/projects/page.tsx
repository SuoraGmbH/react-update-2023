import { Header, Main } from "@/component/Layout";
import Table from "@/component/Table";
import TableHead from "@/component/Table/TableHead";
import TableBody from "@/component/Table/TableBody";
import { fetchProjects } from "@/models/projects.server";
import TableRow from "@/component/Table/TableRow";

const ProjectsPage = async () => {
  const projects = await fetchProjects();

  return (
    <>
      <Header>Projects</Header>
      <Main>
        <Table>
          <TableHead columns={["Name", "Email"]}></TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow
                key={project.id}
                columns={[project.name, project.description]}
              />
            ))}
          </TableBody>
        </Table>
      </Main>
    </>
  );
};

export default ProjectsPage;
