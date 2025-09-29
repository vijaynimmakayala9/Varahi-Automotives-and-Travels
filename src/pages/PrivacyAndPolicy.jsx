import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <div className="container my-5 flex-grow-1">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary">Privacy Policy</h1>
          <p className="text-muted small mt-2">Last updated: 29 September 2025</p>
          <hr className="my-4" />
        </div>

        {/* Content Section */}
        <div className="text-dark" style={{ lineHeight: "1.6" }}>
          <p>
            At <strong>Varahi Automotives and Travels</strong>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your data when you use our App.
          </p>

          <h2 className="fw-semibold text-primary mt-4">1. Collection of Personal Data</h2>
          <p>We collect personal data that you provide to us when you:</p>
          <ul className="list-disc ps-4">
            <li>Create an account on the App</li>
            <li>Fill out a profile or registration form</li>
            <li>Upload content to the App</li>
            <li>Contact us with a question or request</li>
          </ul>
          <p>The personal data we collect may include:</p>
          <ul className="list-disc ps-4">
            <li>Your name, profile image, and contact information</li>
            <li>Your Aadhar and Driving License</li>
            <li>Your current location</li>
            <li>Any other information you choose to provide to us</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">2. Use of Personal Data</h2>
          <ul className="list-disc ps-4">
            <li>To provide access to the App and its features</li>
            <li>For account creation and sign-up verification</li>
            <li>To display your profile information</li>
            <li>For customer verification using Aadhar and Driving License</li>
            <li>To suggest nearby available cars based on location</li>
            <li>To personalize your experience</li>
            <li>To respond to your support requests</li>
            <li>To improve the App functionality</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">3. Protection of Personal Data</h2>
          <ul className="list-disc ps-4">
            <li>Encryption during transmission</li>
            <li>Secure server storage</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">4. Sharing of Personal Data</h2>
          <p>We may share your data with third-party service providers including:</p>
          <ul className="list-disc ps-4">
            <li>Cloud storage providers</li>
            <li>Customer support platforms</li>
          </ul>
          <p>Also, we may share data with law enforcement if required by law.</p>

          <h2 className="fw-semibold text-primary mt-4">5. Your Rights</h2>
          <ul className="list-disc ps-4">
            <li>Access your personal data</li>
            <li>Delete your personal account</li>
          </ul>
          <p>
            Contact us:{" "}
            <a href="mailto:automotives23@gmail.com" className="text-primary text-decoration-underline">
              automotives23@gmail.com
            </a>
          </p>
          <p>
            Or directly via Gmail:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&to=automotives23@gmail.com"
              className="text-primary text-decoration-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to compose in Gmail
            </a>
          </p>

          <h2 className="fw-semibold text-primary mt-4">6. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. For major changes, we’ll notify you via email or App notice. By using the App, you agree to the updated terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
