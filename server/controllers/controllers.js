var comic = require('../models/comic');
//var customHandlers=require('./custom_handlers');
var sea = require('../models/season');
var FileSystem = require('fs');
var ser = require('../models/series');
var user = require('../models/user');
// var Promise = require("bluebird");
var md5 = require('md5');
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');



// var mailOptions = {
//   from: 'injilaislam.amu@gmail.com',
//   to: 'injilaislam.amu@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// exports.postcomic = function(req, res) {
//   var x1 = new comic({
//     name: req.body.name,
//     story: req.body.story,
//     image: req.body.image,
//     season_id: req.body.season_id,
//     starts_on: req.body.starts_on,
//     ends_on: req.body.ends_on,
//     comments: req.body.comments,
//     created_at: new Date(),
//     updated_at: ""
//
//
//   });
//   x1.save(function(err, response) {
//     if (err) {
//       return res.json(req, res, err);
//     }
//     res.json({
//       success: true,
//       body: response
//     })
//   });
// };


exports.getcomic = function (req, res) {
  comic.find({}, function (err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
    console.log(response, "this is response")
  });
}

// exports.deletecomic = function (req, res) {

//   comic.findOne({}, function (err, user) {
//     if (err) {
//       res.json(err);
//     }

//     if (comic) {
//       comic.remove({}, function (err) {
//         if (err) {
//           res.json(err);
//         }

//         res.json("success");
//       })
//     } else {
//       res.json("User doesnt exist");
//     }

//   })
// }

exports.postsea = function (req, res) {
  var x2 = new sea({
    name: req.body.name,
    desc: req.body.desc,
    series_id: req.body.series_id,
    starts_on: req.body.starts_on,
    ends_on: req.body.ends_on,
    created_at: Date.now(),
    updated_at: "",

  });
  x2.save(function (err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    res.json({
      success: true,
      body: response
    })
  });
};
exports.getsea = function (req, res) {
  sea.find({}, function (err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
}


exports.deletesea = function (req, res) {

  sea.findOne({}, function (err, user) {
    if (err) {
      res.json(err);
    }

    if (sea) {
      sea.remove({}, function (err) {
        if (err) {
          res.json(err);
        }

        res.json("success");
      })
    } else {
      res.json("User doesnt exist");
    }

  })
}

exports.postser = function (req, res) {
  var x3 = new ser({
    name: req.body.name,
    desc: req.body.desc,

    series_id: req.body.series_id,

    created_by: req.body.created_by,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
  });
  x3.save(function (err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    res.json({
      success: true,
      body: response
    })
  });
};

exports.getser = function (req, res) {
  ser.find({}, function (err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
}

exports.deleteser = function (req, res) {

  ser.findOne({}, function (err, user) {
    if (err) {
      res.json(err);
    }

    if (ser) {
      ser.remove({}, function (err) {
        if (err) {
          res.json(err);
        }

        res.json("success");
      })
    } else {
      res.json("User doesnt exist");
    }

  })
}
exports.postuser = function (req, res) {
  var newpa = md5(req.body.password);
  console.log(newpa)
  var x4 = new user({
    username: req.body.username,
    password: newpa,
    types: req.body.types,
    email: req.body.email,
    token: '',
    veriffy: false,
  });
  var code = Math.random();
  x4.token = code;
  console.log(x4.token, 'hey');
  link = "http://localhost:3000" + "/api/v1/verifyusers/" + code;
  console.log(x4.email);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'injilaislam.amu@gmail.com',
      pass: 'vmware144'
    }
  });
  var mailOptions = {
    from: 'injilaislam.amu@gmail.com',
    to: x4.email,
    subject: 'Sending Email using Node.js',
    text: 'Please confirm your account by clicking the following link:' + link
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })

  x4.save(function (err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    res.json({
      success: true,
      body: response
    })
  });
};

exports.verifications = function (req, res) {
  console.log("in verify")
  var token = req.params.token;

  user.findOne({ token: token }, function (err, response) {
    if (err) {
      res.json(err);
    }
    if (response) {


      response.veriffy = true;
      response.save(function (err, response) {
        if (err) {
          return res.json(req, res, err);
        }
        res.json({
          success: true,
          body: "you are verified"
        })
      });


      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'injilaislam.amu@gmail.com',
          pass: 'vmware144'
        }
      });
      var mailOptions = {
        from: 'injilaislam.amu@gmail.com',
        to: response.email,
        subject: 'Sending Email using Node.js',
        text: 'you are verified'
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })




    }
  });

}

