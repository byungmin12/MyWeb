import React from 'react';
import styled, { keyframes } from 'styled-components';

const cloudKeyframes = keyframes`
  0% {
    opacity: 0.1;
    -webkit-transform: translateX(300px);
    -moz-transform: translateX(300px);
    transform: translateX(300px);
  }
  10% {

    opacity: 0.7;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-1000px);
    -moz-transform: translateX(-1000px);
    transform: translateX(-1000px);
  }
`;

const Clouds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  transform: translateZ(0);

  .cloud {
    position: absolute;
    top: 20%;
    width: 300px;
    right: 0;
    opacity: 1;
    animation-name: ${cloudKeyframes};
    animation-timing-function: linear;
    animation-direction: forwards;
    animation-iteration-count: infinite;
    animation-duration: 5s;
  }

  .front {
    z-index: 9;
  }

  .distant {
    z-index: 1;
  }

  .background {
    z-index: 1;
  }

  /*Cloud Sizing*/
  .smaller {
    margin-right: 400px;
    width: 100px;
    margin-top: 50px;
    animation-duration: 9.2s;
    animation-delay: 0.1s;
    top: 30%;
  }

  .small {
    margin-right: 200px;
    width: 150px;
    animation-duration: 11.2s;
    top: 10%;
    animation-delay: 0.4s;
  }

  .big {
    width: 500px;
    margin-top: 50px;
    margin-right: 150px;
    animation-duration: 13.5s;
    top: 50%;
    animation-delay: 0.3s;
  }

  .massive {
    width: 600px;
    margin-top: 20px;
    margin-right: 0px;
    animation-duration: 20.5s;
    top: 45%;
    left: 10%;
    animation-delay: 0.1s;
  }
`;

function CloudContainer() {
  return (
    <div>
      <Clouds>
        <div>
          {/* <Plane></Plane>
          <Propeller></Propeller> */}
          <div></div>
          <div></div>
        </div>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          className="cloud big front slowest">
          <path
            fill="#B6B6B4"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          className="cloud distant smaller">
          <path
            fill="#B6B6B4"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          className="cloud small slow">
          <path
            fill="#B6B6B4"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          className="cloud distant super-slow massive">
          <path
            fill="#B6B6B4"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="762px"
          height="331px"
          viewBox="0 0 762 331"
          enable-background="new 0 0 762 331"
          className="cloud slower">
          <path
            fill="#B6B6B4"
            d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
          />
        </svg>
      </Clouds>
    </div>
  );
}

export default CloudContainer;
