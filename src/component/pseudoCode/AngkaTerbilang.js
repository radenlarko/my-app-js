import React, { useCallback, useState } from "react";

function terbilang(angka) {
  const bilne = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
  ];

  if (angka < 12) {
    return bilne[angka];
  } else if (angka < 20) {
    return terbilang(angka - 10) + " belas";
  } else if (angka < 100) {
    return (
      terbilang(Math.floor(parseInt(angka) / 10)) +
      " puluh " +
      terbilang(parseInt(angka) % 10)
    );
  } else if (angka < 200) {
    return "seratus " + terbilang(parseInt(angka) - 100);
  } else if (angka < 1000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 100)) +
      " ratus " +
      terbilang(parseInt(angka) % 100)
    );
  } else if (angka < 2000) {
    return "seribu " + terbilang(parseInt(angka) - 1000);
  } else if (angka < 1000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000)) +
      " ribu " +
      terbilang(parseInt(angka) % 1000)
    );
  } else if (angka < 1000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000)) +
      " juta " +
      terbilang(parseInt(angka) % 1000000)
    );
  } else if (angka < 1000000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000000)) +
      " milyar " +
      terbilang(parseInt(angka) % 1000000000)
    );
  } else if (angka < 1000000000000000) {
    return (
      terbilang(Math.floor(parseInt(angka) / 1000000000000)) +
      " trilyun " +
      terbilang(parseInt(angka) % 1000000000000)
    );
  }
}

const AngkaTerbilang = () => {
  const [numInput, setNumInput] = useState("");
  const [hasilTerbilang, setHasilTerbilang] = useState("");

  const getTerbilang = useCallback(() => {
    const newNumber = Number(numInput);
    if (newNumber <= 2000) {
      alert("Masukan angka lebih besar dari 2000");
      return;
    }

    setHasilTerbilang(terbilang(newNumber));
  }, [numInput]);

  return (
    <div>
      <h3>4. Angka terbilang</h3>
      <input
        type="number"
        placeholder="masukan angka"
        value={numInput}
        onChange={(e) => setNumInput(e.target.value)}
      />
      <button onClick={getTerbilang}>Generate</button>
      <p>{hasilTerbilang}</p>
    </div>
  );
};

export default AngkaTerbilang;
