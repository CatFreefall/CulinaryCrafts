const Link = ({ text, destination }: { text: string, destination: string }) => {
  return (
    <a href={destination} className="link-animation">
      <span className="relative px-1">{text}</span>
    </a>
  )
};

export default Link;
