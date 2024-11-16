import styles from "./navigationBar.module.css";
import SearchField from "./searchField";
import Link from "next/link";
// mui
import * as React from "react";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// logo
import { LuAlignJustify } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

//components
import NavBarList from "./navBarList";
import NavBarCategories from "./navBarCategories";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MobileDesign = ({
  navData,
  toggleSearchDrawer,
  toggleMenuDrawer,
  open,
  open1,
  tabValue,
  tabHandleChange,
  brandCategories,
}) => (
  <div className={styles.mobileDesignBottomContainer}>
    <div>
      {navData.map((data, ind) => (
        <div className={styles.mobileDesignBottomDataContainer} key={ind}>
          {data?.centerNavData?.map((item, index) => (
            <div
              key={index}
              className={`${styles.mobileDesignBottomDataInfoContainer} ${
                index === 3 ? styles.centerNavRightDataIconNone : ""
              }`}
            >
              {index === 1 ? (
                <p
                  onClick={toggleSearchDrawer(true)}
                  className={styles.mobileDesignInfoContainer}
                >
                  <span className={styles.mobileDesignInfoIcon}>
                    {item?.info?.icon}
                  </span>
                  <span className={styles.mobileDesignInfoName}>
                    {item?.info?.title}
                  </span>
                </p>
              ) : (
                <Link href={item?.info?.url} key={index}>
                  <p className={styles.mobileDesignInfoContainer}>
                    <span className={styles.mobileDesignInfoIcon}>
                      {item?.info?.icon}
                    </span>
                    <span className={styles.mobileDesignInfoName}>
                      {item?.info?.title}
                    </span>
                  </p>
                </Link>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>

    <div>
      <div className={styles.centerNavRightDataContainer}>
        <Drawer className={styles.DrawerContainer} anchor="left" open={open1}>
          <Box className={styles.searchDrawerContainer} role="presentation">
            <div className={styles.NavCategoryAllConTainerSm}>
              <Box sx={{ width: "100%" }}>
                <Box className={styles.tabBoxContainer}>
                  <Tabs value={tabValue} onChange={tabHandleChange}>
                    <Tab
                      label={
                        <LuAlignJustify className={styles.tabLuAlignJustify} />
                      }
                      {...a11yProps(0)}
                    />
                    <Tab label="Brand Categories" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <div className={styles.tabBoxInfoContainer}>
                  <CustomTabPanel value={tabValue} index={0}>
                    <NavBarList navData={navData} />
                  </CustomTabPanel>
                  <CustomTabPanel value={tabValue} index={1}>
                    <NavBarCategories brandCategories={brandCategories} />
                  </CustomTabPanel>
                </div>
              </Box>
              <div className={styles.DrawerCrossBtn}>
                <RxCross1 onClick={toggleMenuDrawer(false)} />
              </div>
            </div>
          </Box>
        </Drawer>

        <div>
          <Drawer className={styles.DrawerContainer} anchor="left" open={open}>
            <Box className={styles.searchDrawerContainer} role="presentation">
              <div className={styles.DrawerCrossBtn}>
                <RxCross1 onClick={toggleSearchDrawer(false)} />
              </div>
              <br />
              <br />
              <br />
              <SearchField />
            </Box>
          </Drawer>
        </div>
      </div>
    </div>
  </div>
);

export default MobileDesign;
