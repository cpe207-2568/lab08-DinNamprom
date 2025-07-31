
import type { FooterProps } from "../lib/type";

export function Footer({year:y, fullName:name ,studentId: id}:FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {y} {name} {id}
    </footer>
  )
}