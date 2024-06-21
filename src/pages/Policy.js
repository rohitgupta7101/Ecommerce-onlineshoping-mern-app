import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            your privacy and are committed to protecting your personal data.
            This privacy policy outlines how we collect, use, and protect your
            information when you visit our website We may collect personal
            information including, but not limited to: - Name - Email address -
            Billing and shipping addresses - Payment information - Purchase
            history - IP address and browser information - Improve our website
            and services - Prevent fraud and enhance security . Information
            Sharing and Disclosure** We do not sell or rent your personal
            information to third parties. .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
