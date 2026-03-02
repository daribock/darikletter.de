export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mt-24">{children}</main>;
}
