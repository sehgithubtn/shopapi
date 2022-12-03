import express  from 'express' 
import Multer  from 'multer'
import FirebaseStorage  from 'multer-firebase-storage'

const router = express.Router()


const multer = Multer({
  storage: FirebaseStorage({
    bucketName: 'shop-59d9a.appspot.com',
    credentials: {
      clientEmail: 'sehnewmindset@gmail.com',
      privateKey: 'AIzaSyBpKjJWfVRES0gFtI5FbypD25R8Pcx2YIM',
      projectId: 'shop-59d9a'
    }
  })
})


router.post('/',multer.single('image'), (req,res) => {
    res.send(`/${req.file.path}`)
})

export default router