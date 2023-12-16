'use client'
import React from 'react';
import Button_TW from '../components/button_tw';
import Badge_TW from '../components/badge_tw';
import Dropdown_TW from '../components/dropdown_tw';
import Navbar_TW from '../components/navbar_tw';
import Modal_TW from '../components/modal_tw';

export default function Test() {
  let categories: string[] = ["primary","secondary", "success","warning","danger","info", "light","dark"];
  let shades: string[] = ["bg-indigo-300","bg-indigo-400","bg-indigo-500","bg-indigo-600","bg-indigo-700","bg-indigo-800","bg-indigo-900",];

  const [colors, setColors] = React.useState<string[]>(categories);

  function setNewColors(newColors: string[]) {
    console.log("The colors are being changed");
    setColors(newColors);
  }

  return (
    <>
       <Navbar_TW></Navbar_TW>
      <Button_TW variant="secondary" className={`text-white mx-2 my-5`} onClick={() => setNewColors(categories)}>Category</Button_TW>
      <Button_TW variant="secondary"className={`text-white mx-2 my-5`} onClick={() => setNewColors(shades)}>Shade</Button_TW>
      <h1 className="m-2 text-2xl">Buttons</h1><br></br>
      <div className="flex mt-2">
        {colors.map((color, index) => (
          <Button_TW key={index+"button"} variant={color} className={`text-white mx-2`} onClick={() => {}}>{color.charAt(0).toUpperCase() + color.slice(1)}</Button_TW>
        ))}
      </div>

      <h1 className="ms-2 mt-5 text-2xl">Badges</h1><br></br>
      <div className="flex">
        {colors.map((color, index) => (
          <Badge_TW key={index+"badge"} variant={color} className={`text-white mx-2`}>{color.charAt(0).toUpperCase() + color.slice(1)}</Badge_TW>
        ))}
      </div>

      <h1 className="ms-2 mt-5 text-2xl">Text</h1><br></br>
      <div className="flex">
        {colors.map((color, index) => (
          <p key={index+"p"} className={`text-${color.replace("bg-","")} mx-2`}>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
        ))}
      </div>
      <h1 className="ms-2 mt-5 text-2xl">Dropwdown</h1><br></br>
      <div className="w-40 ms-2">
      <Dropdown_TW variant='secondary' className='text-white'>Options</Dropdown_TW>
      </div>
      <h1 className="ms-2 mt-5 text-2xl">Modal</h1><br></br>
      <Modal_TW variant="secondary" className="ms-2 text-white">Open</Modal_TW>
    </>
  )
};
