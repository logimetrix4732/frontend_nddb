import React, { useEffect, useState } from "react";
import ImageHeader from "../Components/Shared/ImageHeader";
import JobCard from "../Components/CareerComponents/JobCard";
import { apiGet, apiPost, apiPut } from "../utils/apiClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "./ConfirmationModal";
import JobPost from "./JobPost";
import JobExplain from "../Components/CareerComponents/JobExplain";
import ApplicantTable from "./ApplicantTable";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import "../Components/CareerComponents/career.css";
import axiosInstance from "../utils/axiosInstance";

const AdminPost = () => {
  const [open, setOpen] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [ApplicantsTrue, setApplicantsTrue] = useState(false);

  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
    setApplicantsTrue(true);
    fetchAppliedList(job.id);
  };

  const handleCardBack = () => {
    setShowDetails(false);
    setSelectedJob(null);
  };

  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    setOpen(false);
    handleReset();
  };

  const fetchData = async () => {
    try {
      const res = await apiGet("/getjob");
      if (res.status && Array.isArray(res.data)) {
        setJobData(res.data);
      } else {
        toast.error("Failed to load job data.");
      }
    } catch (err) {
      toast.error("An error occurred while fetching jobs.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [errors, setErrors] = useState({});
  const [responsibilities, setResponsibilities] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editID, setEditID] = useState(0);
  const [formData, setFormData] = useState({
    JobName: "",
    JobExperience: "",
    SalaryRange: "",
    EndDate: "",
    JobType: "",
    JobLocation: "",
    JobDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await apiPost("/createJob", {
          ...formData,
          JobResponsibilities: responsibilities,
          JobQualifications: qualifications,
        });

        toast.success(response.message, { autoClose: 2000 });
        handleFormClose();
        fetchData();
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to post job.", {
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUpdateJob = async () => {
    if (!editID) {
      return;
    }

    const updatedData = {
      ...formData,
      JobResponsibilities: responsibilities,
      JobQualifications: qualifications,
    };

    try {
      const response = await apiPut(`/updateJob/${editID}`, updatedData);

      toast.success(response.message, { autoClose: 2000 });
      handleFormClose();
      fetchData();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update job.", {
        autoClose: 2000,
      });
    }
  };

  const handleEditJob = (jobData) => {
    if (jobData) {
      setOpen(true);
      setFormData({
        JobName: jobData.JobName || "",
        JobExperience: jobData.JobExperience || "",
        // SalaryRange: jobData.SalaryRange || "",
        // JobName: jobData.JobName || "",
        // JobExperience: jobData.JobExperience || "",
        SalaryRange: jobData.SalaryRange || "",
        EndDate: jobData.EndDate || "",
        JobType: jobData.JobType || "",
        JobLocation: jobData.JobLocation || "",
        JobDescription: jobData.JobDescription || "",
      });
      setEditID(jobData.id);
      setResponsibilities(jobData.JobResponsibilities);
      setQualifications(jobData.JobQualifications);
    }
  };

  const handleReset = () => {
    setFormData({
      JobName: "",
      JobExperience: "",
      SalaryRange: "",
      EndDate: "",
      JobType: "",
      JobLocation: "",
      JobDescription: "",
    });
    setEditID(0);
    setErrors({});
    setQualifications([]);
    setResponsibilities([]);
  };

  const tableHeader = [
    {
      id: "Sr No",
      numeric: false,
      disablePadding: true,
      label: "Sr No",
    },
    {
      id: "Name",
      numeric: false,
      disablePadding: true,
      label: "Name",
    },
    {
      id: "ApplicationDate",
      numeric: false,
      disablePadding: true,
      label: "ApplicationDate",
    },
    {
      id: "Email",
      numeric: false,
      disablePadding: true,
      label: "Email",
    },
    {
      id: "Mobile",
      numeric: false,
      disablePadding: true,
      label: "Mobile",
    },
    {
      id: "Status",
      numeric: false,
      disablePadding: true,
      label: "Status",
    },
    {
      id: "Scheduled_Date",
      numeric: false,
      disablePadding: true,
      label: "Scheduled_Date",
    },
    {
      id: "Action",
      numeric: false,
      disablePadding: true,
      label: "Action",
      style: { marginLeft: "18px" },
    },
    {
      id: "Resume",
      numeric: false,
      disablePadding: true,
      label: "Resume",
    },
  ];

  // --------------------------------Applicants
  const [approveOpen, setApproveOpen] = useState({
    status: false,
    data: {},
  });

  const handleOpen = (id, status, scheduledDate) => {
    setApproveOpen({
      status: true,
      data: { id, status, scheduledDate },
    });
  };

  const handleClose = () => {
    setApproveOpen({
      status: false,
      data: {},
    });
  };

  const [appliedList, setAppliedList] = useState([]);

  const fetchAppliedList = async (id) => {
    const Applyid = selectedJob?.id || id;
    const url = `/appliedList/${Applyid}`;

    try {
      const response = await apiGet(url);
      if (response) {
        setAppliedList(response.data || []);
      } else {
        toast.error("Error fetching data", { autoClose: 2000 });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error(error?.response?.data?.message || "Error fetching data", {
        autoClose: 2000,
      });
    }
  };

  const handleStatusChange = async () => {
    const { id, status, scheduledDate } = approveOpen.data;

    try {
      const url = `/updateStatus/${selectedJob.id}`;
      const response = await apiPut(url, {
        ApplicantId: id,
        Status: status,
        ScheduledDate: scheduledDate,
      });

      if (response) {
        toast.success(response.message || "Status updated successfully", {
          autoClose: 2000,
        });
        fetchAppliedList(id);
        handleClose();
      } else {
        toast.error(response.message || "Failed to update status.", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!", {
        autoClose: 2000,
      });
    }
  };
  const userToken = localStorage.getItem("token");

  const downloadResume = async (id, name) => {
    const url = `/downloadResume/${id}?JobId=${selectedJob.id}`;

    try {
      const response = await axiosInstance.get(url, {
        responseType: "blob", // This is required to handle binary file
      });

      if (!response || !response.data || response.data.size === 0) {
        toast.error("Received an empty file.");
        return;
      }

      const blobUrl = window.URL.createObjectURL(response.data);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);

      toast.success("Resume downloaded successfully!");

      // Ensure fetchAppliedList runs after download completion
      await fetchAppliedList(selectedJob?.id);
    } catch (error) {
      const msg =
        error.response?.data?.message === "No Applicant Found"
          ? "No applicant found for this job!"
          : "Failed to download the resume.";

      toast.error(msg);
    }
  };

  return (
    <div>
      <ConfirmationModal
        open={approveOpen}
        handleClose={handleClose}
        data={approveOpen.data}
        handleConfirm={handleStatusChange}
        message={`Are you sure you want to ${
          approveOpen?.data?.status?.toLowerCase() || ""
        } this Applicants?`}
      />
      <ImageHeader
        title="Admin Post"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admin Post" },
        ]}
      />
      <JobPost
        open={open}
        editID={editID}
        errors={errors}
        loading={loading}
        formData={formData}
        onClose={handleFormClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        qualifications={qualifications}
        handleUpdateJob={handleUpdateJob}
        responsibilities={responsibilities}
        setQualifications={setQualifications}
        setResponsibilities={setResponsibilities}
      />
      <div className="job">
        <div className="wrapper">
          <div className="main-container">
            <div className="searched-jobs">
              <Grid container>
                {!showDetails ? (
                  <Grid item xs={12}>
                    <Grid
                      item
                      xs={10.7}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px",
                        height: "90px",
                        width: '100%'
                      }}
                    >
                      <div className="th-btn btn btn-outline-success" onClick={handleFormOpen}>
                        Add New Opening
                      </div>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.6 }}
                      >
                        <JobCard
                          admin={true}
                          jobData={jobData}
                          handleCardClick={handleCardClick}
                          handleEditJob={handleEditJob}
                        />
                      </motion.div>
                    </Grid>
                  </Grid>
                ) : (
                  <React.Fragment>
                    <Grid item lg={12} sm={12} xs={12} order={{ xs: 1, sm: 2 }}>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", duration: 0.8 }}
                      >
                        <JobExplain
                          handleFormOpen={handleFormOpen}
                          selectedJob={selectedJob}
                          ApplicantsTrue={ApplicantsTrue}
                          handleCardBack={handleCardBack}
                        />
                      </motion.div>
                      <Grid
                        item
                        lg={12}
                        sm={12}
                        xs={12}
                        order={{ xs: 1, sm: 2 }}
                        marginTop={5}
                      >
                        <ApplicantTable
                          headCells={tableHeader}
                          rows={appliedList || []}
                          handleOpen={handleOpen}
                          downloadResume={downloadResume}
                        />
                      </Grid>
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
  );
};

export default AdminPost;
