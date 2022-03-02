const AddItem = () => (
  <form>
    <div className="form-group">
      <input type="text" className="form-control" id="name" placeholder="Enter name" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" id="description" placeholder="Enter description" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" id="image" placeholder="Enter image" />
    </div>
    <div className="form-group">
      <input type="number" className="form-control" id="price" placeholder="Enter price" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

);

export default AddItem;
