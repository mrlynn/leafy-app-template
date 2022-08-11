import Header from "./Header";
import Navigation from "./Navigation";

let gridStyle = {
  display: "grid",
  gridTemplate:
      `[header-start] "header header" 107px [header-end body-start]
      "side-nav body" auto [body-end] / auto 1fr`,
  width: "100vw",
  maxWidth: "100%",
  height: "100vh",
  minWidth: "767px",
  margin: "0px",
  backgroundColor: "rgb(255, 255, 255)"
}

export default function Layout(props) {
  return(
    <div style={gridStyle}>
      <section style={{gridArea: "header"}}>
        <Header title="My Demo App"/>
      </section>
      <section style={{gridArea: "side-nav"}}>
        <Navigation />
      </section>

      <section style={{gridArea: "body"}}>
        {props.children}
      </section>
    </div>
  )
}