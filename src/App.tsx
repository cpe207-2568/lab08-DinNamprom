import type { CardProps } from "./lib/type";
import type { SidebarProps } from "./lib/type";
import type { FooterProps } from "./lib/type";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />
      
      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <TypeBar userName="Komneth" type="student"/>

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TypeInput />
            {/* Card รายการ */}
            <Card id={1} title="Read a book" card_text="Vite + React + Bootstrap + TS" isDone={false}/>
            <Card id={2} title="Write code" card_text="Finish project for class" isDone={false}/>
            <Card id={3} title="Push Git Hub" card_text="Push project to GitHub Pages" isDone={false}/>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName="Komneth Namprom" studentId={670610676}/>
    </div>
  );
}

function Header() {
  return (
    <header className="text-white bg-primary p-2 w-100">
        <h4>Note App</h4>
    </header>
  )
}

function TypeBar({userName:name, type}:SidebarProps) {
  return (
    <aside
      className="d-flex flex-column p-3"
      style={{
        width: "200px",
        backgroundColor: "#f2f2f2",
        justifyContent: "space-between",
      }}
    >
      <nav className="nav flex-column gap-2">
        <h5>Menu</h5>
        <a className="nav-link active" href="#">
            Main Page
        </a>
        <a className="nav-link" href="#">
            Menu
        </a>
        <a className="nav-link" href="#">
            About
        </a>
      </nav>

        <div className="fw-bold text-muted">
          <p>{name} : {type}</p>
        </div>
    </aside>
  )
}

function TypeInput() {
  return (
    <div className="m-2 p-2">
      <form className="row">
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            placeholder="Insert a task here.."
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  )
}

function Card({ title: Title, card_text: Text, isDone: isd }: CardProps) {
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

function Footer({year:y, fullName:name ,studentId: id}:FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {y} {name} {id}
    </footer>
  )
}

export default App;
