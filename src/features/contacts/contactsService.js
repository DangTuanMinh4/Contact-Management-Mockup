// Mock service để test - sau này thay bằng API thật
let mockContacts = [
  { id: 1, name: 'Nguyễn Văn A', phone: '0901234567', email: 'a@example.com' },
  { id: 2, name: 'Trần Thị B', phone: '0912345678', email: 'b@example.com' },
  { id: 3, name: 'Lê Văn C', phone: '0923456789', email: 'c@example.com' },
  { id: 4, name: 'Phạm Thị D', phone: '0934567890', email: 'd@example.com' },
  { id: 5, name: 'Hoàng Văn E', phone: '0945678901', email: 'e@example.com' },
  { id: 6, name: 'Vũ Thị F', phone: '0956789012', email: 'f@example.com' },
  { id: 7, name: 'Đỗ Văn G', phone: '0967890123', email: 'g@example.com' },
  { id: 8, name: 'Bùi Thị H', phone: '0978901234', email: 'h@example.com' },
  { id: 9, name: 'Ngô Văn I', phone: '0989012345', email: 'i@example.com' },
  { id: 10, name: 'Đinh Thị K', phone: '0990123456', email: 'k@example.com' },
  { id: 11, name: 'Lý Văn L', phone: '0901111111', email: 'l@example.com' },
  { id: 12, name: 'Phan Thị M', phone: '0912222222', email: 'm@example.com' }
];

let nextId = 13;

export const contactsService = {
  getAll: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...mockContacts]), 300);
    });
  },

  create: (contact) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newContact = { ...contact, id: nextId++ };
        mockContacts.push(newContact);
        resolve(newContact);
      }, 300);
    });
  },

  update: (id, contact) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockContacts.findIndex(c => c.id === id);
        if (index !== -1) {
          mockContacts[index] = { ...mockContacts[index], ...contact };
          resolve(mockContacts[index]);
        }
      }, 300);
    });
  },

  delete: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockContacts = mockContacts.filter(c => c.id !== id);
        resolve();
      }, 300);
    });
  },

  search: (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!query) return resolve([...mockContacts]);
        const lowerQuery = query.toLowerCase();
        const filtered = mockContacts.filter(contact => 
          contact.name.toLowerCase().includes(lowerQuery) ||
          contact.email.toLowerCase().includes(lowerQuery) ||
          contact.phone.includes(query)
        );
        resolve(filtered);
      }, 300);
    });
  }
};