exports.getuser = function (req, res) {
  user.find({}, function (err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
}
exports.search_users = function (req, res) {
  var newpa = md5(req.body.password);
  console.log(newpa)
  username = req.body.username;
  password = newpa;
  var myToken = jwt.sign({
    username: req.body.username
  }, 
  'injila')
  user.find({
    username: username,
    password: newpa
  }, function (err, response) {
    if (err) {
      res.json(err);
    }
    if (response.length == 0) {
      res.json("user dont exist")
    }

    else {
      res.json({
        data: response,
        token: myToken
      });

    }
  })
}

exports.postcomics = function (req, res) {
  var Comic = new comic({
    season_id: req.body.season_id,
    name: req.body.name,
    image: req.body.image,
    story: req.body.story,
    comments: req.body.comments,
    created_at: new Date(),
    updated_at: ""
  });
  console.log(Comic.image);
  let image = Comic.image;
  let imageGroup = Comic.name;

  let matches = image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)

  // An empty object
  let response = {}

  if (matches.length !== 3) {
    return new Error('Invalid input string')
  }
  // Image type (i.e. image/jpeg)
  response.type = matches[1]
  console.log(matches[1] + 'match 1');
  // Image base64 data
  response.data = new Buffer(matches[2], 'base64')
  //console.log(matches[2]+'match 2');


  var data = imageNameData(image);


  function imageNameData(data) {
    console.log("inside function")
    var imageName = imageGroup + '_' + Math.random();
    if (data.indexOf('image/jpeg') > -1) {
      return imageName + '.jpeg';
    }
    if (data.indexOf('image/png') > -1) {
      return imageName + '.png';
    }
    if (data.indexOf('image/gif') > -1) {
      return imageName + '.gif';
    }
  }


  var imageName = '/home/user/project_node' + '/' + data;
  console.log(imageName);
  FileSystem.writeFile(imageName, response.data, function (error) {
    // console.log(response.data);
    if (error) throw error
  })
  Comic.image = data;
  console.log(Comic.image);

  Comic.save(function (err, result) {
    if (err) {
      return res.json(req, res, err);
    }


    res.json({
      "status": true,
      "respData": {
        "data": result
      }
    })

  });

};


exports.deletecomics = function (req, res) {
  var id = req.params._id;
  console.log(id)
  comic.findOne({
    _id: id
  }, function (err, comics) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }
    console.log(comics)
    if (comics) {
      comic.remove({
        _id: id
      }, function (err, response) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          });
        }
        console.log(response)
        res.json({
          status: true,
          respData: {
            data: response
          }
        });
      })
    } else {
      res.json({
        status: true,
        respData: {
          data: "comic doesn't exist"
        }
      });
    }

  })
}



// exports.postseries = function (req, res) {
// var ser = require('../models/series');
//   var ser = new comic({
//     ser_id: req.body.season_id,
//     name: req.body.name,
//     image: req.body.image,
//     story: req.body.story,
//     comments: req.body.comments,
//     created_at: new Date(),
//     updated_at: ""
//   });
// ser.save(function (err, result) {
//     if (err) {
//       return res.json(req, res, err);
//     }


//     res.json({
//       "status": true,
//       "respData": {
//         "data": result
//       }
//     })

//   });

// };

// exports.postcomics = function (req, res) {
//   var Comic = new comic({
//     season_id: req.body.season_id,
//     name: req.body.name,
//     image: req.body.image,
//     story: req.body.story,
//     comments: req.body.comments,
//     created_at: new Date(),
//     updated_at: ""
//   });
//   console.log("aa gya");
//   let image = Comic.image;
//   let imageGroup = Comic.name;

//   let matches = image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)

//   // An empty object
//   let response = {}

