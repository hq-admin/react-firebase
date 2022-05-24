import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useLocation, useNavigate } from "react-router-dom"

const List = () => {
  const location = useLocation()
  const type = location.pathname.split('/')[1]
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable type={type}/>
      </div>
    </div>
  )
}

export default List