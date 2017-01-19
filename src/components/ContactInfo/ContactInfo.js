import React from 'react';

const ContactInfo = ({ name, addressLines, phone, email }) => {
    return (
        <div style={{ textAlign: 'center', padding: 16 }}>
            <div className="name" style={{ fontSize: 'larger', fontWeight: 'bold' }}>{name}</div>
            <div className="address">
              {
                addressLines && addressLines.map((line, i) => <div key={i}>{line}</div>)
              }
            </div>
            <div>
              <a href={`tel:${phone}`} className="phone" style={{ color: 'inherit', textDecoration: 'inherit' }}>{phone}</a>
            </div>
            <div>
              <a href={`mailto:${email}`} className="email" style={{ color: 'inherit' }}>{email}</a>
            </div>
        </div>
    );
};

export default ContactInfo;
