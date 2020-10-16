import React, { useRef, useLayoutEffect } from "react";
import axios from "axios";
import { Chart } from "chart.js";

function HomePage() {
  const chartRef = useRef();
  useLayoutEffect(() => {
    axios.get("/budget").then((res) => {
      const data = {
        datasets: [
          {
            data: [],
            backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#E952DE", "#ED254E", "#18FF6D", "#5BC3EB"],
          },
        ],
        labels: [],
      };
      data.datasets[0].data = res.data.map((a) => a.budget);
      data.labels = res.data.map((a) => a.title);
      const ctx = chartRef.current.getContext("2d");
      // eslint-disable-next-line no-unused-vars
      const _pieChart = new Chart(ctx, {
        type: "pie",
        data,
      });
    });
  }, []);
  return (
    <main className={"container center"}>
      <div className={"page-area"}>
        <div className={"text-box"}>
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop to track it down, you would get surprised!
            Proper budget management depends on real data... and this app will help you with that!
          </p>
        </div>
        <div className={"text-box"}>
          <h1>Alerts</h1>
          <p>What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.</p>
        </div>
        <div className={"text-box"}>
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster! Also, they to live
            happier lives... since they expend without guilt or fear... because they know it is all good and accounted
            for.
          </p>
        </div>
        <div className={"text-box"}>
          <h1>Free</h1>
          <p>This app is free!!! And you are the only one holding your data!</p>
        </div>
        <div className={"text-box"}>
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop to track it down, you would get surprised!
            Proper budget management depends on real data... and this app will help you with that!
          </p>
        </div>
        <div className={"text-box"}>
          <h1>Alerts</h1>
          <p>What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.</p>
        </div>
        <div className={"text-box"}>
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster! Also, they to live
            happier lives... since they expend without guilt or fear... because they know it is all good and accounted
            for.
          </p>
        </div>
        <div className={"text-box"}>
          <h1>Chart</h1>
          <p>
            <canvas ref={chartRef} width={"400"} height={"400"} />
          </p>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
