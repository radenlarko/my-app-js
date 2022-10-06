import React, { useCallback, useMemo, useState } from "react";

const JsonManipulasiRemote = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataKey, setDataKey] = useState(["userId", "title", "body"]);

  // 3. Http Request
  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");
      const dataJson = await response.json();

      setData(dataJson);
      setLoading(false);

      console.log("data json: ", dataJson);
    } catch (err) {
      setLoading(false);
      console.log("error response: ", err);
    }
  }, []);

  // 4. Cetak data dalam bentuk table max 10 record
  const newData = useMemo(() => {
    if (data.length === 0) {
      return [];
    }

    const newVal = data.map((item) => {
      let initial = { id: item.id };
      dataKey.map((keymap) => {
        initial = { ...initial, [keymap]: item[keymap] };
        return keymap;
      });
      return initial;
    });
    return newVal;
  }, [data, dataKey]);

  // 5. Delete Data
  const handleDeleteData = useCallback((id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 6. Delete Key
  const handleDeleteKey = useCallback((id) => {
    setDataKey((prev) => prev.filter((item) => item !== id));
  }, []);

  return (
    <div>
      <h3>3. Http Request</h3>
      <button onClick={getData} disabled={loading}>
        {loading ? "loading..." : "get data"}
      </button>
      <hr />
      <h3>4 5 6. Cetak data dalam bentuk table, hapus data dan hapus key</h3>
      {newData.length !== 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th style={{ width: 70 }} align="left">
                Id
              </th>
              {dataKey.map((item) => (
                <th key={item} style={{ minWidth: 120 }} align="left">
                  {item}{" "}
                  <button onClick={() => handleDeleteKey(item)}>x</button>
                </th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                {dataKey.map((keymap) => (
                  <td key={keymap}>{item[keymap]}</td>
                ))}
                <td>
                  <button onClick={() => handleDeleteData(item.id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JsonManipulasiRemote;
