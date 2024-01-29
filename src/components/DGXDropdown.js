import { useState ,useEffect, useRef } from "react";
export default ({ onSelectItem }) => {
  const [showList, setshowList] = useState(false)
  const [selectedItem, setSelectedItem] = useState("یک مورد را انتخاب کنید")
  const dropdownRef = useRef(null);
  let list = [
    {
      key: 1,
      name: "کامارو",
    },
    {
      key: 2,
      name: "پاترول",
    },
  ];

  const handleClick = () => {
    
    setshowList(true)
  };
  const selectItem = (item) => {
    setSelectedItem(item.name)
    onSelectItem(selectedItem);
    setshowList(false);
  };

    // Function to handle click outside dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshowList(false);
      }
    };
  
    useEffect(() => {
      // Adding event listener when component mounts
      document.addEventListener('click', handleClickOutside);
      // Removing event listener when component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  return (
    <>
      <div className="drop-down"  ref={dropdownRef}>
        <div
          className={`input size text color ${showList && "active"}`}
          onClick={handleClick}
        >
          {selectedItem}
        </div>
        {showList && (
          <div className="list size color">
     
                  {list.map((item, index) => (
                    <div className="item size text" onClick={() => selectItem(item)}>
                    {item.name}
                  </div>
        ))}
  
      
          </div>
        )}
      </div>
    </>
  );
};
