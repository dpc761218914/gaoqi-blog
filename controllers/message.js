/*!
 * 消息 controller
 */

var Promise = require('bluebird');
var Message = require('../dao').Message;

exports.index = function (req, res, next) {
  var user_id = req.session.user._id;

  Promise
      .all([
        Message.getReadMessagesByUserId(user_id),
        Message.getUnreadMessageByUserId(user_id)
      ])
      .spread(function(hasRead, hasNotRead) {
        Message.updateMessagesToRead(user_id, hasNotRead);
        return Promise
            .all([
              Promise.map(hasRead, function(doc) { return Message.getMessageRelations(doc);}),
              Promise.map(hasNotRead, function(doc) { return Message.getMessageRelations(doc);})
            ]);
      })
      .spread(function(hasRead, hasNotRead) {
        hasRead = hasRead.filter(function (doc) {
          return !doc.is_invalid;
        });
        hasNotRead = hasNotRead.filter(function (doc) {
          return !doc.is_invalid;
        });
        res.render('message/index', {has_read_messages: hasRead, hasnot_read_messages: hasNotRead});
      });
};
