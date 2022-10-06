import React, { useCallback, useState } from "react";

// 1. JSON Array of Object
const initialData = [
  {
    id: 1,
    nama: "Yos Sularko",
  },
  {
    id: 2,
    nama: "Budi Budiman",
  },
];

const JsonManipulasi = () => {
  const [data, setData] = useState(initialData);
  const [isEdit, setIsedit] = useState(false);

  const toggleEdit = useCallback(() => {
    setIsedit((prev) => !prev);
  }, []);

  // 2. Edit JSON
  const handleChange = useCallback((value, id) => {
    setData((prev) =>
      [...prev].map((object) => {
        if (object.id === id) {
          return {
            ...object,
            nama: value,
          };
        } else return object;
      })
    );
  }, []);

  return (
    <div>
      <h3>1. JSON Array of Object</h3>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <hr />
      <h3>2. Edit JSON</h3>
      <button onClick={toggleEdit}>{isEdit ? "Simpan" : "Edit"}</button>
      {isEdit ? (
        <div>
          {data.map((item) => (
            <div key={item.id} style={{marginTop: 6}}>
              <input
                type="text"
                value={item.nama}
                onChange={(e) => handleChange(e.target.value, item.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.nama}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JsonManipulasi;
