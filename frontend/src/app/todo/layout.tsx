export default function TodoLayout({
  children,
  ticket,
}: {
  children: JSX.Element;
  ticket: JSX.Element;
}) {
  return (
    <>
      {children}
      {ticket}
    </>
  );
}
