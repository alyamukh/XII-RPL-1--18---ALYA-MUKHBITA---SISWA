const { default: mongoose } = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_siswa: {
        type: String,
        require: [true, 'Silahkan isi nama anda'],
        //unique: true
    },
    id_siswa: {
        type: String,
        require: [true, 'Silahkan isi nama ketua ekskull'],
        //unique: true
    },
    alamat: {
        type: String,
        require: [true, 'Silahkan isi alamat anda'],
        //unique: true
    },
    kelas: {
        type: String,
        require: [true, 'Silahkan isi kelas anda'],
        //unique: true
    },
    sosmed: {
        type: String,
        require: [true, 'Silahkan isi username sosial media anda'],
        //unique: true
    },
    
})

module.exports = mongoose.model('User', UserSchema)