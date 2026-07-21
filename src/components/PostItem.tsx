interface PostItemProps {
  header?: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
}

export const PostItem = ({ header, main, footer }: PostItemProps) => {
  return (
    <div className="p-3 bg-blue-100 border-2 grid gap-3 items-center">
      {header && <div>{header}</div>}
      <div>{main}</div>
      {footer && <div>{footer}</div>}
    </div>
  );
};