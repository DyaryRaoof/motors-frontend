import 'bootstrap/dist/css/bootstrap.min.css';

const DetailPage = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-8">
        <img style={{ width: '100%', height: '100%' }} className="rounded float-left" src="https://www.lux-review.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/Motorbike.jpg.webp" alt="Logo" />
      </div>
      <div className="col-3 mx-5">
        <h1 className="text-end">VESPA 946</h1>
        <p>description description description description description</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <p>text text text text</p>
        <div className="text-end">
          <button className="btn btn-primary" type="submit">Reserve</button>
        </div>
      </div>
    </div>
  </div>
);

export default DetailPage;
