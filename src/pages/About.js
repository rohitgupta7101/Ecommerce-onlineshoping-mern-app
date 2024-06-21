import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to <h5>RHstore</h5> Your One-Stop Online Shopping
            Destination! At <b>RHstore</b> we believe shopping should be an
            enjoyable and hassle-free experience. Established in [2024], our
            mission is to bring the best products from around the globe right to
            your doorstep. Whether you're looking for the latest fashion trends,
            cutting-edge electronics, home essentials, or unique gifts, we've
            got it all. Our Story Our journey began with a simple idea: to
            create an online marketplace that offers quality products at
            competitive prices, combined with exceptional customer service. Over
            the years, we've grown from a small startup into a thriving
            business, thanks to our dedicated team and loyal customers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
