import React from "react";
import "./ReportsLayout.css";

const reports = [
  {
    id: 1,
    doctor: "Dr. John Doe",
    speciality: "Cardiology",
  },
  {
    id: 2,
    doctor: "Dr. Jane Smith",
    speciality: "Dermatology",
  },
];

const ReportsLayout = () => {
  const viewReport = (doctor) => {
    alert(`Viewing report of ${doctor}`);
  };

  const downloadReport = (doctor) => {
    alert(`Downloading report of ${doctor}`);
  };

  return (
    <div className="reports-container">
      <h1>Reports</h1>

      <table className="reports-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>

              <td>{report.doctor}</td>

              <td>{report.speciality}</td>

              <td>
                <button
                  className="report-btn"
                  onClick={() => viewReport(report.doctor)}
                >
                  View Report
                </button>
              </td>

              <td>
                <button
                  className="report-btn"
                  onClick={() => downloadReport(report.doctor)}
                >
                  Download Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;