import { useRouter } from 'next/router';

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;

  return <h1>Project Id: {projectId}</h1>;
}
