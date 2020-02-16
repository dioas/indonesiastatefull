# Provinsi State Picker

NPM package to get the list of Provinsi and their states.


## Installation

`npm i indonesiastatefull`

## Usage
``` javascript
import { getProvinsi, getKota, getKecamatan, getKelurahan } from 'indonesiastatefull';

console.log(getProvinsi());
```

### `getProvinsi()`

This function will return the array of all the countries.

#### Output

```javascript
[
    {
      "ID":"1",
      "PROVINSI":"ACEH"
    },
    {
      "ID":"2",
      "PROVINSI":"SUMATERA UTARA"
    },
    {
      "ID":"3",
      "PROVINSI":"SUMATERA BARAT"
    },
    {
      "ID":"4",
      "PROVINSI":"RIAU"
    },
  ...
]
```

---

### `getKota(<ID_province>)`

This function will return the array of all the states of a given city.

### Example

To get the list of all the states of kota, the function call will look like:

```javascript
let kota = getkota('4');

console.log(kota)
```

#### Output

```javascript
[
  {
    "ID":"4"
    "KOTA":"KABUPATEN KUANTAN SINGINGI"
    "CHILD":"4.1"
  }
  
  {
    "ID":"4"
    "KOTA":"KABUPATEN INDRAGIRI HULU"
    "CHILD":"4.2"
  }
  
  {
    "ID":"4"
    "KOTA":"KABUPATEN INDRAGIRI HILIR"
    "CHILD":"4.3"
  }
  
  {
    "ID":"4"
    "KOTA":"KABUPATEN PELALAWAN"
    "CHILD":"4.4"
  }
  
  {
    "ID":"4"
    "KOTA":"KABUPATEN S I A K"
    "CHILD":"4.5"
  }
  
  {
    "ID":"4"
    "KOTA":"KABUPATEN KAMPAR"
    "CHILD":"4.6"
  }
  . . . 
]
```

### `getKelurahan(<child_ID>)`

This function will return the country corresponding to the argument passed, use Child for get next state.

### Example

To get the list of all the states of kota, the function call will look like:

```javascript
let kecamatan = getKecamatan('4.6');

console.log(kecamatan)
```

#### Output

```javascript
[
  {
    "ID":"4.6"
    "KECAMATAN":"KAMPAR KIRI"
    "CHILD":"4.6.1"
  }
  
  {
    "ID":"4.6"
    "KECAMATAN":"KAMPAR KIRI HULU"
    "CHILD":"4.6.2"
  }
  
  {
    "ID":"4.6"
    "KECAMATAN":"KAMPAR KIRI HILIR"
    "CHILD":"4.6.3"
  }
  
  {
    "ID":"4.6"
    "KECAMATAN":"GUNUNG SAHILAN"
    "CHILD":"4.6.4"
  }
  
]
```

### `getProvinsi(), getKota(ChildId), getKecamatan(ChildId), getKelurahan(ChildId)`

this is all function to get all Indonesia Province, Kota, Kecamatan and kelurahan.

## Author

`Thanks to @stvn.lim for helping and make this happen`