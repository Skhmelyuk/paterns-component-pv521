interface HeaderProps {
  children: React.ReactNode;
  text?: React.ReactNode;
}

export const Header = ({ children, text }: HeaderProps) => {
  return (
    <header className="mb-10 text-center">
      {children} {text && text}
    </header>
  );
};
