import type { TaskCardProps } from "../lib/type";

export function Card({ title: Title, description: Text}: TaskCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <h5 className="card-title">{Title}</h5>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <p className="card-text">{Text}</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <DoneBtn />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <DeleteBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

function DoneBtn() {
  return (
    <button className="btn btn-success me-2">Done</button>
  );
}

function DeleteBtn() {
  return (
    <button className="btn btn-danger">Delete</button>
  );
}