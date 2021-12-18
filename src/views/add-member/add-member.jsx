import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Input } from 'reactstrap';
import './add-member.scss';

const AddMember = ({ title, show, onClose }) => {
  return (
    <>
      <div
        className={`modal-container ${show ? 'show' : ''}`}
        onClick={onClose}>
        <div
          className="modal-content-add-team"
          onClick={(e) => e.stopPropagation()}>
          <div className="modal-header-add-team mt-md-3 mb-md-4">
            <div className="d-flex justify-content-between mx-3 header-add-icon">
              <h4>{title}</h4>
              <span onClick={onClose}>
                <IoMdClose />
              </span>
            </div>
          </div>
          <form className="add-team-form mx-3 mb-lg-4">
            <div className="row pb-md-3 pb-lg-3 pt-md-3 pt-lg-3">
              <div className="col-lg-12 form-field__control">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="form-field__input"
                  placeholder="Email"
                />
                <label id="email-label" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="row pb-md-3 pb-lg-3">
              <div className="col-lg-12 team-field__control">
                <input
                  type="text"
                  list="role"
                  placeholder="Select a role"
                  className="w-100 role-select"
                  autocomplete="off"
                />
                <label id="role-label" htmlFor="role" autocomplete="off">
                  Select a role
                </label>
                <span />
                <datalist id="role">
                  <option>Admin</option>
                  <option>Staff</option>
                  <option>Accountant</option>
                  <option>Sys Ops</option>
                </datalist>
              </div>
            </div>
            <div className="row gx-0">
              <button className="col-lg-12 toggle-send mb-4">
                Send Invitation
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMember;
