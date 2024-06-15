import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/113487-shannon-edwards"
            target="_blank"
            rel="noreferrer"
          >
            Shannon Edwards,
          </a>{" "}
          open-sourced on{" "}
          <a
            href="https://codesandbox.io/p/sandbox/js-search-engine-challenge-forked-cxzg4m?file=%2Fsrc%2Findex.js%3A19%2C35"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