//   if (matches.length !== 3) {
//     return new Error('Invalid input string')
//   }
//   // Image type (i.e. image/jpeg)
//   response.type = matches[1]
//   console.log(matches[1] + 'match 1');
//   // Image base64 data
//   response.data = new Buffer(matches[2], 'base64')
//   //console.log(matches[2]+'match 2');


//   var data = imageNameData(image);


//   function imageNameData(data) {
//     console.log("inside function")
//     var imageName = imageGroup + '_' + Math.random();
//     if (data.indexOf('image/jpeg') > -1) {
//       return imageName + '.jpeg';
//     }
//     if (data.indexOf('image/png') > -1) {
//       return imageName + '.png';
//     }
//     if (data.indexOf('image/gif') > -1) {
//       return imageName + '.gif';
//     }
//   }


//   var imageName = '/home/user/project_node' + '/' + data;
//   console.log(imageName);
//   FileSystem.writeFile(imageName, response.data, function (error) {
//     // console.log(response.data);
//     if (error) throw error
//   })
//   Comic.image = data;
//   console.log(Comic.image);

//   Comic.save(function (err, result) {
//     if (err) {
//       return res.json(req, res, err);
//     }


//     res.json({
//       "status": true,
//       "respData": {
//         "data": result
//       }
//     })

//   });

// };
// exports.updateUsers = function (req, res) {
//     var id = req.params.id;
//     User.findOne({ _id: id }, function (err, user) {
//         if (err) {
//             res.json(err);
//         }
//
//         var username = req.body.username;
//         user.username = username;
//         user.updated_at = new Date();
//
//         user.save(function (err, response) {
//             if (err) {
//                 res.json(err);
//             }
//
//             res.json(response);
//         })
//     })
// }
exports.updateUsers = function (req, res) {
  var username = req.body.username;

  user.findOne({
    username: username
  }, function (err, user1) {
    if (err) {
      res.json(err);
    }

    var types = req.body.types;
    user1.types = types;

    user1.updated_at = new Date();

    user1.save(function (err, response) {
      if (err) {
        res.json(err);
      }

      res.json(response);
    })
  })
}








exports.deleteuser = function (req, res) {
  var id = req.params._id
  console.log(id)
  user.findOne({ _id: id }, function (err, User) {
    if (err) {
      res.json(err);
    }
    console.log(User)
    if (User) {
      user.remove({ _id: id }, function (err, resp) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          });
        }
        // console.log(response)
        res.json({
          status: true,
          respData: {
            data: resp
          }
        });
      })
    }
    // else {
    //   res.json({
    //     status: true,
    //     respData: {
    //       data: "user doesn't exist"
    //     }
    //   });

    // }
  })
}









// exports.Update_user=function(req,res){
//  var name=req.body.name;
//  abc.findOne({name:name},function(err,xyz){
//   if(err){
//     res.json(err);
//   }
//   var price=req.body.price;
//   xyz.price=price;
//   xyz.save(function(err,response) {
//    if(err){
//      res.json(err);
//    }
//
//     res.json(response);
//   });
// });
// }


console

exports.searchcomics = function (req, res) {
  console.log(req.params.reg);
  var regex = RegExp(req.params.reg);

  comic.findOne({
    Name: regex
  }, function (err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    if ((response || []).length === 0) {
      return res.json("doesn't exit");
    }
    return res.json(response);
  })
};

exports.searchComics = function (req, res) {
  var regex = RegExp(req.params.regx);
  console.log(req.params.regx);
  //  var name = req.body.Name;

  comic.find({
    name: regex
  },
    function (err, response) {
      if (err) {
        return res.json(req, res, err);
      }
      if ((response || []).length === 0) {
        return res.json({
          "status": false,
          "respData": {
            "data": "no results found"
          }
        });
      }
      return res.json({
        "status": true,
        "respData": {
          "data": response
        }
      });
    }
  )
};


// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
// exports.updateUsers = function (req, res) {
//     var username = req.body.username;
//     user.findOne({ username: username}, function (err, user1) {
//         if (err) {
//             res.json(err);
//         }
//
//         var types= req.body.types;
//         user1.types= types;
//         user1.updated_at = new Date();
//
//         user1.save(function (err, response) {
//             if (err) {
//                 res.json(err);
//             }
//
//             res.json(response);
//         })
//     })
