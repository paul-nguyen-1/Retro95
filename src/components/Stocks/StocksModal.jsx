import Draggable from "react-draggable";
import {
  Button,
  ScrollView,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";

function StocksModal({ setStocksActive }) {
    //push modal to front if another tab is active

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-55%, -110%)",
      }}
    >
      <Draggable>
        <Window>
          <WindowHeader
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Stocks.exe</span>
            <Button onClick={() => setStocksActive(false)}>
              <span
                style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
              >
                x
              </span>
            </Button>
          </WindowHeader>
          <WindowContent>
            <ScrollView style={{ width: "475px", height: "400px" }}>
              <div>
                <p style={{ width: 400 }}>
                  React95 is the best UI library ever created
                </p>
                <p>React95 is the best UI library ever created</p>
                <p>React95 is the best UI library ever created</p>
                <p>React95 is the best UI library ever created</p>
                <p>React95 is the best UI library ever created</p>
                <p>React95 is the best UI library ever created</p>
                <p>React95 is the best UI library ever created</p>
                <p>React95 is the best UI library ever created</p>
                <p>React95 is the best UI library ever created</p>
              </div>
            </ScrollView>
          </WindowContent>
        </Window>
      </Draggable>
    </div>
  );
}

export default StocksModal;
