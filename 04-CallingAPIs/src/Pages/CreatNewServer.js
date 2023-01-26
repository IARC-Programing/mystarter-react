import React from "react";
import { useForm } from "react-hook-form";

export default function CreateNewServer(params) {
  const { register, handleSubmit } = useForm();

  const handleForm = (data) => {
    console.log("Hello");
    console.log(data);
  };

  return (
    <div>
      <div className='container'>
        <h3>Create New Server</h3>
        <form>
          <label>Server name</label>
          <input
            type='text'
            name='serverName'
            className='border border-gray-400'
            {...register("serverName")}
          />
          <br />
          <label>URL</label>
          <input
            type='text'
            name='url'
            className='border border-gray-400'
            {...register("url")}
          />

          <button
            type='button'
            className='p-4 bg-green-500'
            onClick={handleSubmit(handleForm)}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
