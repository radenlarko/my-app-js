import React, { useCallback, useState } from "react";

const HashString = () => {
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("pria");
  const [value, setValue] = useState("");
  const [hashed, setHased] = useState("");

  // 7. Hash string SHA256
  const getHashSha256 = useCallback(
    async (text) => {
      if (!nama) {
        alert("Nama tidak boleh kosong");
        return;
      }

      const currentDate = new Date().toISOString();

      const initialVal = `${currentDate}${nama}${gender}ifabula`;

      const textAsBuffer = new TextEncoder().encode(initialVal);
      const hashBuffer = await window.crypto.subtle.digest(
        "SHA-256",
        textAsBuffer
      );
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const digest = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      setValue(initialVal);
      setHased(digest);

      return digest;
    },
    [nama, gender]
  );

  return (
    <div>
      <h3>7. Hash string SHA256</h3>
      <div>
        <input
          type="text"
          placeholder="masukan nama depan"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="" disabled>pilih jenis kelamin</option>
          <option value="pria">Pria</option>
          <option value="wanita">Wanita</option>
        </select>
      </div>
      <button onClick={() => getHashSha256("01112018kenpriaifabula")}>
        generate
      </button>
      {value && <p>Initial Data: {value}</p>}
      {hashed && <p>SHA256: {hashed}</p>}
    </div>
  );
};

export default HashString;
