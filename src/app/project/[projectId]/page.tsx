// src/app/project/[projectId]/page.tsx

import ProjectClientPage from "./ProjectClientPage";

export default function Page() {
  // Tidak ada props, tidak ada async, hanya merender Client Component
  return <ProjectClientPage />;
}
