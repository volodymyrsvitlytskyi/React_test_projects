import React, { useContext, useRef, useEffect } from 'react';
import contactContext from '../../context/contact/contactContext';

const ContactsFilter = () => {
  const ContactContext = useContext(contactContext);
  const { clearFilter, filterContacts, filtered } = ContactContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, []);

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter contacts ...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactsFilter;
