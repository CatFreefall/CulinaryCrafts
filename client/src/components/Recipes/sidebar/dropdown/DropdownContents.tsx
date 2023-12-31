type DropdownContentProps = {
  expandedState: boolean;
  children: JSX.Element;
}

const DropdownContents = ({ expandedState, children }: DropdownContentProps) => {
  return (
    <section className={`${expandedState ? "h-auto" : "overflow-hidden h-0"}`}>
      {children}
    </section>
  );
};

export default DropdownContents;
