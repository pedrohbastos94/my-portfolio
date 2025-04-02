type SectionTitleProps = {
  title: string;
  subtitle: string;
  classname?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  classname,
}: SectionTitleProps) => {
  return (
    <div className={`flex flex-col gap-4 ${classname}`}>
      <span className="text-sm text-red-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  );
};
