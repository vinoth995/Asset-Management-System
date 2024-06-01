/* eslint-disable jsx-a11y/img-redundant-alt */
import NavBar from "./NavBar";
import Chart from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

function HomePage() {
  const labels1 = ["ITE", "MINDEF", "NCCS", "MOE", "NUH", "SNDGO"];
  const data1 = {
    labels: labels1,
    datasets: [
      {
        labels1: "Current Deployment",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [10, 14, 5, 13, 10, 18],
      },
    ],
  };

  const data = {
    labels: ["Deployed", "Pending Deployment", "Stock Available"],
    datasets: [
      {
        label: "All Asset",
        data: [200, 50, 150],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const labels = ["Aug", "Sep", "Oct", "Nov", "Dec"];
  const data2 = {
    labels: labels,
    datasets: [
      {
        labels: "Asset Per Month",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [30, 25, 40, 50, 20, 40],
      },
    ],
  };

  // Set the desired heights for charts and images
  const chartHeight = "300px";
  const imageHeight = "450px";
  const chartContainerHeight = "300px";

  const chartStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: chartContainerHeight,
  };

  return (
    <>
      {/* Container for Rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* First Row - Charts */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "", height: chartHeight }}>
            <Line data={data1} width="100%" height="100%" />
            <img
              src="src/images/image1.jpg"
              alt="Description of image 1"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div style={{ width: "", height: chartContainerHeight }}>
            <Doughnut
              data={data}
              options={{ maintainAspectRatio: false }}
              width="100%"
              height="100%"
            />
            <img
              src="src/images/image2.jpg"
              alt="Description of image 2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div style={{ width: "", height: chartHeight }}>
            <Bar data={data2} width="100%" height="100%" />
            <img
              src="src/images/image3.jpg"
              alt="Description of image 3"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Divider */}
        <hr style={{ margin: "10px" }} />

        {/* Second Row - Images */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ width: "48%", height: imageHeight, overflow: "hidden" }}
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          >
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src="https://p1-ofp.static.pub//fes/cms/2024/03/27/ud9jttaevhf5be2aa5s6p6cbl6bi51924891.png"
              alt="Left Image"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div
            style={{ width: "48%", height: imageHeight, overflow: "hidden" }}
          >
            <img
              src="https://p-sg.ipricegroup.com/uploaded_3152a740c68a4365b947852d87c9ac72a1d2d000.png"
              alt="right Image"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
