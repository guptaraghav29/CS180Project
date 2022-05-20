import React from "react";

function changeStyleAnalytics() {
  //document.getElementById("analytics").style.cssText = 'background: #3B82F6; color: white;';
  document.getElementById("analytics").style.cssText =
    "border-bottom-color: #3B82F6;";
  //document.getElementById("bar").style.cssText = 'background-image: -webkit-linear-gradient(bottom, #3B82F6 -3px, transparent -3px, transparent 3px)';
  document.getElementById("search").style.cssText =
    "background: white; color: #3B82F6";
  document.getElementById("adv").style.cssText =
    "background: white; color: #3B82F6";
}
function changeStyleSearch() {
  //document.getElementById("search").style.cssText = 'background: #3B82F6; color: white';
  document.getElementById("search").style.cssText =
    "border-bottom-color: #3B82F6;";
  //document.getElementById("bar").style.cssText = 'background-image: -webkit-linear-gradient(bottom, #3B82F6 3px, transparent 3px, transparent 3px)';
  document.getElementById("analytics").style.cssText =
    "background: white; color: #3B82F6";
  document.getElementById("adv").style.cssText =
    "background: white; color: #3B82F6";
}
function changeStyleAdvSearch() {
  document.getElementById("search").style.cssText =
    "background: white; color: #3B82F6";
  document.getElementById("analytics").style.cssText =
    "background: white; color: #3B82F6";
  document.getElementById("adv").style.cssText =
    "border-bottom-color: #3B82F6;";
  //document.getElementById("bar").style.cssText = 'border-bottom-color: ';
  //document.getElementById("bar").style.cssText = 'background-image: -webkit-linear-gradient(bottom, #3B82F6 3px, transparent 3px, transparent 3px)';
  //document.getElementById("adv").style.cssText = 'background: #3B82F6; color: white';
  //linear-gradient(left, #3B82F6, #3B82F6; 70%, transparent 70%, transparent 100%); background-image: -webkit-linear-gradient(left, #3B82F6, #3B82F6 70%, transparent 70%, transparent 100%)
}

const NavBar = () => {
  return (
    <ul className="flex border-color-blue-500" id="bar">
      <li className="-mb-px mr-1">
        <a
          className="border-b-4 border-sky-blue-500 inline-block rounded-t py-2 px-4 text-blue-500 font-semibold hover:text-blue-800 font-semibold"
          id="search"
          href=""
          onClick={() => {
            changeStyleSearch();
          }}
        >
          Search
        </a>
      </li>
      <li className="mr-1">
        {/* <a
          className="border-b-4 border-sky-blue-500 inline-block rounded-t py-2 px-4 text-blue-500 font-semibold hover:text-blue-800 font-semibold"
          id="analytics"
          href="#analysis"
          onClick={() => {
            changeStyleAnalytics();
          }}
        >
          Analytics
        </a> */}
      </li>
      <li className="mr-1">
        {/* <a
          className="border-b-4 border-sky-blue-500 inline-block rounded-t py-2 px-4 text-blue-500 font-semibold hover:text-blue-800 font-semibold"
          id="adv"
          href="#adv"
          onClick={() => {
            changeStyleAdvSearch();
          }}
        >
          Advanced Search
        </a> */}
      </li>
    </ul>
  );
};

export default NavBar;
