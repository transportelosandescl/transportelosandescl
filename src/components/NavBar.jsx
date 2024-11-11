"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import TLALogoLosAndes from "../../public/LogoLosAndes.svg";
import TLALogoLosAndesWhite from "../../public/LogoLosAndesWhite.svg";
import { usePathname } from "next/navigation";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      transition: "0.3s",
      color: trigger ? "#000000" : "#FFF",
      backgroundColor: trigger ? "#FFF" : "transparent",
      boxShadow: trigger ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    },
  });
}

function NavBar(props) {
  const { window, scrollTo, scrollToQuot, scrollToFAQ, scrollToContac } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const nonTeaserItems = [
    { title: "FAQ", url: scrollToFAQ },
    { title: "CONTACTANOS", url: scrollToContac },
    { title: "COTIZAR", url: scrollToQuot },
  ];
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        zIndex: 10,
      }}
    >
      <List className="w-full gap-2 flex flex-col">
        {pathname !== "/" && (
          <Link
            href={"/home"}
            className="text-[14px] font-semibold rounded-[60px] mx-[24px] bg-white py-4"
          >
            {"HOME"}
          </Link>
        )}
        <button
          onClick={scrollTo}
          className="text-[14px] font-semibold rounded-[60px] mx-[24px] bg-white py-4"
        >
          ¿QUE OFRECEMOS?
        </button>

        {nonTeaserItems.map((item) => (
          <ListItem
            key={item.title}
            sx={{
              "&.MuiListItem-root": {
                width: "calc(100% - 48px)",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              },
            }}
            className="bg-white text-[14px] py-0 w-[80%] mx-[auto] rounded-[24px] items-center"
            disablePadding
          >
            <button
              onClick={item.url}
              className="w-fit text-[14px] font-semibold rounded-[60px] mx-[24px] bg-white py-4"
              sx={{ textAlign: "center", padding: 0 }}
            >
              {item.title}
            </button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "transparent" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar component="nav" sx={{ boxShadow: 0 }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              paddingY: { lg: "10px" },
              paddingX: { xs: "24px", lg: "60px !important" },
              backgroundColor: "transparent",
              transition: "0.3s",
              boxShadow: "none",
            }}
          >
            <Link href="/">
              <Image
                src={trigger ? TLALogoLosAndes : TLALogoLosAndesWhite}
                alt="Transporte Los Andes"
                className="lg:block w-[204px] h-[84px]"
              />
            </Link>
            <div
              onClick={handleDrawerToggle}
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                width: "45px",
                height: "45px",
                borderRadius: "100%",
                backgroundColor: "#FFF",
              }}
              className="flex lg:hidden"
            >
              <MenuIcon
                sx={{
                  color: "black",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease-in-out",
                  transform: mobileOpen ? "rotate(-90deg)" : "rotate(0)",
                }}
              />
            </div>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {pathname !== "/" && (
                <Link
                  href={"/home"}
                  className={`hover:text-[#3B6D38] text-[14px] font-bold transition-all duration-300 rounded-[60px] py-[10px] px-[16px] ${
                    trigger ? "text-[#000]" : "text-[#FFF]"
                  }`}
                >
                  {"HOME"}
                </Link>
              )}
              <button
                onClick={scrollTo}
                className={`text-[14px] hover:bg-[#3B6D38] hover:text-[#ffffff] font-bold rounded-[60px] transition-all duration-300 py-[10px] px-[16px] ${
                  trigger ? "text-[#000]" : "text-[#FFF]"
                }`}
              >
                ¿QUE OFRECEMOS?
              </button>

              {nonTeaserItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.url}
                  className={`text-[14px] hover:bg-[#3B6D38] hover:text-[#ffffff] font-bold rounded-[60px] transition-all duration-300 py-[10px] px-[16px] ${
                    trigger ? "text-[#000]" : "text-[#FFF]"
                  }`}
                >
                  {item.title.toUpperCase()}
                </button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            zIndex: 10,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              marginTop: "84px",
              backgroundColor: "transparent",
              boxShadow: 0,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
  scrollTo: PropTypes.func,
  scrollToReg: PropTypes.func,
  scrollToQuot: PropTypes.func,
  scrollToFAQ: PropTypes.func,
  scrollToContac: PropTypes.func,
};

export default NavBar;
