import "./Search.css";

export default function SearchBar() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <h2 className="navbar-brand"> Running Shoes are US</h2>
        <form className="w-75 text-end">
          <input
            type="text"
            className="border text-white"
            placeholder="Search.."
          />
        </form>
      </div>
    </div>
  );
}
