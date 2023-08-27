import React from "react";
import "./App.css";
import man from "./assets";
const App = () => {
  return (
    <div>
      <div className="heading"> Team Page </div>
      <div className="content">
        Learn From Scientists, research scholars from the top institutes in the
        world.
      </div>
      <table className="table">
        <tr>
          <td>
            <div className="university-tag">
              <div className="university-name">
                {" "}
                Cambridge <div>University</div>
              </div>
            </div>
          </td>
          <td>
            <div className="university-tag">
              <div className="university-name">
                {" "}
                Harvard<div> University</div>
              </div>
            </div>
          </td>
          <td>
            <div className="university-tag">
              <div className="university-name">
                {" "}
                University of<div> California</div>
              </div>
            </div>
          </td>
          <td>
            <div className="university-tag">
              <div className="university-name">
                {" "}
                ETH<div>Zurich</div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="university-tag">
              <div className="university-name"> Max Planck</div>
            </div>
          </td>
          <td>
            <div className="university-tag">
              <div className="university-name">
                {" "}
                University of<div> Edinberg</div>
              </div>
            </div>
          </td>
          <td>
            <div className="university-tag">
              <div className="university-name"> John's Hookins</div>
            </div>
          </td>
          <td>
            <div className="university-tag">
              <div className="university-name"> Michigan's State</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="university-tag">
              <div className="university-name">
                {" "}
                University of <div> Illinois</div>
              </div>
            </div>
          </td>
          <td>
            <div className="university-tag">
              <div className="university-name">
                {" "}
                Humboldt<div>University</div>
              </div>
            </div>
          </td>
          <td>
            <div className="university-name">...and so on.</div>
          </td>
        </tr>
      </table>
      <div className="heading"> Meet Your Mentors </div>
      <table className="table">
        <tr>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Shubham <div> Cambridge University</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Rohit <div> Harvard University</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Dhruv <div> University Of California</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Raghav<div> ETH Zurich</div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                John <div> Max planck</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Mary <div> University of Edenberg</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Om <div> John's Hookins</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Rose <div> Michigan's State</div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Elise<div> Universoty of Illinois</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-container">
              <img src={man}></img>
              <div className="university-name">
                Jaren <div> Humboldt University</div>
              </div>
            </div>
          </td>
          <td>
            <div className="university-name">...and so on.</div>
          </td>
        </tr>
      </table>
      <div className="headingx"> Mentors and Advisors </div>
      <table className="table">
        <tr>
          <td>
            <div className="image-containerx">
              <img src={man}></img>
              <div className="university-name">
                Dr. Omkar<div> Principal Project Scientist</div>
                <div> IIT Madras</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-containerx">
              <img src={man}></img>
              <div className="university-name">
                Akhil Tripathi<div className="container"> Message him Now</div>
              </div>
            </div>
          </td>
          <td>
            <div className="image-containerx">
              <img src={man}></img>
              <div className="university-name">
                Vivek Dwivedi<div className="container"> Message him Now</div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default App;
