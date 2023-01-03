import axios from 'axios'
export async function pGet (url) {
    const result = await axios.get(url);
    return result.data.data
  }
export async function postUpdate(url,info){
    const result = await axios.post(url,info);
    return result.data.data
}
export async function getOne(url){
  const result = await axios.get(url);
    return result
}