import HeaderComponent from "../components/HeaderComponent";

function HomePage() {
  return (
    <>
      <HeaderComponent />


      <div className="container-fluid px-0">
        <img
          src="/images//banner.jpg"
          alt="Banner principal"
          className="img-fluid w-100"
          style={{ objectFit: "cover", maxHeight: "500px" }}
        />
      </div>
    </>
  );
}

export default HomePage;
