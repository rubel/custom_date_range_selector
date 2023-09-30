import { useState } from "react";
import { DateRange } from "react-date-range";

function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [selectorShown, setSelectorShown] = useState(false);
  return (
    <div
      className="App"
      style={{ backgroundColor: "#dfdfe5", minHeight: "100vh" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "33fr 33fr 33fr",
          width: "100%",
          gap: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Lets check
        </div>
        <div
          style={{
            backgroundColor: "#fefefe",
            position: "relative",
            padding: "10px",
          }}
        >
          <div>Date Range: </div>
          <div
            style={{
              color: "black",
              border: "1px solid #ddd",
              padding: "8px 12px",
              borderRadius: "4px",
            }}
            onClick={() => {
              setSelectorShown(true);
            }}
          >
            <div>
              {state[0].startDate.toLocaleDateString()}-
              {state[0].endDate
                ? state[0].endDate?.toLocaleDateString()
                : state[0].startDate?.toLocaleDateString()}
            </div>
          </div>
          {selectorShown && (
            <div style={{ top: "68px", left: "10px", position: "absolute" }}>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => {
                  if (item.selection.endDate !== item.selection.startDate) {
                    setSelectorShown(false);
                  }
                  setState([item.selection]);
                }}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </div>
          )}
        </div>
        <div
          style={{
            backgroundColor: "green",
            height: "100px",
            color: "white",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            {state[0].startDate.toLocaleDateString()}-
            {state[0].endDate
              ? state[0].endDate?.toLocaleDateString()
              : state[0].startDate?.toLocaleDateString()}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "purple",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          {state[0].startDate.toLocaleDateString()}
        </div>
        <div
          style={{
            backgroundColor: "crimson",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          {state[0].endDate?.toLocaleDateString()}
        </div>
        <div
          style={{
            backgroundColor: "pink",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            {state[0].startDate.toDateString()} {" -  "}
            {state[0].endDate
              ? state[0].endDate?.toDateString()
              : state[0].startDate?.toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
