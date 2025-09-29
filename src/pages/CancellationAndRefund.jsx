import React from "react";

const CancellationAndRefundPolicy = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <div className="container my-5">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary">Cancellation & Refund Policy</h1>
          <p className="text-muted small mt-2">Last updated: 29 September 2025</p>
          <hr />
        </div>

        {/* Content */}
        <div className="text-dark" style={{ lineHeight: "1.6" }}>
          <p>
            At <strong>Varahi Automotives and Travels</strong>, we aim to provide a seamless car rental experience. This Cancellation & Refund Policy outlines the terms and conditions for cancelling bookings and requesting refunds.
          </p>

          <h2 className="fw-semibold text-primary mt-4">1. Cancellation Policy</h2>
          <ul className="list-disc ps-4">
            <li>Bookings can be cancelled up to 24 hours before the scheduled pickup time for a full refund.</li>
            <li>Cancellations made within 24 hours of the pickup time will incur a 50% cancellation fee.</li>
            <li>No-show or failure to pick up the vehicle without prior cancellation will result in no refund.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">2. Refund Policy</h2>
          <ul className="list-disc ps-4">
            <li>Refunds will be processed to the original payment method within 7-10 business days.</li>
            <li>In case of vehicle unavailability due to unforeseen circumstances, a full refund will be issued.</li>
            <li>Refunds are not applicable for services rendered, including fuel charges, tolls, or fines incurred during the rental period.</li>
          </ul>

          <h2 className="fw-semibold text-primary mt-4">3. How to Cancel</h2>
          <p>
            To cancel your booking, please contact our customer support team at{" "}
            <a href="mailto:automotives23@gmail.com" className="text-primary text-decoration-underline">
              automotives23@gmail.com
            </a>{" "}
            or call us at +91 94249 77848. Provide your booking reference number and the reason for cancellation.
          </p>

          <h2 className="fw-semibold text-primary mt-4">4. Force Majeure</h2>
          <p>
            In the event of circumstances beyond our control, such as natural disasters, strikes, or government restrictions, we reserve the right to cancel bookings without liability. In such cases, a full refund will be issued.
          </p>

          <h2 className="fw-semibold text-primary mt-4">5. Contact Us</h2>
          <p>
            For any questions or concerns regarding our Cancellation & Refund Policy, please reach out to us at:
          </p>
          <p>Email: <a href="mailto:automotives23@gmail.com" className="text-primary text-decoration-underline">automotives23@gmail.com</a></p>
          <p>Phone: +91 94249 77848</p>
        </div>
      </div>
    </div>
  );
};

export default CancellationAndRefundPolicy;
