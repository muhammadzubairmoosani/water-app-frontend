import api from "../../../../service/api";
// import { Cloudinary } from "cloudinary-core";
// import cl from "../../../config_cloudinary";
// const cloudinary = require("cloudinary-core").v2;

cloudinary.config({
  cloud_name: "pani-wala",
  api_key: "773534343336263",
  api_secret: "bmhFFJcKamykrshsALBJM9ha2eg",
});




const passwordHash = require("password-hash");
const { notification } = require("antd");
// require("dotenv").config();
// const Image = require("clou")
// cloudinary.v2.uploader.upload(file, options, callback);

// var cloudinary = require("cloudinary").v2;

notification.config({
  duration: 4,
});

const _signUpSupplier = (values) => {
  console.log(values);
  // cloudinary.uploa
  // cl.image(values, (err, res) => console.log(err ? err : res));
  // cloudinary.v2.uploader.unsigned_upload(file, upload_preset, options, callback);
  // const urls = [];
  // console.log(values)
  // values.map((image) => {
  // const file = new FormData();
  // file.append("upload_preset", "pani-wala");
  // file.append("file", values);

  // cloudinary.uploader.upload(file)

  // cloudinary
  //   .image(values, (err, res) => {
  //     if (err) console.log({ err });
  //     console.log({ res });
  //   })
  // .toHtml();

  // cloudinary.uploader.upload(image, (err,data) => {
  //   if(err) console.log({err})
  //   console.log({data})
  // });

  // api
  //   .post("https://res.cloudinary.com/pani-wala/image/upload/", file)
  //   .then(({ data }) => {
  //     console.log(data.secure_url);
  //   })
  //   .catch((err) => notification.error({ message: err.message }));
  // });
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
