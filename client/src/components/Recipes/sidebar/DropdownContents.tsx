const DropdownContents = ({ expandedState }: { expandedState: boolean }) => {
  return (
    <section className={`${expandedState ? "h-auto" : "overflow-hidden h-0"}`}>
      a
    </section>
  );
};

export default DropdownContents;
