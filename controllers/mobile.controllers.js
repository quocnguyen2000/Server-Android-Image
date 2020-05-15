const Mobile = require('../models/mobile');
const Cate = require('../models/category');
//get tất cả sản phẩm
exports.getAll = function (request, response) {
    Mobile.find({})
        .lean()
        .exec(function (error, data) {
            response.render('index', { mobileList: data.reverse() });
            // console.log(data);
            if (error) {
                log(error);
            }
        });
        
};

//get 1 sản phẩm
exports.getMobile = function (request, response) {
    Mobile.findById(request.params.id)
        .lean()
        .exec((err, doc) => {
            if (!err) {
                response.render('edit', { Mobile: doc });
            }
        });
};
//chỉnh sửa
exports.edit = function (request, response) {
    Mobile.updateOne(
        { _id: request.body._id },
        { $set: { name: request.body.name, price: request.body.price } },
        (err, doc) => {
            if (!err) {
                response.redirect('/index');
            } else {
                console.log('Edit Failed');
            }
        }
    );
};

//xóa sản phẩm
exports.delete = function (request, response) {
    Mobile.deleteOne({ _id: request.params.id }, (err, doc) => {
        if (!err) {
            response.redirect('/index');
        } else {
            console.log(err);
        }
    });
};
