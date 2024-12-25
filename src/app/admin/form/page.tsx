import { getForms } from "@/services";
import FormListPage from "./FormListPage";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getData() {
  const forms = await getForms();
  return { forms };
}

export default async function Page() {
  const { forms } = await getData();
  
  return <FormListPage initialForms={forms} />;
}