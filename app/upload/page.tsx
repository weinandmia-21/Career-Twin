import DashboardLayout from "@/components/layout/DashboardLayout";
import ResumeUploader from "@/components/upload/ResumeUploader";

export default function UploadPage() {
  return (
    <DashboardLayout>
      <ResumeUploader />
    </DashboardLayout>
  );
}