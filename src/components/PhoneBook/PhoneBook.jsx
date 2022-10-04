import React from 'react';

class PhoneBook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <section className="section">
        <div className="phone__section">
          <h2 className="phone__title">Phonebook</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="button" className="phone__btn">
            Add contact
          </button>
          <h2 className="phone__title">Contacts</h2>
          <ul>
            <li>Anton Bob</li>
            <li>Anton Bob</li>
            <li>Anton Bob</li>
          </ul>
        </div>
      </section>
    );
  }
}
export default PhoneBook;
