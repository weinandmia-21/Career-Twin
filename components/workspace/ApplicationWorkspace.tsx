import type { ReactNode } from "react";

import WorkspaceBreadcrumbs from "./WorkspaceBreadcrumbs";
import WorkspaceTabs from "./WorkspaceTabs";
import WorkspaceHeader from "./header/WorkspaceHeader";

import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  current: string;
  children: ReactNode;
};

export default function ApplicationWorkspace({
  application,
  current,
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <WorkspaceBreadcrumbs
        company={application.company}
        current={current}
      />

      <WorkspaceHeader application={application} />

      <div className="mb-6">
        <WorkspaceTabs applicationId={application.id} />
      </div>

      {children}
    </div>
  );
}