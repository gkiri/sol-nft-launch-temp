import "../styles/views/Home.css";

const Home = () => {
  return (
    <main>
      <section className="">
        <div className="row">
          <div className="col-12">
            <div className="mt-4 text-center">
              <img className="w-150" src="images/Banner.png" alt="" />

              <p className="text-white-150"> Description </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-center text-center">
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="row">
          <div className="col-md-4">
            <img className="w-100" src="images/example-one.png" alt="" />
          </div>
          <div className="col-md-4">
            <img className="w-100" src="images/example-two.png" alt="" />
          </div>
          <div className="col-md-4">
            <img className="w-100" src="images/example-three.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};



export default Home;