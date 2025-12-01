function Form({ name, changeName }) {
  const handleChange = (ev) => {
    changeName(ev.target.value);
  };

  return (
    <form className="form">
      <label htmlFor="name"></label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        placeholder="Escribe tu nombre..."
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
