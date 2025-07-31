
import type { SidebarProps } from "../lib/type";
export function SideBar({userName:name, type}:SidebarProps) {
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