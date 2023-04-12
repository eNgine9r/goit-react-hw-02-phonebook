import Phonebook from './Phonebook/Phonebook';

export const App = () => {


  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        marginLeft: 20,
        fontSize: 16,
        color: '#010101'
      }}
    >
      <Phonebook />
    </div>
  );
};
