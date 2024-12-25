import { getSubmissions } from "@/services";
import SubmissionListPage from "./SubmissionListPage";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getData() {
  const submissions = await getSubmissions();
  return { submissions };
}

export default async function Page() {
  const { submissions } = await getData();
  
  return <SubmissionListPage initialSubmissions={submissions} />;
}