import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100vh",
          // justifyContent: "space-around",
        }}
      >
        <img src="B.jpg" alt="car" className="carImage" />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="Imgif1 tooltip">
            <img src="about.gif" alt="gif imag" className="gif1 img-circle" />
            {/* <span className="aboutTooltip toolTipText">About Us</span> */}
          </div>
          <div className="Imgif2 tooltip">
            <img
              src="prediction.gif"
              alt="gif imag"
              className="gif1 img-circle"
            />
            {/* <span className="predictTooltip toolTipText">Prediction</span> */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="Imgif3 tooltip">
            <img
              src="contact.gif"
              alt="gif image"
              className="gif1 img-circle"
            />
            <span className="contactTooltip toolTipText">Contact Us</span>
          </div>
          <div className="Imgif4 tooltip">
            <img
              src="feedback.gif"
              alt="gif image"
              className="gif1 img-circle"
            />
            <span className="feedbackTooltip toolTipText">Feedback/Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
