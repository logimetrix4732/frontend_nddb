import React, { useState } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import JobCards from "./JobCards";
import CareerForm from "./CareerForm";

// Dummy components purely for layout rendering — replace with actual components if needed
const CarrerForm = () => <div />;
const MainHeading = () => <div className="main-heading">Carrer Page Heading</div>;
const CarrerAbout = () => <div className="career-about">About Career Section</div>;
const JobCard = () => <div className="job-card">Job Card List Here</div>;
const JobOverView = () => <div className="job-overview">Job Overview Here</div>;
const JobExplain = () => <div className="job-explain">Job Explanation Here</div>;

const CareerSection = () => {

 const [open, setOpen] = useState(false);
    const handleFormClose = () => {
    setOpen(false);
  };

    const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
    navigate(`/career/${job.id}`, { replace: true });
  };


  return (
    <div style={{ background: "#ffffff" }}>
      <CarrerForm
        open={open}
        onClose={handleFormClose}
        />

      {/* <MainHeading /> */}

      {/* <CarrerAbout /> */}

      <div className="job">
        <div className="wrapper">
          <div className="main-container">
            <div className="searched-jobs">
              <Grid container>
                <Grid item xs={12}>
                  <Grid item xs={12} display="flex" justifyContent="center">
                    <motion.div
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "tween", duration: 0.6 }}
                    >
                      <JobCards
                      handleCardClick={handleCardClick}
                       />
                    </motion.div>
                  </Grid>
                </Grid>

                <React.Fragment>
                  <Grid
                    item
                    lg={3}
                    sm={5}
                    xs={12}
                    sx={{
                      height: "915px",
                      overflowY: "auto",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#4786e6 #f1f1f1",
                      "&::-webkit-scrollbar": {
                        width: "6px",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                        borderRadius: "10px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "#ff6b6b",
                        borderRadius: "10px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "#e63946",
                      },
                    }}
                  >
                    <motion.div
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "tween", duration: 0.6 }}
                    >
                      <JobOverView />
                    </motion.div>
                  </Grid>
                  <Grid item lg={9} sm={7} xs={12}>
                    <motion.div
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "tween", duration: 0.8 }}
                    >
                      {/* <JobExplain /> */}
                    </motion.div>
                  </Grid>
                </React.Fragment>
              </Grid>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-left" autoClose={3000} />
    </div>
  );
};

export default CareerSection;
