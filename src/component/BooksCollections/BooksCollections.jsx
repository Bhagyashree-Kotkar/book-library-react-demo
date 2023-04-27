import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import ALLBooksList from "./ALLBooksList"
import JavaBooksList from "./JavaBooksList"
import PythonBooksList from "./PythonBooksList"
import WebDevelopmentBooksList from "./WebDevelopmentBooksList"
import BooksClientServerList from "./BooksClientServerList"
import BooksInternetList from "./BooksInternetList"
import PearlBooksList from "./PerlBooksList"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  }
}

export default function BooksCollections() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <br />
      <br />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Java" {...a11yProps(1)} />
          <Tab label="Python" {...a11yProps(2)} />
          <Tab label="Web Development" {...a11yProps(3)} />
          <Tab label="Client-Server" {...a11yProps(4)} />
          <Tab label="Internet" {...a11yProps(5)} />
          <Tab label="Perl" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ALLBooksList></ALLBooksList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JavaBooksList></JavaBooksList>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PythonBooksList></PythonBooksList>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WebDevelopmentBooksList></WebDevelopmentBooksList>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BooksClientServerList></BooksClientServerList>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <BooksInternetList></BooksInternetList>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <PearlBooksList></PearlBooksList>
      </TabPanel>
      <br />
      <br />
    </div>
  )
}
