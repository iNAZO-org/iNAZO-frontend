import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LinkWithIcon from "components/molecules/LinkWithIcon";
import SearchIcon from "@mui/icons-material/Search";
import { Star } from "@mui/icons-material";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          iNAZO
        </Typography>
        <LinkWithIcon href="/search" icon={<SearchIcon />} sx={{ mr: "1rem" }}>
          SEARCH
        </LinkWithIcon>
        <LinkWithIcon href="/bookmark" icon={<Star />} sx={{ mr: "1rem" }}>
          BOOKMARK
        </LinkWithIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
