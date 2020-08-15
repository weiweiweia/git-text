import fetch from './fetch.js'

export function getStudy(){
    return fetch({
        method:'GET',
        url:'http://jx.1000phone.net/teacher.php/Api/classJobData?class=SZ-HTML5-JY-2001&tdsourcetag=s_pcqq_aiomsg'
    })
}

export default {
    getStudy,
}