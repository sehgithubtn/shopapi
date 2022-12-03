import express  from 'express' 
import Multer  from 'multer'
import FirebaseStorage  from 'multer-firebase-storage'

const router = express.Router()


const multer = Multer({
  storage: FirebaseStorage({
    bucketName: 'shop-59d9a.appspot.com',
    credentials: {
      clientEmail: 'firebase-adminsdk-r4x09@shop-59d9a.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCj07B+M7tMflc9\nQSA0OwxZhemh8vzhZfOgw+CjiYez0o/ffA6Nrd84HmKBgle8gGul38qBO7u3WEJH\nH2nQOFHz9TL09VKSBF1je5DGo/ys3xNFKNS7/UoAUmt6nkhqRcEJic5Anh6cKbJA\nB1dUgR/nxOwZGJgnG7lYzhpVqJbRQqvNsWMiG425p4jFZPEDisbt9/1eiyjmhoEv\nPzYuWSH1YlMmQ3xkmZ9FyRPfOs09+HDdtqlvnRr14BaKTb3JXKC6Uj6BzoJtZ6c5\nVzFnnxSWTglgc+6c2YNLU4FXi66ioF9VN38nGn5Sz7YR7oW2DwwxzhZT/xiSROjh\nzuf5NW0LAgMBAAECggEACTRcyg0ZshJhJWxnek0dBFn38U+dMgQlPDxKfqBnXaJF\neh7WvygXOWh09rt+NsrtAWysTIwwylGCUSEB3snjSjaAbpnqpzs+jKyFywYDWCp6\nbdwoQ7MB+Y2n7e4/DwAsozQOa2asPUWXIcN9KR7OI5qr/JGmBCspw+8PNLkxrBUg\noKz4/2UA70xcm9l0kmD4NGwgGX3dG1g5Qzs5+z2t6MXAQiUm/eyeE8U8Z3Dj6cdL\nFR1QmkthN2zgx5u3NLDXlH23c7CvqjUuCFdy0/dhMivV9MDOK6+qfsL3Dk+MY002\nfcAejVoz24m0JH5DBsMZHwQAWR5VKtaxAj5f2RPStQKBgQDdpKhzO8jR08gQ4mmR\nlDQUEUiLZbjthW2eB9Yt+fEraVJ/7Fs2olty+XQipWvvDhfhx2vafFAH9HsW8GJy\n+al3eSEM7WBO5nf5rRUeVXvL+/MvH6g9TbppTAYai/ov3ef+NurvjgPyHKLhkKKN\nJhQ8OGCclsLc0Fx/UB7XsozDfwKBgQC9OL2MlPfUzSjbjuZBJTwHwjtHulJJ8RUL\nYHqYZny3m5nXGoX3m68deV+UNpPx09X6TMiBOepxEuKIkKZHdR4yuLfygSyahepv\ncCMIHXepyGOsXGPl7Y42QJmZ7DbeOV/+X40vlkEvrmbKCiCQMXbi+D+xEnuPz95v\nRkv6HNnsdQKBgDjl5DhwyITVES8EcIVmvlfIeA8Q9gBDmHhRGrKCz16Nkxgz3NaR\np1hEoYOjY6nivE7BmvZjo0fngxHIc/2ACfkZp1piNa8LixEVVa6L01PyQeN/BPl3\n0rrlQUvfU0KmfL/N6VHF601j/IxbTN9fPyKWdna8XRnCg3xLXR+SPoCRAoGBAJTJ\nJOKB0E3X9CSQPKVE7er74zkHXOUfV/jWKA/lpnOJOnJVPLnyBMQcR/d24uXoN/zU\nm2RhceLvgoj3lIfjo5cmgB2DTNtEKY7ukd0zroAmPZmuHC8TmBs4uI67mnkqjDys\nTYv5jdA8Rj7fr7Mx8dWOdiZ57gaq4LCGif9k6EZxAoGAbdlqxERHiKwZDhVf7hei\nPZjjbCpY+LhpKxweL4y3bMNAVsR8T8u+k1NBCeY/9a0wT5vfu0xTeN1vVYKbkelA\njZ6j3s3Eesub+vKSYpXBbAQojsdaH7e7/HP8tEkJMtwfFCasplgVWxSO0JZlyncA\np5MwrlCAxOx7fuNVFMajR5w=\n-----END PRIVATE KEY-----\n',
      projectId: 'shop-59d9a'
    }
  })
})


router.post('/',multer.single('image'), (req,res) => {
    console.log(req.file.fileRef)
    res.send(`${req.file.fileRef}`)
})

export default router