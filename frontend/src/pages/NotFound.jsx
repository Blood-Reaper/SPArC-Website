import NotFoundNotice from "../components/common/NotFoundNotice";

export default function NotFound() {
  return (
    <NotFoundNotice
      title="Page not found"
      message="The page you're looking for doesn't exist or may have moved."
      backTo="/"
      backLabel="Back to Home"
    />
  );
}
