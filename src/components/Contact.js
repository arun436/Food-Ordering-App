const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">About Us Component</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-sm"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-sm"
          placeholder="Message"
        />
        <button
          type="submit"
          className="border border-black p-2 m-2 bg-slate-600 rounded-lg text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
