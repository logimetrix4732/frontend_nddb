import React, { useEffect, useRef, useState } from "react";
import "../Components/CareerComponents/career.css";
import { useNavigate, useParams } from "react-router-dom";
import CareerForm from "../Components/CareerComponents/CareerForm";
import CareerAbout from "../Components/CareerComponents/CareerAbout";
import JobOverView from "../Components/CareerComponents/JobOverView";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import JobCard from "../Components/CareerComponents/JobCard";
import { toast, ToastContainer } from "react-toastify";
import ImageHeader from "../Components/Shared/ImageHeader";
import JobExplain from "../Components/CareerComponents/JobExplain";
import { apiGet,apiPost } from "../utils/apiClient";
export default function CarrerPage() {

  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobData, setJobData] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const jobDetailRef = useRef(null);
  const { id } = useParams();

  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
    navigate(`/CarrerPage/${job.id}`, { replace: true });
  };

  useEffect(() => {
    if (id && jobData.length > 0) {
      const job = jobData.find((job) => job.id.toString() === id);

      if (job) {
        setSelectedJob(job);
        setShowDetails(true);

        requestAnimationFrame(() => {
          jobDetailRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    }
  }, [id, jobData]);

  const handleCardBack = () => {
    setShowDetails(false);
    setSelectedJob(null);
    navigate("/CarrerPage");
  };

  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    setOpen(false);
  };

const fetchData = async () => {
  try {
    const res = await apiGet('/getjob');
    if (res.status && Array.isArray(res.data)) {
      setJobData(res.data);
    } else {
      toast.error("Failed to load job data.");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    toast.error("An error occurred while fetching jobs.");
  }
};

  useEffect(() => {
    fetchData();
  }, []);

const [formData, setFormData] = useState({
  Name: "",
  LastName: "",
  Email: "",
  PhoneNumber: "",
  CoverLetter: "",
  CurrentRole: "",
  CurrentCompany: "",
  CurrentCTC: "",
});


  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  let errorText = "";

  if (name === "Email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errorText = emailPattern.test(value) ? "" : "Enter a valid email";
  }

  if (name === "PhoneNumber") {
    const phonePattern = /^[0-9]{10}$/;
    errorText = phonePattern.test(value)
      ? ""
      : "Enter a valid 10-digit phone number";
  }

  setFormData((prev) => ({ ...prev, [name]: value }));
  setErrors((prev) => ({
    ...prev,
    [name]: errorText,
  }));
};


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setErrors((prev) => ({
        ...prev,
        selectedFile: "Only PDF files are allowed",
      }));
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
      setErrors((prev) => ({ ...prev, selectedFile: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim() && key !== "message") {
        newErrors[key] = "This field is required";
      }
    });

    if (!selectedFile) {
      newErrors.selectedFile = "CV is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async () => {
  if (!validateForm()) return;

  setLoading(true);

  try {
    const dataToSend = new FormData();

    // Append all form fields with backend-matching keys
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });

    // Append file
    dataToSend.append("resume", selectedFile);

    // Append JobId
    dataToSend.append("JobId", selectedJob.JobId);

    // Append JobId as route param expected by backend
    if (selectedJob?.id) {
      // Your API expects jobId in the URL — not in formData — so we use it during request
      // Not appending in FormData anymore unless backend also reads from body (optional)
    } else {
      toast.error("Job not selected");
      setLoading(false);
      return;
    }
   
    // ⚠️ Adjust API call with jobId as URL param
    const response = await apiPost(`/apply/${selectedJob.id}`, dataToSend, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    if (response) {
      toast.success("Application submitted successfully!", { autoClose: 2000 });
      setFormData({
        Name: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        CoverLetter: "",
        CurrentRole: "",
        CurrentCompany: "",
        CurrentCTC: "",
      });
      setSelectedFile(null);
      setErrors({});
      setLoading(false);
      handleFormClose();
    } else {
      toast.error(response.message || "Submission failed.");
      setLoading(false);
    }
  } catch (error) {
    toast.error("Submission failed. Please try again.");
    console.error("Submission error:", error);
    setLoading(false);
  }
};



  return (
    <>
      <ImageHeader
        title="Career"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Career" }]}
      />
      <div style={{ background: "#ffffff" }}>
        <CareerForm
          open={open}
          onClose={handleFormClose}
          formData={formData}
          loading={loading}
          errors={errors}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          selectedFile={selectedFile}
          handleSubmit={handleSubmit}
        />
        {!showDetails}
        {/* {!showDetails && <CareerAbout />} */}
        <div className="job">
          <div className="wrapper">
            <div className="main-container">
              <div className="searched-jobs">
                <Grid container>
                  {!showDetails ? (
                    <Grid item xs={12}>
                      <Grid item xs={12} display="flex" justifyContent="center">
                        <motion.div
                          initial={{ x: "100%", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ type: "tween", duration: 0.6 }}
                        >
                          <JobCard
                            handleCardClick={handleCardClick}
                            jobData={jobData}
                          />
                        </motion.div>
                      </Grid>
                    </Grid>
                  ) : (
                    <React.Fragment>
                      <Grid
                        item
                        lg={3}
                        sm={5}
                        xs={12}
                        order={{ xs: 2, sm: 1 }}
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
                          <JobOverView
                            jobData={jobData}
                            showDetails={showDetails}
                            handleCardBack={handleCardBack}
                            handleCardClick={handleCardClick}
                          />
                        </motion.div>
                      </Grid>
                      <Grid item lg={9} sm={7} xs={12} order={{ xs: 1, sm: 2 }}>
                        <motion.div
                          initial={{ x: "100%", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ type: "tween", duration: 0.8 }}
                          ref={jobDetailRef}
                        >
                          <JobExplain
                            handleFormOpen={handleFormOpen}
                            selectedJob={selectedJob}
                            handleCardBack={handleCardBack}
                          />
                        </motion.div>
                      </Grid>
                    </React.Fragment>
                  )}
                </Grid>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-left" autoClose={3000} />
      </div>
    </>
  );
}