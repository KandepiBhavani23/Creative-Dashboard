import { VscCircleSmall } from "react-icons/vsc";

const Header = () => {
  const numberOfIcons = 3; // Define the number of icons to render
  const iconsArray = Array.from({ length: numberOfIcons }, (_, index) => index);
  return (
    <header className="flex items-center h-10 border-b-4 border-black">
      {iconsArray.map((index) => (
        <header key={index}>
          <VscCircleSmall className="w-12 h-12 -mr-6" />
        </header>
      ))}
    </header>
  );
};
export default Header;
