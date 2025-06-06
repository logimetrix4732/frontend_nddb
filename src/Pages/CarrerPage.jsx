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

  // Mock data fetch function
  const fetchData = async () => {
    const mockJobData = [
      {
        id: 1,
        JobId: "NDDB-25-001",
        JobName: "Full Stack Developer",
        JobDescription: "We are looking for an experienced Full Stack Developer to join our team. You will be responsible for developing and maintaining web applications from front.",
        JobResponsibilities: [
          "Develop user interfaces using modern frameworks",
          "Design and implement backend services",
          "Create and maintain databases",
          "Collaborate with cross-functional teams"
        ],
        JobQualifications: [
          "Bachelor's degree in Computer Science or related field",
          "3+ years of experience with JavaScript frameworks",
          "Experience with RESTful APIs and database design"
        ],
        JobLocation: "Remote",
        JobType: "Full-Time",
        SalaryRange: "$80,000 - $120,000",
        JobExperience: "3+ years",
        PostedBy: 1,
        JobStatus: "Open",
        EndDate: "2025-12-31",
        createdAt: "2025-05-01T08:00:00.000Z",
        updatedAt: "2025-05-01T08:00:00.000Z"
      },
      {
        id: 2,
        JobId: "NDDB-25-002",
        JobName: "UX/UI Designer",
        JobDescription: "Join our design team to create beautiful and functional user experiences for our digital products.",
        JobResponsibilities: [
          "Create wireframes and prototypes",
          "Conduct user research and testing",
          "Develop design systems and style guides",
          "Collaborate with developers to implement designs"
        ],
        JobQualifications: [
          "Bachelor's degree in Design or related field",
          "Portfolio demonstrating UI/UX design skills",
          "Experience with design tools like Figma or Adobe XD"
        ],
        JobLocation: "San Francisco",
        JobType: "Full-Time",
        SalaryRange: "$90,000 - $130,000",
        JobExperience: "4+ years",
        PostedBy: 1,
        JobStatus: "Open",
        EndDate: "2025-11-30",
        createdAt: "2025-04-15T08:00:00.000Z",
        updatedAt: "2025-04-15T08:00:00.000Z"
      },
      {
        id: 3,
        JobId: "NDDB-25-003",
        JobName: "Data Scientist",
        JobDescription: "We're seeking a Data Scientist to analyze complex datasets and build predictive models.",
        JobResponsibilities: [
          "Develop machine learning models",
          "Analyze large datasets to extract insights",
          "Create data visualizations and reports",
          "Collaborate with product teams"
        ],
        JobQualifications: [
          "Master's degree in Data Science or related field",
          "Experience with Python and ML libraries",
          "Knowledge of SQL and NoSQL databases"
        ],
        JobLocation: "New York",
        JobType: "Full-Time",
        SalaryRange: "$100,000 - $140,000",
        JobExperience: "5+ years",
        PostedBy: 1,
        JobStatus: "Open",
        EndDate: "2025-10-15",
        createdAt: "2025-04-01T08:00:00.000Z",
        updatedAt: "2025-04-01T08:00:00.000Z"
      },
      {
        id: 4,
        JobId: "NDDB-25-004",
        JobName: "DevOps Engineer",
        JobDescription: "Help us build and maintain our cloud infrastructure and CI/CD pipelines.",
        JobResponsibilities: [
          "Manage cloud infrastructure (AWS/Azure/GCP)",
          "Implement and maintain CI/CD pipelines",
          "Monitor system performance and reliability",
          "Automate deployment processes"
        ],
        JobQualifications: [
          "Bachelor's degree in Computer Science or related field",
          "Experience with Docker and Kubernetes",
          "Knowledge of infrastructure as code (Terraform)"
        ],
        JobLocation: "Remote",
        JobType: "Full-Time",
        SalaryRange: "$110,000 - $150,000",
        JobExperience: "4+ years",
        PostedBy: 1,
        JobStatus: "Open",
        EndDate: "2025-09-30",
        createdAt: "2025-03-20T08:00:00.000Z",
        updatedAt: "2025-03-20T08:00:00.000Z"
      },
      {
        id: 5,
        JobId: "NDDB-25-005",
        JobName: "Product Manager",
        JobDescription: "Lead product development from conception to launch for our SaaS platform.",
        JobResponsibilities: [
          "Define product vision and roadmap",
          "Gather and prioritize product requirements",
          "Coordinate with engineering and design teams",
          "Analyze market trends and competition"
        ],
        JobQualifications: [
          "Bachelor's degree in Business or related field",
          "5+ years of product management experience",
          "Strong analytical and leadership skills"
        ],
        JobLocation: "Austin",
        JobType: "Full-Time",
        SalaryRange: "$120,000 - $160,000",
        JobExperience: "5+ years",
        PostedBy: 1,
        JobStatus: "Open",
        EndDate: "2025-08-31",
        createdAt: "2025-03-10T08:00:00.000Z",
        updatedAt: "2025-03-10T08:00:00.000Z"
      }
    ];
    
    // Simulate API delay
    setTimeout(() => {
      setJobData(mockJobData);
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorText = "";

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errorText = emailPattern.test(value) ? "" : "Enter a valid email";
    }

    if (name === "phone") {
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

    // In a real application, you would send the form data to your API here
    // For demonstration, we'll simulate a successful submission
    setTimeout(() => {
      toast.success("Application submitted successfully!", { autoClose: 2000 });
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedFile(null);
      setErrors({});
      setLoading(false);
      handleFormClose();
    }, 1500);
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
        {!showDetails && <CareerAbout />}
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