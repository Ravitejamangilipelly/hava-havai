import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link exact to="/" activeClassName="active">Dashboard</Link>
      <Link to="/airports" activeClassName="active">Airports</Link>
      <Link to="/videos" activeClassName="active">Videos</Link>
      <Link to="/list1" activeClassName="active">List 1</Link>
      <Link to="/list2" activeClassName="active">List 2</Link>
      <Link to="/list3" activeClassName="active">List 3</Link>
    </div>
  )
}

export default Sidebar;
