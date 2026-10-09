import React from 'react';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  if (!contacts || contacts.length === 0) {
    return <div className="alert alert-info">Chưa có liên hệ nào</div>;
  }

  return (
    <div className="row">
      {contacts.map((contact) => (
        <div key={contact.id} className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">
                <strong>Phone:</strong> {contact.phone}<br />
                <strong>Email:</strong> {contact.email}
              </p>
              <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(contact)}>
                Sửa
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(contact.id)}>
                Xóa
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
