import PageHeader from "../common/PageHeader";

export default function SettingsPageLayout({
  title,
  description,
  children,
}) {

  return (
    <>
      {/* Header */}

      <PageHeader
        title={title}
        subtitle={description}
      />
      {children}
    </>
  );
}