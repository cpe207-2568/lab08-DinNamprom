import { Header } from "./component/Header";
import { SideBar } from "./component/TypeBar";
import { Card } from "./component/Card";
import { TypeInput } from "./component/TypeInput";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />
      
      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <SideBar userName="Komneth" type="student"/>

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TypeInput />
            {/* Card รายการ */}
            <Card id={1} title="Read a book" description="Vite + React + Bootstrap + TS" isDone={false}/>
            <Card id={2} title="Write code" description="Finish project for class" isDone={false}/>
            <Card id={3} title="Push Git Hub" description="Push project to GitHub Pages" isDone={false}/>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName="Komneth Namprom" studentId={670610676}/>
    </div>
  );
}
export default App;
