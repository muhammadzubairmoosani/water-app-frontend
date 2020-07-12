import api from "../../../config/api";
const passwordHash = require("password-hash");
const { notification } = require("antd");
// require("dotenv").config();
// const Image = require("clou")
const  cloudinary = require('cloudinary').v2;
// cloudinary.v2.uploader.upload(file, options, callback);
notification.config({
  duration: 4,
});

const _signUpSupplier = (values) => {
  console.log({ values });
  const urls = [];
  values.map((image) => {
    const file = new FormData();
    file.append("upload_preset", "pani-wala");
    file.append("file", image);
    cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
    // api
    //   .post("https://res.cloudinary.com/pani-wala/image/upload/", file)
    //   .then(({ data }) => {
    //     console.log(data.secure_url);
    //   })
    //   .catch((err) => notification.error({ message: err.message }));
  });
};

export { _signUpSupplier };

//   const {  name, mobile, password, address } = values;
//   api
//     .post("./buyer-register", {
//       name: name,
//       mobile: mobile,
//       password: passwordHash.generate(password),
//       address: address,
//     })
//     .then(() => {
//       notification.success({
//         message: "Thanks for create account.",
//         description: "Your account has been successfully created!",
//       });
//     })
//     .catch((err) =>
//       notification.error({
//         message: err.message,
//       })
//     );
