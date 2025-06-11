import React, { useEffect, useState } from "react";
import PremiumDashboard from "./PremiumDashboard";
import { apiGet } from "../utils/apiClient";

const AdminDashboard = () => {
  const [dashboard, setDasboard] = useState({});

const fetchData = async () => {
  try {
    const data = await apiGet("/getDashboardData");
    setDasboard(data.data); 
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  }
};

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {dashboard.totalApplied !== undefined ? (
      <PremiumDashboard dashboard={dashboard} />
    ) : (
      <div>Loading...</div>
    )}
    </div>
  );
};

export default AdminDashboard;
