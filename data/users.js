import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234560' , 10),
        isAdmin: true
    },
    {
        name: 'Jhon Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('1234560' , 10)
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('1234560' , 10)
    }
]


export default users