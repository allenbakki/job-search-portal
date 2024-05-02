import React, { useState, useEffect } from "react";
import JobCard from "./jobCard";
import Grid from "@mui/material/Grid";
import getJobListData from "../api/jobList";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/colors";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  filterSearchRoles,
  filterSearchMode,
  filterSearchMinExp,
  filterSearchMinBasePay,
  filterSearchTeachStack,
  filtersearchCompanyName,
  filtersearchLocation,
} from "../controllers/filter";
import { debounce } from "../controllers/debounce";

export default function JobList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  // fetching initial states from redux store
  const roles = useSelector((state) => state.roles);
  const experience = useSelector((state) => state.experience);
  const mode = useSelector((state) => state.mode);
  const minBasePay = useSelector((state) => state.minBasePay);
  const techStack = useSelector((state) => state.techStack);
  const location = useSelector((state) => state.location);
  const companyName = useSelector((state) => state.companyName);

  // to fetch  job posts
  async function fetchPosts() {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getJobListData(offset);

      if (data.jdList.length === 0) {
        setIsLoading(false);
        return setMessage("loaded entire data, no futher data found");
      }

      setPosts((prevItems) => [...prevItems, ...data.jdList]);
      setOffset((prev) => prev + 10);
    } catch (error) {
      console.error("Error fetching job posts:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  //initially when the page mounts get the data
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    function getfiltereddata() {
      let filteredData = [...posts];
      filteredData = filterSearchRoles(filteredData, roles);
      filteredData = filterSearchMinBasePay(filteredData, minBasePay);
      filteredData = filterSearchMinExp(filteredData, experience);
      filteredData = filterSearchMode(filteredData, mode);
      filteredData = filterSearchTeachStack(filteredData, techStack);
      filteredData = filtersearchCompanyName(filteredData, companyName);
      filteredData = filtersearchLocation(filteredData, location);
      setFilteredPosts(filteredData);
    }
    getfiltereddata();
  }, [
    roles,
    minBasePay,
    experience,
    mode,
    techStack,
    companyName,
    location,
    posts,
  ]);

  //whenever the we scroll down then call handleScroll function to fetch data
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !isLoading
      ) {
        fetchPosts();
      }
    };

    const debounceHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("mousewheel", debounceHandleScroll);
    return () => window.removeEventListener("mousewheel", debounceHandleScroll);
  }, [isLoading]);

  return (
    <>
      <div>
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 5, md: 5 }}
          columnSpacing={{ xs: 1, sm: 3, md: 3 }}
        >
          {filteredPosts.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.jdUid}>
              <JobCard
                jobTitle={item.jobRole}
                location={item.location}
                jobDescription={item.jobDetailsFromCompany}
                jdLink={item.jdLink}
                minExp={item.minExp}
                maxExp={item.maxExp}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          {isLoading && <CircularProgress color="ochre" />}
          {error && <p>Error: {error.message}</p>}
        </ThemeProvider>
      </div>

      {message !== "" && posts.length <= 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            marginTop: "30px",
          }}
        >
          <Typography>{message}</Typography>
        </div>
      )}
    </>
  );
}
