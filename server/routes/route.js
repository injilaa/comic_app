var express = require('express');
var router = express.Router();


var itemController = require('../controllers/controllers');

/*router.route('/app/post_item')
  .post(itemController.postItem);

router.route('/app/get_items/:category')
  .get(itemController.getItems);

router.route('/app/post_category')
    .post(itemController.postCategory);

router.route('/app/get_categories')
  .get(itemController.getCategories);
*/


router.route('/v1/post_comic')
.post(itemController.postcomics)
.get(itemController.getcomic)
.get(itemController.searchcomics)

router.route('/v1/delete_comic/:_id')
.delete(itemController.deletecomics)

router.route('/v1/post_season')
.post(itemController.postsea)
.get(itemController.getsea)
.delete(itemController.deletesea);


router.route('/v1/post_series')
.post(itemController.postser)
.get(itemController.getser)
.delete(itemController.deleteser);

router.route('/v1/post_series/a')

.post(itemController.postuser)
.get(itemController.getuser)

router.route('/v1/delete_user/a/:_id')
.delete(itemController.deleteuser);

router.route('/v1/search_comic/a/:regx')
.get(itemController.searchComics)

router.route('/v1/searchusers')
.post(itemController.search_users)
router.route('/v1/searchusers/xx')
.put(itemController.updateUsers)

router.route('/v1/verifyusers/:token')
.get(itemController.verifications)
// router.route('/v1/mail')
// .post(itemController.sendMail)
// router.route('/v1/get_route')
// .get(itemController.getItem);

// router.route('/v1/post_ganja')
// .put(itemController.Update_user);

// router.route('/v1/post_weedss')
// .delete(itemController.deleteUsers);

// router.route('/v1/post_item/aa')
// .post(itemController.postItem2);

// router.route('/v1/get_route/bb')
// .get(itemController.getItem2);

module.exports = router;
