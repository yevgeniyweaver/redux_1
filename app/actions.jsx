var addPhone = function (phone) {
  return {
    type: "ADD_PHONE",
    phone
  }
};
var deletePhone = function (phone) {
  return {
    type: "DELETE_PHONE",
    phone
  }
};

// id: phone.id,
//     name: phone.name
 
module.exports = {addPhone, deletePhone};
