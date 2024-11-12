"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SiDialogflow } from "react-icons/si";

export default function DaisyUiPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  /*useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setTheme(savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);*/

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="container mx-auto">
      {/* <div className="grid grid-cols-1 m-4 space-y-4 mx-auto w-1/2 justify-items-center">
        <button className="btn btn-neutral w-32">OK</button>
        <button className="btn btn-primary w-32">OK</button>
        <button className="btn btn-secondary w-32">OK</button>
        <button className="btn btn-accent w-32">OK</button>
      </div>
      <hr /> */}
      <div className="flex flex-col space-y-4 m-4 w-1/2 mx-auto justify-top items-center">
        <button className="btn btn-neutral btn-sm btn-wide">OK</button>
        <button className="btn btn-primary btn-md">OK</button>
        <button className="btn btn-secondary">OK</button>
        <button className="btn btn-accent btn-lg">OK</button>
      </div>

      <div className="flex mx-auto w-1/2 justify-center">
        <details className="dropdown">
          <summary>Open or Close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-sm z-[1] shadow w-auto">
            <li>
              <a>
                <Link href={"/tailwindtest"}>TailwindCss</Link>
              </a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex mx-auto justify-center mt-4">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Download
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href={"/tailwindtest"}>TailwindCss</Link>
            </li>
            <li>
              <Link href={"/tailwindtest"}>TailwindCss</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <button className="btn" onClick={openModal}>
          Open Modal
        </button>
      </div>

      <div className="flex flex-col mx-auto justify-center">
        <p className="text-center">
          <Link href={"/"}>Home</Link>
        </p>
      </div>

      {isOpen && (
        <dialog className="modal" open={isOpen}>
          <form method="dialog" className="modal-box">
            <h2>Modal Title</h2>
            <p>This is content form Modal</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Confirm
              </button>
              <button className="btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </dialog>
      )}

      <div>
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-on">ON</div>
          <div className="swap-off">OFF</div>
        </label>
      </div>

      <div className="flex flex-col mx-auto justify-center w-1/2">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordian1" defaultChecked />
          <div className="collapse-title text-lg text-blue-500">
            This is Collapse
          </div>
          <div className="collapse-content">
            <p>This is my content1</p>
          </div>
        </div>

        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordian1" />
          <div className="collapse-title text-lg text-blue-500">
            This is Collapse
          </div>
          <div className="collapse-content">
            <p>This is my content2</p>
          </div>
        </div>

        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordian1" />
          <div className="collapse-title text-lg text-blue-500">
            This is Collapse
          </div>
          <div className="collapse-content">
            <p>This is my content3</p>
          </div>
        </div>
      </div>

      <div className="flex mx-auto w-1/2 justify-center">
        <div className="avatar online">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="./meeting.jpg" />
          </div>
        </div>
      </div>

      <div className="flex mx-auto w-1/2 justify-center m-4">
        <p>
          This is the new update{" "}
          <span className="badge badge-primary badge-lg">Counter</span>
        </p>
      </div>

      <div className="flex mx-auto w-1/2 justify-center m-4">
        <button className="btn">
          Inbox
          <div className="badge badge-sm badge-primary ml-1">+99</div>
        </button>
      </div>

      <div className="flex mx-auto w-1/2 justify-center m-4">
        <div className="card bg-base-100 shadow-xl card-compact card-side w-96">
          <figure className="w-1/2">
            <img src="./meeting.jpg" className="w-full h-full" />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">
              This is my Profile
              <div className="badge badge-primary badge-lg ml-2">New</div>
            </h2>
            <p>Data from component</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex mx-auto w-3/4 h-96 justify-center m-6">
        <div className="carousel carousel-center w-full">
          <div id="item1" className="carousel-item w-full">
            <img src="./meeting.jpg" className="w-full" />
          </div>

          <div id="item2" className="carousel-item w-full">
            <img src="./acctax.jpg" className="w-full" />
          </div>

          <div id="item3" className="carousel-item w-full">
            <img src="./meeting.jpg" className="w-full" />
          </div>

          <div id="item4" className="carousel-item w-full">
            <img src="./acctax.jpg" className="w-full" />
          </div>
        </div>
      </div>

      <div className="flex mx-auto w-1/2 justify-center m-6 space-x-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      <div className="flex mx-auto w-3/4 h-96 justify-center m-6">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item w-full relative">
            <img src="./meeting.jpg" className="w-full" />
            <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2 transform">
              <a href="#slide4" className="btn btn-circle">
                &lt;
              </a>
              <a href="#slide2" className="btn btn-circle">
                &gt;
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item w-full relative">
            <img src="./acctax.jpg" className="w-full" />
            <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2 transform">
              <a href="#slide1" className="btn btn-circle">
                &lt;
              </a>
              <a href="#slide3" className="btn btn-circle">
                &gt;
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item w-full relative">
            <img src="./meeting.jpg" className="w-full" />
            <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2 transform">
              <a href="#slide2" className="btn btn-circle">
                &lt;
              </a>
              <a href="#slide4" className="btn btn-circle">
                &gt;
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item w-full relative">
            <img src="./acctax.jpg" className="w-full" />
            <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2 transform">
              <a href="#slide3" className="btn btn-circle">
                &lt;
              </a>
              <a href="#slide1" className="btn btn-circle">
                &gt;
              </a>
            </div>
          </div>

        </div>
      </div> */}

      <div className="flex mx-auto w-3/4 justify-center m-6">
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title">This is my content</div>
          <div className="collapse-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste natus
            fuga et at officiis, eaque provident doloribus ab excepturi.
            Corporis magni enim vitae error laboriosam maxime tenetur excepturi
            ab repellendus? Sint vel ratione velit, saepe porro corrupti ad
            accusamus est rem sequi fugit cupiditate optio voluptatibus neque
            cumque aspernatur hic dolores ullam? Optio labore dolores provident,
            odio deleniti vero iure!
          </div>
        </div>
      </div>

      <div className="flex mx-auto w-3/4 justify-center m-6">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total page views</div>
            <div className="stat-value">1,000,000</div>
            <div className="stat-desc">Persons</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/student">Documents</Link>
            </li>
            <li>
              <Link href="/tailwindtest">Data</Link>
            </li>
            <li>Content</li>
          </ul>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            obcaecati iusto vitae dicta hic voluptate odio iure molestiae
            voluptas mollitia enim culpa fugit, officia blanditiis nisi,
            repudiandae consequuntur soluta quo? Animi, deserunt suscipit rerum
            velit neque iusto voluptas ex mollitia! Deserunt perferendis nam
            nesciunt iure hic, aut quos atque et nulla, cum natus! Numquam optio
            voluptates molestias culpa quo dolorem. Magnam repellat consectetur
            ipsum esse error tenetur, voluptatum neque quasi totam deserunt
            incidunt veniam dolorum, molestias autem dolorem maiores dolores
            libero impedit quia aut voluptates. Dolore molestiae quis odit est!
            A sequi cupiditate esse omnis iusto error corporis, mollitia
            dignissimos distinctio labore natus nam neque fugit. Totam, nam.
            Voluptate eaque sint fugiat itaque ipsam perferendis. Corrupti
            expedita quia eius. Quod? Adipisci, in, facilis cum quas odio
            voluptate repellendus iusto libero sit quasi aut officia ratione
            quaerat eum! Libero reiciendis quod hic velit quos iste, culpa
            voluptatem porro. Dolorem, quos distinctio!
          </p>
        </div>
      </div>

      <div className="m-4">
        <ul className="menu menu-horizontal menu-md w-96 bg-base-200 rounded">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>
            <a>Webboard</a>
          </li>
        </ul>
      </div>

      <div className="m-4 w-1/2">
        <ul className="menu menu-md menu-horizontal min-w-max bg-base-200 rounded">
          <li>
            <a className="menu-title">Menu</a>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
              <li>
                <a>Webboard</a>
              </li>
            </ul>
          </li>

          <li>
            <a className="menu-title">Services</a>
            <ul>
              <li>
                <a href="">01</a>
              </li>
              <li>
                <a href="">02</a>
              </li>
              <li>
                <a href="">03</a>
              </li>
              <li>
                <a href="">04</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex m-4">
        <ul className="menu menu-horizontal bg-base-200 items-center">
          <li>item1</li>
          <li>
            <details>
              <summary>Item2</summary>
              <ul>
                <li>
                  <a href="">Item1</a>
                </li>
                <li>
                  <a href="">Item2</a>
                </li>
                <li>
                  <a href="">Item3</a>
                </li>
              </ul>
            </details>
          </li>
          <li>item3</li>
        </ul>
      </div>

      <div className="flex mx-auto w-3/4 justify-center m-6">
        <div className="navbar flex h-6 relative bg-base-200">
          <div className="navbar-start">
            <ul className="menu menu-sm">
              <li>
                <details>
                  <summary>Menu</summary>
                  <ul className="absolute mt-5 mb-2 shadow bg-base-100 w-32">
                    <li>
                      <a href="">01</a>
                      <a href="">02</a>
                      <a href="">03</a>
                      <a href="">04</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-center">
            <a href="">center</a>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal bg-base-200">
              <li>
                <a href="">หน้าหลัก</a>
              </li>
              <li>
                <a href="">บริการ</a>
              </li>
              <li>
                <a href="">Download</a>
              </li>
              <li>
                <a href="">เข้าสู่ระบบ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="join m-6 flex mx-auto w-1/2 justify-center">
        <input
          type="radio"
          className="btn btn-square join-item"
          aria-label="1"
          name="options"
          defaultChecked
        />
        <input
          type="radio"
          className="btn btn-square join-item"
          aria-label="2"
          name="options"
        />
        <input
          type="radio"
          className="btn btn-square join-item"
          aria-label="3"
          name="options"
        />
        <input
          type="radio"
          className="btn btn-square join-item"
          aria-label="4"
          name="options"
        />
      </div>

      <div className="flex mx-auto w-1/2 justify-center">
        <ul className="steps steps-vertical">
          <li data-content="✓" className="step step-primary">
            Register
          </li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive product</li>
        </ul>
      </div>

      <div className="flex mx-auto w-1/2 justify-center m-4">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="mytab"
            className="tab"
            role="tab"
            aria-label="tab 1"
          />
          <div role="tabpanel" className="tab-content p-10 bg-base-200 border">
            This is my Connent1
          </div>

          <input
            type="radio"
            name="mytab"
            className="tab"
            role="tab"
            aria-label="tab 2"
          />
          <div role="tabpanel" className="tab-content p-10">
            This is my Connent2
          </div>

          <input
            type="radio"
            name="mytab"
            className="tab"
            role="tab"
            aria-label="tab 3"
          />
          <div role="tabpanel" className="tab-content p-10">
            This is my Connent3
          </div>

          <input
            type="radio"
            name="mytab"
            className="tab"
            role="tab"
            aria-label="tab 4"
          />
          <div role="tabpanel" className="tab-content p-10">
            This is my Connent4
          </div>
        </div>
      </div>

      <div className="w-fit alert alert-info m-6 text-white" role="alert">
        <span>12 unread messages. tab to see</span>
        <div className="space-x-2">
          <button className="btn btn-primary">Deny</button>
          <button className="btn btn-accent">Accept</button>
        </div>
      </div>

      {/* <div className="w-fit m-6 text-white toast">
          <div className="alert alert-info">
            <span>Hello World</span>
          </div>
      </div> */}

      <div className="tooltip" data-tip="Hello World">
        <button className="btn btn-prmary">Hover</button>
      </div>

      <div className="flex space-x-2 m-4">
        <span className="lable-text items-start">Remember me</span>
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-primary"
        />
      </div>

      <div className="flex space-x-2 m-4">
        <input
          type="radio"
          name="radio1"
          className="radio radio-primary"
          defaultChecked
        />
        <input type="radio" name="radio1" className="radio radio-secondary" />
      </div>

      <div className="flex flex-col mx-auto justify-center m-4">
        <input
          type="range"
          className="range"
          value="25"
          step="25"
          min={0}
          max="100"
        />
        <div className="flex w-full justify-between px-2 text-sm">
          <div>0</div>
          <div>25</div>
          <div>50</div>
          <div>75</div>
          <div>100</div>
        </div>
      </div>

      <div className="flex flex-col mx-auto justify-center m-4">
        <div className="rating">
          <input
            type="radio"
            className="mask mask-star bg-primary"
            name="rating1"
          />
          <input
            type="radio"
            className="mask mask-star bg-primary"
            name="rating1"
            defaultChecked
          />
          <input
            type="radio"
            className="mask mask-star bg-primary"
            name="rating1"
          />
          <input
            type="radio"
            className="mask mask-star bg-primary"
            name="rating1"
          />
          <input
            type="radio"
            className="mask mask-star bg-primary"
            name="rating1"
          />
        </div>
      </div>

      <div className="flex w-fit h-64">
        <select className="select max-w-sm select-bordered select-primary">
          <option selected disabled>
            Select
          </option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
        </select>
      </div>

      <div className="flex w-fit h-64">
        <input
          type="text"
          className="input input-bordered"
          placeholder="type data"
        />
      </div>

      <div className="flex flex-col w-fit h-64 space-y-2">
        <label className="flex input input-bordered items-center">
          Name
          <input type="text" className="grow pl-2" placeholder="search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <label className="flex input input-bordered items-center gap-2">
          Email
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="email" />
        </label>

        <label className="flex input input-bordered items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="username" />
        </label>

        <label className="flex input input-bordered items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="password"
            value="password"
          />
        </label>
      </div>

      <div className="flex flex-col mx-auto w-1/2 justify-center mb-6 space-y-4 form-control">
        <textarea
          name="text-data"
          id="text-data"
          placeholder="Bio"
          className="textarea textarea-bordered textarea-lg h-80"
        ></textarea>
      </div>

      <div className="form-control mb-6">
        <label className="cursor-pointer flex items-center space-x-2">
          <span className="lebel-text">Remember me</span>
          <input
            type="checkbox"
            className="toggle toggle-primary [--tglbg:yellow]"
            defaultChecked
          />
        </label>
      </div>

      <div className="flex w-full mb-4">
        <div className="card bg-base-200 h-32 flex-grow grid place-items-center">
          Content
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card bg-base-200 h-32 flex-grow grid place-items-center">
          Content
        </div>
      </div>

      {/* <div className="flex w-full mx-auto justify-center relative bg-base-200">
        <div className="drawer">
          <input type="checkbox" className="drawer-toggle" id="my-drawer" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side absolute top-12">
            <label
              htmlFor="my-drawer"
              className="drawer-overlay"
              aria-label="close sidebar"
            ></label>
            <ul className="menu bg-base-200 p-4 w-80">
              <li>
                <a href="">01</a>
                <a href="">02</a>
                <a href="">03</a>
                <a href="">04</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="flex w-full mx-auto m-6">
        <div className="footer bg-base-200 p-4">
          <aside>
            <p>Accounting System</p>
            <p>313 Ladphrao Bangkok</p>
            <p>Thailand</p>
          </aside>
          <nav>
            <h3 className="footer-title">Services</h3>
            <a href="" className="Link">
              01
            </a>
            <a href="" className="Link">
              02
            </a>
            <a href="" className="Link">
              03
            </a>
            <a href="" className="Link">
              04
            </a>
            <a href="" className="Link">
              05
            </a>
          </nav>
          <nav>
            <h3 className="footer-title">Services</h3>
            <a href="" className="Link">
              01
            </a>
            <a href="" className="Link">
              02
            </a>
            <a href="" className="Link">
              03
            </a>
            <a href="" className="Link">
              04
            </a>
            <a href="" className="Link">
              05
            </a>
          </nav>
          <nav>
            <h3 className="footer-title">Services</h3>
            <a href="" className="Link">
              01
            </a>
            <a href="" className="Link">
              02
            </a>
            <a href="" className="Link">
              03
            </a>
            <a href="" className="Link">
              04
            </a>
            <a href="" className="Link">
              05
            </a>
          </nav>
        </div>
      </div>

      <div className="footer footer-center bg-neutral text-neutral-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Accountin System Ltd
          </p>
        </aside>
      </div>

      {/* <div className="hero min-h-1/2 bg-base-200" bg-center bg-cover style={{backgroundImage:`url('/acctax.jpg')`}}>
        <div className="hero-content text-center flex flex-col lg:flex-row-reverse">          
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-blue-500">
              This is my Website
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              distinctio exercitationem ut amet quia aut quo, nemo animi
              ratione, itaque ipsa quam optio? Repellat est libero pariatur
              doloremque quo ipsa. Quo sit, corporis doloribus eligendi cum
              libero voluptatem
            </p>
            <button className="btn btn-primary text-2xl">Get Started</button>
          </div>
        </div>
      </div> */}

      <div className="flex w-1/2 mx-auto justify-center m-6">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary indicator-top lg:indicator-end md:indicator-start">
            Data
          </span>
          <div className="bg-base-200 h-32 w-32 grid place-items-center">
            Content
          </div>
        </div>
      </div>

      <div className="space-x-6">
        <div className="join lg:join-horizontal md:join-vertical">
          <div className="btn join-item">01</div>
          <div className="btn join-item">02</div>
          <div className="btn join-item">03</div>
        </div>
        <div className="join lg:join-horizontal md:join-vertical">
          <div className="btn join-item">04</div>
          <div className="btn join-item">05</div>
          <div className="btn join-item">06</div>
        </div>
      </div>

      <div>
        <div className="w-32 h-32 grid place-items-center">
          <img src="./meeting.jpg" alt="meeting" className="mask mask-heart" />
        </div>
      </div>

      <div>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i nextjs@latest</code>
          </pre>
          <pre data-prefix=">">
            <code className="text-warning">installing...</code>
          </pre>
          <pre data-prefix=">">
            <code className="text-success">Done</code>
          </pre>
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-5">
          <label className="toggle1">
            <input
              type="checkbox"
              onChange={handleThemeChange}
              checked={theme === "dark"}     
              className="mr-2"
            />
            Dark Mode
            {/* <div className="swap-toggle swap-on bg-white w-12 h-6 rounded-full flex items-center justify-between p-1">
              <span className="w-5 h-5 rounded-full block transform duration-300 ease-in-out">
                {theme === "dark" ? "🌑" : "🌞"}
              </span>
            </div>             */}
          </label>

          {/* <label className="cursor-pointer flex items-center space-x-2">
          <span className="lebel-text">Remember me</span>
          <input
            type="checkbox"
            className="toggle toggle-primary [--tglbg:yellow]"
            defaultChecked
          />
        </label> */}

        </div>
      </div>
    </div>
  );
}
