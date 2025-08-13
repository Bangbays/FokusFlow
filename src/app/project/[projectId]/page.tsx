import ProjectDetailPage from "../../../components/project/ProjectDetailPage";

export default function Page({ params }: { params: { projectId: string } }) {
  return <ProjectDetailPage projectId={params.projectId} />;
}
