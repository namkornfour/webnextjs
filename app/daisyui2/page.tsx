'use client'

import { ChangeEvent, useEffect } from "react";

export default function DaisyUi2() {  
  useEffect(() => {
    // ตั้งค่า default theme
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const handleThemeChange = (event:ChangeEvent<HTMLSelectElement>) => {
    document.documentElement.setAttribute("data-theme", event.target.value);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">DaisyUI Theme Controller</h1>
      <div className="flex justify-center mt-5">
        <select
          onChange={handleThemeChange}
          className="select select-bordered"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cupcake">Cupcake</option>
          <option value="bumblebee">Bumblebee</option>
          <option value="emerald">Emerald</option>
        </select>
      </div>

      <div className="grid place-items-center max-w-xl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit cumque modi dolores fuga. Illum quaerat aperiam expedita et eos, eveniet asperiores vel sapiente libero rerum, impedit doloremque numquam ipsum.
        Velit nam asperiores unde itaque eum enim corrupti accusamus illum adipisci similique dolores dolor, nisi, praesentium autem ducimus vel, necessitatibus magni repudiandae nemo omnis quis non. Architecto voluptates in veniam.
        Quaerat facere autem accusantium voluptatibus in voluptates optio vitae sequi odio ipsum esse dolorum, veniam ea labore modi reprehenderit officia consequatur hic assumenda expedita incidunt. Iure iste ex saepe quam?
        Explicabo recusandae temporibus, maiores minus nobis ad? Similique minima distinctio molestiae vero impedit porro recusandae dignissimos, temporibus officiis quibusdam sit pariatur alias beatae, repudiandae quae non commodi expedita in voluptatibus?
        Ad sunt eveniet aut aspernatur magnam, praesentium dignissimos, dolorem ratione perspiciatis libero optio illo unde facilis, maiores tempore! Rem beatae odio, labore dolorem possimus nesciunt architecto? Corrupti minima obcaecati sint!
        Nemo, fuga. Aliquid repellendus, sapiente sunt iure explicabo obcaecati neque placeat doloremque, dignissimos sed repellat tempore amet, nobis magnam animi esse tenetur fugit saepe earum! Consequuntur non quasi et doloribus.
        Nemo doloremque, assumenda adipisci mollitia, dolorem qui maxime, sit fuga exercitationem possimus expedita neque eaque sapiente aspernatur incidunt quas reiciendis asperiores officiis? Id repellat aperiam ea libero officia quo corporis.
        Architecto aut reprehenderit velit in! Enim totam nesciunt eius, reiciendis repudiandae culpa doloribus, perspiciatis et possimus porro dolor consequatur aut velit veritatis necessitatibus ipsam perferendis. Quasi aut ut dicta doloribus.
        Labore repellendus provident magnam assumenda iusto, consectetur facere, iste ex excepturi tempore, nisi necessitatibus saepe. Et neque sit illo impedit, incidunt repudiandae accusantium natus voluptatibus vero consequatur blanditiis dignissimos alias?
        Distinctio totam quidem odio similique ducimus at aliquid corporis sunt, necessitatibus voluptatem sed, magni facilis ipsum enim. Saepe, aut ipsum ex nulla sapiente facere architecto eum suscipit sed iusto voluptatem.</p>
      </div>
    </div>
  );
}
