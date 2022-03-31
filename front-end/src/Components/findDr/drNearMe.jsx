import React, { useEffect, useState } from 'react'
import list from './Doctors'
import "./Styles/Card.css"
import Cards from './Cards'
import SearchIcon from '@material-ui/icons/Search';
import AddLocationIcon from '@material-ui/icons/AddLocation';


const DrNearMe = () => {

  const [updateList, setUpdateList] = useState(list);
  console.log(updateList)
  var inputSearch = "";
  var inputSearchPro = "";

  const ApplyFilters = () => {
    console.log(inputSearch);
    //search filter
    if (inputSearch && inputSearch.length != 0) {
      
      setUpdateList(list.filter(
        (item) =>
          item.location.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1));
console.log(inputSearch);
    } else {

      setUpdateList(list);
    }
  }
  const changeInput = (e) => {
    inputSearch += e.target.value;
    ApplyFilters();
  }

  const ApplyFilter = () => {
    console.log(inputSearch);
    //search pro.
    if ((inputSearchPro && inputSearchPro.length != 0)) {
      debugger;
      setUpdateList(updateList.filter(
        (item) =>
          (item.pro.toLowerCase().search(inputSearchPro.toLowerCase().trim())) !==
          -1));
    } else {
      setUpdateList(list);
    }
  }

  const changeInputs = (e) => {
    inputSearchPro += e.target.value;
    ApplyFilter();
  }


  return (

    <div>

      <div className='searchStyle'>
        <AddLocationIcon />
        <input
          type='text'
          placeholder=" Select city"
          onChange={changeInput} className='searchStyle' />
        <span><SearchIcon />
          <input
            type='text'
            placeholder='Search Specialist'
            onChange={changeInputs} className='searchStyle' /></span>
      </div>
      <div className='section'>
        {

          updateList.map((item) => <Cards key={item.id} item={item} />)

        }
      </div>
    </div>
  )
}

export default DrNearMe