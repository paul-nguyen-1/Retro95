import { Anchor, Button, Window, WindowContent, WindowHeader } from "react95";
import styled from "styled-components";

export function About({ showButton, setShowButton }) {
  const Wrapper = styled.div`
    padding: 5rem;
    background: transparent;
    .window-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .close-icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: -1px;
      margin-top: -1px;
      transform: rotateZ(45deg);
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        background: ${({ theme }) => theme.materialText};
      }
      &:before {
        height: 100%;
        width: 3px;
        left: 50%;
        transform: translateX(-50%);
      }
      &:after {
        height: 3px;
        width: 100%;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .window {
      width: 300px;
      min-height: 300px;
    }
  `;

  return (
    showButton && (
      <Wrapper
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Window className="window">
          <WindowHeader className="window-title">
            <span>About.exe</span>
            <Button onClick={() => setShowButton(false)}>
              <div className="close-icon"></div>
            </Button>
          </WindowHeader>
          <WindowContent>
            <p style={{ fontSize: "30px", marginBottom: "15px" }}> Retro95 </p>
            <p style={{ marginBottom: "15px" }}>
              An open source Windows 95 style Project
            </p>
            <p style={{ marginBottom: "15px" }}>
              {"Built with "}
              <Anchor href="https://beta.reactjs.org/" target="_blank">
                React
              </Anchor>
              {", "}
              <Anchor
                href="https://github.com/arturbien/React95"
                target="_blank"
              >
                React95,
              </Anchor>
              {" and "}
              <Anchor href="https://www.themealdb.com/api.php" target="_blank">
                API
              </Anchor>
            </p>
            <p style={{ marginBottom: "15px" }}>
              {"Icons "}{" "}
              <Anchor
                href="https://artage.io/en/icon-packs/original-windows-95-icons"
                target="_blank"
              >
                downloaded here.
              </Anchor>
            </p>
            <p className="text">
              {"Startup sound "}{" "}
              <Anchor
                href="http://soundbible.com/1654-Windows-95-Startup.html"
                target="_blank"
              >
                downloaded here.
              </Anchor>
            </p>
          </WindowContent>
        </Window>
      </Wrapper>
    )
  );
}

export default About;
