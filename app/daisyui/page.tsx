import React from "react";
import { useRef, useEffect } from 'react';

import { FaMousePointer } from "react-icons/fa";

export default function DaisyUiPage() {
  return (
    <div className="justify-center h-screen m-6">
      <div className="w-full bg-gray-400">
        <button className="btn btn-primary  btn-lg mr-4">Primary</button>
        <button className="btn btn-secondary btn-sm mr-4">Secondary</button>
        <button className="btn btn-accent btn-normal btn-wide mr-4">
          Tiny
        </button>
      </div>

      <div>
        <details className="dropdown">
          <summary className="btn m-1">Open or Close</summary>
          <ul className="nemu dropdown-content bg-base-100 z-[1] p-2 shadow w-52 rounded-sm">
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
          </ul>
        </details>
      </div>

      <div>
        <label className="btn swap">
          <input type="checkbox" />
          <div className="swap-on">ON</div>
          <div className="swap-off">OFF</div>
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </div>

      <div className="join join-vertical w-2/3">
        <div className="collapse collapse-arrow join-item bg-base-200">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">Open1</div>
          <div className="collapse-content">
            <p>Data</p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">Open2</div>
          <div className="collapse-content">
            <p>Data</p>
          </div>
        </div>
      </div>

      <div>
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar offline">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>

      <div>
        <div className=" badge badge-primary badge-lg">90,000 scores</div>
      </div>

      <br />
      <div className="card card-compact bg-base-100 w-96 shadow-lg">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">Shoes</h2>
          <p>Details of shoes</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <br />
      <div className="carousel w-full h-64">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Burger"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger"
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
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
        <a href="#item5" className="btn btn-xs">
          5
        </a>
      </div>

      <div className="w-2/4 mx-auto">
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's OK,
            <br />
            No problem.
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble">I've already.</div>
        </div>
      </div>

      <div className="collapse bg-base-100">
        <input type="checkbox" />
        <div className="collapse-title">No problem data</div>
        <div className="collapse-content">
          <p>Details</p>
        </div>
      </div>

      <div className="flex gap-2">
        <kbd className="kbd kbd-lg">Shift</kbd>
        <kbd className="kbd kbd-md">Shift</kbd>
        <kbd className="kbd kbd-sm">Shift</kbd>
        <kbd className="kbd kbd-xs">Shift</kbd>
      </div>

      <div className="flex justify-center">
        <div className="stats my-4">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Totals page views</div>
            <div className="stat-value">99,000</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-0 m-0">
        <ul className="timeline inset-0">
          <li className="p-0 m-0">
            <div className="timeline-start">2020</div>
            <div className="timeline-middle">X</div>
            <div className="timeline-end timeline-box">First Macbook Air</div>
            <hr className="m-0" />
          </li>
          <li className="p-0 m-0">
            <div className="timeline-start">2021</div>
            <div className="timeline-middle">X</div>
            <div className="timeline-end timeline-box">Macbook Air</div>
            <hr className="m-0" />
          </li>
          <li className="p-0 m-0">
            <div className="timeline-start">2022</div>
            <div className="timeline-middle">X</div>
            <div className="timeline-end timeline-box">First Macbook Air</div>
            <hr className="m-0" />
          </li>
          <li className="p-0 m-0">
            <div className="timeline-start">2024</div>
            <div className="timeline-middle">X</div>
            <div className="timeline-end timeline-box">First Macbook Air</div>
            <hr className="m-0" />
          </li>
        </ul>
      </div>

      <div className="flex justify-center my-4">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Analysis</a>
            </li>
            <li>
              <a>Project</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <ul className="menu menu-md menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          <li>
            <a className="tooltip tooltip-top" data-tip="Home">
              Home
            </a>
          </li>
          <li>
            <a className="tooltip tooltip-top" data-tip="Details">
              Details
            </a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Project</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center nav-bar bg-base-200 my-4">
        <div className="flex-1">
          <a className="btn btn-ghost">DaisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="form-control">
              <input type="text" placeholder="search" />
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-200 rounded-box">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                  <li>
                    <a>Link 3</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">1</button>
        <button className="join-item btn">1</button>
        <button className="join-item btn">1</button>
      </div>

      <div className="flex justify-center">
        <ul className="steps steps-vertical">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receipt Product</li>
        </ul>
      </div>

      <div
        className="flex justify-center tabs tabs-lifted w-1/6 mb-4"
        role="tablist"
      >
        <a className="tab">Tab 1</a>
        <a className="tab">Tab 2</a>
        <a className="tab">Tab 3</a>
      </div>

      <div className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>This is Error</div>
        <div className="btn btn-primary">Deny</div>
        <div className="btn btn-info">Accept</div>
      </div>

      <div className="flex justify-center my-4 pb-6">
        <span className="loading loading-spinner loading-xs text-primary"></span>
        <span className="loading loading-spinner loading-lg text-secondary"></span>
      </div>

      <div className="flex flex-col space-y-4 justify-center my-4 pb-6 mx-auto">
        <progress
          className="progress w-56 progress-primary"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress w-56 progress-secondary"
          value="50"
          max="100"
        ></progress>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col w-52 gap-4">
          <div className="flex items-center w-full gap-2">
            <div className="skeleton h-16 w-1/2 shrink-0 round-full"></div>
            <div className="flex flex-col w-1/2 gap-1">
              <div className="skeleton w-full h-8"></div>
              <div className="skeleton w-2/3 h-8"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <div className="toast">
          <div className="alert alert-info">
            <span>This is notation</span>
          </div>
        </div>
      </div> */}

      <div
        className="flex justify-center tooltip tooltip-secondary"
        data-tip="Hello World"
      >
        <div className="btn btn-info">Hover Me</div>
      </div>

      <div className="flex justify-center pt-10 pb-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text pr-2">Remember Me</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-success checkbox-lg"
            />
          </label>
        </div>
      </div>

      <div className="form-control">
        <input
          type="file"
          className="file-input file-input-bordered file-input-secondary file-input-md w-full max-w-xs"
        />
      </div>

      <div className="flex justify-center p-4">
        <input
          type="radio"
          name="radio-1"
          className="radio radio-secondary"
          defaultChecked
        />
        <input type="radio" name="radio-1" className="radio" />
      </div>

      <div className="flex justify-center p-4 rating rating-lg">
        <input
          type="radio"
          name="radio-1"
          className="mask mask-star bg-blue-500"
        />
        <input
          type="radio"
          name="radio-1"
          className="mask mask-star"
          defaultChecked
        />
        <input type="radio" name="radio-1" className="mask mask-star" />
        <input type="radio" name="radio-1" className="mask mask-star" />
        <input type="radio" name="radio-1" className="mask mask-star" />
      </div>

      <div className="flex justify-center pb-4">
        <select className="select select-bordered w-56 max-w-lg select-success select-md">
          <option disabled selected>
            Seelct
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </select>
      </div>

      <div className="flex justify-center pb-4">
        <input
          type="text"
          placeholder="What is your name?"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="flex justify-center pb-4">
        <div className="flex flex-col w-1/6 space-y-2">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" placeholder="search" className="grow" />
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

          <label className="input input-bordered flex gap-2">
            <input type="text" className="grow" placeholder="username" />
          </label>

          <label className="input input-bordered input-secondary flex gap-2">
            <input type="password" className="grow" placeholder="password" />
          </label>
        </div>
      </div>

      <div className="flex justify-center pb-4">
        <div className="flex flex-col w-1/5">
          <textarea
            className="textarea textarea-bordered textarea-primary textarea-md"
            placeholder="bio"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-center pb-4">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Remember me</span>
            <input
              type="checkbox"
              className="toggle toggle-accent toggle-sm"
              defaultChecked
            />
          </label>
        </div>
      </div>

      <div className="flex justify-center pb-4">
        <div className="flex w-3/4">
          <div className="card bg-base-300 rounded-box flex-grow grid h-20 place-items-center">
            Content
          </div>
          <div className="divider lg:divider-horizontal divider-secondary">
            Or
          </div>
          <div className="card bg-base-300 rounded-box flex-grow grid h-20 place-items-center">
            Content
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center pb-4">
        <footer className="footer bg-base-200 text-base-content p-10">
          <nav>
            <h6 className="footer-title">Description 1</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Description 2</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Description 3</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
        </footer>

        <footer className="footer bg-base-200 text-base-content p-4 flex justify-center items-center border-t border-base-300">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACCS Industries Ltd
            </p>
          </aside>
        </footer>
      </div>

      <div className="hero bg-base-300 h-100">
        <div className="hero-content text-center flex flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hero there</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              ullam quo suscipit laboriosam dicta consequuntur dignissimos id
              voluptate porro distinctio quibusdam. Eveniet, maxime. Tempore
              facere debitis animi harum aspernatur numquam!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-300 min-h-screen mt-2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now</h1>
            <p className="py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              nam accusamus, animi mollitia iure cumque fugiat sunt eius
              voluptatum maxime non provident nobis voluptates, ab, tenetur
              voluptatem. Repudiandae, totam quibusdam.
            </p>
          </div>
          <div className="card bg-base-100 w-full min-w-sm shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="password"
                  required
                />
                <label className="label-text mt-1">
                  <a className="label-text link link-hover">Forget password?</a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div
        className="hero bg-base-300 min-h-screen mt-4"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold py-4">Hero there</h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              praesentium, doloremque maxime
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center mt-4 pb-4">
        <div className="flex-col space-y-4">
          <div className="flex justify-center indicator">
            <span className="indicator-item badge badge-secondary">99+</span>
            <div className="grid place-content-center bg-base-300 h-32 w-32">
              Content
            </div>
          </div>

          <div>
            <img className="mask mask-heart" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 pb-4">
        <div className="mockup-code">
          <pre data-prefix="$"><code>npm i daisyui</code></pre>
          <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
          <pre data-prefix=">" className="text-success"><code>done!</code></pre>
        </div>
      </div>

      <div className="flex justify-center mt-4 pb-4">
         <button className="btn btn-primary">Open modal</button>
        <dialog id="modal1" className="modal">
            <div className="modal-box">

            </div>
        </dialog>
      </div>
    </div>
  );
}
