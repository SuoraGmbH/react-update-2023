import {json, LoaderArgs} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout, {Header, Main} from "~/component/core/Layout";
import {fetchProjects} from "~/models/projects.server";
import Table from "~/component/core/Table";
import TableHead from "~/component/core/Table/TableHead";
import TableBody from "~/component/core/Table/TableBody";
import TableRow from "~/component/core/Table/TableRow";

export async function loader({ request }: LoaderArgs) {
    const projects = await fetchProjects();
    return json({projects})
}

export default function Projects() {
    const data = useLoaderData<typeof loader>();
    return (
        <Layout>
            <Header>Projects</Header>
            <Main>
                <Table>
                    <TableHead columns={["Name", "Email"]}></TableHead>
                    <TableBody>
                        {data.projects.map((project) => (
                            <TableRow
                                key={project.id}
                                columns={[project.name, project.description]}
                            />
                        ))}
                    </TableBody>
                </Table>
            </Main>
        </Layout>

    );
}
