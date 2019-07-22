window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    init: function () {
      var APP_ID = 'yC723GzYFA99RPsqJF1m61V0-gzGzoHsz';
      var APP_KEY = 'YS8okh67zyXdxeAADBfPNB5R';
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    fetch: function () {
      var query = new AV.Query(resourceName);
      return query.find()
    },
    save: function (object) {
      var Message = AV.Object.extend(resourceName);
      var message = new Message();
      return message.save(object)
    }
  }
}