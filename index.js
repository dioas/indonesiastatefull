exports.getProvinsi = function () {
    let provinsi = require('./IndonesiaState/provinsi.json');
    return provinsi;
};

exports.getKota = function (provinsiId) {
    let kota = require('./IndonesiaState/kota.json');
    try {
        return kota.filter(res => { return res.ID === provinsiId.toString()})
    } catch (error) {
        return 'Invalid Provinsi Id'
    }
};

exports.getKecamatan = function (kotaID) {
    let kecamatan = require('./IndonesiaState/kecamatan.json');
    try {
        return kecamatan.filter(res => { return res.ID === kotaID.toString()})
    } catch (error) {
        return 'Invalid Kota Id'
    }
};

exports.getKelurahan = function (kecamatanID) {
    let kelurahan = require('./IndonesiaState/kelurahan.json');
    try {
        return kelurahan.filter(res => { return res.ID === kecamatanID.toString()})
    } catch (error) {
        return 'Invalid Kecamatan Id'
    }
};
