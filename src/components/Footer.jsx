import React from 'react';

function Footer() {
  return (
    <div className="footer-container fixed-bottom">
      <footer className="page-footer bg-dark text-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <a href="/" className="d-flex align-items-center p-0 text-decoration-none">
                <span className="h5 mb-0 font-weight-bold">Book'sHere</span>
              </a>
              <span className="text-muted"> &#8226; </span>
              <small>&copy; Book'sHere, 2024. All rights reserved.</small>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end">
                <button className="btn btn-outline-light me-2">
                  <i className="fa-brands fa-facebook"></i>
                </button>
                <button className="btn btn-outline-light me-2">
                  <i className="fa-brands fa-twitter"></i>
                </button>
                <button className="btn btn-outline-light">
                <i class="fa-brands fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

