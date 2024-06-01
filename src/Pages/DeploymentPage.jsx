import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { Line } from 'react-chartjs-2';
import { Tree } from 'react-d3-tree';
import './Dashboard.css';

const DeploymentPage = () => {
  const [dataFromFirebase, setDataFromFirebase] = useState({});
  const [lineChartData, setLineChartData] = useState({});
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    const fetchData = async () => {
      try {
        const snapshot = await firebase.database().ref('your-data-path').once('value');
        const data = snapshot.val();
        setDataFromFirebase(data);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Process fetched data to format it for line chart
    // Assuming your data is in a format suitable for a line chart
    const processedLineChartData = {
      labels: Object.keys(dataFromFirebase),
      datasets: [
        {
          label: 'Data',
          data: Object.values(dataFromFirebase),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
    setLineChartData(processedLineChartData);
  }, [dataFromFirebase]);

  useEffect(() => {
    // Process fetched data to format it for tree graph
    // Assuming your data is in a format suitable for a tree graph
    const processedTreeData = {
      name: 'Root',
      children: Object.keys(dataFromFirebase).map((key) => ({
        name: key,
        value: dataFromFirebase[key],
      })),
    };
    setTreeData([processedTreeData]);
  }, [dataFromFirebase]);

  return (
    <div>
      <h2>Deployment Page</h2>
      <div>
        <h3>Line Chart</h3>
        <Line data={lineChartData} />
      </div>
      <div>
        <h3>Tree Graph</h3>
        <Tree data={treeData} />
      </div>
    </div>
  );
};

export default DeploymentPage;
