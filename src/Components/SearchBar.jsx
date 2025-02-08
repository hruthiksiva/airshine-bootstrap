import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div
                className="search-box position-absolute bottom-0 start-50 translate-middle-x w-100 p-4 mx-auto"
                style={{ maxWidth: '75%', marginBottom: '50px' }}
              >
        <form className="row g-4 align-items-center">
            <div className="col-md-3">
              <label htmlFor="destination" className="form-label">
                Destination
              </label>
              <select
                id="destination"
                className="form-select"
                defaultValue=""
                required
              >
                <option value="" disabled>Select your destination</option>
                <option value="paris">Paris, France</option>
                <option value="dubai">Dubai, UAE</option>
                <option value="maldives">Maldives</option>
                <option value="tokyo">Tokyo, Japan</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="fromDate" className="form-label">
                Check In
              </label>
              <input
                type="date"
                className="form-control"
                id="fromDate"
                required
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="toDate" className="form-label">
                Check Out
              </label>
              <input
                type="date"
                className="form-control"
                id="toDate"
                required
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="people" className="form-label">
                Travelers
              </label>
              <input
                type="number"
                className="form-control"
                id="people"
                placeholder="2"
                min="1"
                required
              />
            </div>

            <div className="col-md-3 d-grid">
              <button type="submit" className="btn btn-primary">
                Plan Your Journey
              </button>
            </div>
          </form>
    </div>
    </div>
  )
}

export default SearchBar