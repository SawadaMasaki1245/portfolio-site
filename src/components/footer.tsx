import Logo from "./logo";

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-24 lg:py-16 bg-stone-200">
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 max-w-5xl">
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
