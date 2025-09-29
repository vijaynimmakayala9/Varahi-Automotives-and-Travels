import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      {/* Main Content */}
      <div className="flex-grow-1 container my-5">
        <h1 className="fw-bold text-primary mb-2">Terms and Conditions</h1>
        <p className="text-muted small mb-4">Last updated: 29 September 2025</p>

        <div className="text-dark" style={{ lineHeight: "1.6" }}>
          <p>
            These Terms and Conditions ("Terms") govern your use of the Varahi Automotives and Travels application ("App"). By accessing or using the App, you agree to comply with and be bound by these Terms.
          </p>

          <h2 className="fw-semibold text-primary mt-4">1. Acceptance of Terms</h2>
          <p>
            By creating an account or using any part of the App, you accept these Terms in full. If you disagree with any part of the Terms, you must not use the App.
          </p>

          <h2 className="fw-semibold text-primary mt-4">2. Eligibility</h2>
          <p>
            You must be at least 18 years old and possess a valid Driving License and Aadhar to use the App’s services.
          </p>

          <h2 className="fw-semibold text-primary mt-4">3. User Responsibilities</h2>
          <ul className="list-disc ps-4">
            <li>You agree to provide accurate and complete information during registration.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You must not misuse the App or its features in any illegal or unauthorized way.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">4. Verification & Documents</h2>
          <p>
            We require users to upload their Aadhar and Driving License for identity and driving eligibility verification. These documents are securely stored and used only for the intended verification purpose.
          </p>

          <h2 className="fw-semibold text-primary mt-4">5. Booking & Usage</h2>
          <ul className="list-disc ps-4">
            <li>Users must ensure the vehicle is handled with care during the booking period.</li>
            <li>Any damage caused during the rental period may result in charges as per company policy.</li>
            <li>Location data may be used to suggest nearby available vehicles.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account for any breach of these Terms or misuse of the App, with or without notice.
          </p>

          <h2 className="fw-semibold text-primary mt-4">7. Limitation of Liability</h2>
          <p>
            Varahi Automotives and Travels is not liable for any indirect, incidental, or consequential damages arising from your use of the App.
          </p>

          <h2 className="fw-semibold text-primary mt-4">8. Updates to Terms</h2>
          <p>
            These Terms may be updated periodically. Continued use of the App after such updates constitutes your agreement to the revised Terms.
          </p>

          <h2 className="fw-semibold text-primary mt-4">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms, please contact us at:{" "}
            <a href="mailto:automotives23@gmail.com" className="text-primary text-decoration-underline">
              automotives23@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
