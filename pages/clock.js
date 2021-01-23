import Head from 'next/head'
import * as d3 from 'd3';
import { useEffect } from 'react';
import styles from '../styles/Clock.module.css'

let data = [];

const fields = () => {
  let currentTime, hour, minute, second;
  currentTime = new Date();
  second = currentTime.getSeconds();
  minute = currentTime.getMinutes();
  hour = currentTime.getHours() + minute / 60;
  data = [
    {
      "unit": "seconds",
      "numeric": second
    }, {
      "unit": "minutes",
      "numeric": minute
    }, {
      "unit": "hours",
      "numeric": hour
    }
  ];
  return data;
};

let width, height, offSetX, offSetY, pi, scaleSecs, scaleMins, scaleHours;
width = 400;
height = 200;
offSetX = 200;
offSetY = 100;

pi = Math.PI;
scaleSecs = d3.scaleLinear().domain([0, 59 + 999/1000]).range([0, 2 * pi]);
scaleMins = d3.scaleLinear().domain([0, 59 + 59/60]).range([0, 2 * pi]);
scaleHours = d3.scaleLinear().domain([0, 11 + 59/60]).range([0, 2 * pi]);

let vis, clockGroup;

const render = (data) => {

  var hourArc, minuteArc, secondArc;

  clockGroup.selectAll(".clockhand").remove();

  secondArc = d3.arc()
    .innerRadius(0)
    .outerRadius(70)
    .startAngle(function(d) {
    return scaleSecs(d.numeric);
  })
    .endAngle(function(d) {
    return scaleSecs(d.numeric);
  });

  minuteArc = d3.arc()
    .innerRadius(0)
    .outerRadius(70)
    .startAngle(function(d) {
    return scaleMins(d.numeric);
  })
    .endAngle(function(d) {
    return scaleMins(d.numeric);
  });

  hourArc = d3.arc()
    .innerRadius(0)
    .outerRadius(50)
    .startAngle(function(d) {
    return scaleHours(d.numeric % 12);
  })
    .endAngle(function(d) {
    return scaleHours(d.numeric % 12);
  });

  clockGroup.selectAll(".clockhand")
    .data(data)
    .enter()
    .append("svg:path")
    .attr("d", function(d) {
      if (d.unit === "seconds") {
        return secondArc(d);
      } else if (d.unit === "minutes") {
        return minuteArc(d);
      } else if (d.unit === "hours") {
        return hourArc(d);
      }
    })
    .attr("class", "clockhand")
    .attr("stroke", (d) => {
      if (d.unit === 'seconds') {
        return "blue";
      } else if (d.unit === 'minutes') {
        return "yellow";
      } else if (d.unit === 'hours') {
        return "red";
      }
    })
    .attr("stroke-width", function(d) {
      if (d.unit === "seconds") {
        return 2;
      } else if (d.unit === "minutes") {
        return 3;
      } else if (d.unit === "hours") {
        return 3;
      }
    })
    .attr("fill", "none");
};


const init = () => {
  // init vis
  vis = d3
    .selectAll(".chart")
    .append("svg:svg")
    .attr("width", width)
    .attr("height", height);

  clockGroup = vis
    .append("svg:g")
    .attr("transform", "translate(" + offSetX + "," + offSetY + ")");

  clockGroup
    .append("svg:circle")
    .attr("r", 80)
    .attr("fill", "darkseagreen")
    .attr("class", "clock outercircle")
    .attr("stroke", "darkseagreen")
    .attr("stroke-width", 2);

  clockGroup
    .append("svg:circle")
    .attr("r", 4)
    .attr("fill", "#333")
    .attr("class", "clock innercircle");
}

export default function Clock() {
  useEffect(() => {
    init();
    render(fields());

    setInterval(() => {
      render(fields());
    }, 1000);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>imti | clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1 className="title">clock</h1>
        <p className="description">Using svg + d3</p>
        <div className="chart"></div>
      </main>
    </div>
  );
}