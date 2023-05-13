function addZero(item) {
  return item < 10 ? "0" + item : item;
}

export function formatDate(timestamp) {
  var date = new Date(timestamp);

  var year = date.getFullYear();
  var month = addZero(date.getMonth() + 1);
  var day = addZero(date.getDate());

  var hours = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}
