import React, { useState, useEffect } from "react";
import JobCard from "./jobCard";
import Grid from "@mui/material/Grid";
import getJobListData from "../api/jobList";

export default function JobList() {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);

  // to fetch  job posts
  async function fetchPosts() {
    try {
      const data = await getJobListData(offset);

      setPosts((prevItems) => [...prevItems, ...data.jdList]);
      setOffset((prev) => prev + 1);
      console.log(data);
    } catch (error) {
      console.error("Error fetching job posts:", error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 5, md: 5 }}
          columnSpacing={{ xs: 1, sm: 3, md: 3 }}
        >
          {posts.map((item) => (
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
    </>
  );
}
