
import { Home, User, FileText, FolderKanban } from "lucide-react"


export const NavItems: { id: number; label: string; icon: React.ReactNode, link:string }[] = [
  { id: 0, label: "Home", icon: <Home className="w-5 h-5" />, link:"/en" },
  { id: 1, label: "About", icon: <User className="w-5 h-5" />, link:"/en/about" },
  { id: 2, label: "Projects", icon: <FolderKanban className="w-5 h-5" />, link:"/en/projects" },
  { id: 3, label: "Resume", icon: <FileText className="w-5 h-5" />, link:"/en/resume" },
]
