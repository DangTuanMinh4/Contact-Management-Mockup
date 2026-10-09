// src/pages/ContactManagerPage.jsx
import React, { useState, useEffect } from 'react';
import './ContactManagerPage.css'; 
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { contactsService } from '../features/contacts/contactsService';
// Make sure Bootstrap CSS is imported in your main entry file (e.g., main.jsx or App.jsx)
// import 'bootstrap/dist/css/bootstrap.min.css'; // Or use React-Bootstrap components directly

const ContactManagerPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingContact, setEditingContact] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    filterContacts();
  }, [contacts, searchQuery]);

  const loadContacts = async () => {
    setLoading(true);
    try {
      const data = await contactsService.getAll();
      setContacts(data);
    } catch (error) {
      console.error('Error loading contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterContacts = () => {
    const lowerQuery = searchQuery.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerQuery) ||
      contact.email.toLowerCase().includes(lowerQuery) ||
      contact.phone.includes(searchQuery)
    );
    setFilteredContacts(filtered);
    setCurrentPage(1); // Reset to first page on filter
  };

  const handleSearch = () => {
    filterContacts();
  };

  const handleSave = async (contactData) => {
    try {
      if (editingContact) {
        await contactsService.update(editingContact.id, contactData);
      } else {
        await contactsService.create(contactData);
      }
      await loadContacts();
      setShowForm(false);
      setEditingContact(null);
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa liên hệ này không?')) {
      try {
        await contactsService.delete(id);
        await loadContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingContact(null);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContacts = filteredContacts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  return (
    <div className="container mt-4"> {/* Use Bootstrap container and margin */}
      <h1 className="mb-4 text-center">Quản lý Danh bạ</h1> {/* Centered heading with margin */}

      <div className="row mb-4"> {/* Row for search and add button */}
        <div className="col-md-8"> {/* Search bar takes more space */}
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
            onSearch={handleSearch} 
          />
        </div>
        <div className="col-md-4 text-md-end"> {/* Add button aligned to the right */}
          <button 
            className="btn btn-primary" // Bootstrap primary button
            onClick={() => setShowForm(true)}
            style={{ backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)' }} // Inline style for gradient if needed
          >
            Thêm Liên hệ
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Đang tải...</span>
          </div>
          <p>Đang tải danh bạ...</p>
        </div>
      ) : (
        <>
          <ContactList 
            contacts={currentContacts} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
          {filteredContacts.length > 0 && (
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          )}
        </>
      )}

      {/* Contact Form Modal or Section */}
      {showForm && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}> {/* Modal styling */}
          <div className="modal-dialog modal-lg"> {/* Larger modal */}
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingContact ? 'Chỉnh sửa Liên hệ' : 'Thêm Liên hệ mới'}
                </h5>
                <button type="button" className="btn-close" onClick={handleCancelForm}></button>
              </div>
              <div className="modal-body">
                <ContactForm 
                  contact={editingContact} 
                  onSave={handleSave} 
                  onCancel={handleCancelForm} 
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactManagerPage;
