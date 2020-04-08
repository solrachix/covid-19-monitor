export default function(updated){
  if (!updated) return;
  
  const date = new Date(updated);
  const day = date.getDate();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);

  return(`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);

}