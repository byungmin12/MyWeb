import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const OpacityAnimation = keyframes`
  from{
    opacity: 0 ;
  }
  to {
    opacity: 1 ;

  }
`;

const jewelryAnimation = keyframes`
  to{
    stroke-dashoffset: 0;
  }
`;

const PathJewelry = styled.path``;
const PathWeb = styled.path``;
const PathCss = styled.path``;
const GTag = styled.g`
  /* animation-delay: 3s; */
  path {
    fill: #000000;
    stroke-width: 1;
  }

  .jew {
    fill: none;
    stroke: #000000;
    stroke-width: 30;
    stroke-miterlimit: 10;
    stroke-dasharray: 4972;
    stroke-dashoffset: 4972;
    animation: ${jewelryAnimation} 15s forwards;
  }
  .web {
    fill: none;
    stroke: #000000;
    stroke-width: 20;
    stroke-miterlimit: 10;
    stroke-dasharray: 8178;
    stroke-dashoffset: 8178;
    animation: ${jewelryAnimation} 15s forwards;
  }
  .restPath {
    opacity: 0;
    animation: ${OpacityAnimation} 0.4s forwards;
    animation-delay: 4s;
  }
`;

function Logo() {
  const jewRef = useRef();
  const webRef = useRef();

  const [jewelry, setJewelry] = useState();

  useEffect(() => {
    const pathRefOne = webRef.current.getTotalLength();
    setJewelry(pathRefOne);
    console.log(pathRefOne);
  }, []);

  console.log(jewelry);

  return (
    <svg width="100%" height="100%" viewBox="-80 -210 230.000000 210.000000" preserveAspectRatio="xMidYMid meet">
      <GTag transform="scale(0.100000,-0.100000)" fill="#000000">
        <PathJewelry
          ref={jewRef}
          className="jew"
          d="M1072 1602 l-52 -47 126 -140 c180 -201 161 -185 187 -154 12 15 76
86 141 158 l119 132 -49 50 -48 49 -186 0 -185 0 -53 -48z m158 23 c0 -8 -5
-26 -12 -40 -11 -23 -16 -25 -85 -25 -40 0 -73 3 -73 8 0 4 17 21 37 39 31 26
47 32 86 33 35 0 47 -4 47 -15z m145 -21 c8 -20 15 -38 15 -40 0 -2 -36 -4
-80 -4 -44 0 -80 3 -80 7 0 4 5 22 12 40 12 32 14 33 65 33 51 0 53 -1 68 -36z
m150 -4 l39 -40 -77 0 -78 0 -15 35 c-7 19 -14 37 -14 40 0 3 24 5 53 5 49 0
56 -3 92 -40z m-295 -122 c12 -40 30 -100 40 -132 11 -33 19 -61 17 -62 -5 -5
-227 248 -227 257 0 5 34 9 75 9 l74 0 21 -72z m157 49 c-2 -7 -19 -61 -37
-122 -18 -60 -35 -113 -39 -117 -4 -4 -24 49 -45 119 -23 76 -34 128 -28 132
18 11 154 0 149 -12z m173 16 c0 -7 -75 -93 -182 -211 -22 -24 -42 -42 -44
-40 -3 3 52 194 71 246 5 13 155 18 155 5z"
        />

        <PathWeb
          ref={webRef}
          className="web"
          d="M432 1288 c-18 -18 -17 -521 1 -537 9 -6 84 -12 203 -13 l189 -3 3
-65 c2 -36 8 -68 15 -72 7 -4 161 -8 344 -8 318 0 333 1 343 19 13 26 13 406
0 432 -10 18 -23 19 -165 19 l-155 0 0 73 c0 43 -5 78 -12 85 -8 8 -64 12
-184 12 l-173 0 -27 35 -26 35 -172 0 c-120 0 -176 -4 -184 -12z m372 -33 l27
-35 177 -2 177 -3 3 -77 3 -78 -178 -2 -178 -3 -5 -150 -5 -150 -190 0 -190 0
-3 255 c-1 140 0 260 3 267 3 10 45 13 168 13 l165 0 26 -35z m714 -424 c2
-165 -1 -216 -10 -223 -15 -9 -628 -11 -652 -2 -14 5 -16 34 -16 218 0 117 3
216 7 219 4 4 155 6 337 5 l331 -3 3 -214z"
        />
        <PathCss
          className="restPath"
          d="M490 1220 c0 -6 48 -10 125 -10 77 0 125 4 125 10 0 6 -48 10 -125
10 -77 0 -125 -4 -125 -10z"
        />
        <PathCss
          className="restPath"
          d="M890 1170 c0 -6 47 -10 121 -10 77 0 118 4 114 10 -4 6 -55 10 -121
10 -69 0 -114 -4 -114 -10z"
        />
        <PathCss className="restPath" d="M542 1143 c32 -2 84 -2 116 0 31 2 5 3 -58 3 -63 0 -89 -1 -58 -3z" />
        <PathCss
          className="restPath"
          d="M490 1080 c0 -6 28 -10 65 -10 37 0 65 4 65 10 0 6 -28 10 -65 10
-37 0 -65 -4 -65 -10z"
        />
        <PathCss className="restPath" d="M563 1013 c43 -2 110 -2 150 0 40 1 5 3 -78 3 -82 0 -115 -2 -72 -3z" />
        <PathCss
          className="restPath"
          d="M498 951 c20 -12 139 -13 147 -1 4 6 -22 10 -77 10 -49 0 -78 -4 -70
-9z"
        />
        <PathCss
          className="restPath"
          d="M490 890 c0 -6 57 -10 150 -10 93 0 150 4 150 10 0 6 -57 10 -150 10
-93 0 -150 -4 -150 -10z"
        />
        <PathCss className="restPath" d="M553 823 c37 -2 96 -2 130 0 34 2 4 3 -68 3 -71 0 -99 -1 -62 -3z" />
        <PathCss
          className="restPath"
          d="M1211 929 c-42 -108 -81 -212 -81 -217 0 -3 4 -2 9 3 14 14 93 227
87 233 -3 2 -10 -6 -15 -19z"
        />
        <PathCss
          className="restPath"
          d="M988 871 c-31 -20 -60 -39 -63 -43 -3 -3 24 -24 60 -48 36 -24 68
-40 71 -37 3 3 -19 21 -50 41 -31 20 -56 38 -56 41 0 2 25 20 55 40 51 32 66
46 48 44 -5 0 -34 -17 -65 -38z"
        />
        <PathCss
          className="restPath"
          d="M1300 905 c0 -2 25 -20 55 -40 30 -19 55 -37 55 -40 0 -2 -25 -21
-56 -40 -31 -20 -54 -38 -51 -41 5 -5 137 74 137 81 0 4 -128 85 -135 85 -3 0
-5 -2 -5 -5z"
        />
      </GTag>
    </svg>
  );
}

export default Logo;
