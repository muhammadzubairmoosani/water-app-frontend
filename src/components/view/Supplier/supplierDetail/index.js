import React, { useState, useEffect } from "react";
import firebase from "../../../../config/index";

const SupplierDetail = () => {
  //   const showCaptcha = () => {
  //     let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
  //     let number = "+923152396525";
  //     firebase
  //       .auth()
  //       .signInWithPhoneNumber(number, recaptcha)
  //       .then((e) => {
  //         let code = prompt("enter the code", "");
  //         if (code == null) return;
  //         e.confirm(code)
  //           .then((res) => {
  //             console.log("user", res.user);
  //             document.querySelector("lable").textContent =
  //               res.user + " number is verified!";
  //           })
  //           .catch(({ message }) => console.log(message));
  //       });
  //   };

  const onClick = () => {
    const phoneNumber = "+923152396525";
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmResult) => {
        let code = prompt("enter the code", "");
        if (code == null) return;
        confirmResult
          .confirm(code)
          .then((res) => {
            console.log("user", res.user.uid);
          })
          .catch(({ message }) => console.log(message));
      })
      .catch((error) => {
        // error
        console.log("error", error);
      });
  };

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        // other options
      }
    );
  }, []);
  return (
    <div>
      <label></label>
      <input
        id="recaptcha-container"
        type="button"
        onClick={onClick}
        value="click"
      />
      {/* <button onClick={onClick}>click me</button> */}
    </div>
    // <form action="">
    //   <div>
    //     {/* <input type="number" placeholder="number" />
    //     <div>{}</div>
    //     <button>send code</button>
    //   </div>

    //   <div>
    //     <input type="number" placeholder="enter code" />
    //     <br />
    // */}
    //   </div>
    // </form>
  );
};

export default SupplierDetail;

// function phoneAuth() {
//   //get the number
//   var number = document.getElementById("number").value;
//   //phone number authentication function of firebase
//   //it takes two parameter first one is number,,,second one is recaptcha
//   firebase
//     .auth()
//     .signInWithPhoneNumber(number, window.recaptchaVerifier)
//     .then(function (confirmationResult) {
//       //s is in lowercase
//       window.confirmationResult = confirmationResult;
//       coderesult = confirmationResult;
//       console.log(coderesult);
//       alert("Message sent");
//     })
//     .catch(function (error) {
//       alert(error.message);
//     });
// }
// function codeverify() {
//   var code = document.getElementById("verificationCode").value;
//   coderesult
//     .confirm(code)
//     .then(function (result) {
//       alert("Successfully registered");
//       var user = result.user;
//       console.log(user);
//     })
//     .catch(function (error) {
//       alert(error.message);
//     });
// }
