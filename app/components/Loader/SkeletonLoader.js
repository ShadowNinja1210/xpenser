import "./Loader.css";

const SkeletonLoader = () => {
  return (
    <main className="main-ldr">
      {/* <nav className="main-navbar">
        <div className="main-navbar_1"></div>
        <div className="main-navbar_2"></div>
        <div className="main-navbar_3"></div>
      </nav> */}
      <div className="main-page">
        <section className="main-page_left">
          <div className="main-page_btn"></div>
          <div className="main-page_btn"></div>
          <div className="main-page_btn"></div>
          <div className="main-page_btn"></div>
          <div className="main-page_btn"></div>
          <div className="main-page_btn"></div>
        </section>
        <section className="main-page_right"></section>
      </div>
    </main>
  );
};

export default SkeletonLoader;
