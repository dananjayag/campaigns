import  moment from 'moment'
export function transformTime(time){
         return moment(time).format('LT');
}   