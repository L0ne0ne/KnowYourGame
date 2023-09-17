import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const NavBar = () => {
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        onClick={() => {
          setSearchText("");
          navigate("/");
        }}
        _hover={{
          cursor: "pointer",
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
