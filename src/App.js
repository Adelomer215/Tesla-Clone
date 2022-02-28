import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Elements from "./components/Elements/Elements";

function App() {
  return (
    <>
      <Header />

      {Elements.map((ele, idx) => {
        return (
          <Home
            key={idx}
            id={idx}
            title={ele.title}
            description={ele.description}
            bgImg={ele.bgImg}
            rightBtn={ele.rightBtn}
            leftBtn={ele.leftBtn}
          />
        );
      })}

      {/* solution */}

      {/* <Home
        title="model 3"
        description="order online for touchless delivery"
        bgImg="model-3.jpg"
        rightBtn="custom order"
        leftBtn="existing inventory"
      />

      <Home
        title="model y"
        description="order online for touchless delivery"
        bgImg="model-y.jpg"
        rightBtn="custom order"
        leftBtn="existing inventory"
      />

      <Home
        title="model s"
        description="order online for touchless delivery"
        bgImg="model-s.jpg"
        rightBtn="custom order"
        leftBtn="existing inventory"
      />

      <Home
        title="model x"
        description="order online for touchless delivery"
        bgImg="model-x.jpg"
        rightBtn="custom order"
        leftBtn="existing inventory"
      />

      <Home
        title="lowest cost solar panels in america"
        description="money-back guarantee"
        bgImg="solar-panel.jpg"
        rightBtn="custom order"
        leftBtn="existing inventory"
      />

      <Home
        title="solar roof"
        description="produce clean energy from your roof"
        bgImg="solar-roof.jpg"
        rightBtn="custom order"
        leftBtn="existing inventory"
      />

      <Home
        title="Accessories"
        description=""
        bgImg="accessories.jpg"
        rightBtn="shop now"
        // leftBtn="existing inventory"
      /> */}
    </>
  );
}

export default App;
