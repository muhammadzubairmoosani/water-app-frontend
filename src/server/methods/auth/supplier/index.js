import api from "../../../config/api";
const passwordHash = require("password-hash");
const { notification } = require("antd");
// require("dotenv").config();
// const Image = require("clou")
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
    // .post("https://api.cloudinary.com/v1_1/pani-wala/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/", file)
    api
      .post("https://res.cloudinary.com/pani-wala/image/upload/c_limit,h_100,w_150/", file)
      .then(({ data }) => {
        console.log(data.secure_url)
        // if()

      } 
        )
      .catch((err) => notification.error({ message: err.message }));
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
