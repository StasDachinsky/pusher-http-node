function getSocketSignature(token, channel, socketID, _data) {
  var result = {};
  var data = _data[0];
  var signatureData = [socketID, channel];
  if (data) {
    var serializedData = JSON.stringify(data);
    signatureData.push(serializedData);
    result.channel_data = serializedData;
  }

  result.auth = token.key + ':' + token.sign(signatureData.join(':'));
  return result;
}

exports.getSocketSignature = getSocketSignature;
