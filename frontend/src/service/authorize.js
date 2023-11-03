export const authenticate = (res)=>{
    if (window !== 'undefined') {
        sessionStorage.setItem("token",JSON.stringify(res.data.token))
        sessionStorage.setItem("username",JSON.stringify(res.data.username))

    }
}

export const getToken = ()=>{
    if(window !='undefined'){
        return JSON.parse(sessionStorage.getItem("token"))
    }else{
        return false
    }
}

export const getUser= ()=>{
    if(window !='undefined'){
        return JSON.parse(sessionStorage.getItem("username"))
    }else{
        return false
    }
}
export const Logout= ()=>{
    if(window !='undefined'){
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('token')

    }else{
        return false
    }
}